export default function ProductBox({styles}) {
    return(
        <>
            <div className={styles.inputContainer}>
                <input type="text" className="prodName" required/>
                <label>Nome</label>
            </div>
            <div className={styles.inputContainer}>
                <input type="number" className="prodName" required/>
                <label>Valor</label>
            </div>
            <div className={styles.inputContainer}>
                <input type="number" className="prodName" required/>
                <label>Quantidade</label>
            </div>
        </>
    )
}