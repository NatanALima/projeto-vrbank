import {NavLink} from 'react-router-dom';
export default function Navlist({listContent, styles}) {

    return(
        <ul>
            {listContent.map((content, index) => {
                return <li key={index}><NavLink to={content.path} className={({isActive}) => isActive ? styles.active : ""}>{content.icon}{content.title}</NavLink></li>
            })}
        </ul>
    )
}