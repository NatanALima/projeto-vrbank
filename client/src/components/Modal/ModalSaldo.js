import InputModal from "../layout/InputModal";
import styles from "../../assets/css/ModalSaldo.module.css";
import {FaMoneyBills as IconContent} from 'react-icons/fa6';
import { useState } from "react";
import { addSaldoBancoService } from "../../services/banco.service";
import { showSweetErrorModal, showSweetSuccessModal } from "../../models/SweetModal";

export default function ModalSaldo({setIsOpen, setValue}) {
    const [newSaldo, setNewSaldo] = useState();

    const handleAddNewSaldo = (e) => {
        let value = e.target.value;
        const regValue = value.replace(/[^0-9]/g, '');
        setNewSaldo(regValue);
    }

    const formAction = async (e) => {
        e.preventDefault();
        try {
            const res = await addSaldoBancoService({valor: newSaldo});
            const { saldo_atual } = res.data;
            showSweetSuccessModal("Saldo Adicionado com Sucesso!", `valor adicionado: ETC$${newSaldo}`);
            setValue(saldo_atual);
            setIsOpen(false);

        } catch (err) {
            const errInfo = err.response.data;
            if(errInfo?.isError) {
                showSweetErrorModal("Erro ao adicionar Saldo!", errInfo.errorMsg);
    
            } else {
                showSweetErrorModal("OPS!", "Algo deu Errado!");

            }
        }
    }

    return(
        <form className={styles.modalBanco__content} onSubmit={formAction}>
            <div className={styles.modalBanco__content__icon}>
                <IconContent/>
            </div>
            <InputModal type={"number"} name={"addSaldo"} id={"addSaldo"} placeholder={"ex: 150"} textView={"Valor a ser Adicionado"} handleAction={handleAddNewSaldo}/>
            <div className={styles.modalBanco__contentInfo__btnCollection}>
                <button className={styles.btnCollection__cancelBtn} onClick={() => setIsOpen(false)}>Cancelar</button>
                <button className={styles.btnCollection__addBtn}>Adicionar</button>
            </div>  
        </form>
    )
}