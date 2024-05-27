import { useState } from "react";
import TableInfo from "../TableInfo/TableInfo";
import { FaCheck as IconAccept } from "react-icons/fa";

export default function ModalDespesas() {
    const [despesas, setDespesas] = useState([{
        tipo: "Pagamento de Produtos",
        nomePessoa: "Claudia",
        sala: "Ana Maria Gonçalves",
        valor: 150,
        dataDespesa: "20/04/2024"
    },
    {
        tipo: "Pagamento de Produtos",
        nomePessoa: "Geraldo",
        sala: "Maria das Dores",
        valor: 50,
        dataDespesa: "20/04/2024"
    }])

    //Coleção de Botão(ões)
    const btnCollection = [{id: 1, typeButton: "acceptBtn", icon: <IconAccept/>, handleAction: () => console.log('Pagando as contas'), classBtn: "acceptBtn"}];


    const fieldTable = ["Descrição", "Credor", "sala", "Valor", "Data"];
    const config = [{isEdit: false, isClassUnique: true}, {isEdit: false, isClassUnique: true}, {isEdit: false, isClassUnique: true},
                    {isEdit: false, isClassUnique: true}, {isEdit: false, isClassUnique: true}];

    return(
        <TableInfo buttonCollection={btnCollection} dataCollection={despesas} fieldName={fieldTable} config={config}/>
    )
}