import React from 'react';

const Navigation=({onRouteChange,issignin})=>{
    
     if(issignin === true){
         return(
            <nav style={{display:'flex',justifyContent:'flex-end'}}>
            <p onClick={()=> onRouteChange('signout')} className='f3 link dim black underline pa3 pointer'>Sign Out</p>
        </nav>
         );
       
        }
        else{
            return(
                <div>
        <nav style={{display:'flex',justifyContent:'flex-end'}}>
            <p onClick={()=> onRouteChange('signup')} className='f3 link dim black underline pa3 pointer'>Register</p>
            <p onClick={()=> onRouteChange('signin')} className='f3 link dim black underline pa3 pointer'>Sign in</p>
        </nav>
        </div>
            )
            
        }
        
    

}

export default Navigation;