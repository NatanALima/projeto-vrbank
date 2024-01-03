import styles from '../../assets/css/Banco.module.css';
import SaldoInfo from './SaldoInfo';
import Action from './Action';
import { LuWallet as InsIcon } from "react-icons/lu";
import { GiPayMoney as ViewIcon} from "react-icons/gi";
import { PiMoneyDuotone as PaperIcon} from "react-icons/pi";


export default function Banco() {
    const ActionList = [{id: 1, icon: <InsIcon className={styles.iconCover}/>, text: "Adicionar Fundos", placeholder: "FUNDOS"},
                        {id: 2, icon: <ViewIcon className={styles.iconCover}/>, text: "Consultar Despesas", placeholder: "DESPESAS"},
                        {id: 3, icon: <PaperIcon className={styles.iconCover}/>, text: "Visualizar Cédulas", placeholder: "CÉDULAS"}];

    return (
        <section className={styles.banco}>
            <h1>Banco</h1>
            <SaldoInfo styles={styles}/>
            <h2>Ações</h2>
            <div className={styles.action__container}>
                {ActionList.map(item => <Action key={item.id} styles={styles} {...item}/>)}
            </div>
            
        </section>
    )
}