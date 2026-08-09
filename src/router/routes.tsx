import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { AuthLayout } from "../layouts/AuthLayout";
import { Login } from "../pages/auth-pages/Login";
import { Register } from "../pages/auth-pages/Register";
import { NotFound } from "../shared/components/NotFound";
import { ProtectedRoutes } from "./ProtectedRoutes";
import { MainLayout } from "../layouts/MainLayout";
import { Home } from "../pages/main-pages/Home";
import { ProfileLayout } from "../layouts/ProfileLayout";

export const router = createBrowserRouter([
    {
        element: <App/>,
        children: [
            {
                element: <AuthLayout />,
                children: [
                    {
                        path: "/",
                        element: <Login />
                    },
                    {
                        path: "/register",
                        element: <Register />
                    }
                ]
            },
            {
                element: <ProtectedRoutes />,
                children: [
                    {
                        element: <MainLayout/>,
                        children: [
                            {
                                path: "home",
                                element: <Home/>
                            }
                        ]
                    }
                ]
            },
            {
                element: <ProtectedRoutes />,
                children: [
                    {
                        element: <ProfileLayout />,
                        children: [
                            {
                                path: "profile",
                                lazy:() => import("../pages/profile-pages/Profile"),
                            }
                        ]
                    }
                ]
            },
            {
                path: "*",
                element: <NotFound />
            }
        ]
    }
])