import InfoExtra from "../InfosExtra/InfoExtra";
import TableProds from "../Table/TableProdutos/TableProds";
import { useOutletContext } from "react-router-dom";
import { useProd } from "../../Context/ProdContext";

export default function EditProdutos() {
    const { infoBoxExtra } = useOutletContext();
    const { produtosInfo } = useProd();
    

    
    const fieldNameTable = ["Nome do Produto", "Quantidade", "Valor", "Subtotal"];

    return (
        <>
            <h1>Edição de Produtos</h1>
            <InfoExtra infoBoxExtra={infoBoxExtra}/>
            {produtosInfo.length > 0 
            ? produtosInfo.map((data) => <TableProds dataInfo={data} fieldName={fieldNameTable} key={data._id}/>) 
            : <h2 style={{margin: "0.65em"}}>Nenhum produto Recebido</h2>}
            
        </>
    )
}