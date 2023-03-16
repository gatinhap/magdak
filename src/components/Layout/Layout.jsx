import './Layout.css';

const Layout = ({children}) => {
    return (
        <main className={'wrapper'}>
            {children}
        </main>
    )
}

export default Layout