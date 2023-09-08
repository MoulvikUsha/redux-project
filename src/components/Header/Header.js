import React from 'react'
import { NavLink } from 'react-router-dom'
import '../Header/Header.css'

export const Header = () => {
    const navLinkStyles = ({ isActive }) => {
        return {
            fontWeight: isActive ? 600 : 'normal',
            color: isActive ? '#3fffed' : 'white'
        }
    }
    return (
        <div className='header'>
            <nav className='primaryNav'>
                <div className="contents">
                    <img className="logo-image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGA6wYQkdtQ-h8pJpGwHsUxzFg_39zwfRxQrr2slao363fHXzlK2zDZ0oNGJxnsk_KbiE&usqp=CAU" alt="logo" />
                </div>
                <div className="links">
                    <NavLink style={navLinkStyles} to='/'>Home</NavLink>
                    <NavLink style={navLinkStyles} to='/movie/:imdbID'>Movie Details</NavLink>
                    <NavLink style={navLinkStyles} to='/movie-card'>Movie Cards</NavLink>
                    <NavLink style={navLinkStyles} to='/movie-listing'>Movie Listing</NavLink>
                </div>
            </nav>
        </div>
    )
}
