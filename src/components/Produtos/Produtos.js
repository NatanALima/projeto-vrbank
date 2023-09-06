import { Routes, Route} from 'react-router-dom';
import styles from '../../assets/css/Produtos.module.css';
import NavProd from './NavProd';
import CadProdutos from './CadProdutos';
import EditProdutos from './EditProdutos';

//Importação dos icones
//Icones do infoExtra;
import {GiReceiveMoney, GiPayMoney} from 'react-icons/gi';
import {BsHandbag, BsBoxSeam} from 'react-icons/bs'

export default function Produtos() {
    const infoBoxExtra = [{id: 1, IconBox: GiReceiveMoney, infoBox: "VR$2500", titleBox: "Saldo Disponível", classInfo: "infoExtra__saldoPos"},
                          {id: 2, IconBox: BsHandbag, infoBox: "Maçã", titleBox: "Últimos Produtos adquiridos", classInfo: "infoExtra__lastProd"},
                          {id: 3, IconBox: GiPayMoney, infoBox: "VR$1500", titleBox: "Valor de Despesa", classInfo: "infoExtra__saldoNeg"},
                          {id: 4, IconBox: BsBoxSeam, infoBox: "40", titleBox: "Total de Produtos Recebidos", classInfo: "infoExtra__saldoNeg"}];
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