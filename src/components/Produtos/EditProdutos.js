import InfoExtra from "./InfosExtra/InfoExtra";

export default function EditProdutos({styles, infoBoxExtra}) {
    console.log({...infoBoxExtra});
    return (
        <>
            <h1>Edição de Produtos</h1>
            <div className={styles.infoExtra}>
                {infoBoxExtra.map(info => {
                    return(
                        <InfoExtra key={info.id} styles={styles} {...info}/>
                    )
                })}

            </div>
        </>
    )
}