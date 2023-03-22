import './ActionButton.less'
import {Link} from "react-router-dom";

const ActionButton = ({children, linkTo}) => {
    return (
        <Link
            to={linkTo}
            className={'action-button'}
        >
            {children}
        </Link>
    )
}

export default ActionButton

//button structure for blog
// <a
// class="action-button"
// href="https://psychoterapia-refleksje.com/#/contact"
// >
// Zapraszam do kontaktu
// </a>