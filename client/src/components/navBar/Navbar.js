import Navlist from "./Navlist";
import vrLogo from "../../assets/media/logoVRBankFigma.svg";
import styles from "../../assets/css/Navbar.module.css";

//Icones
//Produtos
import {LiaBoxSolid} from 'react-icons/lia';
//Banco
import {LiaFileInvoiceDollarSolid} from 'react-icons/lia';
//Salas
import {MdGroups} from 'react-icons/md';
// Exit Button
import { IoExitOutline as IconExit} from "react-icons/io5";
//navBarMenu Responsive 
import { HiMenu as IconMenu} from "react-icons/hi";
import { useState } from "react";



export default function Navbar() {
    const listContent = [{title: "Produtos", path:"/", subNav:["/", "/editprods"], icon:<LiaBoxSolid className={styles.iconList}/>},
                        {title: "Banco", path:"/banco", icon:<LiaFileInvoiceDollarSolid className={styles.iconList}/>},
                        {title: "Salas", path:"/salas", icon:<MdGroups className={styles.iconList}/>}];

    const [isActiveMenu, setIsActiveMenu] = useState(false);
    
    return(
        
        <header className={styles.navContainer}>              
            <section className={styles.navContent__logo}>
                <img src={vrLogo} alt="vrLogo" />
            </section>
            <section className={`${styles.navContent__info} ${isActiveMenu ? styles.navContent__info__active : ""}`}>
                <Navlist listContent={listContent} styles={styles}/>
                <div className={styles.navContent__info__login}>
                    <p className={styles.info__login__user}>Usuário: <span>user@VR2022</span></p>
                    <button className={styles.info__login__btn}>Sair</button>
                </div>
            </section>
            <button className={styles.navContent__menuBtn} onClick={() => setIsActiveMenu(prevValue => !prevValue)}>
                <IconMenu className={styles.menuBtn__icon}/>
            </button>
        </header>
    )
    
}