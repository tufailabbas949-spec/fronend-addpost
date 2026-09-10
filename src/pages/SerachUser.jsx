import React from 'react'
import UserSearchCard from '../components/UserSearchCard.jsx'
import { useState, useEffect } from 'react'
import axios from 'axios'
const SearchUser = () => {
  const [search, setSearch] = useState("")
  const [data, setData] = useState([])
  const API_URL = import.meta.env.VITE_API_URL;
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get(`${API_URL}/get/user?search=${search}`, {
          withCredentials: true
        })
        setData(res.data.all_users)
        // console.log(res)
      } catch (error) {
        console.log(error)
      }
    }
    getData()
  }, [search])

  return (
    <>
      <div className='flex items-center justify-center p-5 fixed top-0 w-full bg-gray-100 z-10'>
        <input type="text" placeholder='search user' value={search} onChange={(e) => setSearch(e.target.value)} className='w-full h-10 border-2 rounded-2xl px-5' />
      </div>
      <div className='flex min-h-screen flex-col items-center gap-5 overflow-y-auto p-5 pt-10 pb-25'>
        {data.map((user) => (

             <UserSearchCard key={user._id} username={user.username} />
        ))}
       

      </div>
    </>
  )
}

export default SearchUser