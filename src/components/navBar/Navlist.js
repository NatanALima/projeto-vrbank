import {NavLink, useLocation} from 'react-router-dom';
export default function Navlist({listContent, styles}) {
    const location = useLocation();

    const styleValidation = (isActive, linkContent) => {
        let isValidActive; 
        const subNav = linkContent.subNav;
        if((subNav && subNav.includes(location.pathname)) || isActive) {      
            isValidActive = true;
        
        } else {
            isValidActive = false;
            
        }
        return isValidActive;
    }

    return(
        <ul>
            {listContent.map((content, index) => {
                return <li key={index}><NavLink to={content.path} className={({isActive}) => styleValidation(isActive, content) ? styles.active : ""}>{content.icon}{content.title}</NavLink></li>
            })}
        </ul>
    )
}