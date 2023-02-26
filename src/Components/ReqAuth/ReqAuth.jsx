import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

function PrivateRoute({ children }) {
    const {isAuth} = useSelector((store)=>store.auth);
    const location = useLocation();
    if(!isAuth){
        return <Navigate to="/userlogin" replace state={{data: location.pathname}}/>;
    }
    return children;
}

export default PrivateRoute;