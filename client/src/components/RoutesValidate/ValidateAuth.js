import { Navigate } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";


export default function ValidateAuth({children}) {
    const {user} = useAuth();

    if(user) {
        return <Navigate to={"/"}/>
    }
    return children
}