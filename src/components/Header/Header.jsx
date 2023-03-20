import './Header.less'

const Header = ({children}) => {
    return (
        <div className={'header-wrapper'}>
            <div className={'header-contact-banner'}>
                <div>Magdalena Kuźnik</div>
                <a href={'tel:+48 664 185 821'}>+48 664 185 821</a>
            </div>
            <header>
                {children}
            </header>
        </div>
    )
}

export default Header