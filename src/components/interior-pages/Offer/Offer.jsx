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
            <h6>
              Wydanie pisemnej informacji po konsultacjach/z przebiegu terapii
            </h6>
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
            <h3>Zasady współpracy: Gabinet Psychoterapii Magdalena Kuźnik</h3>

            <h4>
              Niniejszy dokument określa podstawowe zasady współpracy
              obowiązujące podczas konsultacji psychologicznych oraz
              psychoterapii prowadzonej w gabinecie.
            </h4>
            <ol>
              <li>
                <p>
                  <strong>Poufność</strong>
                </p>
                Wszystkie informacje przekazywane podczas spotkań objęte są
                tajemnicą zawodową i zasadą poufności. Poufność może zostać
                ograniczona wyłącznie w sytuacjach przewidzianych przepisami
                prawa lub zasadami etyki zawodowej, w szczególności gdy istnieje
                zagrożenie życia lub zdrowia klienta bądź innych osób. W
                przypadku osób małoletnich rodzice lub opiekunowie prawni mogą
                otrzymywać informacje dotyczące przebiegu współpracy w zakresie
                niezbędnym do zapewnienia bezpieczeństwa i realizacji procesu
                pomocy psychologicznej, z poszanowaniem prawa małoletniego do
                prywatności.
              </li>

              <li>
                <p>
                  <strong>Czas trwania spotkania</strong>
                </p>
                Jedno spotkanie trwa 50 minut.
              </li>

              <li>
                <p>
                  <strong>Koszt wizyty</strong>
                </p>
                Koszt jednej wizyty wynosi 180 zł.
                <br />
                Gabinet zastrzega sobie możliwość zmiany ceny usług. O
                planowanej zmianie klient zostanie poinformowany z co najmniej
                dwumiesięcznym wyprzedzeniem.
              </li>

              <li>
                <p>
                  <strong>Płatności</strong>
                </p>
                Płatność gotówką odbywa się bezpośrednio po zakończeniu
                spotkania. Wpłata bezgotówkowa możliwa jest przelewem na konto
                najpóźniej w dniu sesji.
                <p>Dane do przelewu:</p>
                <p>Gabinet Psychoterapii Magdalena Kuźnik</p>
                <p>37 1140 2004 0000 3402 8352 9628</p>
                <p>Dane do przelewu na telefon: 664185821</p>
              </li>

              <li>
                <p>
                  <strong>Odwoływanie wizyt przez klienta</strong>
                </p>
                Klient może bezpłatnie odwołać lub przełożyć wizytę najpóźniej
                48 godzin przed umówionym terminem. Wizyty odwołane później niż
                48 godzin przed terminem są płatne. W wyjątkowych sytuacjach
                losowych lub zdrowotnych terapeuta może odstąpić od pobrania
                opłaty według własnej oceny okoliczności.
              </li>

              <li>
                <p>
                  <strong>Odwoływanie wizyt przez terapeutę</strong>
                </p>
                Terapeuta ma prawo odwołać lub przełożyć wizytę z ważnych
                przyczyn losowych, zdrowotnych, rodzinnych lub innych
                okoliczności uniemożliwiających przeprowadzenie spotkania. O
                zmianie terminu klient zostanie poinformowany tak szybko, jak
                będzie to możliwe. W takim przypadku strony ustalają nowy termin
                spotkania.
              </li>

              <li>
                <p>
                  <strong>Spóźnienia</strong>
                </p>
                W przypadku spóźnienia klienta spotkanie kończy się o ustalonej
                godzinie, a jego koszt pozostaje bez zmian. Jeżeli terapeuta
                spóźni się na wizytę, czas spotkania zostanie odpowiednio
                wydłużony, jeśli będzie to organizacyjnie możliwe. W przeciwnym
                razie wspólnie ustala się która sesja zostanie przedłużona o
                czas spóźnienia.
              </li>

              <li>
                <p>
                  <strong>Sesja on-line/teleporady</strong>
                </p>
                <ol type="a">
                  <li>
                    Sesje odbywają się po potwierdzeniu opłaty za spotkania;
                  </li>
                  <li>
                    w przypadku złej jakości łącza ze strony klienta
                    (uniemożliwiającej prowadzenie płynnej konwersacji),
                    spotkanie może zostać wcześniej zakończone za obopólną
                    zgodą. W takiej sytuacji opłata pobierana jest jak za całą
                    sesję;
                  </li>
                  <li>
                    w przypadku złej jakości łącza ze strony terapeuty ustala
                    się przedłużenie wybranej sesji o czas, który nie został
                    zrealizowany.
                  </li>
                </ol>
                Konsultacje telefoniczne lub mailowe między sesjami ustalane są
                indywidualnie. Koszt konsultacji telefonicznej zgodnie z
                aktualnym cennikiem.
              </li>

              <li>
                <p>
                  <strong>Charakter współpracy</strong>
                </p>
                Pierwsze spotkania mają charakter konsultacyjny i służą
                rozpoznaniu zgłaszanych trudności, potrzeb klienta oraz
                ustaleniu najbardziej odpowiedniej formy pomocy.
                <p>Po kilku konsultacjach możliwe jest:</p>
                <ul>
                  <li>rozpoczęcie psychoterapii,</li>
                  <li>
                    kontynuowanie współpracy w formule konsultacji
                    psychologicznych,
                  </li>
                  <li>
                    uzyskanie rekomendacji dotyczących innej formy wsparcia lub
                    specjalistycznej pomocy.
                  </li>
                </ul>
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
