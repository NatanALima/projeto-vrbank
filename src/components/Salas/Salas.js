import styles from '../../assets/css/Salas.module.css';
import TableInfo from '../TableInfo/TableInfo';
import Action from '../Action/Action';
import { CgFolderAdd as AddSala, CgFolderRemove as HideSala} from "react-icons/cg";

export default function Salas() {

    const fieldNameTable = ["Nome", "Curso", "Ano"];

    // Todos valores passados para a tabela são temporários e foram unicamente utilizados a fim de verificar a estilização, haja vista que esses valores posteriormente serão passados pelo BackEnd
    const salas = [{Nome: "CAROLINA DE JESUS",
                    Curso: "ADM",
                    Ano: 3},
                    {Nome: "MARIA VALÉRIA REZENDE",
                    Curso: "DS",
                    Ano: 3},
                    {Nome: "MARTHA MEDEIROS",
                    Curso: "RH",
                    Ano: 3},
                    {Nome: "ARIANO SUASSUNA",
                    Curso: "ADM",
                    Ano: 2},
                    {Nome: "MIA COUTO",
                    Curso: "DS",
                    Ano: 2},
                    {Nome: "PEPETELA",
                    Curso: "RH",
                    Ano: 2},
                    {Nome: "CONCEIÇÃO EVARISTO",
                    Curso: "ADM",
                    Ano: 1},
                    {Nome: "ANA MARIA GONÇALVES",
                    Curso: "DS",
                    Ano: 1},
                    {Nome: "MARIA FIRMINA DOS REIS",
                    Curso: "RH",
                    Ano: 1}
                ];

    const actionList = [{id: 1, icon: <AddSala/>, text: "Adicionar Sala", placeholder: "ADICIONAR"},
                        {id: 2, icon: <HideSala/>, text: "Desabilitar Salas", placeholder: "DESABILITAR"}];

    return(
        <section className={styles.salas}>
            <h1>Salas</h1>
            <h2>Ações</h2>
            <Action ActionList={actionList}/>
            <TableInfo actionBtn={true} title={"Salas"} objectData={salas} fieldName={fieldNameTable}/>
        </section>
    )
}