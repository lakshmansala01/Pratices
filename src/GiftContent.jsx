import React,{useState} from "react";

function GiftContent(){
    const[data,setdata]=useState({
        tittle: "Gift for Customers"
    })
    return(
        <>
        <div>
            <h5>{data.tittle}</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        </div>
        </>
    )
}
export default GiftContent