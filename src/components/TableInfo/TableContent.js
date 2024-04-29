import PropTypes from 'prop-types'
import BtnListEdit from './BtnListEdit';
import { useState } from 'react';
export default function TableContent({styles, hasActionBtn, info, config, handleOnChange, parentIndex}) {
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

            {hasActionBtn &&
                <td className={styles.tableContent__btns}>
                    <BtnListEdit styles={styles} handleAction={setisReadOnly}/>
                </td>}
        </>
    )
}


TableContent.propTypes = {
    styles: PropTypes.object,
    hasActionBtn: PropTypes.bool,
    info: PropTypes.array,
    config: PropTypes.array,
    handleOnChange: PropTypes.func,
    parentIndex: PropTypes.number

}

TableContent.defaultProps = {
    hasActionBtn: false,
    info: [],
    config: [],
    parentIndex: 0
}