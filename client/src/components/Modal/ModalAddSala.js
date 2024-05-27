import InputRadio from '../layout/InputRadio';
import InputModal from '../layout/InputModal';
import styles from '../../assets/css/ModalAddSala.module.css';
import { FaPlus as IconAdd} from 'react-icons/fa6';

export default function ModalAddSala() {
    return(
        <form action="" className={styles.modalAddSala__container}>
            <InputModal type={"text"} name={"nomeSala"} id={"nomeSala"} placeholder={"Ex: Maria Valéria Rezende"} textView={"Nome da Sala"}/>
            <InputModal type={"text"} name={"cursoSala"} id={"cursoSala"} placeholder={"ADM ou DS (apenas siglas)"} textView={"Curso da Sala"}/>
            <div className={styles.modalAddSala__containerRadio}>
                <h4>Ano</h4>
                <div className={styles.modalAddSala__radioCollection}>
                    <InputRadio name={"add_sala"} id={"primeiroAno"} value={"1-Ano"} textView={"1º Ano"}/>
                    <InputRadio name={"add_sala"} id={"segundoAno"} value={"2-Ano"} textView={"2º Ano"}/>
                    <InputRadio name={"add_sala"} id={"terceiroAno"} value={"3-Ano"} textView={"3º Ano"}/>
                </div>
            </div>
            <div className={styles.btnCollection}>
                <button type="button">
                    <span id={styles.btnCollection__text}>Adicionar Sala</span> 
                    <span id={styles.btnCollection__icon}><IconAdd/></span>
                </button>
            </div>
        </form>
    )
}