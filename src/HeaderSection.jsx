import React from "react";
import Headerimg from "./Headerimg";
import NavbarContent from "./NavbarContent";

function HeaderSection() {
    return (
        <header className="header">

            <nav className="navbar navbar-expand-lg bg-body-tertiary">

                <div className="container">
                    <Headerimg />
                    <NavbarContent />
                </div>

            </nav>

        </header>
    )
}

export default HeaderSection;