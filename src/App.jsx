import { NavLink, Outlet } from 'react-router'

function App() {

  return (
    <div>
      <header className='w-full h-16 p-2 mb-5'>
        <h1 className='text-2xl font-bold'>React Blog</h1>
        <nav className=' space-x-4 mt-2'>
         <NavLink to='home'
         className={({isActive})=>isActive ?"bg-blue-800 text-blue-50 px-4 py-2 rounded-sm": "font-semibold"}>Home</NavLink>
         <NavLink 
         to="createPost"
          className={({isActive})=>isActive ?"bg-blue-800 text-blue-50 px-4 py-2 rounded-sm": "font-semibold"}
         >Creat Post</NavLink>
         <button>logout</button>
         <NavLink 
         to='login'
          className={({isActive})=>isActive ?"bg-blue-800 text-blue-50 px-4 py-2 rounded-sm": "font-semibold"}
         >Login</NavLink>
        </nav>
      </header>
      <main>
        <Outlet/>
      </main>
    </div>
  )
}

export default App
