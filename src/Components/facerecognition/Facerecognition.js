import React from 'react';
import './Facerecognition.css';


const Facerecognition=({imageUrl,box})=>{
    return(
        <div className='center ma'>
          <div className='absolute mt2'>
            <img id='inputImage' alt='' src={imageUrl} width='500px' height='auto' />
            <div className='bounding-box' style={{top: box.toprow ,bottom: box.bottomrow,left: box.leftcol,right: box.rightcol}}></div>
          </div>
            
        </div>
    );
}

export default Facerecognition;