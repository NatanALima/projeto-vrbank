import PropTypes from 'prop-types';
import styles from '../../assets/css/InputModal.module.css'

export default function InputModal({type, name, id, value, placeholder, textView, handleAction}) {
    return(
        <div className={styles.inputContainer}>
            <label htmlFor={id}>{textView}</label>
            <input type={type} name={name} id={id} value={value} placeholder={placeholder} required={true} onChange={(e) => handleAction(e)}/>
        </div>
    )
}

InputModal.propTypes = {
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    value: PropTypes.string,
    placeholder: PropTypes.string.isRequired,
    textView: PropTypes.string.isRequired,
    handleAction: PropTypes.func

}

InputModal.defaultProps = {
    value: "",
    handleAction: null
}