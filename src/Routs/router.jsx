import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import RegisterPages from "../SharedPage/RegisterPage/RegisterPages";
import LogInPage from "../SharedPage/LogInPage/LogInPage";
import Blog from "../Pages/Blog/Blog";
import AddToy from "../Pages/AddToy/AddToy";
import SingleToy from "../Pages/Home/SingleToy/SingleToyDetails";
import ProtectedRoute from "../SharedPage/ProtectedRoute/ProtectedRoute";
import AllToys from "../Pages/AllToys/AllToys";
import MyToys from "../Pages/MyToys/MyToys";
import UpdateToyInfo from "../Pages/UpdateToyInfo/UpdateToyInfo";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/addtoys",
                element: <ProtectedRoute><AddToy></AddToy></ProtectedRoute>
            },
            {
                path: "/alltoys",
                element: <AllToys></AllToys>
            },
            {
                path: "/mytoys",
                element: <ProtectedRoute><MyToys></MyToys></ProtectedRoute>
            },
            {
                path: "/toy/:id",
                element: <ProtectedRoute><SingleToy></SingleToy></ProtectedRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/toys/${params.id}`)
            },
            {
                path: "/updateToyInfo/:id",
                element: <UpdateToyInfo></UpdateToyInfo>,
                loader: ({ params }) => fetch(`http://localhost:5000/toys/${params.id}`)
            },
            {
                path: "/blog",
                element: <Blog></Blog>
            },

            {
                path: "/register",
                element: <RegisterPages></RegisterPages>
            },
            {
                path: "/login",
                element: <LogInPage></LogInPage>
            },
        ]
    },
]);
