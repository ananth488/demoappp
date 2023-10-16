import React, { useState } from "react";
import { PiStarThin } from 'react-icons/pi';


const Ratingstar=()=>{
    const [rating, setRating]=useState(null)
    
    return(
        <>
          {[...Array(5)].map((star,index)=>{

            const currentRate=index+1
            return(
                <>
                <label>
                    <input className="inputvalue" type="ratio"
                    value={setRating}
                    onClick={()=>setRating(currentRate)}
                    />
                    <PiStarThin size={50}
                    className="ratestart"
                    color={currentRate <= (rating)?"red":"gray"}
                    />
                </label>
                </>
                
            )
          })}
         </> 
    
    )
}

export default Ratingstar