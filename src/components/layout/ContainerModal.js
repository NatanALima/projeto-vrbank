import styles from '../../assets/css/ContainerModal.module.css'
import '../../assets/css/animation.css';
//Não utilizado por enquanto...
// import { IoClose as IconClose} from "react-icons/io5";


export default function ContainerModal({title, content}) {

    return(
        <div className={styles.modalOverlay}>
            <section className={`${styles.modalContainer} fadeIn`}>
                <span className={styles.modalInfo__main}>
                    <h1>{title}</h1>
                    {/* <IconClose className={styles.closeIcon}/> */}
                </span>
                <hr />
                {content}
            </section>
        </div>
    )
}