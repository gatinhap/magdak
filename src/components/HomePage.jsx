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
import plant from '../assets/plant.webp'
import TextModule from "./TextModule/TextModule.jsx";
import Footer from "./Footer/Footer.jsx";
import {useEffect, useState} from "react";
import Popup from "reactjs-popup";

function HomePage() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        window.scrollTo({top: 0, left: 0, behavior: "smooth"});
    }, []);

    useEffect(() => {
        const popUp = document.getElementById('top-modal');

        if (isModalOpen) {
            popUp.scrollIntoView();
        }
    }, [isModalOpen]);

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
                    <p>Jako certyfikowana psychoterapeutka i psycholog chętnie podejmę <i>refleksje</i> nad Twoimi
                        problemami i
                        potrzebami. Od 15 roku życia interesuje się zgłębianiem funkcjonowania ludzkiej psychiki -
                        początkowo hobbistycznie, a na dalszej drodze zawodowo. Zapraszam do podjęcia wspólnej pracy nad
                        przezwyciężaniem Twoich trudności.
                    </p>
                </TextSection>
                <TextAndImageSection>
                    <TextModule textModuleClass={'homepage-text-module'}>
                        <h2>KILKA SŁÓW O TERAPII</h2>
                        <p><strong>Terapia poznawczo-behawioralna&nbsp;</strong> to nurt
                            psychoterapii zakładający poprawę jakości życia
                            poprzez modyfikację zachowania i sposobu myślenia.
                        </p>
                        <Popup
                            trigger={
                                <div
                                    className={'read-more'}
                                >
                                    Czytaj dalej...
                                </div>
                            }
                            modal={true}
                            onOpen={() => setIsModalOpen(true)}
                            onClose={() => setIsModalOpen(false)}
                        >
                            {
                                close =>
                                    (
                                        <div id={'top-modal'}>
                                            <p><strong>Terapię poznawczo-behawioralną cechuje:</strong></p>
                                            <ul>
                                                <li>współpraca między terapeutą a pacjentem,</li>
                                                <li>zorientowanie na rozwiązanie problemu,</li>
                                                <li>skupienie na teraźniejszości,</li>
                                                <li>ograniczenie w czasie,</li>
                                                <li>stosowanie odpowiednich technik terapeutycznych.</li>
                                            </ul>
                                            <p>
                                                Skuteczność oddziaływań psychoterapii poznawczo-behawioralnej została
                                                potwierdzona w
                                                licznych badaniach naukowych wpisanych w nurt medycyny opartej na
                                                dowodach
                                                (EBM
                                                -
                                                evidence
                                                based medicine).
                                            </p>
                                            <p>Terapia poznawczo-behawioralna przeszła w ciągu niemal 80 lat ewolucję,
                                                od
                                                terapii
                                                behawioralnej, poprzez poznawczą, do form terapii określanych obecnie
                                                mianem
                                                „trzeciej fali”
                                                (należą do niej między innymi: terapia oparta na akceptacji i
                                                zaangażowaniu
                                                -
                                                ACT
                                                oraz
                                                dialektyczna terapia behawioralna - DBT).</p>
                                            <p>Więcej na:&nbsp;
                                                <a
                                                    className={'read-more'}
                                                    href={'https://www.pttpb.pl'}
                                                    target="_blank"
                                                    rel="noopener"
                                                >
                                                    https://www.pttpb.pl
                                                </a>
                                            </p>
                                            <p
                                                className={'read-more close'}
                                                onClick={() => {
                                                    close()
                                                }}
                                            >
                                                Zamknij okno
                                            </p>
                                        </div>
                                    )
                            }
                        </Popup>
                        <br/>
                        <p><strong>Terapia EMDR&nbsp;</strong>to
                            metoda leczenia stresu pourazowego i innych zaburzeń psychicznych poprzez przetworzenie
                            trudnych wspomnień z wykorzystaniem stymulacji wzrokowej (ruchy gałek ocznych).
                        </p>
                        <Popup
                            trigger={
                                <div
                                    className={'read-more'}
                                >
                                    Czytaj dalej...
                                </div>
                            }
                            modal={true}
                            onOpen={() => setIsModalOpen(true)}
                            onClose={() => setIsModalOpen(false)}
                        >
                            {
                                close =>
                                    (
                                        <div id={'top-modal'}>
                                            <p><strong>Terapia EMDR (z angielskiego – Eye Movement Desensitization and
                                                Reprocesing)
                                            </strong></p>
                                            <p>W terapii EMDR wykorzystuje się bilateralną stymulację co oznacza w
                                                praktyce
                                                podążanie
                                                wzrokiem przez pacjenta za horyzontalnym ruchem dłoni terapeuty. Formą
                                                stymulacji
                                                bilateralnej jest także “tapping” polegający na naprzemiennej stymulacji
                                                dotykowej
                                                (np.
                                                opukiwanie dłoni). Stwierdzono, że tego rodzaju stymulacja wykonywana w
                                                określonym
                                                kontekście pomaga mózgowi przetworzyć trudne wspomnienia oraz zmniejszyć
                                                intensywność
                                                niepokojących myśli i emocji. </p>
                                            <p>Obecnie metoda EMDR jest rekomendowana przez WHO i Amerykańskie
                                                Towarzystwo
                                                Psychiatryczne i Psychologiczne jako skuteczna metoda leczenia stresu
                                                pourazowego.
                                                Aktualnie EMDR znajduje również zastosowanie w leczeniu innych zaburzeń
                                                psychicznych
                                                np. zaburzeniach lękowych oraz depresji.</p>
                                            <p>Więcej na:&nbsp;
                                                <a
                                                    className={'read-more'}
                                                    href={'https://emdr.org.pl/o-emdr/'}
                                                    target="_blank"
                                                    rel="noopener"
                                                >
                                                    https://emdr.org.pl/o-emdr
                                                </a>
                                            </p>
                                            <p
                                                className={'read-more close'}
                                                onClick={() => {
                                                    close()
                                                }}
                                            >
                                                Zamknij okno
                                            </p>
                                        </div>
                                    )
                            }
                        </Popup>
                    </TextModule>
                    <ImageModule
                        imageClass={'homepage-image'}
                        imageSrc={plant}
                        alt={'zdjęcie roślinki'}
                    />
                </TextAndImageSection>
            </Layout>
            <Footer footerBackgroundColor={'footer-homepage-bg-color'}/>
        </>
    )
}

export default HomePage
