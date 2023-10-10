import React, { useState } from "react";
import {Uservalidate} from './Uservalidate';



const Formvalidate=()=>{

// const[firstvalue, SetFirstvalue]=useState([])

// const formvalidate=(e)=>{
// SetFirstvalue(e.target.value)
// }

// const[secondvalue, SetSecondvalue]=useState([])

// const form1validate=(e)=>{
//     SetSecondvalue(e.target.value)
// }

// console.log(firstvalue)


// code

const Createuser=async(e)=>{
e.preventDefault()
let formData={
name:e.target[0].value,
email:e.target[1].value,
password:e.target[2].value
}
console.log(formData);

const isValid= await Uservalidate.isValid(formData)
console.log(isValid)
}

    return(
        <div className="container">
            <h1>Form Section</h1>
            <form className='form' onSubmit={Createuser}>
             <input type="text" placeholder="Enter your username"></input>
             <input type="email" placeholder="Enter your email"></input>
             <input type="password" placeholder="Enter your password"></input>
             <input className="btn" type="submit" ></input>
             </form>

        </div>
    )
}

export default Formvalidate