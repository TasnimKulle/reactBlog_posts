import React, { useContext } from 'react'
import { PostsContext } from '../context/PostsContext'
import { useLocation, useNavigate, useParams } from 'react-router';

export const PostDetail = () => {
    const { posts } = useContext(PostsContext);
    const {postId}=useParams()
    const navigate = useNavigate();
    const location = useLocation()
    const currentId = parseInt(postId);
    const post = posts.find((p)=>p.id === currentId)

    if(!post){
        return <p>Post not found</p>
    }

    const handleNavigation =(diraction)=>{
        const newId = diraction === 'next'? currentId+1:currentId-1
        const newPost =posts.find((p)=>p.id === newId);
        
        if(newPost){
            navigate(`/posts/${newId}`,
               {
                state: { fromPostId: currentId },
               });
        }
    }
  return (
    <div className='max-w-6xl mx-auto mt-6 p-6 bg-white rounded shadow-sm'>
        <h2 className='font-bold'>{post.title}</h2>
        <p>{post.content}</p>
        <div className='flex gap-3'>
            {
                currentId>1 && (
                    <button 
                    className='bg-blue-700 text-white px-3 py-1 rounded-lg'
                    onClick={()=>handleNavigation('prev')}
                    >Previous</button>
                )
            }
            {
                currentId<posts.length &&(
                    <button 
                    className='bg-blue-700 text-white px-3 py-1 rounded-lg'
                    onClick={()=>handleNavigation('next')}
                    > Next</button>
                )
            }
        </div>
        {
          location.state && (
            <p>You Navigation hare from Post Id {location.state.fromPostId}</p>
          )  
        }
    </div>
  )
}
