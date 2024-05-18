import InputModal from "../layout/InputModal";
import styles from "../../assets/css/modalSaldo.module.css";
import {FaMoneyBills as IconContent} from 'react-icons/fa6';

export default function ModalSaldo({setCancel}) {
    const formAction = (e) => {
        e.preventDefault();
    }

    return(
        <form className={styles.modalBanco__content} onSubmit={formAction}>
            <div className={styles.modalBanco__content__icon}>
                <IconContent/>
            </div>
            <InputModal type={"number"} name={"addSaldo"} id={"addSaldo"} placeholder={"ex: 150"} textView={"Valor a ser Adicionado"}/>
            <div className={styles.modalBanco__contentInfo__btnCollection}>
                <button className={styles.btnCollection__cancelBtn} onClick={() => setCancel(false)}>Cancelar</button>
                <button className={styles.btnCollection__addBtn}>Adicionar</button>
            </div>  
        </form>
    )
}