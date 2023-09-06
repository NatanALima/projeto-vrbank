import InfoExtra from "../InfosExtra/InfoExtra";
import TableInfo from "../TableInfo/TableInfo";

export default function EditProdutos({styles, infoBoxExtra}) {

    // Todos valores passados para a tabela são temporários e foram unicamente utilizados a fim de verificar a estilização, haja vista que esses valores posteriormente serão passados pelo BackEnd
    let dataAt = new Date();
    dataAt = dataAt.getFullYear();
    const infoTable = [{id: 1, nomeProd: "Prod1", qtdProd: 2, totValProd: 25, saldoAt: 2500, dataCompra: dataAt},
                       {id: 2, nomeProd: "Prod2", qtdProd: 4, totValProd: 26, saldoAt: 2500, dataCompra: dataAt}];
    return (
        <>
            <h1>Edição de Produtos</h1>
            <InfoExtra infoBoxExtra={infoBoxExtra}/>
            <TableInfo title="Produtos" actionBtn={true} objectData={infoTable}/>
            
        </>
    )
}