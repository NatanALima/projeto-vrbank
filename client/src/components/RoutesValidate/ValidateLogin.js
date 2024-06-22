import { Navigate } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";

export default function ValidateLogin({children}) {
    const {user} = useAuth();

    if(!user) {
        return <Navigate to={"/auth"}/>
    }
    return children
}