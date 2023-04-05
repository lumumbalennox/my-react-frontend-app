import React from "react";
import { NavLink } from "react-router-dom";

/*NavLinks styling */
const linkStyles = {
  display: "inline-block",
  width: "100px",
  padding: "6px",
  margin: "0 6px 6px",
  background: "blue",
  textDecoration: "none",
  color: "white",
};
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
                                style={linkStyles}
                                activeStyle={{
                                background: "teal",
                            
                                }}
                            >
                                Home
                            </NavLink>

                            <NavLink
                                className="nav-link"
                                to="/newstudentform"
                                exact
                                style={linkStyles}
                                activeStyle={{
                                background: "teal",
                            
                                }}
                            >
                                NewStudent
                            </NavLink>

                        </li>    
                        <li className="nav-item">

                            <NavLink
                                className="nav-link"
                                to="/student"
                                exact
                                style={linkStyles}
                                activeStyle={{
                                  background: "teal",
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
                                style={linkStyles}
                                activeStyle={{
                                  background: "teal",
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
                                style={linkStyles}
                                activeStyle={{
                                  background: "teal",
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
                                style={linkStyles}
                                activeStyle={{
                                  background: "teal",
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
                                style={linkStyles}
                                activeStyle={{
                                  background: "teal",
                                }}
                                >
                                Constraint
                            </NavLink>
                        </li> 
                    </ul>      

                    <div class="rightNav">
                                    {/* <input type="text" placeholder="Search.." /> */}
                                    {/* <button class="btn">Search</button> */}
                    </div>
                            
                </div>
            </div> 
        </nav> 
    </div>          

   ) 
}

export default Navbar;