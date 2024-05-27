import styles from '../../assets/css/InputAuth.module.css';

export default function InputAuth({type, name, id, placeholder, textView}) {
    return(
        <div className={styles.inputContainer}>
            <label htmlFor={id}>{textView}</label>
            <input type={type} name={name} id={id} placeholder={placeholder} required={true}/>
        </div>
    )
}