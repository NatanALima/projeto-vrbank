import styles from '../../assets/css/Banco.module.css';
import '../../assets/css/animation.css';
import SaldoInfo from './SaldoInfo';
import Action from '../Action/Action';
import TableInfo from '../TableInfo/TableInfo';
import ModalSaldo from "../Modal/ModalSaldo";
import ModalCedulas from '../Modal/ModalCedulas';
import ContainerModal from "../layout/ContainerModal";
import { LuWallet as InsIcon } from "react-icons/lu";
import { GiPayMoney as ViewIcon} from "react-icons/gi";
import { PiMoneyDuotone as PaperIcon} from "react-icons/pi";
import { useState } from 'react';


export default function Banco() {
    const [isOpenModal, setIsOpenModal] = useState(false);
    const [extrato, setExtrato] = useState([{tipo: "Adição de Saldo", valor: 250, data: "02/04/2024"},
                                            {tipo: "Recebimento de Produto", valor: 40, data: "05/05/2024"},
                                            {tipo: "Recebimento de Produto", valor: 20, data: "05/05/2024"}])
    const fieldTable = ["Descrição", "Valor", "Data"];

    /** 
        * Propriedades da Configuração

        * @typedef {Object} configItem

        * @property {string} type - [OBRIGATÓRIO] define o tipo do Input (só é inserido quando a opção isEdit for TRUE)
        
        * @property {boolean} isEdit - [OBRIGATÓRIO] Determina se o dado em questão é editável
        
        * @property {boolean} isClassUnique - [OPCIONAL] determina se haverá uma ou mais classes em um dado não editável (só é passado quando o parâmetro isEdit for False)

        * @property {Array<string>} specialClass - [OPCIONAL] determina as N classes que serão passadas (só é utilizado quando isClassUnique for FALSE)
    */

    /** @type {Array<configItem>} */
    const config = [{type: "text", isEdit: false, isClassUnique: true},
                    {type: "number", isEdit: false, isClassUnique: true},
                    {type: "text", isEdit: false, isClassUnique: true}]

    const ActionList = [{id: 1, icon: <InsIcon/>, text: "Adicionar Fundos", placeholder: "FUNDOS"},
                        {id: 2, icon: <ViewIcon/>, text: "Consultar Despesas", placeholder: "DESPESAS"},
                        {id: 3, icon: <PaperIcon/>, text: "Visualizar Cédulas", placeholder: "CÉDULAS"}];

    return (
        <section className={styles.banco}>
            {isOpenModal && <ContainerModal title={"Adicionar Fundos"} content={<ModalSaldo setCancel={setIsOpenModal}/>}/>}
            <h1>Banco</h1>
            <SaldoInfo styles={styles}/>
            <h2>Ações</h2>
            <Action ActionList={ActionList} setOpenModal={setIsOpenModal}/>
            <TableInfo title={"Extrato"} dataCollection={extrato} fieldName={fieldTable} config={config}/>
            
        </section>
    )
}