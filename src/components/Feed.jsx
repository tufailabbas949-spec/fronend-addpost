import React, { useCallback } from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Feed = () => {
    const navi = useNavigate()
    const [datas, setDatas] = useState([])
    const [loding, setLoding] = useState(false)
    const [progress, setProgress] = useState(0)
    const API_URL = import.meta.env.VITE_API_URL
    useEffect(() => {

        const apicall = async () => {
            setLoding(true)
            setProgress(50)
            try {
                const res = await axios.get(`${API_URL}/posts`)
                setProgress(100)
                console.log(res.data);
                setDatas(res.data.all_post || [])
                setTimeout(() => {
                    setLoding(false)
                    setProgress(0)
                },500)

            } catch (err) {
                console.log(err)
                setLoding(false)
                setProgress(0)
            }


        }

        apicall()
    }, [])
    const deletes_call = async (id) => {
        console.log(id)
        //${API_URL}/delete/${id}
        const res = await axios.delete(`${API_URL}/delete/${id}`)
        console.log(res)
    }
    return (

        <div className='h-full w-screen items-center gap-3 justify-center flex flex-col p-5 md:p-10 md:flex-row md:flex-wrap bg-black'>

            {loding && (
                <div className="fixed top-0 left-0 z-50 h-1 w-full overflow-hidden">
                    <div
                        className="h-full bg-blue-500 transition-all duration-500"
                        style={{ width: `${progress}%` }}
                    />
                </div>
            )}
            {
                datas.map((data) => {
                    return (
                        <div key={data._id} className='  p-5 bg-red-100 flex gap-1 md:gap-5 flex-col'>
                            <img src={data.Image} alt="image" className='w-124 h-100 border-2 border-black' />
                            <div className='text-3xl '>name : {data.name}</div>
                            <div className='flex justify-between items-center'><button value={data._id} className='w-20 text-center capitalize  p-2  bg-red-500' onClick={() => {
                                deletes_call(data._id)
                            }}>delete</button>
                                <button onClick={() => {
                                    navi("/")
                                }} className='w-20 text-center p-2 capitalize bg-blue-700'>add</button>
                            </div>
                        </div>
                    )
                })
            }
        </div >
    )
}

export default Feed