import { useState } from "react";
import InfoExtra from "../InfosExtra/InfoExtra";
import TableInfo from "../TableInfo/TableInfo";

export default function EditProdutos({styles, infoBoxExtra}) {
    // Todos valores passados para a tabela são temporários e foram unicamente utilizados a fim de verificar a estilização, haja vista que esses valores posteriormente serão passados pelo BackEnd
    let dataAt = new Date();
    dataAt = dataAt.getFullYear();

    const [produtos, setProdutos] = useState([{id: 1, nomeProd: "Prod1", qtdProd: 2, totValProd: 25, saldoAt: 2500, dataCompra: dataAt},
    {id: 2, nomeProd: "Prod2", qtdProd: 4, totValProd: 26, saldoAt: 2500, dataCompra: dataAt}])

    
    const fieldNameTable = ["ID", "Nome do Produto", "Qtd. do(s) produto(s)", "Saldo Atual", "Valor Total do Produto","Data da Compra"];


    /** 
        * Propriedades da Configuração

        * @typedef {Object} configItem

        * @property {string} type - [OBRIGATÓRIO] define o tipo do Input (só é inserido quando a opção isEdit for TRUE)
        
        * @property {boolean} isEdit - [OBRIGATÓRIO] Determina se o dado em questão é editável
        
        * @property {boolean} isClassUnique - [OPCIONAL] determina se haverá uma ou mais classes em um dado não editável (só é passado quando o parâmetro isEdit for False)

        * @property {Array<string>} specialClass - [OPCIONAL] determina as N classes que serão passadas (só é utilizado quando isClassUnique for FALSE)
    */

    /** @type {Array<configItem>} */
    const config = [{type: "number", isEdit: true},
                    {type:"text", isEdit: true},
                    {type:"number", isEdit: true},
                    {type:"number", isEdit: true},
                    {type:"number", isEdit: true}, 
                    {isEdit: false, isClassUnique: true}];

    //Coleção de Botões
    const btnCollection = [{id: 1, typeButton: "editBtn", handleAction: () => console.log('Atualizando Produtos')}];

    return (
        <>
            <h1>Edição de Produtos</h1>
            <InfoExtra infoBoxExtra={infoBoxExtra}/>
            <TableInfo title="Produtos" buttonCollection={btnCollection} dataCollection={produtos} fieldName={fieldNameTable} config={config} setValueState={setProdutos}/>
            
        </>
    )
}