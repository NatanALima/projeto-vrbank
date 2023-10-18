import { useState } from 'react';
import {FaPencilAlt, FaCheck} from 'react-icons/fa';
import {FaX} from 'react-icons/fa6';
import '../../assets/css/animation.css';

export default function BtnListEdit({styles}) {
    const [isEdit, setIsEdit] = useState(0);

    const handleEdit = () => {
        setIsEdit(!isEdit);
        console.log(isEdit);

    }

    return(
        <>
            {!isEdit && <button type="button" className={`${styles.editBtn} fadeRightInBtn`} onClick={handleEdit}><FaPencilAlt/></button>}
            
            {isEdit ? (
                <>
                    <button type="button" className={`${styles.confirmBtn} fadeLeftInBtn`}><FaCheck/></button>
                    <button type="button" className={`${styles.cancelBtn} fadeLeftInBtn`} onClick={handleEdit}><FaX/></button>
                </>
            ) : null}
            
        </>
        
    )
}