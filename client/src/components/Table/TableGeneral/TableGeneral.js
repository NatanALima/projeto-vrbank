import PropTypes from 'prop-types';
import styles from '../../../assets/css/Table.module.css';
import '../../../assets/css/animation.css';

export default function TableGeneral({title, fieldCollection, dataCollection, hasActionBtn, children}) {
    
    return (
        <div className={`${styles.tableContainer} fadeIn`}>
            {dataCollection.length > 0 ?
            <table>
                <thead>                   
                    {title && <tr className={styles.tableTitle}><th>{title}</th></tr>}
                    <tr>
                        {fieldCollection.map((value, index) => <th key={index}>{value}</th>)}
                        {hasActionBtn && <th className={styles.tableContent__actionTitle}>Ações</th>}
                    </tr>
                </thead>
                <tbody>
                    {children} 
                </tbody>            
            </table> : "Os Dados da Tabela não foram Informados!"}
        </div>
    )
}

TableGeneral.propTypes = {
    title: PropTypes.string,
    fieldName: PropTypes.array.isRequired,
    dataCollection: PropTypes.array.isRequired,
    hasActionBtn: PropTypes.bool
}

TableGeneral.defaultProps = {
    title: "",
    dataCollection: [],
    fieldName: [],
    hasActionBtn: false
}