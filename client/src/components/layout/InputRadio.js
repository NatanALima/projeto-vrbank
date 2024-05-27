import styles from '../../assets/css/InputRadio.module.css';

export default function InputRadio({name, id, value, textView}) {
    return(
        <div className={styles.optionContent}>
            <input type="radio" name={name} id={id} value={value}/>
            <span className={styles.customRadio}></span>
            <label htmlFor={id}>{textView}</label>
        </div>
    )
}