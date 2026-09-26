import React from "react";

function NavbarContent(){
    return(
        <>
           <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item ">
                            <a className="nav-link" href="service.html" >Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="amazing.html">Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="blog.html">Blogs</a>
                        </li>
                          <li className="nav-item">
                            <a className="nav-link" href="page 404.html">Page</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="contact.html">Contact</a>
                        </li>
                    </ul>
                    
                </div>
                
        </>
    )
}
export default NavbarContent