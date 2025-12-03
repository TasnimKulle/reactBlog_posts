import { useContext } from "react";
import { NavLink, Outlet, useNavigate } from "react-router";
import { AuthContext } from "./context/AuthContext";


function App() {
  const { logout, isAuthenticated } = useContext(AuthContext);
  const navigate=useNavigate()
   const handLogout=()=>{
    logout()
    navigate('/login')
  }

  return (
    <div className="min-h-screen bg-gray-50 ">
      <header className="max-w-6xl mx-auto h-25 p-3 bg-gray-50 shadow-sm  flex flex-col gap-3">
        <h1 className="text-2xl font-bold">React Blog</h1>
        <nav className="flex  items-start">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "bg-blue-800 text-blue-50 px-4 py-2 rounded-sm"
                : "font-semibold px-4 py-2"
            }
          >
            Home
          </NavLink>
         {
          isAuthenticated ? (
            <div>
               <NavLink
            to="/createPost"
            className={({ isActive }) =>
              isActive
                ? "bg-blue-800 text-blue-50 px-4 py-2 rounded-sm"
                : "font-semibold px-4 py-2"
            }
          >
            Creat Post
          </NavLink>
          <button
           className='bg-rose-700 text-rose-50 px-4 py-2 mx-2 rounded cursor-pointer'
           onClick={handLogout}
          >logout</button>
            </div>
          ):(
            <NavLink
            to="login"
            className={({ isActive }) =>
              isActive
                ? "bg-blue-800 text-blue-50 px-4 py-2 rounded-sm"
                : "font-semibold px-4 py-2"
            }
          >
            Login
          </NavLink>
          )
         }
          
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default App;
