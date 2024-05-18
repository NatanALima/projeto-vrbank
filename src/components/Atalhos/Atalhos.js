import {NavLink} from 'react-router-dom';
import { TbClipboardList as IconPrice} from "react-icons/tb";
import { HiOutlineUserGroup as IconSala} from "react-icons/hi2";
import { LuClipboardList as IconExtrato } from "react-icons/lu";
import styles from '../../assets/css/Atalhos.module.css';

export default function Atalhos() {
    const shortCutInfo = [{icon: <IconPrice className={styles.atalhoIcon}/>, redirect: '/editprods', text: "Consultar Tabela de Preços"},
                          {icon: <IconSala className={styles.atalhoIcon}/>, redirect: '/salas', text: "Consultar Salas"},
                          {icon: <IconExtrato className={styles.atalhoIcon}/>, redirect: '/banco', text: "Consultar Extrato"}];


    return (
        <div className={styles.atalhoContainer}>
            {shortCutInfo.map((item, index) => (
                <NavLink to={item.redirect} key={index} className={styles.atalhoContent}>
                    {item.icon}
                    <p>{item.text}</p>
                </NavLink>
            ))}
        </div>
    )
}