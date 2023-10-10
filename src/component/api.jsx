import React, { useEffect, useState } from "react";
import axios from "axios";


const Api=()=>{
    const [value, setValue]=useState([])

    useEffect(()=>{
     axios.get("https://jsonplaceholder.typicode.com/posts")
     .then(res=>setValue(res.data))
    //  .then(res=>console.log(res.data))
    },[])

    return(
       <div className="container">
          <div>{value.map((first,index)=>{
            return(
                <>
                <ul key={index}>
                 <li>{first.id}</li>
                 <li>{first.title}</li>
                 </ul>
                </>
             )
          }
          )}</div>
       </div>
    )
}

export default Api