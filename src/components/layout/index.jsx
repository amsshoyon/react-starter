import React from 'react'
import Footer from './Footer'
import Header from './Header'
import { Outlet } from "react-router-dom";

const Layout = ({ children }) => {
    return (
        <React.Fragment>
            <Header />
            <main className='min-h-[60vh]'>
                <Outlet />
            </main>
            <Footer />
        </React.Fragment>
    )
}

export default Layout