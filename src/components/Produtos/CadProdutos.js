import InfoExtra from "./InfosExtra/InfoExtra";
import FormCadastro from "./FormCadastro/FormCadastro";

export default function CadProdutos({styles, infoBoxExtra}) {

    return(
        <>
            <h1>Cadastro de Produtos</h1>
            <div className={styles.infoExtra}>
                {infoBoxExtra.map(info => {
                    return(
                        <InfoExtra key={info.id} styles={styles} {...info}/>
                    )
                })}

            </div>
            <FormCadastro/>
        </>

    )
}