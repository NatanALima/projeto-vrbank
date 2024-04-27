import PropTypes from 'prop-types'
import BtnListEdit from './BtnListEdit';
import { useState } from 'react';
export default function TableContent({styles, info, config, handleOnChange, hasActionBtn}) {
    const [isReadOnly, setisReadOnly] = useState(true);

    return(
        <>
            {info.map(([key, value], index) => <td key={index}><input type="text" name={key} value={value} onChange={handleOnChange} readOnly={isReadOnly}/></td>)}

            {hasActionBtn &&
                <td className={styles.tableContent__btns}>
                    <BtnListEdit styles={styles} handleAction={setisReadOnly}/>
                </td>}
        </>
    )
}


TableContent.propTypes = {
    styles: PropTypes.object,
    info: PropTypes.array,
    config: PropTypes.array,
    handleOnChange: PropTypes.func,
    hasActionBtn: PropTypes.bool

}

TableContent.defaultProps = {
    info: [],
    config: []
}