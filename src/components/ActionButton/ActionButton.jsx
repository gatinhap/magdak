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