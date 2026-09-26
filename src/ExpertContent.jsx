import React, { useState } from "react";

function ExpertContent() {
    const [data, setData] = useState({
        title: "Expert Handyman & Remodelling"

    })
    return (
        <>
            <div>
                <h3>{data.title}</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto rerum non, velit provident reiciendis molestiae iste fugiat alias nobis repellat vitae.</p>
                <button className="btn btn-warning text-white me-3">LEARN MORE</button>
                <button className="btn btn-outline-light">GET A QUOTE</button>
            </div>
        </>
    )
}
export default ExpertContent