import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const location = useLocation();
const {user,loading}=useContext(AuthContext)

if (loading) {
    return <div className="w-full flex justify-center mt-20"><span className="loading loading-spinner loading-lg"></span></div> 
}

    if (user) {
        return children;
    }
    return <Navigate state={location.pathname} to="/Login"></Navigate>
};

export default PrivateRoute;