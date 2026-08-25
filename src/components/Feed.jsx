import React from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react'
const Feed = () => {
 const [datas,setDatas]  = useState([])
 const API_URL = import.meta.env.VITE_API_URL
 useEffect(()=>{

    const apicall = async()=>{
     const  res=   await axios.get(`${API_URL}`)

     console.log(res.data);
      setDatas(res.data.all_post)
    }
     apicall()
 },[])

  return (
    <div className='h-full w-screen items-center justify-center flex flex-col gap-8 md:flex-row md:flex-wrap bg-black'>
       {
        datas.map((data)=>{
            return (
                <div key={data._id} className='  p-5 bg-red-100 flex gap-1 md:gap-5 flex-col'>
                    <img src={data.Image} alt="image" className='w-125 h-100 border-2 border-black' />
                    <div className='text-2xl '>name : {data.name}</div>
                </div>
            )
        })
       }
    </div>
  )
}

export default Feed