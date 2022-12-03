import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Servicedetails from "../../Servicedetails/Servicedetails";
import Addservice from "../Addservice/Addservice";
import Allreviews from "../Allreviews/Allreviews";
import Allservices from "../Allservices/Allservices";
import Blog from "../Blog/Blog";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Privaterouter from "../Privateroute/Privaterouter";
import Register from "../Register/Register";
import Myreview from "../Review/Myreview";
import Triall from "../Trial/Triall";
import Updatereview from "../Updatereview/Updatereview";


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
                loader: () => fetch('https://assignment-11-server-ecru.vercel.app/services?limit=100'),
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
                element: <Privaterouter> <Myreview></Myreview></Privaterouter>
            },
            {
                path: '/addservice',
                // loader: ({ params }) => fetch(`https://assignment-11-server-ecru.vercel.app/services/${params.id}`),
                element: <Privaterouter> <Addservice></Addservice></Privaterouter>
            },
            {
                path: '/update/:id',
                loader: ({ params }) => fetch(`https://assignment-11-server-ecru.vercel.app/review/${params.id}`),
                element: <Updatereview></Updatereview>
            },
            {
                path: 'trial',

                element: <Triall></Triall>
            }


        ]
    }
])