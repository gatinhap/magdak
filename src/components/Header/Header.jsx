import './Header.less'

const Header = ({children}) => {
    return (
        <div className={'header-wrapper'}>
            <header>
                {children}
            </header>
        </div>
    )
}

export default Header