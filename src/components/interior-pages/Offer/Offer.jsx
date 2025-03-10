import Header from '../../Header/Header.jsx';
import Logo from '../../Logo/Logo.jsx';
import Navigation from '../../Navigation/Navigation.jsx';
import Layout from '../../Layout/Layout.jsx';
import InteriorPageTitle from '../InteriorPageTitle.jsx';
import OfferCard from './OfferCard.jsx';
import Footer from '../../Footer/Footer.jsx';

import './Offer.less';
import { useEffect } from 'react';
import ActionButton from '../../ActionButton/ActionButton.jsx';

const Offer = () => {
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
        <InteriorPageTitle>oferta</InteriorPageTitle>
        <section className={'offer-section'}>
          <OfferCard>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
              <path d="M175.1 72.57C175.1 32.49 208.5 .0003 248.6 .0003C267.8 .0003 286.3 7.646 299.9 21.26L319.1 41.37L340.1 21.26C353.7 7.646 372.2 0 391.4 0C431.5 0 464 32.49 464 72.57V77.4C464 98.79 455.1 119.2 439.5 133.9L336.4 230.5C327.2 239.2 312.8 239.2 303.6 230.5L200.5 133.9C184.9 119.2 175.1 98.79 175.1 77.4V72.57zM39.1 64C62.09 64 79.1 81.91 79.1 104V264.2C79.1 281.2 86.74 297.5 98.74 309.5L149.8 360.6C158.1 368.9 171.1 370.1 180.8 363.7C193.7 355 195.5 336.8 184.6 325.8L137.4 278.6C124.9 266.1 124.9 245.9 137.4 233.4C149.9 220.9 170.1 220.9 182.6 233.4L255.2 305.9C276.2 326.9 288 355.4 288 385.1V464C288 490.5 266.5 512 240 512H173.3C156.3 512 140 505.3 128 493.3L28.12 393.4C10.11 375.4 0 350.1 0 325.5V104C0 81.91 17.91 64 40 64L39.1 64zM640 104V325.5C640 350.1 629.9 375.4 611.9 393.4L512 493.3C499.1 505.3 483.7 512 466.7 512H400C373.5 512 352 490.5 352 464V385.1C352 355.4 363.8 326.9 384.8 305.9L457.4 233.4C469.9 220.9 490.1 220.9 502.6 233.4C515.1 245.9 515.1 266.1 502.6 278.6L455.4 325.8C444.5 336.8 446.3 355 459.2 363.7C468.9 370.1 481.9 368.9 490.2 360.6L541.3 309.5C553.3 297.5 560 281.2 560 264.2V104C560 81.91 577.9 64 600 64C622.1 64 640 81.91 640 104L640 104z" />
            </svg>
            <h6>Sesja psychoterapii/konsultacja</h6>
            <div>180 zł</div>
          </OfferCard>
          <OfferCard>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.8 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z" />
            </svg>
            <h6>Wydanie zaświadczenia o leczeniu</h6>
            <div>50 zł</div>
          </OfferCard>
          <OfferCard>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
              <path d="M320 0H64C28.65 0 0 28.65 0 64v384c0 35.35 28.65 64 64 64h256c35.35 0 64-28.65 64-64V64C384 28.65 355.3 0 320 0zM208 352h-128C71.16 352 64 344.8 64 336S71.16 320 80 320h128c8.838 0 16 7.164 16 16S216.8 352 208 352zM304 256h-224C71.16 256 64 248.8 64 240S71.16 224 80 224h224C312.8 224 320 231.2 320 240S312.8 256 304 256zM304 160h-224C71.16 160 64 152.8 64 144S71.16 128 80 128h224C312.8 128 320 135.2 320 144S312.8 160 304 160z" />
            </svg>
            <h6>Wydanie opinii po konsultacjach / z przebiegu terapii</h6>
            <div>100 zł</div>
          </OfferCard>
          <div className={'offer-button-holder'}>
            <ActionButton linkTo={'/contact'}>Umów spotkanie</ActionButton>
          </div>
          <div className={'offer-text'}>
            <p>
              Dane do przelewu:
              <br />
              Gabinet Psychoterapii Magdalena Kuźnik
              <br />
              <span className={'selectAll'}>
                37 1140 2004 0000 3402 8352 9628
              </span>
            </p>
          </div>
          <div className={'offer-regulations'}>
            <h3>
              Regulamin współpracy z Gabinetem Psychoterapii Magdalena Kuźnik
              „Refleksje”
            </h3>
            <ol>
              <li>
                Terapeuta pracuje zgodnie z kodeksem etycznym, który zobowiązuje
                do tajemnicy zawodowej. Terapeuta zwolniony jest z tajemnicy w
                sytuacji zagrożenia życia/zdrowia Pacjenta lub innych osób.
              </li>
              <li>Konsultacja/sesja trwa 50 min.</li>
              <li>
                Koszt konsultacji/sesji według cennika. Cennik może ulec
                zmianie, o czym Pacjent będzie informowany z 2-miesięcznym
                wyprzedzeniem.
              </li>
              <li>
                Płatność gotówką odbywa się bezpośrednio po zakończeniu
                spotkania. Wpłata bezgotówkowa możliwa jest przelewem na konto
                lub blik na telefon w dniu sesji.
              </li>
              <li>
                Odwołanie spotkania terapeutycznego zarówno przez Pacjenta jak i
                Terapeutę może nastąpić telefonicznie lub mailowo z co najmniej
                24-godzinnym wyprzedzeniem przed terminem umówionego uprzednio
                spotkania terapeutycznego.
              </li>
              <li>
                W przypadku, gdy Pacjent nie powiadomi Terapeuty o odwołaniu
                spotkania terapeutycznego, zobowiązany jest do pokrycia 100%
                opłaty za umówioną sesję, pomimo braku jej realizacji.
              </li>
              <li>
                Jeśli Terapeuta odwoła sesję po ustalonym czasie 24 godzin przed
                sesją, kolejna sesja jest bezpłatna dla Pacjenta.
              </li>
              <li>
                Wyjątkiem od powyższych punktów 5. 6. i 7. są tylko następujące
                sytuacje:
                <ul>
                  <li>nagła choroba własna;</li>
                  <li>
                    nagła choroba własnego dziecka - tylko w przypadku braku
                    możliwości skorzystania z pomocy partnera, członków rodziny,
                    znajomych, opiekunki;
                  </li>
                  <li>
                    nagły wypadek (np. skręcenie nogi, wypadek samochodowy,
                    który ma miejsce w dniu terapii);
                  </li>
                  <li>śmierć bliskiej osoby;</li>
                  <li>
                    awaria w mieszkaniu lub w domu, która wystąpiła w dniu
                    umówionej wizyty.
                  </li>
                </ul>
              </li>
              <li>
                W przypadku, gdy Pacjent spóźni się na spotkanie, nie istnieje
                możliwość przedłużenia sesji.
              </li>
              <li>
                W przypadku spóźnienia Terapeuty, wspólnie ustala się która
                sesja zostanie przedłużona o czas spóźnienia.
              </li>
              <li>
                Sesja on-line (poprzez komunikator Skype, WhatsApp):
                <ul>
                  <li>
                    sesje odbywają się po potwierdzeniu opłaty za spotkania;
                  </li>
                  <li>
                    w przypadku złej jakości łącza ze strony Pacjenta
                    (uniemożliwiającej prowadzenie płynnej konwersacji),
                    spotkanie może zostać wcześniej zakończone za obopólną
                    zgodą. W takiej sytuacji opłata pobierana jest jak za całą
                    sesję;
                  </li>
                  <li>
                    w przypadku złej jakości łącza ze strony Terapeuty ustala
                    się przedłużenie wybranej sesji o czas, który nie został
                    zrealizowany.
                  </li>
                </ul>
              </li>
              <li>
                Ewentualne konsultacje telefoniczne między sesjami ustalane są
                indywidualnie.
              </li>
              <li>
                Rozpoczęcie procesu psychoterapii poprzedzone jest 1-4
                konsultacjami. Jeśli Pacjent nie zdecyduje się na podjęcie
                psychoterapii istnieje możliwość dalszego korzystania z
                konsultacji.
              </li>
            </ol>
          </div>
        </section>
      </Layout>
      <Footer footerBackgroundColor={'interior-footer-bg-color'} />
    </>
  );
};

export default Offer;
