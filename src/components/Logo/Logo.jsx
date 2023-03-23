import styles from './logo.module.less'
import logo from '/src/assets/logo.webp'
import {NavLink} from "react-router-dom";

const Logo = () => {
    return (
        <NavLink
            to={'/'}
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