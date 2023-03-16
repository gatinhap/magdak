import styles from './logo.module.less'
import logo from '/src/assets/logo.jpeg'
import {NavLink} from "react-router-dom";

const Logo = () => {
    return (
        <NavLink
            to={'/'}
            //className={'site-logo'}
            className={styles.logo}
        >
            <img
                src={logo}
                alt={'logo'}
            />
        </NavLink>
    )
}

export default Logo