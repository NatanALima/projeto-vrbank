import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from '../../assets/css/TableInfo.module.css';
import BtnListEdit from './BtnListEdit';

export default function TableInfo({addBtn, title, objectData}) {
    const [isActiveAdd, setIsActiveAdd] = useState(0);

    const activeAdd = () => {
        setIsActiveAdd(!isActiveAdd);
    }

    const getKeysObject = (objValue) => {
        if(objValue !== null) {
            const keyObject = objValue.map(value => Object.keys(value));
            return keyObject[0];
        }
        
        
    }

    const keyObj = getKeysObject(objectData);

    return (
        <div className={styles.tableContainer}>
            {objectData ?
            <table>
                <thead>
                    {/* Pegar tamanho do array/objetos de conteudo para centralizar */}

                    
                    <tr className={styles.tableTitle}><th colSpan={keyObj.length + 1}>{title}</th></tr>
                    <tr>
                        
                        {keyObj.map((value, index) => <th key={index}>{value}</th>)}
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {objectData !== null &&
                    objectData.map((objVal, index) => {
                        const getValues = Object.values(objVal);
                        return <tr key={index}>
                                    {getValues.map((value, index) => <td key={index}>{value}</td>)}
                                    <td className={styles.tableContent__btns}>
                                        <BtnListEdit styles={styles}/>
                                    </td>
                               </tr>
                    })}
                    {isActiveAdd ? 
                        (<tr>
                            {keyObj.map((value, index) => <td key={index}><input type="text" /></td>)}
                            <td className={styles.tableContent__btns}><button className={styles.confirmBtn}>Adicionar</button></td> 
                        </tr>) 
                        : null
                    }
                </tbody>            
            </table> : "Os Dados da Tabela não foram Informados!"}
            {addBtn !== null ? (
                <button type='button' className={styles.addBtn} onClick={activeAdd}>{isActiveAdd ? "Cancelar" : "Adicionar novo Item à Tabela"}</button>        
                ) : null
            }
        </div>
    )
}

TableInfo.propTypes = {
    addBtn: PropTypes.bool,
    title: PropTypes.string,
    objectData: PropTypes.array,


}

TableInfo.defaultProps = {
    addBtn: null,
    title: null,
    objectData: null
}