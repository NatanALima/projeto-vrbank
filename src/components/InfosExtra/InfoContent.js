export default function InfoContent({styles, IconBox, infoBox, titleBox, classInfo, isMoney, moneyStatus}) {
    return(
        <div className={styles.infoExtra__content}>
            <div className={styles.content__title}>
                {IconBox && <IconBox className={styles.title__icon}/>}
                <p className={styles.title__text}>{titleBox}</p>
            </div>            
            <div className={`${styles[classInfo]} ${!isMoney ? "" : moneyStatus === "positive" ? styles.content__saldoPos : styles.content__saldoNeg}`}>
                <p>{infoBox}</p>
            </div>
            
        </div>
    )
}