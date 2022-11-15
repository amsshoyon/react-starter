import React from 'react'
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className='py-4 bg-gray-300'>
            <nav className="container">
                <div className="flex justify-end items-center">
                    <Link to={'/'} className='mx-3'>Home</Link>
                    <Link to={'/about'} className='mx-3'>About</Link>
                    <Link to={'/products'} className='mx-3'>Products</Link>
                </div>
            </nav>
        </header>
    )
}

export default Header