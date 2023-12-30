import { createBrowserRouter } from "react-router-dom";
import Roots from "../Layouts/Roots";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import Login from "../Pages/Login/Login";
import Account from "../Pages/Account/Account";
import MyRegistations from "../Pages/MyRegistations/MyRegistations";
import MyRegistationDetails from "../Pages/myRegistationDetails/myRegistationDetails";
import ErrorMessage from "../Pages/ErrorMessage/ErrorMessage";




const Routers = createBrowserRouter([
    {
        path: '/',
        element: <Roots/>,
        errorElement: <ErrorMessage/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path: '/about',
                element:<About/>
            },
            {
                path:'/login',
                element: <Login/>
            },
            {
                path: '/account/:id',
                element: <Account/>,
                loader: ({params})=> fetch(`http://localhost:5000/users/${params.id}`)
            },
            // {
            //     path:'/registations/:email',
            //     element: <MyRegistations/>,
            //     loader: ({params})=> fetch(`http://localhost:5000/registations/${params.email}`)
            // },
            {
                path:'/registations',
                element: <MyRegistations/>,
                loader: ()=> fetch(`http://localhost:5000/registations`)
            },
            {
                path:'/myRegistationDetails/:id',
                element: <MyRegistationDetails/>,
                loader: ({params})=> fetch(`http://localhost:5000/registations/${params.id}`)
            }
        ]
    }
])

export default Routers;