import axios from 'axios'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate} from 'react-router-dom'

const SingUp = () => {
    const navi = useNavigate()
    const handle = async (e) => {
        e.preventDefault();
        const API_URL = import.meta.env.VITE_API_URL;
        try {
            const formData = new FormData(e.target);
            const data = {
                username: formData.get("username"),
                email: formData.get("email"),
                age: formData.get("age"),
                password: formData.get("password"),
            };
            const res = await axios.post(`${API_URL}/create/user`, data,      
            )
            console.log(res)
            navi("/")
        } catch (err) {
            console.error(err.message)
        }}
    return (
        <div className='w-screen h-screen flex flex-col bg-gray-300 items-center justify-center  '>

            <div className='bg-white shadow-lg w-90 h-100 rounded-3xl p-5 flex flex-col gap-5'>
                <h3 className='text-3xl font-medium'>create your account</h3>
                <form onSubmit={handle} className='flex flex-col items-center justify-center gap-10 
             text-center '>
                    <div className='w-full flex flex-col gap-2.5'>
                        <input className='border-2 p-1 rounded-md  pl-2 w-full' type="text" placeholder='enter your username' name="username" />
                        <input className='border-2 p-1 rounded-md pl-2 w-full' type='email' placeholder='enter your Email' name="email" />
                        <input className='border-2 p-1 rounded-md pl-2 w-full' type="number" placeholder='enter your age' name="age" />
                        <input className='border-2 p-1 rounded-md pl-2 w-full' type='password'
                          autoComplete="new-password" placeholder='enter your password' name="password" /></div>
                    <div className='w-full'>  <button type='submit' className='bg-blue-600 w-full p-1 capitalize'>sing up</button></div>
                </form>
                <div className='text-center'>already have an account? <Link to="/" className='capitalize text-blue-700'>login</Link></div>
            </div>
        </div>
    )

}
export default SingUp