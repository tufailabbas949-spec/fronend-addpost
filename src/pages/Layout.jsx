import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar.jsx'
import Footerbar from './Footerbar.jsx'

const Layout = () => {
    return (
        <>
        {/* min-h-screen  */}
            <Navbar />
            <main className=" h-full w-full bg-gray-200 ">
                <Outlet />
            </main>
            <Footerbar />
        </>
    )
}

export default Layout