import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Allservices from "../Allservices/Allservices";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Register from "../Register/Register";


export const router = createBrowserRouter([

    {
        path: '/',
        element: <Main></Main>,
        children: [

            {
                path: '/',
                loader: () => fetch('http://localhost:5000/services'),
                element: <Home></Home>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/services',
                loader: () => fetch('http://localhost:5000/services'),
                element: <Allservices></Allservices>
            },

        ]
    }
])