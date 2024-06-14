import styles from '../../assets/css/TableInfo.module.css';
import TableProdsContent from './TableProdsContent';

export default function TableProds({fieldName, dataInfo}) {
    const maxColumnValue = fieldName.length;
    const clientInfo = dataInfo.cliente;
    const dataProds = dataInfo.produtos;
    console.log(dataInfo);

    return(
        <div className={`${styles.tableContainer} fadeIn`}>
            <table>
                <thead>
                    <tr className={`${styles.tableHeader} ${dataInfo.status_pagamento !== "PAGO" ? styles.notPaid : ""}`}>
                        <td colSpan={maxColumnValue}>
                            <div className={styles.generalInfo__container}>
                                <div className={styles.splitContainer}>
                                    <div className={`${styles.generalInfo__content}`}>
                                        <span>Cliente:</span>
                                        <p>{clientInfo.nome}</p>
                                    </div>
                                    {clientInfo.sala &&
                                        <div className={`${styles.generalInfo__content}`}>
                                            <span>Sala:</span>
                                            <p>{clientInfo.sala}</p>
                                        </div>
                                    }
                                    <div className={`${styles.generalInfo__content}`}>
                                        <span>Atualizado em:</span>
                                        <p>{dataInfo.data_aquisicao}</p>
                                    </div>
                                </div>
                                <div className={styles.splitContainer}>
                                    <div className={`${styles.generalInfo__content} ${styles.infoProd__status}`}>
                                        <span>Status: </span>
                                        <p>{dataInfo.status_pagamento}</p>
                                    </div>
                                    {dataInfo.status_pagamento !== "PAGO" && <button className={styles.payBtn}>PAGAR CLIENTE</button>}
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        {fieldName.map((field, index) => <th key={index}>{field}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {dataProds.length > 0 &&
                    dataProds.map((produto) => {
                        const idProd = produto._id;
                        
                        const valueObjToArr = Object.entries(produto);
                        return (
                            <tr key={idProd}>
                                <TableProdsContent prodInfo={valueObjToArr} styles={styles} key={idProd}/>
                            </tr>
                        )
                    })}
                </tbody>
                <tfoot>
                    <tr>
                        <th>
                            <p>Total: <span className={styles.moneyText}>ETC$</span>{dataInfo.total}</p>
                        </th>
                    </tr>
                </tfoot>
            </table>
        </div>
    )
}