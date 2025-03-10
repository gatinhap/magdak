import Header from '../Header/Header.jsx';
import Layout from '../Layout/Layout.jsx';
import TextModule from '../TextModule/TextModule.jsx';
import ImageModule from '../ImageModule/ImageModule.jsx';
import magda from '../../assets/madzia.jpg';
import Footer from '../Footer/Footer.jsx';
import Logo from '../Logo/Logo.jsx';
import Navigation from '../Navigation/Navigation.jsx';
import './InteriorStyles.less';
import ActionButton from '../ActionButton/ActionButton.jsx';
import InteriorPageTitle from './InteriorPageTitle.jsx';
import { useEffect } from 'react';

import emdr from '../../assets/emdr.pdf';

const AboutMe = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <>
      <Header>
        <Logo />
        <Navigation />
      </Header>
      <Layout>
        <span className={'larger-text'}>&nbsp;</span>
        <InteriorPageTitle>o mnie</InteriorPageTitle>
        <section className={'about-section'}>
          <TextModule textModuleClass={'about-text-module'}>
            <p>
              <span className={'larger-text'}>
                Nazywam się Magdalena Kuźnik. Jestem psychologiem oraz
                certyfikowaną psychoterapeutką terapii poznawczo-behawioralnej
                (certyfikat psychoterapeuty poznawczo-behawioralnego PTTPB nr
                1461) i terapii EMDR (
                <a
                  className={'underline'}
                  target={'_blank'}
                  rel={'noreferrer'}
                  href={emdr}
                >
                  certyfikat.pdf
                </a>
                ).
              </span>
              <p>
                Psychoterapię poznawczo-behawioralną prowadzę w formie
                stacjonarnej oraz online; terapię EMDR tylko stacjonarnie.
                Udzielam także pomocy w formie konsultacji.
              </p>
              <p className={'larger-text'}>
                Gabinet Psychoterapii Refleksje prowadzę w dwóch lokalizacjach:
                Skoczów oraz Katowice. Aktualnie przyjmuję zapisy jedynie osób
                od 18 roku życia w lokalizacji Skoczów.
              </p>
            </p>
            <p> Należę do Towarzystw zrzeszających psychoterapeutów m.in.:</p>
            <ul>
              <li>Polskie Towarzystwo Terapii Poznawczej i Behawioralnej</li>
              <li>Polskie Towarzystwo Terapii Dialektyczno-Behawioralnej</li>
            </ul>
            <p>
              <span className={'larger-text'}>
                W swojej pracy kieruję się kodeksami etycznymi zawodu psychologa
                i psychoterapeuty&nbsp;
              </span>
              (ustanowionymi przez towarzystwa terapeutyczne do których należę).
              Prowadzoną psychoterapię poddaję superwizji indywidualnej i
              grupowej z certyfikowanymi superwizorami.
            </p>
            <p className={'larger-text'}>
              Od 2017 roku praktykuję zawód psychologa, od 2019 roku zawód
              psychoterapeuty.
            </p>
            <p className={'larger-text'}>
              Wybrane, dotychczasowe miejsca zdobywania doświadczenia:
            </p>
            <ul>
              <li>
                Poradnia Specjalistyczna i Oddziały Górnośląskiego Centrum
                Zdrowia Dziecka w Katowicach,
              </li>
              <li>
                Oddział Opiekuńczo-Leczniczym Ogólny oraz Psychiatryczny w
                Centrum Medycznym Sióstr Elżbietanek w Cieszynie,
              </li>
              <li>
                Oddział Dzienny Psychiatryczny Szpitala Miejskiego w Rudzie
                Śląskiej,
              </li>
              <li>
                Poradnia Psychologiczna dla Dzieci i Młodzieży, ZZOZ Szpital
                Śląski w Cieszynie.
              </li>
            </ul>
            <p>
              Współpracuję także z zespołem specjalistów w ramach Centrum
              Rozwoju Osobistego Syntonia w Mikołowie.
            </p>
            <p className={'larger-text'}>
              Na bieżąco pogłębiam wiedzę poprzez udział w szkoleniach i
              konferencjach.
            </p>
            <br />
            <ActionButton linkTo={'/contact'}>Umów spotkanie</ActionButton>
          </TextModule>
          <ImageModule
            imageClass={'about-image'}
            imageSrc={magda}
            alt={'Magdalena Kuźnik'}
          />
        </section>
      </Layout>
      <Footer footerBackgroundColor={'interior-footer-bg-color'} />
    </>
  );
};

export default AboutMe;
