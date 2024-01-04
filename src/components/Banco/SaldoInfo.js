import { FaArrowUp as Arrow } from "react-icons/fa6";
import "../../assets/css/animation.css";

export default function SaldoInfo({styles}) {
    const valueAnim = [28, 20, 39, 25, 40, 35, 43, 21, 32, 29, 26];

    return (
        <div className={`${styles.saldoInfo__container} fadeIn`}>
            <div className={styles.saldoInfo__content}>
                <h3>Saldo Disponível</h3>
                <p>+ETC$1000</p>
                <div className={styles.saldoInfo__arrowContainer}>
                    {valueAnim.map((value, index) => <Arrow key={index} style={{animationDuration: `${50 / value}s`}} className={styles.saldoInfo__arrowUp}/>)}
                </div>
            </div>
            <hr />
            <div className={styles.saldoInfo__content}>
                <h3>Valor da Despesa</h3>
                <p>-ETC$1000</p>
                <div className={styles.saldoInfo__arrowContainer}>
                    {valueAnim.map((value, index) => <Arrow key={index} style={{animationDuration: `${50 / value}s`}} className={styles.saldoInfo__arrowDown}/>)}
                </div>
            </div>
            <div className={styles.saldoInfo__hoverColor}></div>
        </div>
    )
}