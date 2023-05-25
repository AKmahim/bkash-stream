import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import ErrorPage from "../components/ErrorPage";
import Home from "../pages/Home/Home";
import SignUp from "../components/SignUp/SignUp";
import SignIn from "../components/SignIn/SignIn";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: "/signUp",
                element: <SignUp></SignUp>
            },
            {
                path: "/SignIn",
                element: <SignIn></SignIn>
            },
        ]
    }
])

export default router;