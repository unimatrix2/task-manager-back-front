import React from 'react';
import { Link } from 'react-router-dom';
 
const navbar = () => {
  return (
    <nav className="navbar has-background-light" role="navigation" aria-label="main navigation">
    <div id="navbarBasicExample" className="navbar-menu">
      <div className="navbar-start">
        <Link to="/projects" className="navbar-item button is-info" style={{alignSelf: "center", left: 8}}>
          Projects
        </Link>
      </div>
    </div>
  </nav>
  )
}
 
export default navbar;