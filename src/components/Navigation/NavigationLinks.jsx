import { NavLink } from "react-router-dom";

import styles from './nav.module.less'

const NavigationLinks = () => {
    return (
        <ul className={styles.navList}>
            <li>
                <NavLink to={'/'}>strona główna</NavLink>
            </li>
            <li><NavLink to={'/contact'}>kontakt</NavLink></li>
            <li>
                <NavLink to={'/offer'}>oferta</NavLink>
            </li>
            <li>
                <NavLink to={'/cooperate'}>współpraca</NavLink>
            </li>
            <li>
                <NavLink to={'/about-me'}>o mnie</NavLink>
            </li>
            <li>
                <a
                    href={"https://blog.psychoterapia-refleksje.com/"}
                    target={'_blank'}
                    rel={"noopener noreferrer"}
                >
                    blog
                </a>
            </li>
            <li>
                <NavLink to={'/rodo'}>rodo</NavLink>
            </li>
        </ul>
    )
}

export default NavigationLinks
