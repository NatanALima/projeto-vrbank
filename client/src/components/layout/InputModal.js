import styles from '../../assets/css/InputModal.module.css'

export default function InputModal({type, name, id, placeholder, textView, handleAction = null}) {
    return(
        <div className={styles.inputContainer}>
            <label htmlFor={id}>{textView}</label>
            <input type={type} name={name} id={id} placeholder={placeholder} required={true} onChange={(e) => handleAction(e)}/>
        </div>
    )
}