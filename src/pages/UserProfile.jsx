import React, { useEffect, useState } from 'react'
import { MoveLeft } from "lucide-react"
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import PostCard from '../components/PostCard'
const UserProfile = () => {
    const navigate = useNavigate()
    const [userdata, setUserData] = useState({})
    const [posts,setPost] = useState([])
    const API_URL = import.meta.env.VITE_API_URL;
    useEffect(() => {
        const getmeuser = async () => {
            try {
                const res = await axios.get(`${API_URL}/api/users/me`, {
                    withCredentials: true
                })
                console.log("PROFILE API DATA:", res.data);
                // console.log("data res backend", res)
                setUserData(res.data.user)
                setPost(res.data.posts)

            } catch (error) {
                console.log(error)
            }

        }
        getmeuser()
    }, [])
    useEffect(() => {
        console.log("userdata", userdata)
        console.log("user post", posts)

    }, [userdata,posts])
     const deletePost = async (postId) => {
    try {
      console.log(postId)
      const res = await axios.delete(`${API_URL}/delete/${postId}`, {
        withCredentials: true
      })
      //array new array set karna check filter ka use kar ke 
      setPost((prevPost) =>
        prevPost.filter((post) => post._id !== postId)
      );
      console.log(res)
    } catch (error) {
      console.log(error)
    }
  }
    return (
        <div className='w-full h-full bg-amber-200 '>
            <nav className='flex items-center justify-between px-4   p-2 bg-red-400'>
                <div className='flex items-center  justify-center capitalize gap-2'> <MoveLeft onClick={() => navigate(-1)} />profile

                </div>
                <div>edit</div>
            </nav>
            <div>
                <div className='bg-red-300 flex items-center justify-between  px-10 p-5'>
                    <div className='flex flex-col gap-2'>
                        <img src="data:image/jpeg;base64,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"
                            alt="" className='w-30 rounded-full' />
                        <h3 className='text-center'>{userdata?.username}</h3>
                    </div>
                    <div>
                        <button
                            onClick={() =>
                                navigate("/userupdate")
                            } className='border-2 bg-transparent border-blue-500 text-blue-500 px-2 w-30 capitalize'>edit profile</button>
                    </div>
                </div>
                <div>
                    <h2 className='px-5'>decrption</h2>
                </div>
                <div className='flex items-center justify-evenly'>
                    <div>post</div>
                    <div> followers</div>
                    <div>following</div>
                </div>

                <div className='bg-green-50 capitalize text-2xl text-center' >
                 all post 
                 <div className='flex flex-col  items-center justify-start pb-25 sm:flex-row flex-wrap sm:p-5 
                  overflow-y-auto gap-5 sm:pb-30'>
                      {
                    posts.map((p)=>{
                        return <div key={p._id}>
                             <PostCard  onDelete={deletePost} id={p._id} showDelete={true} image={p.Image} title={p.title} username={p.createdBy.username}/>
                        </div>
                    })
                   }
                 </div>
                </div>
            </div>




        </div>
    )
}

export default UserProfile