import React from "react"
export default function ActionContent({styles, icon, text, placeholder}) {
    return (
        <div className={styles.action__content}>
            <div className={styles.action__cover} data-placeholder={placeholder}>
                {icon && React.cloneElement(icon, {className: styles.iconCover})}
            </div>
            <p>{text}</p>
        </div>
    )
}