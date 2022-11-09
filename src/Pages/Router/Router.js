import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Servicedetails from "../../Servicedetails/Servicedetails";
import Allservices from "../Allservices/Allservices";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Myreview from "../Review/Myreview";


export const router = createBrowserRouter([

    {
        path: '/',
        element: <Main></Main>,
        children: [

            {
                path: '/',
                loader: () => fetch('https://assignment-11-server-ecru.vercel.app/services'),
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
                loader: () => fetch('https://assignment-11-server-ecru.vercel.app/services'),
                element: <Allservices></Allservices>
            },
            {
                path: '/details/:id',
                loader: ({ params }) => fetch(`https://assignment-11-server-ecru.vercel.app/services/${params.id}`),
                element: <Servicedetails></Servicedetails>
            },
            {
                path: '/reviews',
                // loader: ({ params }) => fetch(`https://assignment-11-server-ecru.vercel.app/services/${params.id}`),
                element: <Myreview></Myreview>
            },

        ]
    }
])