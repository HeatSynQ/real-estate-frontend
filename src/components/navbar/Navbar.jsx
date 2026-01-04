import { useState } from "react";
import "./navbar.scss"
import { Link } from "react-router-dom";

const Navbar = () => {

    const [open, setOpen] = useState(false);
    const user = true;

    return (  
        <nav>
            <div className="nav-left">
                <a href="/" className="logo">
                    <img src="./logo.png" alt="" />
                    <span>Estate</span>
                </a>
                <a href="">Home</a>
                <a href="">About</a>
                <a href="">Contact</a>
                <a href="">Agents</a>
            </div>
            <div className="nav-right">
                { user ? 
                    (
                        <div className="user">
                            <img src="https://i.pinimg.com/736x/17/72/71/177271d0c73b82903e897bfbd0718347.jpg" alt="" />
                            <span>HeatSynQ</span>
                            <Link className="profile" to="/profile">
                                <div className="notification">
                                    3
                                </div>
                                <span>Profile</span>
                            </Link>
                        </div>
                    ) : 
                    (
                        <>
                            <a href="">Sign in</a> 
                            <a href="" className="register">Sign up</a>
                        </>
                    )
                }
                <div className="menu-icon">
                    <img src="./menu.png" alt="" onClick={()=>{setOpen(!open)}}/>
                </div>
                <div className={open ? "menu active" : "menu"}>
                <a href="">Home</a>
                <a href="">About</a>
                <a href="">Contact</a>
                <a href="">Agents</a>
                <a href="">Sign in</a>
                <a href="">Sign up</a>
                </div>
            </div>
        </nav>
    );
}
 
export default Navbar;