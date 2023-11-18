import InfoExtra from "../InfosExtra/InfoExtra";
import FormCadastro from "./FormCadastro/FormCadastro";
import ContainerContent from "../layout/ContainerContent";
import Calendario from "../Calendario/Calendario";

export default function CadProdutos({styles, infoBoxExtra}) {

    return(
        <>
            <h1>Cadastro de Produtos</h1>
            <InfoExtra infoBoxExtra={infoBoxExtra}/>
            <div className={styles.mainContent}>
                <ContainerContent title={"Formulário de Cadastro de Produtos"} content={<FormCadastro/>} classContainer={styles.formMain}/>
                <ContainerContent title={"Calendário"} content={<Calendario/>} classContainer={styles.calendar}/>
                <ContainerContent title={"Atalhos Rápidos"} classContainer={styles.quickShortCut}/>
            </div>
            
            
        </>

    )
}