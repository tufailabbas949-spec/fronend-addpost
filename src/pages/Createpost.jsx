import React from 'react'
import { MoveLeft } from "lucide-react"
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
const Createpost = () => {
    const navi = useNavigate()
    const createposts = async (e) => {
          e.preventDefault();
        const API_URL = import.meta.env.VITE_API_URL;
        try {
            console.log(e.target)
            const formData = new FormData(e.target)
            const res =  await axios.post(`${API_URL}/create`, formData, { withCredentials: true } )
             console.log(res)
             navi("/home")
        } catch (err) {
            console.error(err)
        }
    }
    return (
        <div className='h-full capitalize w-full bg-amber-200 flex flex-col items-center justify-center'>
            <h1 className='w-full flex items-center gap-2 p-2 bg-red-500'><MoveLeft size={40} onClick={() => {
                console.log("home")
                navi("/home")
            }} /> new post</h1>
            <form className='w-full' onSubmit={createposts}>
                <div className='w-full h-200 bg-amber-50 p-10 flex flex-col gap-5'>
                    <div className='flex items-center gap-5'>
                        <img src="https://img.magnific.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?semt=ais_hybrid&w=740&q=80"  className='w-10 rounded-full
                    '
                            alt="userpic" />
                        <h3>username</h3>
                    </div>
                    <label
                        htmlFor="file"
                        className="flex h-40 cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-gray-300 bg-gray-50 transition hover:border-blue-500 hover:bg-blue-50"
                    >
                        <p className="font-medium text-gray-700">
                            Click to upload
                        </p>

                        <p className="mt-1 text-sm text-gray-500">
                            PNG, JPG or JPEG
                        </p>

                        <input
                            id="file"
                            type="file"
                            accept="image/*"
                            className="hidden"
                             name="Image"
                        />
                    </label>
                    <input type="text" name='title' className='w-full p-2 pl-3 border-2 capitalize' placeholder='enter your title' />
                    <div className='mt-15'>
                        <button type="submit" className='w-full text-white  bg-blue-500 p-2 hover:bg-blue-700 capitalize'>public</button>
                    </div>
                </div>
            </form>

        </div>
    )
}

export default Createpost