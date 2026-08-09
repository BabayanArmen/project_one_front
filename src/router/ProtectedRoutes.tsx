import { Outlet } from "react-router-dom";

type ProtectedRouteProps = {allowedRoles?: Array<any>};

export const ProtectedRoutes = ({allowedRoles}: ProtectedRouteProps = {}) => {
    // const user: any = {};

    // if (user === undefined) {
    //     return <div>Loading...</div>
    // }

    // if (user === null || (allowedRoles && !allowedRoles.includes(user.role))) {
    //     return <div>Permission denied</div>
    // }

    return <Outlet/>
}