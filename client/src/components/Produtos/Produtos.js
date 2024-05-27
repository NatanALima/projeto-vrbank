import { Routes, Route} from 'react-router-dom';
import styles from '../../assets/css/Produtos.module.css';
import NavProd from './NavProd';
import CadProdutos from './CadProdutos';
import EditProdutos from './EditProdutos';

//Importação dos icones
//Icones do infoExtra;
import {TbPigMoney} from 'react-icons/tb';
import {PiHandCoinsDuotone} from 'react-icons/pi';
import {BsHandbag, BsBoxSeam} from 'react-icons/bs'

export default function Produtos() {
    const infoBoxExtra = [{id: 1, IconBox: TbPigMoney, infoBox: "2500", titleBox: "Saldo Disponível", classInfo: "content__infoStatic", isMoney: true, moneyStatus: "positive"},
                          {id: 2, IconBox: BsHandbag, infoBox: "Maçã", titleBox: "Últimos Produtos adquiridos", classInfo: "content__infoDinamic", isMoney: false},
                          {id: 3, IconBox: PiHandCoinsDuotone, infoBox: "1500", titleBox: "Valor de Despesa", classInfo: "content__infoStatic", isMoney: true, moneyStatus: "negative"},
                          {id: 4, IconBox: BsBoxSeam, infoBox: "40", titleBox: "Total de Produtos Recebidos", classInfo: "content__infoStatic", isMoney: false}];
    return(
        <>
            <NavProd styles={styles}/>
            <section className={styles.produtos}>
                <Routes>
                    <Route index element={<CadProdutos styles={styles} infoBoxExtra={infoBoxExtra}/>}/>
                    <Route path='editprods' element={<EditProdutos styles={styles} infoBoxExtra={infoBoxExtra}/>}/>
                </Routes>
            
            </section>
        </>
    )
}