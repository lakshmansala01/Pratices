import React,{useState} from "react";

function SettingContent(){
    const[data,setdata]=useState({
        title: "Easy to Call"
    })
    return(
        <>
        <div>
            <h5>{data.title}</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
        </div>
        </>
    )
}
export default SettingContent