import PropTypes from 'prop-types';
import styles from '../../assets/css/TableInfo.module.css';
import TableContent from './TableContent';
import '../../assets/css/animation.css';

export default function TableInfo({actionBtn, title, objectData, fieldName, handleOnChange}) {
    
    return (
        <div className={`${styles.tableContainer} fadeIn`}>
            {objectData ?
            <table>
                <thead>                   
                    <tr className={styles.tableTitle}><th>{title}</th></tr>
                    <tr>
                        {fieldName.map((value, index) => <th key={index}>{value}</th>)}
                        {actionBtn && <th className={styles.tableContent__actionTitle}>Ações</th>}
                    </tr>
                </thead>
                <tbody>
                    {objectData !== null &&
                    objectData.map((objVal, index) => {
                        // Permite que o objeto se torne um array (contém chave e valor)
                        // Utiliza a Key para o Name dos inputs
                        
                        const getValues = Object.entries(objVal);
                        return <tr key={index} id={index}>
                                    <TableContent styles={styles} info={getValues} handleOnChange={handleOnChange} hasActionBtn={true}/>
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
    handleOnChange: PropTypes.func

}

TableInfo.defaultProps = {
    actionBtn: null,
    title: null,
    objectData: null,
    fieldName: null,
    handleOnChange: null,

}