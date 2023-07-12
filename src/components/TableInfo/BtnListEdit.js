import { useState } from 'react';
import {FaPencilAlt, FaCheck} from 'react-icons/fa';
import {FaX} from 'react-icons/fa6'

export default function BtnListEdit({styles}) {
    const [isEdit, setIsEdit] = useState(0);

    const handleEdit = () => {
        setIsEdit(!isEdit);
        console.log(isEdit);

    }

    return(
        <>
            {!isEdit && <button type="button" className={styles.editBtn} onClick={handleEdit}><FaPencilAlt/></button>}
            
            {isEdit ? (
                <>
                    <button type="button" className={styles.confirmBtn}><FaCheck/></button>
                    <button type="button" className={styles.cancelBtn} onClick={handleEdit}><FaX/></button>
                </>
            ) : null}
            
        </>
        
    )
}