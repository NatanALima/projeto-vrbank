import { useState } from "react"
import ButtonTable from '../layout/ButtonTable';
import {FaPencilAlt as EditIcon, FaCheck as CheckIcon} from 'react-icons/fa';
import {FaX as CancelIcon} from 'react-icons/fa6';

export default function ButtonTableEdit({handleConfirmEdit, setisReadOnly}) {
    const [isEdit, setIsEdit] = useState(false);

    const handleEditInput = () => {
        setIsEdit(!isEdit);
        setisReadOnly((prevValue) => !prevValue);
    }
    
    return(
        <>
            {!isEdit ?
                <ButtonTable icon={<EditIcon/>} handleAction={handleEditInput} classBtn="editBtn"/>
            : 
            <>
                <ButtonTable icon={<CheckIcon/>} handleAction={handleConfirmEdit} classBtn={"subBtn"}/>
                <ButtonTable icon={<CancelIcon/>} handleAction={handleEditInput} classBtn={"subBtn"}/>
            </>
            }  
        </>
    )
}