import React from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'

const CreateUser = () => {
 const navi = useNavigate()
 const API_URL = import.meta.env.VITE_API_URL
    const handle = async (e) => {
        e.preventDefault();
        console.log("handle submit")
        const formData = new FormData(e.target);
        try{
        const response = await fetch(`${API_URL}`, {
            method: "POST",
            body: formData,
        });

        const data = await response.json();
         navi('/posts')
    }catch(err){
        console.error(err)
    }
       

    }
    return (
        <div className='h-screen w-screen bg-red-600 flex items-center justify-center '>
            <form className='bg-red-100 flex flex-col items-center justify-center gap-4 p-2 ' onSubmit={handle}>
                <input type='file' name='Image' className='w-full bg-white' />
                <input type='text' placeholder='enter your name' name='name' className='p-2 bg-white w-full' />
                <button className='bg-blue-600 hover:bg-blue-800 w-50 p-1 border-1 border-black'>submit</button>
            </form>
        </div>
    )
}

export default CreateUser