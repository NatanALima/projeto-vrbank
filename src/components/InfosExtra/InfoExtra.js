import styles from '../../assets/css/InfoExtra.module.css';
import InfoContent from './InfoContent';
import '../../assets/css/animation.css';
export default function InfoExtra({infoBoxExtra}) {
    return(
        <div className={`${styles.infoExtra} fadeIn`}>
            {infoBoxExtra.map(info => {
                return(
                    <InfoContent key={info.id} styles={styles} {...info}/>
                )
            })}
        </div>
    )
}