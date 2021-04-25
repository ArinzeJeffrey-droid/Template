import React from 'react'
import { Link } from 'react-router-dom'
import "./navbar.styles.css"



const Navbar = () => {
    return (  
        <nav className="nav">
            <div className="logo">
                <div className="logo-inner">
                    <h1>Logo</h1>
                </div>
            </div>
            <div className="nav-links">
                <div className="links-inner text-center">
                    <Link to="/account" className="mr-5"> 
                        <span className="fas fa-user-circle"></span>
                    </Link>
                    <Link to="/notification" className="mr-2"> 
                        <span className="fas fa-bell"></span>
                    </Link>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;