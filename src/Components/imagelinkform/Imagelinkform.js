import React from 'react';
import './Imagelinkform.css'

const Imagelinkform=({onInputChange,onButtonSubmit})=>{
    return(
        <div className='tc'>
          <p className='f3 tc'>
            {`This is a face recognition app`}
          </p>
          <div className='center'>
             <div className='pa4 br3 shadow-5 center form'>
               <input onChange={onInputChange} className='f4 pa2 center w-70' type='text'/>
               <button onClick={onButtonSubmit} className='center pa2 w-30 grow f4 ph3 pv2 dib white bg-blue pointer'>
                  Detect
               </button>
             </div>
              
    
          </div>
        </div>
    );
}

export default Imagelinkform;