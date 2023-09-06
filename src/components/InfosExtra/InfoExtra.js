import styles from '../../assets/css/InfoExtra.module.css';
import InfoContent from './InfoContent';
export default function InfoExtra({infoBoxExtra}) {
    return(
        <div className={styles.infoExtra}>
            {infoBoxExtra.map(info => {
                return(
                    <InfoContent key={info.id} styles={styles} {...info}/>
                )
            })}
        </div>
    )
}