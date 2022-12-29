import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
     const name="Rosine Blog ";
     return ( 
          <div className="nav">
            <h3 className="rosi_me">{name}</h3>
            
          <div className="navabar">
               <li>
                <Link to="/">Home</Link>
               </li>
             <li>
               <Link to="/Aboutme">Aboutme</Link>
             </li>
             
             <li>
               <Link to="/Skills">Skills </Link>
               </li>
               <li><Link to="/Contact">Contact</Link></li>
          </div>
          </div>
      );
}
 
export default Navbar;