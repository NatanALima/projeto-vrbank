import PropTypes from 'prop-types';
import styles from '../../assets/css/TableInfo.module.css';
import TableContent from './TableContent';
import '../../assets/css/animation.css';

export default function TableInfo({title, hasActionBtn, dataCollection, fieldName, config, setValueState}) {
    const handleEditInput = (e) => {
        const infoId = e.target.closest('tr').id;
        const tempDataCollection = [...dataCollection];
        const editDataValue = tempDataCollection[infoId];
        let newDataValue = {...editDataValue, [e.target.name]: e.target.value};
        tempDataCollection[infoId] = newDataValue;
        setValueState(tempDataCollection);
    }
    
    return (
        <div className={`${styles.tableContainer} fadeIn`}>
            {dataCollection.length > 0 ?
            <table>
                <thead>                   
                    <tr className={styles.tableTitle}><th>{title}</th></tr>
                    <tr>
                        {fieldName.map((value, index) => <th key={index}>{value}</th>)}
                        {hasActionBtn && <th className={styles.tableContent__actionTitle}>Ações</th>}
                    </tr>
                </thead>
                <tbody>
                    {dataCollection.length > 0 &&
                    dataCollection.map((objVal, index) => {
                        // Permite que o objeto se torne um array (contém chave e valor)
                        // Utiliza a Key para o Name dos inputs
                        
                        const getValues = Object.entries(objVal);
                        return <tr key={index} id={index}>
                                    <TableContent styles={styles} hasActionBtn={hasActionBtn} info={getValues} config={config} handleOnChange={handleEditInput} parentIndex={index}/>
                               </tr>
                    })}
                </tbody>            
            </table> : "Os Dados da Tabela não foram Informados!"}
        </div>
    )
}

TableInfo.propTypes = {
    hasActionBtn: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    dataCollection: PropTypes.array.isRequired,
    fieldName: PropTypes.array.isRequired,
    config: PropTypes.array,
    setValueState: PropTypes.func.isRequired
}

TableInfo.defaultProps = {
    hasActionBtn: false,
    title: "Título não informado",
    dataCollection: [],
    fieldName: [],
    config: [],
    setValueState: null
}