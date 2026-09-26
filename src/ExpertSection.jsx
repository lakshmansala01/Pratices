import React from "react";
import Expertimg from "./Expertimg";
import ExpertContent from "./ExpertContent";

function ExpertSection(){
    return(
        <section className="expert_bg">
        <div className="container">
            <div className="row align-items-center">
        <div className="col-md-4">
            <Expertimg/>
        </div>
        <div className="col-md-8">
            <ExpertContent/>
        </div>
            </div>
        </div>
        </section>
    )
}
export default ExpertSection