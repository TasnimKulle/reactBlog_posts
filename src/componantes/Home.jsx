import React from 'react'

export const Home = () => {
  return (
    <div className='max-w-6xl mx-auto mt-6 py-6'>
      <div className='bg-white shadow-md rounded-md px-3'>
        <h1 className='text-xl text-gray-600 p-2  font-semibold'>Blog Post</h1>
        <form  
        className='flex flex-col w-1/2 py-3'
        >
          <input 
          type="text"
          name='search'
          placeholder='search post'
          className='p-2 border border-gray-200 rounded focus:outline-none
          focus:ring-2 focus:ring-blue-500'
           />
           <button
            type="submit" 
            className='p-2 bg-blue-700 my-3 text-white text-xl text-center rounded hover:bg-blue-500 cursor-pointer'
            >Submit</button>
        </form>
      </div>
    </div>
  )
}
