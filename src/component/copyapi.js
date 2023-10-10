import React, { useState} from 'react';

import Onbulb from './image/on.jpg'
import Offbulb from './image/off.jpg'
const MyComponent = () => {

    const[value, setValue]=useState()
    const[but, setBut]=useState(false)

    const [inputvalue, setInputvalue]=useState([])

    // function btnclick(){
    //     setValue(true);
    // }
    // function btnclickof(){
    //     setValue(false)
    // }
   
    function offbtn(){
        setBut(!but)
    }

    const handleinput=(e)=>{
      setInputvalue(e.target.value)
    }
return(

   <div className='container'>
    {/* <button onClick={btnclick}>ON</button> */}
    <img alt='imagecorrect' src={but?Onbulb:Offbulb}></img>
    {/* <button onClick={btnclickof}>Off</button> */}
    <button onClick={offbtn}>{but?"OFF":"ON"}</button>


    <label>Name: <input type='text' value={inputvalue} onChange={handleinput}></input></label>
    <p>Input: {inputvalue}</p>
    {console.log(inputvalue)}
  </div>
)
  
};

export default MyComponent;
