import PropTypes from 'prop-types';
import styles from '../../assets/css/TableInfo.module.css';
import BtnListEdit from './BtnListEdit';
import '../../assets/css/animation.css';

export default function TableInfo({actionBtn, title, objectData, fieldName}) {

    const getKeysObject = (objValue) => {
        if(objValue !== null) {
            const keyObject = objValue.map(value => Object.keys(value));
            return keyObject[0];
        }
        
        
    }

    const keyObj = getKeysObject(objectData);

    return (
        <div className={`${styles.tableContainer} fadeIn`}>
            {objectData ?
            <table>
                <thead>
                    {/* Pegar tamanho do array/objetos de conteudo para centralizar */}

                    
                    <tr className={styles.tableTitle}><th colSpan={keyObj.length + 1}>{title}</th></tr>
                    <tr>
                        
                        {fieldName.map((value, index) => <th key={index}>{value}</th>)}
                        {actionBtn && <th className={styles.tableContent__actionTitle}>Ações</th>}
                    </tr>
                </thead>
                <tbody>
                    {objectData !== null &&
                    objectData.map((objVal, index) => {
                        const getValues = Object.values(objVal);
                        return <tr key={index}>
                                    {getValues.map((value, index) => <td key={index}>{value}</td>)}
                                    {actionBtn &&
                                    <td className={styles.tableContent__btns}>
                                        <BtnListEdit styles={styles}/>
                                    </td>
                                    }
                               </tr>
                    })}
                </tbody>            
            </table> : "Os Dados da Tabela não foram Informados!"}
        </div>
    )
}

TableInfo.propTypes = {
    actionBtn: PropTypes.bool,
    title: PropTypes.string,
    objectData: PropTypes.array,
    fieldName: PropTypes.array,


}

TableInfo.defaultProps = {
    actionBtn: null,
    title: null,
    objectData: null,
    fieldName: null,

}