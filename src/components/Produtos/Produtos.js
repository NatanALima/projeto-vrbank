import { Routes, Route} from 'react-router-dom';
import styles from '../../assets/css/Produtos.module.css';
import NavProd from './NavProd';
import CadProdutos from './CadProdutos';
import EditProdutos from './EditProdutos';

//Importação dos icones
//Icones do infoExtra;
import {LiaWalletSolid} from 'react-icons/lia';
import {LiaCoinsSolid} from 'react-icons/lia';
import {LiaShoppingBagSolid} from 'react-icons/lia';

export default function Produtos() {
    const infoBoxExtra = [{id: 1, iconBox: <LiaWalletSolid className={styles.infoExtra__icon}/>, infoBox: "R$2500", titleBox: "Saldo Disponível", classInfo: styles.infoExtra__saldoPos},
                          {id: 2, iconBox: <LiaShoppingBagSolid className={styles.infoExtra__icon}/>, infoBox: "Maçã", titleBox: "Últimos Produtos adquiridos", classInfo: styles.infoExtra__lastProd},
                          {id: 3, iconBox: <LiaCoinsSolid className={styles.infoExtra__icon}/>, infoBox: "R$1500", titleBox: "Valor de Despesa", classInfo: styles.infoExtra__saldoNeg}];
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