import styles from './footer.module.less'
import NavigationLinks from "../Navigation/NavigationLinks.jsx";

const Footer = ({footerBackgroundColor}) => {
    return (
        <>
            <footer className={`${styles.footer} ${footerBackgroundColor}`}>
                <article>
                    <h5>mapa strony</h5>
                    <NavigationLinks />
                </article>
                <article>
                    <h5>kontakt</h5>
                    <address>
                        ul. Bielska 45A, 43-430 Skoczów <br/>
                        <a href={'mailto:kuznik.refleksje@gmail.com'}>kuznik.refleksje@gmail.com</a> <br/>
                        <a href={'tel:+48 664 185 821'}>+48 664 185 821</a>
                    </address>
                </article>
                <article>
                    <h5>dojazd</h5>
                    <iframe
                        title={'Mapa Google wskazująca adres gabinetu'}
                        className={styles.map}
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2575.0709295823576!2d18.79813261299281!3d49.803534171356894!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47141d59cbf06ce5%3A0xa0be7d8e0f7f8529!2sBielska%2045A%2C%2043-430%20Skocz%C3%B3w!5e0!3m2!1spl!2spl!4v1678725115711!5m2!1spl!2spl"
                        width="369" height="285" allowFullScreen="" loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade" />
                </article>
            </footer>
            <div className={styles.copyright}>made with love by <a href={'https://github.com/gatinhap'} target={'_blank'}>Kotki</a></div>
        </>
    )
}

export default Footer