import React from 'react'
import { NavLink } from 'react-router-dom'
import '../Footer/Footer.css'

export const Footer = () => {
    return (
        <div className='footer'>
            <footer className="footer-contents">
                <div className="center-text">
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/'>Movies</NavLink>
                    <NavLink to='/'>TV Shows</NavLink>
                    <NavLink to='/'>About Us</NavLink>
                </div>
                <p>&copy; 2023 Your Movie App. All rights reserved.</p>
            </footer>

        </div>
    )
}
