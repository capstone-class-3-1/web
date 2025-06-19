import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom";

const RequireLogin = () => {
    const isLogin = useSelector((state) => state.auth).isLogin;

    return (
        isLogin ? <Outlet /> : <Navigate to={'/login'}/>        
    )
}

export default RequireLogin;