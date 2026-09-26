import React, { useEffect, useState } from "react"
function UserForm(){
    const[user,setUser] = useState({
        name:"",
        email:""

    })
  
    const handleChange = (e) =>{
        setUser({...user,[e.target.name] : e.target.value})
    }
  
    const handleSubmit = (e) =>{
    e.preventDefault()
    fetch("https://jsonplaceholder.typicode.com/users",{
        method:"POST",
        headers:{
            "Content-type":"application/json"
        },
        body: JSON.stringify(user)
    })
}
    return(
        <>
 <form onSubmit={handleSubmit}>
<div>
    <input type="text" placeholder="Enter Username" value={user.name} name="name" onChange = {handleChange}/>
</div>
<div>
    <input type="email" placeholder="Enter Email" value={user.email} name="email" onChange = {handleChange}/>
</div>
<div>
    <input type="submit" value ="submit" />
</div>



 </form>

        </>

    )
}
export default UserForm