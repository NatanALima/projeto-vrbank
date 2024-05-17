import PropTypes from 'prop-types';
import ButtonTable from '../layout/ButtonTable';
import ButtonTableEdit from './ButtonTableEdit';
import { useState } from 'react';


/**
 * Parâmetros do Conteúdo da TableInfo

 * @param {Array} styles - [OBRIGATÓRIO] Coleção de estilização da Tabela 
 * @param {boolean} hasActionBtn - [OPCIONAL] Determinda se haverá Botão(ões) de Ação
 * @param {Array<string>} info - [OBRIGATÓRIO] Dados do Banco
 * @param {array} config - [OBRIGATÓRIO] Configuração de dados
 * @param {func} handleOnChange - [OBRIGATÓRIO] Função utilizada no(s) Botão(ões)
 * @param {number} parentIndex - [OPCIONAL] Determina qual é o INDEX do conjunto de dados atual
 
*/

export default function TableContent({styles, buttonCollection, info, config, handleOnChange, parentIndex}) {
    const [isReadOnly, setisReadOnly] = useState(true);

    return(
        <>
            {info.map(([key, value], index) =>{ 
                let configInput = config[index];
                return (<td key={index}>
                    {configInput?.isEdit 
                        ? <input type={configInput?.type ?? "text"} name={key} value={value} onChange={handleOnChange} readOnly={isReadOnly}/>
                        : configInput?.isClassUnique 
                            ? <p className={styles.notEditable}>{value}</p> 
                            : <p className={styles[configInput?.specialClass[parentIndex].classValue]}>{configInput?.specialClass[parentIndex].text}</p>
                    }
                    
                </td>)})}

            {buttonCollection &&
                <td className={styles.tableContent__btns}>
                    {buttonCollection.map(btnInfo => {
                        if(btnInfo.typeButton === "editBtn") {
                            return <ButtonTableEdit key={btnInfo.id} handleConfirmEdit={btnInfo.handleAction} setisReadOnly={setisReadOnly}/>
                        }
                        return <ButtonTable key={btnInfo.id} icon={btnInfo.icon} handleAction={btnInfo.handleAction} classBtn={btnInfo.classBtn}/>
                    })}
                </td>}
        </>
    )
}


TableContent.propTypes = {
    styles: PropTypes.object,
    buttonCollection: PropTypes.array,
    info: PropTypes.array,
    config: PropTypes.array,
    handleOnChange: PropTypes.func,
    parentIndex: PropTypes.number

}

TableContent.defaultProps = {
    buttonCollection: [],
    info: [],
    config: [],
    parentIndex: 0
}