import {NavLink} from 'react-router-dom';

export default function NavProd({styles}) {

    return(
        <nav className={styles.navProd}>
            <ul>
                <li><NavLink to="/" className={({isActive}) => isActive ? styles.active : ""} >Cadastrar Produtos</NavLink></li>
                <li><NavLink to="/editprods" className={({isActive}) => isActive ? styles.active : ""}>Editar Produtos</NavLink></li>
            </ul>
            <div className={styles.navProd__activeContainer}></div>
        </nav>
    )
}