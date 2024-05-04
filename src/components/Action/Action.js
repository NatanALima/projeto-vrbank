import styles from '../../assets/css/Action.module.css';
import '../../assets/css/animation.css';
import ActionContent from './ActionContent';

export default function Action({ActionList, setOpenModal}) {
    return (
        <div className={`${styles.action__container} fadeIn`}>
            {ActionList.map(item => <ActionContent key={item.id} styles={styles} {...item} setOpenModal={setOpenModal}/>)}
        </div>
    )
}