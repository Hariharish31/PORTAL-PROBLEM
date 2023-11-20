import { Component } from "react";
import "./NavbarStyles.css";
import {menuItems} from "./MenuItems"
import {Link} from "react-router-dom"
class Navbar extends Component{
    render()
    {
        return(
            <nav className="NavbarItems">
                <h1 className="navbar-logo">hiresmart</h1>
                <ul classname ="nav-menu">
                    <li>
                        <a href="/">Home
                        <i className="fa-solid fa-house-user"></i></a>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Navbar;