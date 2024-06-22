import { createContext, useContext, useMemo, useState } from "react";
import Cookies from 'js-cookie';

const AuthContext = createContext();

export default function AuthProvider({children}) {
    const [user, setUser] = useState(Cookies.get('userInfo'));

    const authValueMemo = useMemo(() => ({user, setUser}), [user]);

    return(
        <AuthContext.Provider value={authValueMemo}>
            {children}
        </AuthContext.Provider>
    )

}

export const useAuth = () => useContext(AuthContext);