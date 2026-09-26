import React,{useState} from "react";

function CommentContent(){
    const[data,setdata]=useState({
        tittle: "24/7 Service"
    })
    return(
        <>
        <div>
            <h5>{data.tittle}</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
        </div>
        </>
    )
}
export default CommentContent