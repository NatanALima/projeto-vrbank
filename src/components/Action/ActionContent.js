import React from "react"
export default function ActionContent({styles, icon, text, placeholder, nomeModal, setOpenModal, setModalName}) {

    const handleOpenModal = () => {
        setModalName(nomeModal);
        setOpenModal(true);
    }

    return (
        <div className={styles.action__content} onClick={handleOpenModal}>
            <div className={styles.action__cover} data-placeholder={placeholder}>
                {icon && React.cloneElement(icon, {className: styles.iconCover})}
            </div>
            <p>{text}</p>
        </div>
    )
}