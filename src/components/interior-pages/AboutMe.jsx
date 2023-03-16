import Header from "../Header/Header.jsx";
import Layout from "../Layout/Layout.jsx";
import TextModule from "../TextModule/TextModule.jsx";
import ImageModule from "../ImageModule/ImageModule.jsx";
import magda from "../../assets/magda.jpeg";
import Footer from "../Footer/Footer.jsx";
import Logo from "../Logo/Logo.jsx";
import Navigation from "../Navigation/Navigation.jsx";
import './InteriorStyles.less'
import ActionButton from "../ActionButton/ActionButton.jsx";
import InteriorPageTitle from "./InteriorPageTitle.jsx";
import {Link} from "react-router-dom";
import {useEffect} from "react";

const AboutMe = () => {
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
                <InteriorPageTitle>o mnie</InteriorPageTitle>
                <section className={'about-section'}>
                    <TextModule textModuleClass={'about-text-module'}>
                        <p><span className={'large-letters'}>Jestem&nbsp;</span>It is a long established fact that a
                            reader will be distracted by the readable content of a
                            page when looking at its layout. The point of using Lorem Ipsum is that it has a
                            more-or-less normal distribution of letters, as opposed to using 'Content here, content
                            here', making it</p>
                        <p> It is a long established fact that a reader will be distracted by the readable content of a
                            page when looking at its layout. The point of using Lorem Ipsum is that it has a
                            more-or-less normal distribution of letters, as opposed to using 'Content here, content
                            here', making it </p>
                        <br/>
                        <ActionButton linkTo={'/contact'}>Umów spotkanie</ActionButton>
                    </TextModule>
                    <ImageModule
                        loading="lazy"
                        imageClass={'about-image'}
                        imageSrc={magda}
                        alt={'Magdalena Kuźnik'}
                    />
                </section>
            </Layout>
            <Footer footerBackgroundColor={'interior-footer-bg-color'}/>
        </>
    )
}

export default AboutMe