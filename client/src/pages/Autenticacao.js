import { useState } from 'react';
import styles from '../assets/css/Autenticacao.module.css';
import logoBank from "../assets/media/logoVRBankFigma.svg";
import LoginForm from '../components/Autenticacao/LoginForm';
import RegisterForm from '../components/Autenticacao/RegisterForm';
import ValidateAuth from '../components/RoutesValidate/ValidateAuth';

export default function Autenticacao() {
    const [isRegister, setIsRegister] = useState(false);

    return(
        <ValidateAuth>
            <div className={styles.contentContainer}>
                <section className={styles.formContainer}>
                    <div className={`${styles.formContent__formInfo} ${isRegister ? styles.formContent__formInfo__register : ""}`}>
                        {isRegister ? <RegisterForm styles={styles}/> : <LoginForm styles={styles}/>}
                    </div>
                    <div className={`${styles.formContent__otherInfo} ${isRegister ? styles.formContent__otherInfo__register : ""}`}>
                        <img src={logoBank} alt="logoBank" className={styles.otherInfo__logo}/>
                        <p className={styles.otherInfo__text}>{isRegister ? "Já Possui uma Conta?" : "Ainda não possui uma conta?"}</p>
                        <button className={styles.otherInfo__btnFormChange} onClick={() => setIsRegister(prevValue => !prevValue)}>
                            {isRegister ? "Entrar" : "Criar uma Conta"}
                        </button>
                    </div>
                </section>
            </div>
        </ValidateAuth>
    )
}