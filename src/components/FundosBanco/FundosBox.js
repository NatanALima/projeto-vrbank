import { FaPlus, FaQuestion} from "react-icons/fa"
export default function FundosBox({styles, iconContent, infoContent, saldoContent}) {
    return (
        <div className={styles.fundosBanco__content}>
            <div className={styles.fundosBanco__content__questionInfo}><FaQuestion/></div>
            <div className={styles.fundosBanco__content__infoModal}>
                <p>Aqui, é possível realizar o depósito no banco. Para isso, basta clicar no botão "+" abaixo e então digitar o valor a ser depositado.</p>
            </div>
            <div className={styles.fundosBanco__content__icon}>
                {iconContent}
            </div>
            <div className={styles.fundosBanco__contentInfo}>
                <p className={styles.fundosBanco__contentInfo__desc}>{infoContent}</p>
                <p className={styles.fundosBanco__contentInfo__saldo}>{saldoContent}</p>
            </div>
            <div className={styles.fundosBanco__contentInfo__btnCollection}>
                <button className={styles.btnCollection__addBtn}><FaPlus/></button>
            </div>
            
        </div>
    )
}