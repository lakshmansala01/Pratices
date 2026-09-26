import React,{useState} from "react";
function StateCount(){
    const[count,setcount]=useState(0)
    const handleincrement=()=>{
        setcount(count+1)
    }
    const handledecrement=()=>{
        setcount(count-1)
    }
return(
    <div>
        <h2>{count}</h2>
        <button onClick={handleincrement}>Increment</button>
        <button onClick={handledecrement}>Decrement</button>
    </div>
)
}
export default StateCount