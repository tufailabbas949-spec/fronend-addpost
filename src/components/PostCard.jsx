import axios from 'axios'
import React from 'react'

const PostCard = ({ username, title, image, showDelete, id,onDelete }) => {
 
  return (

    <div >
      <div className='bg-white p-2 flex items-center  gap-2 pl-4'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHEKL853Yau0VkfQpVdB9EaUpUc4-jtiVryWwtJTxDYA&s"
          className='w-10 rounded-full' alt="userimage" />
        <h2>{username}</h2>
      </div>
      <div className=''>
        <img src={image}
          className='w-full sm:w-full h-96 object-cover'
          alt="postimage" />
      </div>
      <div className="bg-white pl-4 p-3 capitalize flex justify-evenly items-center"> title {title}      {showDelete && (
        <button className='bg-red-500 hover:bg-red-600 rounded-3xl w-30' onClick={() => {
           onDelete(id)
        }}>
          Delete
        </button>
      )}</div>

    </div>
  )
}

export default PostCard