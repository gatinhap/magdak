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
                    <h3>Klauzula informacyjna RODO</h3>
                    <p>Z dniem 25 maja 2018 roku obowiązuje Rozporządzenie Parlamentu Europejskiego i Rady (UE) 2016/679
                        z dnia 27 kwietnia 2016 roku w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych
                        osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE
                        (ogólne rozporządzenie o ochronie danych, dalej: RODO). W związku z powyższym informuję, iż na
                        podstawie art. 13 RODO od dnia 25 maja 2018 roku będą Pani/Panu przysługiwały określone poniżej
                        prawa związane z przetwarzaniem Pani/Pana danych osobowych:
                    </p>
                    <ol>
                        <li>
                            Administratorem danych osobowych jest firma Gabinet Psychoterapii Magdalena Kuźnik (zwana
                            dalej: Gabinetem psychoterapii) NIP: 9542824268. We wszelkich sprawach związanych z
                            przetwarzaniem Pani/Pana danych osobowych można skontaktować się z Administratorem pod
                            adresem mailowym: kuznik.refleksje@gmail.com lub pod numerem telefonu 664 185 821. Nie
                            wyznaczono inspektora ochrony danych.
                        </li>
                        <li>
                            Dane osobowe klienta są pozyskiwane bezpośrednio od klienta podczas wizyt, rozmów
                            telefonicznych, wiadomości tekstowych i elektronicznych związanych z wykonywaniem usług
                            psychologiczno-psychoterapeutycznych na <strong>podstawie pisemnej zgody</strong>, która
                            może zostać odwołana
                            w dowolnym czasie.
                        </li>
                        <li>
                            Podanie Pani/Pana danych osobowych jest dobrowolne, ale niezbędne do zawarcia i realizacji
                            umowy.
                        </li>
                        <li>
                            W celu świadczenia usług psychologiczno-psychoterapeutycznych mogą być potrzebne następujące
                            dane klienta: imię i nazwisko, data urodzenia, adres zamieszkania, stopień pokrewieństwa (w
                            przypadku osób zgłaszanych przez członka rodziny), numer telefonu, adres e-mail. Podczas
                            świadczenia usług psychologiczno-psychoterapeutycznych może być utworzona dokumentacja, w
                            której są zawarte niezbędne informacje dotyczące procesu psychoterapii, w szczególności
                            informacje o stanie zdrowia, wyniki badań oraz informacje o nałogach i życiu osobistym.
                            Informacje te warunkują postawienie właściwej diagnozy, jak i zastosowanie w sposób właściwy
                            procesu psychoterapii.
                        </li>
                        <li>
                            <p>Gabinet psychoterapii przetwarza dane osobowe w celu:</p>
                            <ul>
                                <li>świadczenia usług psychologiczno-psychoterapeutycznych,</li>
                                <li>skontaktowania się z klientem pod podanym przez niego numerem telefonu lub adresem
                                    mailowym w celu dokonania ustaleń związanych z terminami wizyt,
                                </li>
                                <li>
                                    prowadzenia ksiąg rachunkowych, co związane jest z przetwarzaniem danych osobowych
                                    klienta w przypadku wystawiania rachunków/faktur i regulowania należności za
                                    wykonane usługi.
                                </li>
                            </ul>
                        </li>
                        <li>
                            W związku z przetwarzaniem danych w celach wskazanych w punkcie 5. dane osobowe klienta nie
                            będą udostępniane innym odbiorcom lub kategoriom odbiorców danych osobowych. Udostępnianie
                            danych osobowych może nastąpić wyłącznie w uzasadnionych przypadkach i na podstawie
                            odpowiednich przepisów prawa (mogą to być podmioty świadczące dla Administratora usługi
                            księgowo-podatkowe, teleinformatyczne, prawne).
                        </li>
                        <li>
                            Dane osobowe nie są przetwarzane w sposób zautomatyzowany. Państwa dane nie będą
                            przekazywane poza teren Europejskiego Obszaru Gospodarczego.
                        </li>
                        <li>
                            Wszelkie dane osobowe zgromadzone w ramach świadczenia usług
                            psychologiczno-psychoterapeutycznych przetwarzane są przez 5 lat (liczone od ostatniego dnia
                            roku, w którym nastąpiła ostatnia wizyta) chyba, że obowiązujące prawo stanowi inaczej (np.
                            w kwestii dokumentacji księgowej). Po upływie tego okresu dane klienta są usuwane lub
                            anonimizowane.
                        </li>
                        <li>
                            W związku z przetwarzaniem przez Gabinet psychoterapii danych osobowych, klientowi
                            przysługuje prawo do dostępu do treści udostępnionych danych i ich poprawiania,
                            sprostowania, usunięcia, ograniczenia przetwarzania, przenoszenia danych, wniesienia
                            sprzeciwu, cofnięcia zgody na przetwarzanie.
                        </li>
                    </ol>
                </section>
            </Layout>
            <Footer footerBackgroundColor={'interior-footer-bg-color'}/>
        </>
    )
}

export default Rodo