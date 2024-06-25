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
//navBarMenu Responsive 
import { HiMenu as IconMenu} from "react-icons/hi";
import { useState } from "react";
//Ícone de Usuário
import { FaUser as IconUser} from "react-icons/fa";
//Ícone de Logout
import { TbLogout as IconLogout} from "react-icons/tb";
import { useAuth } from "../../Context/AuthContext";
import Cookies from 'js-cookie';
import { logoutService } from "../../services/user.service";



export default function Navbar() {
    const {user, setUser} = useAuth();

    const {userName} = user;

    const listContent = [{title: "Produtos", path:"/", subNav:["/", "/editprods"], icon:<LiaBoxSolid className={styles.iconList}/>},
                        {title: "Banco", path:"/banco", icon:<LiaFileInvoiceDollarSolid className={styles.iconList}/>},
                        {title: "Salas", path:"/salas", icon:<MdGroups className={styles.iconList}/>}];

    const [isActiveMenu, setIsActiveMenu] = useState(false);

    const handleClickLogout = () => {
        logoutService();
        setUser(null);
    }
    
    return(
        
        <header className={styles.navContainer}>              
            <section className={styles.navContent__logo}>
                <img src={vrLogo} alt="vrLogo" />
            </section>
            <section className={`${styles.navContent__info} ${isActiveMenu ? styles.navContent__info__active : ""}`}>
                <Navlist listContent={listContent} styles={styles}/>
                <div className={styles.navContent__info__login}>
                    <div className={styles.info__login__user}>
                        <IconUser className={styles.login__user__icon}/>
                        <p className={styles.login__user__name}>{userName}</p>
                    </div>
                    <button className={styles.info__login__btn} onClick={handleClickLogout}>
                        <IconLogout className={styles.login__btn__icon}/>
                        Sair
                    </button>
                </div>
            </section>
            <button className={styles.navContent__menuBtn} onClick={() => setIsActiveMenu(prevValue => !prevValue)}>
                <IconMenu className={styles.menuBtn__icon}/>
            </button>
        </header>
    )
    
}