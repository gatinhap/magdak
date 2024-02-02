import { useEffect } from "react";

import ContactCard from "./ContactCard.jsx";
import Header from "../../Header/Header.jsx";
import Logo from "../../Logo/Logo.jsx";
import Navigation from "../../Navigation/Navigation.jsx";
import Layout from "../../Layout/Layout.jsx";
import Footer from "../../Footer/Footer.jsx";
import InteriorPageTitle from "../InteriorPageTitle.jsx";

import styles from './contact.module.less';

const Contact = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
    }, [])

    return (
        <>
            <Header>
                <Logo/>
                <Navigation/>
            </Header>
            <Layout>
                <InteriorPageTitle>kontakt</InteriorPageTitle>
                <section className={styles.section}>
                    <p className={styles.contactText}>
                        Ze względu na samodzielne prowadzenie przeze mnie rejestracji pacjentów bardzo <strong>proszę o zapis
                        poprzez wysłanie e-maila</strong>. Zapisy prowadzę na listę oczekujących ze względu na dużą liczbę
                        pacjentów. Na maile odpowiadam w ciągu kilku dni.
                    </p>
                    <ContactCard>
                        <div className={styles.svgHolder}>
                            <svg xmlns="http://www.w3.org/2000/svg"
                                 viewBox="0 0 512 512">
                                <path
                                    d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/>
                            </svg>
                        </div>
                        <div><a href={'mailto:kuznik.refleksje@gmail.com'}>kuznik.refleksje@gmail.com</a></div>
                    </ContactCard>
                    {/*<ContactCard>*/}
                    {/*    <div className={styles.svgHolder}>*/}
                    {/*        <svg xmlns="http://www.w3.org/2000/svg"*/}
                    {/*             viewBox="0 0 512 512">*/}
                    {/*            <path*/}
                    {/*                d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/>*/}
                    {/*        </svg>*/}
                    {/*    </div>*/}
                    {/*    <div><a href={'tel:+48 664 185 821'}>+48 664 185 821</a></div>*/}
                    {/*</ContactCard>*/}
                    <ContactCard>
                        <div className={styles.svgHolder}>
                            <svg xmlns="http://www.w3.org/2000/svg"
                                 viewBox="0 0 384 512">
                                <path
                                    d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/>
                            </svg>
                        </div>
                        <address>
                            ul. Bielska 45A,<br/>
                            43-430 Skoczów
                        </address>
                    </ContactCard>
                    <div className={styles.contactText}>Wejście przez najbardziej wysunięte w stronę parkingu skrzydło
                        budynku, gabinet nr 15 na 1
                        piętrze.W
                        budynku znajdują się schody i winda. Budynek dostosowany do osób z niepełnosprawnością
                        ruchową.
                    </div>
                </section>
            </Layout>
            <Footer footerBackgroundColor={'interior-footer-bg-color'}/>
        </>

    )
}

export default Contact