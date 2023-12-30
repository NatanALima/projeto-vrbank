import styles from '../../assets/css/Banco.module.css';
import SaldoInfo from './SaldoInfo';

export default function Banco() {
    return (
        <section className={styles.banco}>
            <h1>Banco</h1>
            <SaldoInfo styles={styles}/>
        </section>
    )
}