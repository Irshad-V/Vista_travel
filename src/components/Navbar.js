import React, { useState } from 'react'
import "./NavbarStyle.css"

import { MenuItems } from './MenuItems'
import { Link } from 'react-router-dom'

function Navbar() {
    const [clicked,setClicked] =useState(false)
    const clickedStatus =()=>{
        
        setClicked(!clicked)

    }
    return (
        <nav className='NavbarItems'>
            <h1 className='navbar-logo'> Vista</h1>
            <div className='menu-icons'>
                <i className={clicked ?  'fas fa-times':'fas fa-bars'}onClick={clickedStatus} ></i>
            </div>
            <ul className={clicked? 'nav-menu active' :'nav-menu'}>

                {
                    MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <Link className={item.cName} to={item.url} ><i className={item.icon}></i>{item.title}</Link>
                            </li>

                        )
                    })

                }
                <button>Sign up</button>

            </ul>


 



        </nav>
    )
}

export default Navbar



