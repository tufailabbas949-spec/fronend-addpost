import React from 'react'
import { CirclePlus,SquarePlus ,LogOut } from "lucide-react"
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Navbar = () => {
  const navi = useNavigate()
  const logout = async()=>{
    const API_URL = import.meta.env.VITE_API_URL;
    try{
      const res = await axios.post(`${API_URL}/logout/user`,{},{
           withCredentials: true 
      })
      console.log(res)
      navi('/')
    }catch(error){
      console.error(error)
    }
  }
  return (
    <>
    <nav className='bg-red-400 w-full h-15 flex items-center justify-between px-4'>
        <div>logo</div>
        <div className='flex items-center text-center gap-4 justify-center'>
          <Link to="/create/post">
          <SquarePlus size={35} />
          </Link>
          
          <LogOut size={35} onClick={()=>{
            console.log("logout")
            logout()
          }}/>
        </div>
      </nav>
    </>
  )
}

export default Navbar