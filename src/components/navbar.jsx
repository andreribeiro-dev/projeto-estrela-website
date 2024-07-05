import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom'
import Logo from '../images/logo.png'
import {links} from '../data'
import { FaBars } from "react-icons/fa6";
import { MdOutlineClose } from "react-icons/md";
import './navbar.css'



const Navbar = () => {
    const [isNavShowing, setIsNavShowing] = useState(false);




  return (
    <nav>
        <div className="container nav_container">
           <Link to= "/" className='logo' onClick={() => setIsNavShowing(false)}>
            <img src={Logo} alt="Nav Logo" />
           </Link>
            <ul className={`nav_links ${isNavShowing ? 'show_nav' : 'hide_nav'}`}>  
                {
                    links.map(({name, path}, index) => {
                        if (name === "Apoie") {
                            return (
                                <li key={index}>
                                    <a href={path} id="btn-apoie" className="btn-apoie" target="_blank" rel="noopener noreferrer">{name}</a>
                                </li>
                            )
                        }
                        return (
                            <li key={index}>
                                <NavLink to={path} className={({isActive}) => isActive ? 'active-nav' : ''} onClick={() => setIsNavShowing(prev => !prev)} >{name}</NavLink>
                            </li>
                        )
                    })
                }
            </ul>
            <button className="nav_toggle-btn" onClick={() => setIsNavShowing(prev => !prev)}>
                {
                    isNavShowing ? <MdOutlineClose/> : <FaBars/> 

                }
            </button>
        </div>
    </nav>
  )
}

export default Navbar

