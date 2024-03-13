import React from 'react';
import { NavLink, Outlet  } from 'react-router-dom';



function Navigation(){
    const navLinkStyle = {
        marginRight: '20px', // Adjust the value as per your requirement
      };
    return(
        <>
        <div className="App-header">
          {/* <div>
            <Link to="/Login">Login</Link>
          </div>
          <div>
            <Link to="/Registration">Register</Link>
          </div>
          {/* <div>
            <Link to="/UserProfile">UserProfile</Link>
          </div> */} 
          <nav>
            <NavLink to="Login" style={navLinkStyle}>Login</NavLink>
            <NavLink to="Registration" style={navLinkStyle}>Register</NavLink>
          </nav>
    
          <Outlet />
        </div>
        </>
    )

}

export default Navigation;