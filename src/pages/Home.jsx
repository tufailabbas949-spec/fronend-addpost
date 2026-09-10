import React, { useEffect, useState } from 'react'
import axios from 'axios'
import PostCard from '../components/PostCard'
import Navbar from '../components/Navbar'
import Footerbar from './Footerbar'

const Home = () => {
  const [data, setData] = useState([])
  const API_URL = import.meta.env.VITE_API_URL;
  useEffect(() => {
    const datafetch = async () => {
      try {
        const res = await axios.get(`${API_URL}/posts`,{
           withCredentials: true
        })
        const data = res.data.all_post
        //  console.log(res.data.all_post)
        setData(data)
        console.log(data)
      } catch (error) {
        console.error("error", error)
      }

    }
    datafetch()
  }, [])
  return (
    <>
    <div className='w-full h-full flex flex-col items-center justify-center gap-5 sm:flex-row flex-wrap p-10 overflow-y-auto pb-30'>
      {data.map((post) => (
        <PostCard key={post._id} showDelete={false} username={post.createdBy?.username || "unkown user"} title={post.title} image={post.Image} content={post.content} />
      ))}
    </div>
    </>
  )
}

export default Home