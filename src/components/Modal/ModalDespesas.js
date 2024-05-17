import { useState } from "react";
import TableInfo from "../TableInfo/TableInfo";

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

    const fieldTable = ["Descrição", "Credor", "sala", "Valor", "Data"];
    const config = [{isEdit: false, isClassUnique: true}, {isEdit: false, isClassUnique: true}, {isEdit: false, isClassUnique: true},
                    {isEdit: false, isClassUnique: true}, {isEdit: false, isClassUnique: true}];

    return(
        <TableInfo dataCollection={despesas} fieldName={fieldTable} config={config}/>
    )
}