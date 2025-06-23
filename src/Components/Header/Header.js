import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

function Header(){
    return (
    <div >
       <nav>
            <ol>
                <li> <Link to = "/">Home</Link> </li>
                <li><Link to = "/contactus">Contact Us</Link></li>
            </ol>
       </nav>
    </div>
    )
}

export default Header;