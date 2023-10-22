import InfoExtra from "../InfosExtra/InfoExtra";
import FormCadastro from "./FormCadastro/FormCadastro";
import ContainerContent from "../layout/ContainerContent";

export default function CadProdutos({styles, infoBoxExtra}) {

    return(
        <>
            <h1>Cadastro de Produtos</h1>
            <InfoExtra infoBoxExtra={infoBoxExtra}/>
            <ContainerContent title={"Formulário de Cadastro de Produtos"} content={<FormCadastro/>}/>
            
        </>

    )
}