import Navlist from "./Navlist";
import vrLogo from "../../assets/media/logoVRBankFigma.svg";
import styles from "../../assets/css/Navbar.module.css";

//Icones
//Produtos
import {LiaBoxSolid} from 'react-icons/lia';
//Fundos do banco
import {MdAttachMoney} from 'react-icons/md';
//Extrato
import {LiaFileInvoiceDollarSolid} from 'react-icons/lia';
//Salas
import {MdGroups} from 'react-icons/md';

export default function Navbar() {
    const listContent = [{title: "Produtos", path:"/", icon:<LiaBoxSolid/>},
                        {title: "Fundos do Banco", path:"/fundosbanco", icon:<MdAttachMoney/>},
                        {title: "Extrato", path:"/extrato", icon:<LiaFileInvoiceDollarSolid/>},
                        {title: "Salas", path:"/salas", icon:<MdGroups/>},];
    
    return(
        
        <header>
            <section className="navContent1">               
                <div className="navContent1__logo">
                    <img src={vrLogo} alt="vrLogo" />
                </div>
                <div className="navContent1__navList">
                    <Navlist listContent={listContent}/>
                </div>
            </section>
            <section className="navContent2"></section>
        </header>
    )
    
}