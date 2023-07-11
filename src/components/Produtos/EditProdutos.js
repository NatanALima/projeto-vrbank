import InfoExtra from "./InfosExtra/InfoExtra";
import TableInfo from "../TableInfo/TableInfo";

export default function EditProdutos({styles, infoBoxExtra}) {
    let dataAt = new Date();
    dataAt = dataAt.getDate();
    const infoTable = [{id: 1, nomeProd: "Prod1", qtdProd: 2, totValProd: 25, saldoAt: 2500, dataCompra: dataAt},
                       {id: 2, nomeProd: "Prod2", qtdProd: 4, totValProd: 26, saldoAt: 2500, dataCompra: dataAt}];
    return (
        <>
            <h1>Edição de Produtos</h1>
            <div className={styles.infoExtra}>
                {infoBoxExtra.map(info => {
                    return(
                        <InfoExtra key={info.id} styles={styles} {...info}/>
                    )
                })}

            </div>
            <TableInfo title="Produtos" objectData={infoTable}/>
            
        </>
    )
}