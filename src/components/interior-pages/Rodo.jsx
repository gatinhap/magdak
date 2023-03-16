import Header from "../Header/Header.jsx";
import Logo from "../Logo/Logo.jsx";
import Navigation from "../Navigation/Navigation.jsx";
import Layout from "../Layout/Layout.jsx";
import InteriorPageTitle from "./InteriorPageTitle.jsx";
import Footer from "../Footer/Footer.jsx";
import {useEffect} from "react";

const Rodo = () => {
    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: "smooth"})
    }, [])

    return (
        <>
            <Header>
                <Logo/>
                <Navigation/>
            </Header>
            <Layout>
                <InteriorPageTitle>rodo</InteriorPageTitle>
                <section className={'rodo-section'}>
                    <p><span className={'large-letters'}>Jestem&nbsp;</span>It is a long established fact that a
                        reader will be distracted by the readable content of a
                        page when looking at its layout. The point of using Lorem Ipsum is that it has a
                        more-or-less normal distribution of letters, as opposed to using 'Content here, content
                        here', making it</p>
                    <br/>
                    <p> It is a long established fact that a reader will be distracted by the readable content of a
                        page when looking at its layout. The point of using Lorem Ipsum is that it has a
                        more-or-less normal distribution of letters, as opposed to using 'Content here, content
                        here', making it </p>
                    <br/>
                    <p> It is a long established fact that a reader will be distracted by the readable content of a
                        page when looking at its layout. The point of using Lorem Ipsum is that it has a
                        more-or-less normal distribution of letters, as opposed to using 'Content here, content
                        here', making it </p>
                </section>
            </Layout>
            <Footer footerBackgroundColor={'interior-footer-bg-color'}/>
        </>
    )
}

export default Rodo