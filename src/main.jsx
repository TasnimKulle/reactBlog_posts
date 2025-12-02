import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { router } from './routes.jsx'
import { AuthProvider } from './context/AuthContext.jsx'
import { PostsProvide } from './context/PostsContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <AuthProvider>
   <PostsProvide>
     <RouterProvider router={router}/>
   </PostsProvide>
   </AuthProvider>
  </StrictMode>,
)
