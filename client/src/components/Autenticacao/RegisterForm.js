import '../../assets/css/animation.css';
import InputAuth from '../layout/InputAuth';
import { FaQuestion as IconQuestion} from 'react-icons/fa6';

export default function RegisterForm({styles}) {
    
    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return(
        <form action="" className={styles.fadeChangeRight} onSubmit={handleSubmit}>
            <h1>Cadastro</h1>
            <div className={styles.formInfo__specialInput}>
                <InputAuth type={"text"} name={"userNameReg"} id={"userNameReg"} placeholder={"ex: user@VR2022"} textView={"Usuário"}/>
                <p className={styles.specialInput__msg}>
                    Utilize 
                    <strong>{" user@<Sigla Sala><ano de ingresso da sala>"}</strong>
                </p>
            </div>
            <InputAuth type={"text"} name={"userPassReg"} id={"userPassReg"} placeholder={"Digite uma Senha"} textView={"Senha"}/>
            <InputAuth type={"text"} name={"userPassConfirmReg"} id={"userPassConfirmReg"} placeholder={"Confirme a Senha"} textView={"Confirmar Senha"}/>
            <button>Cadastrar</button>
        </form>
    )
}