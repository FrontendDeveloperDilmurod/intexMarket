import React from 'react'
import Nav from '../components/Navbar'
import { Outlet } from 'react-router-dom'

function RootLayout() {
    return (
        <div>
            <Nav />
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default RootLayout