import '../../assets/css/InputRadioMerged.css';

export default function InputRadioMerged({name, id, value, textView, checked, setValue}) {
    return(
        <div className={"optionCollectionMerged__content"}>
            <input type="radio" name={name} id={id} value={value} checked={checked} onChange={e => setValue(e.target.value)}/>
            <label htmlFor={id}>{textView}</label>
        </div> 
    )
}