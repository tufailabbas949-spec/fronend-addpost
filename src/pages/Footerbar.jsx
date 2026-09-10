import React from 'react'
import { CircleUserRound, Search, House, SquarePlay, CirclePlus } from 'lucide-react'
import { NavLink } from 'react-router-dom'

const Footerbar = () => {
    return (
        <div>
            <div className='w-full h-20 bg-gray-50 flex fixed bottom-0 items-center justify-evenly'>
                <div><NavLink to="/home">
                    <House />
                </NavLink></div>
                <div><SquarePlay /></div>
                <div> <NavLink to="/create/post">
                    <CirclePlus /></NavLink>
                </div>
                <div> <NavLink to="/searchuser"><Search /></NavLink></div>
                <div><NavLink to="/user/profile">
                    <CircleUserRound />
                </NavLink></div>
            </div>
        </div>
    )
}

export default Footerbar