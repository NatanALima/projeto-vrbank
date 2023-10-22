export default function ProductBox({styles}) {
    return(
        <div className={styles.boxProd__content}>
            <div className={styles.inputContainer}>
                <input type="text" className="prodName" required/>
                <label>Nome do Produto</label>
            </div>
            <div className={styles.inputContainer}>
                <input type="number" className="prodName" required onWheel={(e) => e.target.blur()}/>
                <label>Valor do Produto</label>
            </div>
            <div className={styles.inputContainer}>
                <input type="number" className="prodName" required onWheel={(e) => e.target.blur()}/>
                <label>Quantidade do Produto</label>
            </div>
        </div>
    )
}