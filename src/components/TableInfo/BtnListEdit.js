import { useState } from 'react';

export default function BtnListEdit({styles}) {
    const [isEdit, setIsEdit] = useState(0);

    const handleEdit = () => {
        setIsEdit(!isEdit);
        console.log(isEdit);

    }

    return(
        <>
            {!isEdit && <button type="button" className={styles.editBtn} onClick={handleEdit}>Editar</button>}
            
            {isEdit ? (
                <>
                    <button type="button" className={styles.confirmBtn}>Confirmar</button>
                    <button type="button" className={styles.cancelBtn} onClick={handleEdit}>Cancelar</button>
                </>
            ) : null}
            
        </>
        
    )
}