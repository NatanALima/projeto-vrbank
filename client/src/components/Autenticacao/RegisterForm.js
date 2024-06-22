import { useState } from 'react';
import '../../assets/css/animation.css';
import InputAuth from '../layout/InputAuth';
import { showSweetSuccessModal, showSweetErrorModal } from '../../models/SweetModal';
import { registerService } from '../../services/user.service';
import Cookies from 'js-cookie';
import { useAuth } from '../../Context/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function RegisterForm({styles}) {
    const navigate = useNavigate();

    const [userNameReg, setUserNameReg] = useState("");
    const [passReg, setPassReg] = useState("");
    const [repeatPassReg, setRepeatPassReg] = useState("");
    const [invalidInfo, setInvalidInfo] = useState();

    const { setUser } = useAuth();


    const validatePass = (pass, repeatedPass) => {
        return pass === repeatedPass
    }

    const handleRegister = async (e) => {
        try {
            e.preventDefault();

            if (!validatePass(passReg, repeatPassReg)) {
                setInvalidInfo({errorName: "passDifferent"});
                return showSweetErrorModal("Erro de Cadastro!", "As senhas não coincidem!")
            }
            const res = await registerService({userName: userNameReg.toUpperCase(), password: passReg});
            
            showSweetSuccessModal("Cadastro Concluído", "Em segundos, você será redirecionado para a tela principal");
            invalidInfo && setInvalidInfo(undefined);
            
            const info = JSON.stringify(res.data);
            Cookies.set("userInfo", info, {expires: 1});
            setUser(info);

            navigate("/");
            

        } catch (err) {
            const errInfo = err.response.data;
            if(errInfo?.isError) {
                showSweetErrorModal("Erro de Cadastro!", errInfo.errorMsg);
                setInvalidInfo({errorName: errInfo.errorName});
    
            } else {
                showSweetErrorModal("OPS!", "Algo deu Errado!");

            }

        }


    }

    return(
        <form action="" className={styles.fadeChangeRight} onSubmit={handleRegister}>
            <h1>Cadastro</h1>
            <div className={styles.formInfo__specialInput}>
                <InputAuth type={"text"} name={"userNameReg"} id={"userNameReg"} placeholder={"ex: user@VR2022"} textView={"Usuário*"} setInfo={setUserNameReg} isInvalidInfo={invalidInfo?.errorName === "userExists"}/>
                <p className={styles.specialInput__msg}>
                    Utilize 
                    <strong>{" user@<Sigla Sala><ano de ingresso da sala>"}</strong>
                </p>
            </div>
            <InputAuth type={"text"} name={"userPassReg"} id={"userPassReg"} placeholder={"Digite uma Senha"} textView={"Senha*"} setInfo={setPassReg}/>
            <InputAuth type={"text"} name={"userPassConfirmReg"} id={"userPassConfirmReg"} placeholder={"Confirme a Senha"} textView={"Confirmar Senha*"} setInfo={setRepeatPassReg} isInvalidInfo={invalidInfo?.errorName === "passDifferent"}/>
            <button>Cadastrar</button>
        </form>
    )
}