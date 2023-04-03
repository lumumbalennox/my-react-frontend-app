import React from "react";
import { NavLink } from "react-router-dom";

/*NavLinks styling */
// const linkStyles = {
//   display: "inline-block",
//   width: "100px",
//   padding: "6px",
//   margin: "0 6px 6px",
//   background: "blue",
//   textDecoration: "none",
//   color: "white",
// };
function Navbar() {
  return (
    <div id="site-navbar">
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid nav-container">
                <p className="navbar-brand">
                    React App Frontend
                </p>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink
                                className="nav-link"
                                to="/"
                                exact
                                // style={linkStyles}
                                activeStyle={{
                                background: "green",
                            
                                }}
                            >
                                Home
                            </NavLink>
                        </li>    
                        <li className="nav-item">

                            <NavLink
                                className="nav-link"
                                to="/student"
                                exact
                                // style={linkStyles}
                                activeStyle={{
                                  background: "green",
                                }}
                            >
                            Student
                            </NavLink>
                        </li>  
                        <li className="nav-item"> 

                            <NavLink
                                className="nav-link"
                                to="/parent"
                                exact
                                // style={linkStyles}
                                activeStyle={{
                                  background: "green",
                                }}
                            >
                                Parent
                            </NavLink>
                        </li>
                        <li className="nav-item">  

                            <NavLink
                                className="nav-link"
                                to="/school"
                                exact
                                // style={linkStyles}
                                activeStyle={{
                                  background: "green",
                                }}
                                >
                                School
                            </NavLink>
                        </li>    
                        <li className="nav-item">   
                            <NavLink
                                className="nav-link"
                                to="/sibling"
                                exact
                                // style={linkStyles}
                                activeStyle={{
                                  background: "green",
                                }}
                                >
                                Sibling
                            </NavLink>
                        </li>  

                        <li className="nav-item">   
                            <NavLink
                                className="nav-link"
                                to="/constraint"
                                exact
                                // style={linkStyles}
                                activeStyle={{
                                  background: "green",
                                }}
                                >
                                Constraint
                            </NavLink>
                        </li> 
                    </ul>      

                    <div class="rightNav">
                                    <input type="text" placeholder="Search.." />
                                    {/* <button class="btn">Search</button> */}
                    </div>
                            
                </div>
            </div> 
        </nav> 
    </div>          

   ) 
}

export default Navbar;