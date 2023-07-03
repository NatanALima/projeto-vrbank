export default function InfoExtra({styles, iconBox, infoBox, titleBox, classInfo}) {
    return(
        <div className={styles.infoExtra__content}>
            {iconBox && iconBox}
            <p>{titleBox}</p>
            <div className={classInfo}>
                <p>{infoBox}</p>
            </div>
            
        </div>
    )
}