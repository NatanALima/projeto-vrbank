import InfoExtra from "./InfosExtra/InfoExtra";
import TableInfo from "../TableInfo/TableInfo";

export default function EditProdutos({styles, infoBoxExtra}) {
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
            <TableInfo/>
            
        </>
    )
}