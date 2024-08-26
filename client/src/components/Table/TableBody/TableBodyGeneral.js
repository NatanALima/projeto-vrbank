import PropTypes from 'prop-types';
import styles from '../../../assets/css/Table.module.css';
import ButtonTable from "../../layout/ButtonTable";

export default function TableBodyGeneral({dataInfo, btnInfoCollection}) {

    return(
        <tr id={dataInfo._id}>
            {Object.entries(dataInfo).map(([key, value], index) =>
                key !== "_id" && 
                    (key !== "is_active" 
                        ? <td key={index}><p>{value}</p></td>
                        : <td key={index}>
                            <p className={value ? styles.specialActive : styles.specialNotActive}>
                                {value ? "ATIVO" : "INATIVO"}
                            </p>
                          </td>)
                
            )}
            {btnInfoCollection.length > 0 && 
                <td className={styles.tableContent__btns}>
                    {btnInfoCollection.map(btnInfo => <ButtonTable key={btnInfo.id} classBtn={btnInfo.className} icon={btnInfo.icon} handleAction={btnInfo.handleAction}/>)}
                </td>
            }
        </tr>
    )
}

TableBodyGeneral.propTypes = {
    dataInfo: PropTypes.object,
    btnInfoCollection: PropTypes.array
}

TableBodyGeneral.defaultProps = {
    dataInfo: {},
    btnInfoCollection: []
}