import Layout from "./Layout/Layout.jsx";
import Header from "./Header/Header.jsx";
import Navigation from "./Navigation/Navigation.jsx";
import Logo from "./Logo/Logo.jsx";
import Slideshow from "./Slideshow/Slideshow.jsx";
import ActionButton from "./ActionButton/ActionButton.jsx";
import SlideshowImage from "./Slideshow/SlideshowImage.jsx";
import SlideshowText from "./Slideshow/SlideshowText.jsx";
import SlideshowCaption from "./Slideshow/SlideshowCaption.jsx";
import TextSection from "./TextSection/TextSection.jsx";
import TextAndImageSection from "./TextAndImageSection/TextAndImageSection.jsx";
import ImageModule from "./ImageModule/ImageModule.jsx";
import plant from '../assets/plant.jpeg'
import TextModule from "./TextModule/TextModule.jsx";
import Footer from "./Footer/Footer.jsx";
import {useEffect} from "react";

function HomePage() {
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
                <Slideshow>
                    <SlideshowText>
                        <SlideshowCaption>ZAPRASZAM DO KONTAKTU</SlideshowCaption>
                        <h1>GABINET PSYCHOTERAPII REFLEKSJE</h1>
                        <ActionButton linkTo={'/contact'}>
                            Umów spotkanie
                        </ActionButton>
                    </SlideshowText>
                    <SlideshowImage/>
                </Slideshow>
                <TextSection>
                    <h3>Witaj, nazywam się Magdalena Kuźnik</h3>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page
                        when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                        distribution of letters, as opposed to using 'Content here, content here', making it </p>
                </TextSection>
                <TextAndImageSection>
                    <TextModule textModuleClass={'homepage-text-module'}>
                        <h2>KILKA SŁÓW O TERAPII</h2>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a
                            page when looking at its layout. The point of using Lorem Ipsum is that it has a
                            more-or-less normal distribution of letters, as opposed to using 'Content here, content
                            here', making it</p>
                        <br/>
                        <p> It is a long established fact that a reader will be distracted by the readable content of a
                            page when looking at its layout. The point of using Lorem Ipsum is that it has a
                            more-or-less normal distribution of letters, as opposed to using 'Content here, content
                            here', making it </p>
                    </TextModule>
                    <ImageModule
                        imageClass={'homepage-image'}
                        imageSrc={plant}
                        alt={'zdjęcie roślinki'}
                        loading="lazy"
                    />
                </TextAndImageSection>
            </Layout>
            <Footer footerBackgroundColor={'footer-homepage-bg-color'}/>
        </>
    )
}

export default HomePage
