import React, { useState } from 'react'

export const CreatePost = () => {
  const [title,setTitle]=useState('');
  const[content,setContent]=useState('')
  const handleSubmit=(e)=>{
    e.preventDefault()

  }
  return (
    <div  className='max-w-6xl mx-auto mt-6 shadow'>
      <div className='bg-white rounded p-3 '>
        <h1 className='text-2xl'>Create New Post</h1>
        <form onSubmit={handleSubmit}
        className='my-3 space-y-2'>
          <div >
            <label htmlFor="">Title:
              <input 
              type="text"
              value={title}
              onChange={(e)=>setTitle(e.target.value)}
              className='p-1 mx-2 border border-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-600 rounded'
               />
            </label>
          </div>
          <div>
            <label htmlFor="">Content:
              <textarea 
              value={content}
              onChange={(e)=>setContent(e.target.value)}
                rows='5'
                cols='30'

                className='mx-2 border border-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-600 rounded'
              ></textarea>
            </label>
          </div>
          <button
           className='bg-blue-700 p-1 w-1/3 rounded text-blue-50'
          type="submit" >Create Post</button>
        </form>
      </div>
    </div>
  )
}
