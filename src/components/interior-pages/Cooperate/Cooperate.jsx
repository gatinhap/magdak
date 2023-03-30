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
import sofa from "../../../assets/sofa.webp";
import fotele from '../../../assets/fotele.webp'
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
                        <p>Zapraszam do kontaktu (preferowany kontakt mailowy)
                            jeśli posiadasz swoją działalność jako psychoterapeuta/psycholog i poszukujesz gabinetu
                            pod
                            wynajem.
                        </p>
                        <ActionButton linkTo={'/contact'}>Kontakt</ActionButton>
                        <br/>
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
                    <TextModule textModuleClass={'cooperate-text-module-1'}>
                        <h3>Dołącz do zespołu</h3>
                        <p>Jeśli kształcisz się lub pracujesz jako psychoterapeuta (poznawczo-behawioralny,
                            terapeuta schematów, DBT, ACT, EMDR, terapeuta par i małżeństw, terapeuta rodzin) i chcesz
                            współtworzyć zespół terapeutyczny Gabinetu Psychoterapii Refleksje (umowa B2B), <a rel={'noopener'} href={'mailto:kuznik.refleksje@gmail.com'} className={'underline'}>napisz do mnie</a>.
                        </p>
                    </TextModule>
                </section>
            </Layout>
            <Footer footerBackgroundColor={'interior-footer-bg-color'}/>
        </>
    )
}

export default Cooperate