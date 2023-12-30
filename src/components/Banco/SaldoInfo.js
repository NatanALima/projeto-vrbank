export default function SaldoInfo({styles}) {
    return (
        <div className={styles.saldoInfo__container}>
            <div className={styles.saldoInfo__content}>
                <h3>Saldo Disponível</h3>
                <p>+ETC$1000</p>
            </div>
            <hr />
            <div className={styles.saldoInfo__content}>
                <h3>Valor da Despesa</h3>
                <p>-ETC$1000</p>
            </div>
            <div className={styles.saldoInfo__hoverColor}></div>
        </div>
    )
}