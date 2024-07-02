import styles from '../../assets/css/InputRadio.module.css';

export default function InputRadio({name, id, value, textView, checked, setValue = null}) {
    return(
        <div className={styles.optionContent}>
            <input type="radio" name={name} id={id} value={value} checked={checked} onChange={e => setValue(e.target.value)}/>
            <span className={styles.customRadio}></span>
            <label htmlFor={id}>{textView}</label>
        </div>
    )
}