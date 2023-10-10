import React from "react";


const Useobject=()=>{

const objvalue=[
    {name:"mani",id:1,correct:false},
    {name:"saran",id:1,correct:false},
    {name:"arul",id:2,correct:true},
    {name:"arun",id:2,correct:true}
    ]

    return(
       <div className="container">
        <div>
            {objvalue.map((firstobj)=>
             <h1 key={firstobj.id} style={{color: firstobj.correct ? 'red':'green'}} >{firstobj.name}</h1>
            )}
        </div>
       </div>
    )
}

export default Useobject