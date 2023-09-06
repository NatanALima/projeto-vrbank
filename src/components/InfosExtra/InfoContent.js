export default function InfoContent({styles, IconBox, infoBox, titleBox, classInfo}) {
    return(
        <div className={styles.infoExtra__content}>
            {IconBox && <IconBox className={styles.infoExtra__icon}/>}
            <p>{titleBox}</p>
            <div className={styles[classInfo]}>
                <p>{infoBox}</p>
            </div>
            
        </div>
    )
}