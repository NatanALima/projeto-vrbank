import styles from '../../assets/css/InputAuth.module.css';

export default function InputAuth({type, name, id, placeholder, textView, setInfo, isInvalidInfo}) {
    return(
        <div className={styles.inputContainer}>
            <label htmlFor={id} style={(isInvalidInfo) ? {color: "red"} : {}}>{textView}</label>
            <input type={type} 
                   name={name} 
                   id={id} 
                   placeholder={placeholder} 
                   required={true} 
                   onChange={(e) => setInfo(e.target.value)}
                   style={(isInvalidInfo) ? {color: "red", borderColor: "red"} : {}}/>
        </div>
    )
}