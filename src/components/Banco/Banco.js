import styles from '../../assets/css/Banco.module.css';
import '../../assets/css/animation.css';
import SaldoInfo from './SaldoInfo';
import Action from '../Action/Action';
import { LuWallet as InsIcon } from "react-icons/lu";
import { GiPayMoney as ViewIcon} from "react-icons/gi";
import { PiMoneyDuotone as PaperIcon} from "react-icons/pi";


export default function Banco() {
    const ActionList = [{id: 1, icon: <InsIcon/>, text: "Adicionar Fundos", placeholder: "FUNDOS"},
                        {id: 2, icon: <ViewIcon/>, text: "Consultar Despesas", placeholder: "DESPESAS"},
                        {id: 3, icon: <PaperIcon/>, text: "Visualizar Cédulas", placeholder: "CÉDULAS"}];

    return (
        <section className={styles.banco}>
            <h1>Banco</h1>
            <SaldoInfo styles={styles}/>
            <h2>Ações</h2>
            <Action ActionList={ActionList}/>
            
        </section>
    )
}