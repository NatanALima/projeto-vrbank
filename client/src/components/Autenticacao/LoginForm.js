import { useState } from "react";
import InputAuth from "../layout/InputAuth";
import {loginService} from "../../services/user.service";
import { showSweetSuccessModal, showSweetErrorModal } from "../../models/SweetModal";
import Cookies from 'js-cookie';
import { useAuth } from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function LoginForm({styles}) {
    const navigate = useNavigate();
    const [userName, setUserName] = useState("");
    const [userPass, setUserPass] = useState("");
    const [invalidInfo, setInvalidInfo] = useState();
    const { setUser } = useAuth();

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            const userUpper = userName.toUpperCase();
            const res = await loginService({userName: userUpper, password: userPass});

            showSweetSuccessModal("Tudo certo!", "Usuário Logado!");
            //Se uma tentativa de login anterior tiver falhado, ocultará este erro;
            invalidInfo && setInvalidInfo(undefined);

            const info = JSON.stringify(res.data);
            Cookies.set("userInfo", info, {expires: 1});
            setUser(res.data);

            navigate("/");

        } catch (err) {
            const errInfo = err.response.data;
        
            if(errInfo?.isError) {
                showSweetErrorModal("Erro de Login!", errInfo.errorMsg);
                setInvalidInfo({errorName: errInfo.errorName});
    
            } else {
                showSweetErrorModal("OPS!", "Algo deu Errado!");

            }
        }
        
        
    }
    
    return(
        <form action="" className={styles.fadeChangeLeft} onSubmit={handleSubmit}>
            <h1>Login</h1>
            <InputAuth type={"text"} name={"userName"} id={"userName"} placeholder={"Nome do Usuário"} textView={"Usuário"} setInfo={setUserName} isInvalidInfo={invalidInfo?.errorName === "userNameInvalid"}/>
            <InputAuth type={"text"} name={"userPass"} id={"userPass"} placeholder={"Senha do Usuário"} textView={"Senha"} setInfo={setUserPass} isInvalidInfo={invalidInfo?.errorName === "userPassInvalid"}/>
            <button>Login</button>
        </form>
    )
}