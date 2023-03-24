import Header from "../Header/Header.jsx";
import Layout from "../Layout/Layout.jsx";
import TextModule from "../TextModule/TextModule.jsx";
import ImageModule from "../ImageModule/ImageModule.jsx";
import magda from "../../assets/magda1.webp";
import Footer from "../Footer/Footer.jsx";
import Logo from "../Logo/Logo.jsx";
import Navigation from "../Navigation/Navigation.jsx";
import './InteriorStyles.less'
import ActionButton from "../ActionButton/ActionButton.jsx";
import InteriorPageTitle from "./InteriorPageTitle.jsx";
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
                <span className={'larger-text'}>&nbsp;</span>
                <InteriorPageTitle>o mnie</InteriorPageTitle>
                <section className={'about-section'}>
                    <TextModule textModuleClass={'about-text-module'}>
                        <p><span className={'larger-text'}>Nazywam się Magdalena Kuźnik. Jestem
                            psychologiem oraz psychoterapeutką w nurcie poznawczo-behawioralnym.</span> Ukończyłam
                            również
                            dwuetapowe szkolenie z terapii EMDR. <span className={'larger-text'}>Prowadzę psychoterapię dla młodzieży i dorosłych&nbsp;</span>
                            zarówno w formie online jak i stacjonarnie w gabinecie. Udzielam także konsultacji
                            psychologicznych.
                        </p>
                        <p> Należę do Towarzystw zrzeszających psychoterapeutów:</p>
                        <ul>
                            <li>Polskie Towarzystwo Terapii Poznawczej i Behawioralnej</li>
                            <li>Polskie Towarzystwo Terapii Dialektyczno-Behawioralnej</li>
                        </ul>
                        <p><span className={'larger-text'}>W swojej pracy kieruję się kodeksami etycznymi zawodu psychologa i psychoterapeuty&nbsp;</span>
                            (ustanowionymi przez towarzystwa terapeutyczne do których należę). Prowadzoną psychoterapię
                            poddaję superwizji indywidualnej i grupowej z certyfikowanymi superwizorami.
                            Na co dzień pracuję z młodzieżą w Poradni Psychologicznej dla Dzieci i
                            Młodzieży w Cieszynie
                            oraz z młodzieżą i dorosłymi w Centrum Rozwoju Osobistego Syntonia w
                            Katowicach i
                            Mikołowie.</p>
                        <p className={'larger-text'}>Od 2017 roku praktykuję zawód psychologa, od 2019 roku zawód
                            psychoterapeuty.
                        </p>
                        <p className={'larger-text'}>Dotychczasowe miejsca zdobywania doświadczenia:</p>
                        <ul>
                            <li>Poradnia Specjalistyczna i Oddziały Górnośląskiego Centrum Zdrowia Dziecka w
                                Katowicach,
                            </li>
                            <li>Oddział Dzienny Psychiatryczny Szpitala Miejskiego w Rudzie Śląskiej,</li>
                            <li>Poradnia Psychologiczno-Pedagogiczna w Skoczowie,</li>
                            <li>Szkoła Podstawowa nr 20 z Oddziałami Integracyjnymi w Siemianowicach Śląskich,</li>
                            <li>II LO im. Jana Matejki w Siemianowicach Śląskich,</li>
                            <li>Oddział Opiekuńczo-Leczniczym Ogólny oraz Psychiatryczny w Centrum Medycznym Sióstr
                                Elżbietanek w Cieszynie.
                            </li>
                        </ul>
                        <p className={'larger-text'}>Swoją wiedzą dzielę się na konferencjach, m.in.:</p>
                        <ul>
                            <li>Jak motywować chorego na cukrzycę. Punkt widzenia psychologa: VI Ogólnopolska
                                Konferencja
                                „Cukrzyca. Od teorii do codziennej praktyki”. 1-2.03.2019, Katowice
                            </li>
                            <li>Jak zachęcić dzieci i ich opiekunów do prozdrowotnego stylu życia: Wojewódzka
                                Konferencja
                                „Czym skorupka za młodu nasiąknie tym na starość trąci… Aktualne polskie i
                                międzynarodowe
                                rekomendacje zdrowego odżywiania dzieci”. 6.06.2018, Katowice
                            </li>
                        </ul>
                        <p><span
                            className={'larger-text'}>Biorę udział w dodatkowych szkoleniach, aby pogłębiać wiedzę.&nbsp;</span>Wybrane
                            dotychczasowe
                            szkolenia, w których uczestniczyłam:</p>
                        <ul>
                            <li>Racjonalna Terapia Zachowania,</li>
                            <li>Zasady prowadzenia grup wsparcia,</li>
                            <li>Dialog Motywujący,</li>
                            <li>Certyfikowany Partner Centrum Zdrowia Psychicznego.</li>
                        </ul>
                        <br/>
                        <ActionButton linkTo={'/contact'}>Umów spotkanie</ActionButton>
                    </TextModule>
                    <ImageModule
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