import React from "react";
import YearContent from "./YearContent";
import YearsButton from "./YearsButton";


function YearsSection() {
    return (
        <section className="years_bg">
            <div className="container">
                <div className="row text-center">
                    <div className="col-md-6">
                        <YearContent />
                    </div>
                    <div className="col-md-6">
                        <YearsButton />
                    </div>
                </div>
            </div>
        </section>
    )
}
export default YearsSection