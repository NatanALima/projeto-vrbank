import styles from '../../assets/css/ButtonTable.module.css';

export default function ButtonTable({icon, handleAction, classBtn}) {
    return(
        <button type="button" onClick={handleAction} className={`${styles[classBtn]} fadeLeft`}>{icon}</button>
    )
}