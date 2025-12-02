import React, { useContext } from 'react'
import { PostsContext } from '../context/PostsContext'
import { Link, useLocation, useNavigate } from 'react-router';

export const Home = () => {
  const {posts}=useContext(PostsContext);
  const location = useLocation();
  const navigate = useNavigate()

  const query =new URLSearchParams(location.search);
  const searchTerm =query.get('search')||"";

  const filteredPosts=posts.filter((post)=>(post.title ||"").toLowerCase().includes((searchTerm.toLowerCase())))

  const handleSearsh=(e)=>{
    const formData= new FormData(e.target);
    const searchValue=formData.get('search');
    navigate(`/?search=${encodeURIComponent(searchValue)}`)

  }
  return (
    <div className='max-w-6xl mx-auto mt-6 py-6'>
      <div className='bg-white shadow-md rounded-md px-3'>
        <h1 className='text-xl text-gray-600 p-2  font-semibold'>Blog Post</h1>
        <form onSubmit={handleSearsh} 
        className='flex flex-col w-1/2 py-3'
        >
          <input 
          type="text"
          name='search'
          defaultValue={searchTerm}
          placeholder='search post'
          className='p-2 border border-gray-200 rounded focus:outline-none
          focus:ring-2 focus:ring-blue-500'
           />
           <button
            type="submit" 
            className='p-2 bg-blue-700 my-3 text-white text-xl text-center rounded hover:bg-blue-500 cursor-pointer'
            >Submit</button>
        </form>
        <ul>
          {
            filteredPosts.map((post)=>(
              <li key={post.id}>
                <Link
                to={`/posts/${post.id}`}
                >{post.title}</Link>
              </li>
            )
            )
          }
        </ul>
      </div>
    </div>
  )
}
