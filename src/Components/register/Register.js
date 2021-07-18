import React from 'react';

class Register extends React.Component{

  constructor(props){
    super(props);
    this.state={
      email:'',
      password:'',
      name: ''
    }
  }

  onnamechange=(event)=>{
    this.setState({
      name: event.target.value
    })
 }
  
  onemailchange=(event)=>{
     this.setState({
       email: event.target.value
     })
  }
  onpasswordchange=(event)=>{
    this.setState({
       password: event.target.value
    })
  }
  
  onsubmitsignin=()=>{
    fetch('https://quiet-thicket-49484.herokuapp.com/register',{
      method: 'post',
      headers:{'content-type': 'application/json'},
      body: JSON.stringify({
        email : this.state.email,
        password: this.state.password,
        name: this.state.name
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
     
      return(
        <div>
  <main className="pa4 black-80 center" >
  <div className="measure center style br3 shadow-5" style={{display:'flex',justifyContent:'center',flexDirection:'column'}}>
    <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
      <legend className="f3 fw6 ph0 mh0 ">Register</legend>
      <div className="mt3">
        <label className="db fw6 lh-copy f6" htmlFor="email-address">Name</label>
        <input className="pa2 input-reset ba b--black bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address" onChange={this.onnamechange} />
      </div>
      <div className="mt3">
        <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
        <input className="pa2 input-reset ba b--black bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address" onChange={this.onemailchange} />
      </div>
      <div className="mv3">
        <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
        <input className="b pa2 input-reset ba b--black bg-transparent hover-bg-black hover-white w-100" type="password" name="password" onChange={this.onpasswordchange} />
      </div>
    </fieldset>
    <div className="">
      <input onClick={this.onsubmitsignin} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Sign up"/>
    </div>
    
  </div>
</main>
</div>
    );
    }
}

export default Register;