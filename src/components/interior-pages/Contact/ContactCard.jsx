import styles from './contact.module.less'

const ContactCard = ({children}) => {
    return (
        <article className={styles.contactCard}>
            {children}
        </article>
    )
}

export default ContactCard