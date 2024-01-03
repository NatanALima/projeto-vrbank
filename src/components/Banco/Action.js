export default function Action({styles, icon, text, placeholder}) {
    return (
        <div className={styles.action__content}>
            <div className={styles.action__cover} data-placeholder={placeholder}>
                {icon}
            </div>
            <p>{text}</p>
        </div>
    )
}