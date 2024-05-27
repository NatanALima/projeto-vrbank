import PropTypes from 'prop-types';
import styles from '../../assets/css/TableInfo.module.css';
import TableContent from './TableContent';
import '../../assets/css/animation.css';
import TableUtil from '../../utils/TableUtil';

export default function TableInfo({title, buttonCollection, dataCollection, fieldName, config, setValueState}) {
    const tableUtil = new TableUtil(dataCollection);

    const handleEditInput = (inputRef) => {
        tableUtil.setIdData(inputRef);
        tableUtil.setInputEdit(inputRef);
        tableUtil.editValueTable();
        setValueState(tableUtil.getDataCollection());

    }

    
    return (
        <div className={`${styles.tableContainer} fadeIn`}>
            {dataCollection.length > 0 ?
            <table>
                <thead>                   
                    {title && <tr className={styles.tableTitle}><th>{title}</th></tr>}
                    <tr>
                        {fieldName.map((value, index) => <th key={index}>{value}</th>)}
                        {buttonCollection.length > 0 && <th className={styles.tableContent__actionTitle}>Ações</th>}
                    </tr>
                </thead>
                <tbody>
                    {dataCollection.length > 0 &&
                    dataCollection.map((objVal, index) => {
                        // Permite que o objeto se torne um array (contém chave e valor)
                        // Utiliza a Key para o Name dos inputs
                        
                        const getValues = Object.entries(objVal);
                        return <tr key={index} id={index}>
                                    <TableContent styles={styles} buttonCollection={buttonCollection} info={getValues} config={config} handleOnChange={handleEditInput} parentIndex={index}/>
                               </tr>
                    })}
                </tbody>            
            </table> : "Os Dados da Tabela não foram Informados!"}
        </div>
    )
}

TableInfo.propTypes = {
    title: PropTypes.string,
    buttonCollection: PropTypes.array,
    dataCollection: PropTypes.array.isRequired,
    fieldName: PropTypes.array.isRequired,
    config: PropTypes.array,
    setValueState: PropTypes.func
}

TableInfo.defaultProps = {
    title: "",
    buttonCollection: [],
    dataCollection: [],
    fieldName: [],
    config: [],
    setValueState: null
}