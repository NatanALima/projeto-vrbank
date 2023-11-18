import styles from '../../assets/css/ContainerContent.module.css';
import '../../assets/css/animation.css';

export default function ContainerContent({title, content, classContainer = null}){
    return(
        <section className={`${styles.containerContent} ${classContainer} fadeIn`}>
            <h2>{title}</h2>
            {content}
        </section>
        
            
    )
}