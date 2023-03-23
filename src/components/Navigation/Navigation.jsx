import {useState} from "react";

import styles from './nav.module.less'
import NavigationLinks from "./NavigationLinks.jsx";

const Navigation = () => {
    const [isNavExpanded, setIsNavExpanded] = useState(false);

    return (
        <nav>
            <button
                className={`${styles.navMobileButton} ${isNavExpanded ? styles.expanded : ''}`}
                onClick={() => setIsNavExpanded(!isNavExpanded)}
                aria-label={'przycisk nawigacji'}
            >
                <svg xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 448 512">
                    <path
                        d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/>
                </svg>
            </button>
            <div className={`${styles.navMobile} ${isNavExpanded ? styles.expanded : ''}`}>
                <NavigationLinks/>
            </div>
        </nav>
    )
}

export default Navigation