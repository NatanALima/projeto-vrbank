import styles from '../../assets/css/FundosBanco.module.css';
import FundosBox from './FundosBox';
import {FaMoneyBills} from 'react-icons/fa6';

export default function FundosBanco() {

    return(
        <section className={styles.fundosBanco}>
            <h1>Fundos do Banco</h1>
            <div className={styles.fundosBanco__container}>
                <FundosBox styles={styles} iconContent={<FaMoneyBills/>} infoContent={"Saldo Disponível"} saldoContent={1250}/>
            </div>
        </section>
    )
}