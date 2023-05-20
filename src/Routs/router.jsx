import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import RegisterPages from "../SharedPage/RegisterPage/RegisterPages";
import LogInPage from "../SharedPage/LogInPage/LogInPage";
import Blog from "../Pages/Blog/Blog";
import AddToy from "../Pages/AddToy/AddToy";
import SingleToy from "../Pages/Home/SingleToy/SingleToy";

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
                element: <AddToy></AddToy>
            },
            {
                path: "/toy/:id",
                element: <SingleToy></SingleToy>
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
            {
                path: "/error",
                element: <ErrorPage></ErrorPage>
            }
        ]
    },
]);
