import './Cookies.less'
import {useEffect, useState} from "react";

const Cookies = () => {
    const [cookies, showCookies] = useState(false);

    useEffect(() => {
        showCookies(true)
    }, [])

    return (
        <div
            id={'cc-container'}
            className={`${cookies ? 'showCookie' : 'hideCookie'}`}
            role={"dialog"}
            aria-label={"cookie consent"}
        >
            <span className="cc-text">Ta strona korzysta z plików cookies Google.
                Korzystając z tej strony wyrażasz na to zgodę.
                <br />
                <a
                    className={"cc-text-link"}
                    aria-label={"learn more about cookies"}
                    role={"button"}
                    tabIndex={0}
                    target={"_blank"}
                    href={"https://policies.google.com/technologies/cookies?hl=pl"} rel="noreferrer"
                >
                    Dowiedz się więcej.
                </a>
            </span>
            <span
                id={"agree"}
                aria-label={"dismiss cookie message"}
                role={"button"}
                tabIndex={0}
                onClick={() => showCookies(false)}
            >
                Zgoda
            </span>
        </div>
    )
}

export default Cookies