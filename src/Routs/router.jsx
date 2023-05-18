import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import RegisterPages from "../SharedPage/RegisterPage/RegisterPages";
import LogInPage from "../SharedPage/LogInPage/LogInPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>
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
                element:<ErrorPage></ErrorPage>
            }
        ]
    },
]);
