import { createBrowserRouter } from "react-router";
import App from "./App";
import { Home } from "./componantes/Home";
import { CreatePost } from "./componantes/CreatePost";
import { Login } from "./componantes/Login";
import { ProtectedRoute } from "./componantes/ProtectedRoute";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<App/>,
        children:[
            {
                path:'home',
                element:<Home/>
            },
            {
                path:'createPost',
                element:(
                    <ProtectedRoute element={<CreatePost/>}/ >
                )

            },
            {
                path:'login',
                element:<Login/>
            }
        ]
    }
])