import styles from '../../assets/css/ContainerContent.module.css';
import '../../assets/css/animation.css';

export default function ContainerContent({title, content}){
    return(
        <section className={`${styles.containerContent} fadeIn`}>
            <h2>{title}</h2>
            {content}
        </section>
        
            
    )
}