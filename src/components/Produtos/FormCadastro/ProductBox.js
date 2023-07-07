export default function ProductBox({styles}) {
    return(
        <div className={styles.boxProd__content}>
            <div className={styles.inputContainer}>
                <input type="text" className="prodName" required/>
                <label>Nome</label>
            </div>
            <div className={styles.inputContainer}>
                <input type="number" className="prodName" required onWheel={(e) => e.target.blur()}/>
                <label>Valor</label>
            </div>
            <div className={styles.inputContainer}>
                <input type="number" className="prodName" required onWheel={(e) => e.target.blur()}/>
                <label>Quantidade</label>
            </div>
        </div>
    )
}