import './App.css';
import { Component } from 'react';
import Navigation from './Components/Navigation/Navigation';
import Logo from './Components/logo/Logo';
import Imagelinkform from './Components/imagelinkform/Imagelinkform';
import Rank from './Components/rank/Rank';
import Facerecognition from './Components/facerecognition/Facerecognition'
import 'tachyons';
import Clarifai from 'clarifai';
import Particles from 'react-particles-js';
import Signin from './Components/signin/Signin';
import Register from './Components/register/Register';


const particlesoption={
  particles:{
    number:{
      value:80,
      density:{
        enable: true,
        value_area : 800
      }
    }
  }
}
const initialstate={
  input: '',
  imageUrl:'',
  box:{},
  route:'signin',
  issignin: false,
  user:{
    name:'',
    email:'',
    entries:0,
    id:'',
    joined:''
  }

}
class App extends Component {
  constructor(){
    super();
    this.state=initialstate
  }
  calculateFaceLocation=(data)=>{
    const clarifaiFace=data.outputs[0].data.regions[0].region_info.bounding_box;
    const image= document.getElementById('inputImage');
    const width= Number(image.width);
    const height=Number(image.height);
    return{
    leftcol: clarifaiFace.left_col * width,
    toprow: clarifaiFace.top_row * height,
    rightcol:  width - (clarifaiFace.right_col * width),
    bottomrow: height - (clarifaiFace.bottom_row * height),
    }
  }

  displayFaceBox=(box)=>{
    this.setState({box: box})
    console.log(box)
  }

  onInputChange=(event)=>{
     this.setState({input: event.target.value});
     
  }


  onButtonSubmit=()=>{
    this.setState({imageUrl: this.state.input})
    fetch('https://quiet-thicket-49484.herokuapp.com/imageurl',{
          method: 'post',
          headers:{'content-type': 'application/json'},
          body: JSON.stringify({
          input: this.state.input
       })
        })
        .then(res=> res.json())
    
    .then(res=>{
      if(res){
        fetch('https://quiet-thicket-49484.herokuapp.com/image',{
          method: 'put',
          headers:{'content-type': 'application/json'},
          body: JSON.stringify({
          id: this.state.user.id
       })
        })
        .then(response=> response.json())
        .then(count=>{
          this.setState(Object.assign(this.state.user,{entries: count}))
        })
      }
      this.displayFaceBox(this.calculateFaceLocation(res))
    })
    .catch(err=> console.log(err));
    
  }

  onRouteChange=(route)=>{
    if(route === 'signout'){
      this.setState(initialstate)
    }
    else if(route === 'home')
    {
      this.setState({issignin:true})
    }
    this.setState({route: route})
  }

  loaduser=(data)=>{
    this.setState({
      user:{
        name:data.name,
        email:data.email,
        entries: data.entries,
        id: data.id,
        joined: data.joined
      }
      
    })
  }
  

  render(){
   const {issignin,route,imageUrl,box}=this.state
  return (
    <div className='App'>
    <Particles className='particles'
              params={particlesoption}
            />
    <Navigation onRouteChange={this.onRouteChange} issignin={issignin}/>
    <Logo/>
    {route === 'home' ? 
    <div>
    <Rank name={this.state.user.name} entries={this.state.user.entries}/>
    <Imagelinkform onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
    <Facerecognition imageUrl={imageUrl} box={box}/>
    </div>
    
    : (route === 'signin' ? <Signin onRouteChange={this.onRouteChange} loaduser={this.loaduser}/>
    :
    <Register onRouteChange={this.onRouteChange} loaduser={this.loaduser} />
    )
    }
    </div>
  );
  }
}

export default App;
