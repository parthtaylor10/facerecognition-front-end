import React from 'react';
import './Signin.css';

class Signin extends React.Component{
   constructor(props){
     super(props);
     this.state={
       signinemail:'',
       signinpassword:''
     }
   }

   onsigninemail=(event)=>{
      this.setState({
        signinemail: event.target.value
      })
   }
   onsigninpassword=(event)=>{
     this.setState({
     signinpassword: event.target.value
     })
   }
   
   onsigninsubmit=()=>{
     fetch('https://quiet-thicket-49484.herokuapp.com/signin',{
       method: 'post',
       headers:{'content-type': 'application/json'},
       body: JSON.stringify({
         email : this.state.signinemail,
         password: this.state.signinpassword
       })
     })
     .then(response=> response.json())
     .then(user => {
       if(user.id){
         this.props.loaduser(user)
         this.props.onRouteChange('home')

       }
     })
   }

   render(){
     const {onRouteChange}=this.props
    return(
      <div>
        <main className="pa4 black-80 center" >
        <div className="measure center style br3 shadow-5" style={{display:'flex',justifyContent:'center',flexDirection:'column'}}>
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f3 fw6 ph0 mh0 ">Sign In</legend>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="email-address" >Email</label>
              <input className="pa2 input-reset ba b--black bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"   onChange={this.onsigninemail} />
            </div>
            <div className="mv3">
              <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
              <input className="b pa2 input-reset ba b--black bg-transparent hover-bg-black hover-white w-100" type="password" name="password"   onChange={this.onsigninpassword}/>
            </div>
          </fieldset>
          <div className="">
            <input onClick={this.onsigninsubmit} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign in"/>
          </div>
          <div className="lh-copy mt3 " style={{cursor:'pointer'}}>
            <p onClick={()=> onRouteChange('signup')} href='0'  className="f6 link dim black db">Sign up</p>
          </div>
        </div>
      </main>
      </div>
          );
   }
}

export default Signin;