import { useState } from "react";
import TableGeneral from "../Table/TableGeneral/TableGeneral";
import TableBodyGeneral from "../Table/TableBody/TableBodyGeneral";

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


    return(
        <TableGeneral fieldCollection={fieldTable} dataCollection={despesas} hasActionBtn={true}>
            {despesas.map((info, index) => <TableBodyGeneral key={index} dataInfo={info} hasActionBtn={true} handleAccept={() => console.log('ACEITO!')}/>)}
        </TableGeneral>
    )
}