import {Link} from 'react-router-dom';
export default function Navlist({listContent}) {

    // <Link to="/" path={content.title}>{content.icon}{content.title}</Link>
    return(
        <ul>
            {listContent.map((content, index) => {
                return <li key={index}><Link to={content.path}>{content.icon}{content.title}</Link></li>
            })}
        </ul>
    )
}