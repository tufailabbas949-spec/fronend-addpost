import axios from 'axios'
import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navi = useNavigate()
    const loginCheck = async (e) => {
        e.preventDefault()
        const API_URL = import.meta.env.VITE_API_URL;
        try{
            console.log(e.target)
        const formdata = new FormData(e.target)
        const email = formdata.get("email");
        const password = formdata.get("password");
        const res =  await axios.post(`${API_URL}/login/user`, {
            email,
            password,
        }, {
            withCredentials: true
        })
         console.log(res.data);
         navi("/home")
        }catch(err){
            console.log(err)
        }
    }
    return (
        <>
            <div className='w-screen h-screen flex flex-col bg-gray-300 items-center justify-center '>
                <div className='bg-white shadow-lg w-90 h-100 rounded-3xl p-5 flex flex-col gap-5'>
                    <h3 className='text-3xl font-bold'>welcome back</h3>
                    <form className='flex flex-col items-center justify-center gap-10
             text-center ' onSubmit={loginCheck}>
                        <div className='w-full flex flex-col gap-5'>
                            <input name='email' className=' p-1 pl-2 rounded-md w-full border-2' type="text" placeholder='enter your username or  Email' />
                            <input name='password' className='p-1 pl-2 w-full rounded-md border-2' autoComplete="current-password" type='password' placeholder='enter your password' /></div>
                        <div className='w-full'>  <button type='submit' className='bg-blue-600 w-full p-1 capitalize'>sing up</button></div>
                    </form>
                    <div className='text-center'>? <Link to="/singup" className='capitalize text-blue-700' >sing up</Link> </div>
                </div>
            </div>
        </>
    )
}

export default Login

//  <div className='flex flex-col items-center justify-center w-screen h-screen'>
//         <div className='flex flex-col bg-red-300 border-2'>
//           <form className='flex flex-col '>
//             <div className='flex flex-col p-5 gap-2'>
//               <input type='text' placeholder='enter your username or email' className='border-2'/>
//             <input type="password" placeholder='enter your password'className='border-2' />
//             </div>
//            <div className=''><button type='submit' className='bg-blue-600 w-full'>log in</button></div>
//           </form>
//         </div>
//       </div>