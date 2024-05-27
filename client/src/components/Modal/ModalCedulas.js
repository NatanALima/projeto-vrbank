import styles from "../../assets/css/ModalCedulas.module.css"

// Pegando todas as imagens da pasta cédulas
const images = require.context('../../assets/media/cedulas', true);
const imageList = images.keys().map(img => images(img));

//Setando as cores de ShadowBox das cédulas (ordem baseada no array das imagens acima)
const shadowColor = ["#f1000026", "#116b6e26", "#00cdd026", "#62278026", "#8c750126"]

export default function ModalCedulas() {

    return (
        <section className={styles.modalCedulas__container}>
            {imageList.map((img, index) => {
                return(
                    <div key={index} className={styles.modalCedulas__content}>
                        <img src={img} alt={index} style={{'--shadowColor': shadowColor[index]}}/>
                    </div>
                )
            })}
        </section>
        
    )
}