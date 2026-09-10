import React from 'react'

const UserSearchCard = (props) => {
  return (
    <>
     <div className='w-full h-25 rounded-2xl bg-gray-100 shadow-2xl flex items-center justify-start gap-5 p-5'>
     <div  className=''>
        <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="" className='w-20 rounded-full' />
    </div>
    <div className='capitalize text-center'>{props.username}</div>
  </div>
    
    </>
  )
}

export default UserSearchCard