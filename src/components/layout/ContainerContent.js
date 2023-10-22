import styles from '../../assets/css/ContainerContent.module.css';

export default function ContainerContent({title, content}){
    return(
        <section className={styles.containerContent}>
            <h2>{title}</h2>
            {content}
        </section>
        
            
    )
}