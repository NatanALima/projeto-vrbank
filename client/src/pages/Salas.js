import { useState } from 'react';
import styles from '../assets/css/Salas.module.css';
import TableInfo from '../components/TableInfo/TableInfo';
import Action from '../components/Action/Action';
import ContainerModal from '../components/layout/ContainerModal';
//ícones
import { CgFolderAdd as AddSala} from "react-icons/cg";
//ícone de botão
import {FaTrash as DelIcon} from 'react-icons/fa';

export default function Salas() {
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [modalName, setModalName] = useState("");

    /* 
    ====================================
    Informações da Tabela 
    ==================================== 
    */
    // Todos valores passados para a tabela são temporários e foram unicamente utilizados a fim de verificar a estilização, haja vista que esses valores posteriormente serão passados pelo BackEnd
    const [sala, setSala] = useState([{Nome: "CAROLINA DE JESUS",
    Curso: "ADM",
    Ano: 3,
    status: "ativo"},
    {Nome: "MARIA VALÉRIA REZENDE",
    Curso: "DS",
    Ano: 3,
    status: "ativo"},
    {Nome: "MARTHA MEDEIROS",
    Curso: "RH",
    Ano: 3,
    status: "ativo"},
    {Nome: "ARIANO SUASSUNA",
    Curso: "ADM",
    Ano: 2,
    status: "ativo"},
    {Nome: "MIA COUTO",
    Curso: "DS",
    Ano: 2,
    status: "ativo"},
    {Nome: "PEPETELA",
    Curso: "RH",
    Ano: 2,
    status: "ativo"},
    {Nome: "CONCEIÇÃO EVARISTO",
    Curso: "ADM",
    Ano: 1,
    status: "ativo"},
    {Nome: "ANA MARIA GONÇALVES",
    Curso: "DS",
    Ano: 1,
    status: "ativo"},
    {Nome: "MARIA FIRMINA DOS REIS",
    Curso: "RH",
    Ano: 1,
    status: "Desativado"}
]);
    const fieldNameTable = ["Nome", "Curso", "Ano", "Status"];


    /* 
    ====================================
    Informações do card De ação
    ==================================== 
    */
    const actionList = [{id: 1, icon: <AddSala/>, text: "Adicionar Sala", placeholder: "ADICIONAR", nomeModal: "addSala"}];


    //Define uma classe para os status de Ativo e Desabilitado das salas
    const makeSpecialClassCollection = (collection) => {
        let classCollection = []
        collection.map(item => classCollection.push((item.status).toUpperCase() === "ATIVO" ? {classValue: "specialActive", text: item.status} : {classValue: "specialNotActive", text: item.status}))
        return classCollection
    }

    const specialClassCollection = makeSpecialClassCollection(sala)


    //Define a coleçao de Botões utilizados na sala;
    const buttonInfoCollection = [{id: 1, typeButton: "editBtn", handleAction: () => console.log('Adicionando coisas')},
                                  {id: 2, typeButton: "delBtn", icon: <DelIcon/>, handleAction: () => console.log("Deletando coisas"), classBtn: "delBtn"}];

    /** 
        * Propriedades da Configuração

        * @typedef {Object} configItem

        * @property {string} type - [OBRIGATÓRIO] define o tipo do Input (só é inserido quando a opção isEdit for TRUE)
        
        * @property {boolean} isEdit - [OBRIGATÓRIO] Determina se o dado em questão é editável
        
        * @property {boolean} isClassUnique - [OPCIONAL] determina se haverá uma ou mais classes em um dado não editável (só é passado quando o parâmetro isEdit for False)

        * @property {Array<string>} specialClass - [OPCIONAL] determina as N classes que serão passadas (só é utilizado quando isClassUnique for FALSE)
    */

    /** @type {Array<configItem>} */
    const config = [{type: "text", isEdit: true},
                    {type: "text", isEdit: true},
                    {type: "number", isEdit: true},
                    {isEdit: false, isClassUnique: false, specialClass: specialClassCollection}];


    return(
        <section className={styles.salas}>
            {isOpenModal && <ContainerModal modalRequestName={modalName} setIsOpen={setIsOpenModal}/>}
            <h1>Salas</h1>
            <h2>Ações</h2>
            <Action ActionList={actionList} setOpenModal={setIsOpenModal} setModalName={setModalName}/>
            <TableInfo title={"Salas"} buttonCollection={buttonInfoCollection} dataCollection={sala} fieldName={fieldNameTable} config={config} setValueState={setSala}/>
        </section>
    )
}