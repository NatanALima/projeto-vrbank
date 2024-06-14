import {NavLink, useLocation} from 'react-router-dom';
export default function Navlist({listContent, styles}) {
    const location = useLocation();

    //Validação que permite que tanto o link de navegação "FILHO" quanto o Link de navegação "PAI" permaneçam ativos
    const styleValidation = (isActive, linkContent) => {
        const subNav = linkContent.subNav;
        if((subNav && subNav.includes(location.pathname)) || isActive) {      
            return true
        
        } 
        return false;
    }

    return(
        <ul>
            {listContent.map((content, index) => {
                return <li key={index}><NavLink to={content.path} className={({isActive}) => styleValidation(isActive, content) ? styles.active : ""}>{content.icon}{content.title}</NavLink></li>
            })}
        </ul>
    )
}