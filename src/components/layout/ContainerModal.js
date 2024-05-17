import ModalCedulas from '../Modal/ModalCedulas';
import ModalDespesas from '../Modal/ModalDespesas';
import ModalSaldo from '../Modal/ModalSaldo';
import styles from '../../assets/css/ContainerModal.module.css';
import '../../assets/css/animation.css';
import { IoClose as IconClose} from "react-icons/io5";


export default function ContainerModal({modalRequestName, setCancel}) {
    const modalCollection = [{modalName: "cedulas", modalTitle: "Cédulas", modalContent: <ModalCedulas/>},
                             {modalName: "despesas", modalTitle: "Despesas", modalContent: <ModalDespesas/>},
                             {modalName: "saldo", modalTitle: "Adicionar Fundos", modalContent: <ModalSaldo setCancel={setCancel}/>},
                             {modalName: "disableSala", modalTitle: "Desabilitar Salas"}]
                             

    const modalSelected = modalCollection.filter(info => info.modalName === modalRequestName)[0]; 


    return(
        <div className={styles.modalOverlay}>
            <section className={`${styles.modalContainer} fadeIn`}>
                {modalSelected ? 
                    <>
                        <span className={styles.modalInfo__main}>
                            <h1>{modalSelected.modalTitle}</h1>
                            <IconClose className={styles.closeIcon} onClick={() => setCancel(false)}/>
                        </span>
                        <hr />
                        {modalSelected.modalContent}
                    </>
                : "Modal Não encontrada"}
                
            </section>
        </div>
    )
}