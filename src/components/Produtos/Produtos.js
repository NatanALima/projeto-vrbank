import { Routes, Route} from 'react-router-dom';
import styles from '../../assets/css/Produtos.module.css';
import NavProd from './NavProd';
import CadProdutos from './CadProdutos';
import EditProdutos from './EditProdutos';
export default function Produtos() {
    return(
        <>
            <NavProd styles={styles}/>
            <section className={styles.produtos}>
                <Routes>
                    <Route index element={<CadProdutos styles={styles}/>}/>
                    <Route path='editprods' element={<EditProdutos styles={styles}/>}/>
                </Routes>
            
            </section>
        </>
    )
}