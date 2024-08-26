import styles from '../assets/css/Banco.module.css';
import '../assets/css/animation.css';
import SaldoInfo from '../components/Banco/SaldoInfo';
import Action from '../components/Action/Action';
import ContainerModal from "../components/layout/ContainerModal";
import { LuWallet as InsIcon } from "react-icons/lu";
import { GiPayMoney as ViewIcon} from "react-icons/gi";
import { PiMoneyDuotone as PaperIcon} from "react-icons/pi";
import { useState } from 'react';
import { useBanco } from '../Context/BancoContext';
import TableGeneral from '../components/Table/TableGeneral/TableGeneral';
import TableBodyGeneral from '../components/Table/TableBody/TableBodyGeneral';


export default function Banco() {
    //Informações de Banco
    const { saldo, divida, setSaldo } = useBanco();

    const [isOpenModal, setIsOpenModal] = useState(false);
    const [modalName, setModalName] = useState("");
    const [extrato, setExtrato] = useState([{tipo: "Adição de Saldo", valor: 250, data: "02/04/2024"},
                                            {tipo: "Recebimento de Produto", valor: 40, data: "05/05/2024"},
                                            {tipo: "Recebimento de Produto", valor: 20, data: "05/05/2024"}])
    const fieldTable = ["Descrição", "Valor", "Data"];


    const ActionList = [{id: 1, icon: <InsIcon/>, text: "Adicionar Fundos", placeholder: "FUNDOS", nomeModal: "saldo"},
                        {id: 2, icon: <ViewIcon/>, text: "Consultar Despesas", placeholder: "DESPESAS", nomeModal: "despesas"},
                        {id: 3, icon: <PaperIcon/>, text: "Visualizar Cédulas", placeholder: "CÉDULAS", nomeModal: "cedulas"}];



    return (
        <section className={styles.banco}>
            {isOpenModal && <ContainerModal modalRequestName={modalName} setIsOpen={setIsOpenModal} setValue={setSaldo}/>}
            <h1>Banco</h1>
            <SaldoInfo styles={styles} saldoAtual={saldo} dividaAtual={divida}/>
            <h2>Ações</h2>
            <Action ActionList={ActionList} setOpenModal={setIsOpenModal} setModalName={setModalName}/>
            <TableGeneral title={"Extrato"} fieldCollection={fieldTable} dataCollection={extrato} hasActionBtn={false}>
                {extrato.map(info => <TableBodyGeneral key={info._id} dataInfo={info}/>)}    
            </TableGeneral>
        </section>
    )
}