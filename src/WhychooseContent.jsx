import React, { useState } from "react";


function WhychooseContent() {
    const [data, setdata] = useState({
        title: "WHY CHOOSE US"
    })

    return (
        <>
            <div>
                <h2>{data.title}</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione adipisci veritatis eveniet eos necessitatibus eligendi numquam aut, architecto dolor qui dolorem consequuntur.</p>
            </div>
        </>
    )
}
export default WhychooseContent