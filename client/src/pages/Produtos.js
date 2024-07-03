import { Outlet } from 'react-router-dom';
import styles from '../assets/css/Produtos.module.css';
import NavProd from '../components/Produtos/NavProd';

//Importação dos icones
//Icones do infoExtra;
import {TbPigMoney} from 'react-icons/tb';
import {PiHandCoinsDuotone} from 'react-icons/pi';
import {BsHandbag, BsBoxSeam} from 'react-icons/bs'
import { useBanco } from '../Context/BancoContext';

export default function Produtos() {
    const {saldo, divida} = useBanco();

    const infoBoxExtra = [{id: 1, IconBox: TbPigMoney, infoBox: saldo, titleBox: "Saldo Disponível", classInfo: "content__infoStatic", isMoney: true, moneyStatus: "positive"},
                          {id: 2, IconBox: BsHandbag, infoBox: "Maçã", titleBox: "Últimos Produtos adquiridos", classInfo: "content__infoDinamic", isMoney: false},
                          {id: 3, IconBox: PiHandCoinsDuotone, infoBox: divida, titleBox: "Valor de Despesa", classInfo: "content__infoStatic", isMoney: true, moneyStatus: "negative"},
                          {id: 4, IconBox: BsBoxSeam, infoBox: "40", titleBox: "Total de Produtos Recebidos", classInfo: "content__infoStatic", isMoney: false}];
    return(
        <>
            <NavProd styles={styles}/>
            <section className={styles.produtos}>
                <Outlet context={{styles, infoBoxExtra}}/>
            </section>
        </>
    )
}