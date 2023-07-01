import Navlist from "./Navlist";
import vrLogo from "../../assets/media/logoVRBankFigma.svg";
import styles from "../../assets/css/Navbar.module.css";

//Icones
//Responsivo
import {FaArrowRight} from 'react-icons/fa';
//Produtos
import {LiaBoxSolid} from 'react-icons/lia';
//Fundos do banco
import {MdAttachMoney} from 'react-icons/md';
//Extrato
import {LiaFileInvoiceDollarSolid} from 'react-icons/lia';
//Salas
import {MdGroups} from 'react-icons/md';

export default function Navbar() {
    const listContent = [{title: "Produtos", path:"/", icon:<LiaBoxSolid className={styles.iconList}/>},
                        {title: "Fundos do Banco", path:"/fundosbanco", icon:<MdAttachMoney className={styles.iconList}/>},
                        {title: "Extrato", path:"/extrato", icon:<LiaFileInvoiceDollarSolid className={styles.iconList}/>},
                        {title: "Salas", path:"/salas", icon:<MdGroups className={styles.iconList}/>},];
    
    return(
        
        <header className={styles.openNav}>
            <section className={styles.btnResponsive}>
                <FaArrowRight/>
            </section>
            
            <section className={styles.navContent1}>               
                <div className={styles.navContent1__logo}>
                    <img src={vrLogo} alt="vrLogo" />
                </div>
                <div className={styles.navContent1__navList}>
                    <Navlist listContent={listContent}/>
                </div>
            </section>
            <section className={styles.navContent2}><p>Área de Login</p></section>
        </header>
    )
    
}