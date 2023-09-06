import InfoExtra from "../InfosExtra/InfoExtra";
import FormCadastro from "./FormCadastro/FormCadastro";

export default function CadProdutos({styles, infoBoxExtra}) {

    return(
        <>
            <h1>Cadastro de Produtos</h1>
            <InfoExtra infoBoxExtra={infoBoxExtra}/>
            <FormCadastro/>
        </>

    )
}