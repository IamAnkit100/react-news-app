import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
// import '../Navbar.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import {CgClose}  from "react-icons/cg";

export default function Navbar() {

    const [ clicked, setClicked ] = useState(false);

    const handleClick = () =>{
        setClicked(!clicked);
    }
    return (
        <>
            <nav className="main-div">
        <div className="logo">
          <h1>News-<span>24</span></h1>
        </div>
        <div className="menu-icon" onClick={handleClick}>
        {
          clicked ? <CgClose className='cross cbtn'/> : <GiHamburgerMenu className='hamburger cbtn' />
        }
          
        </div>
        <div className={clicked ? "nav-link" : "nav-link close" }>
          <ul>
            <li><NavLink to='/' activeclassname='active'>Business</NavLink></li>
            <li><NavLink to='/entertainment'>Entertainment</NavLink></li>
            <li><NavLink to='/general'>General</NavLink></li>
            <li><NavLink to='/health'>Health</NavLink></li>
            <li><NavLink to='/science'>Science</NavLink></li>
            <li><NavLink to='/sports'>Sports</NavLink></li>
            <li><NavLink to='/technology'>Technology</NavLink></li>
          </ul>
        </div>
       
      </nav>

        </>
    )
}



           