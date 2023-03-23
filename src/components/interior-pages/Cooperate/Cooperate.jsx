import './Cooperate.less'
import Header from "../../Header/Header.jsx";
import Logo from "../../Logo/Logo.jsx";
import Navigation from "../../Navigation/Navigation.jsx";
import Layout from "../../Layout/Layout.jsx";
import InteriorPageTitle from "../InteriorPageTitle.jsx";
import Footer from "../../Footer/Footer.jsx";
import TextModule from "../../TextModule/TextModule.jsx";
import ActionButton from "../../ActionButton/ActionButton.jsx";
import ImageModule from "../../ImageModule/ImageModule.jsx";
import sofa from "../../../assets/sofa.png";
import fotele from '../../../assets/fotele.png'
import {useEffect} from "react";

const Cooperate = () => {
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
                <InteriorPageTitle>współpraca</InteriorPageTitle>
                <section className={'cooperate-section'}>
                    <TextModule textModuleClass={'cooperate-text-module'}>
                        <h3>Wynajem gabinetu </h3>
                        <p>It is a long established fact that a
                            reader will be distracted by the readable content of a
                            page when looking at its layout. The point of using Lorem Ipsum is that it has a
                            more-or-less normal distribution of letters, as opposed to using 'Content here, content
                            here', making it</p>
                        <ActionButton linkTo={'/contact'}>Kontakt</ActionButton>
                    </TextModule>
                    <ImageModule
                        imageClass={'cooperate-image-1'}
                        imageSrc={sofa}
                        alt={'zdjęcie gabinetu - sofa'}
                    />
                    <ImageModule
                        imageClass={'cooperate-image-2'}
                        imageSrc={fotele}
                        alt={'zdjęcie gabinetu - fotele'}
                    />
                </section>
            </Layout>
            <Footer footerBackgroundColor={'interior-footer-bg-color'}/>
        </>
    )
}

export default Cooperate