import React from "react";
import image from "./assets/images/logo.png"

function Headerimg(){
    return(
        <>
      <a className="navbar-brand" href="#">
                <img src={image}style={{ width: "150px" }}alt="Logo"/>
      </a>

              <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
        </>
    )
}
export default Headerimg