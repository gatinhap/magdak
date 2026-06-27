import Header from '../Header/Header.jsx';
import Logo from '../Logo/Logo.jsx';
import Navigation from '../Navigation/Navigation.jsx';
import Layout from '../Layout/Layout.jsx';
import InteriorPageTitle from './InteriorPageTitle.jsx';
import Footer from '../Footer/Footer.jsx';
import { useEffect } from 'react';

const Rodo = () => {
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
        <InteriorPageTitle>rodo</InteriorPageTitle>
        <section className={'rodo-section'}>
          <h3>
            KLAUZULA INFORMACYJNA DOTYCZĄCA PRZETWARZANIA DANYCH OSOBOWYCH
          </h3>

          <p>
            <strong>
              Zgodnie z art. 13 Rozporządzenia Parlamentu Europejskiego i Rady
              (UE) 2016/679 z dnia 27 kwietnia 2016 r. (RODO) informuję, że:
            </strong>
          </p>

          <ol>
            <li>
              <p>
                <strong>Administrator danych</strong>
              </p>
              Administratorem Pani/Pana danych osobowych jest Magdalena Kuźnik
              prowadząca działalność gospodarczą pod firmą Gabinet Psychoterapii
              Magdalena Kuźnik, NIP: 9542824268, z siedzibą pod adresem Bielska
              45A, 43-430 Skoczów. Kontakt z Administratorem jest możliwy pod
              adresem e-mail: kuznik.refleksje@gmail.com lub numerem telefonu:
              664 185 821. Administrator nie wyznaczył Inspektora Ochrony
              Danych.
            </li>

            <li>
              <p>
                <strong>Zakres przetwarzanych danych</strong>
              </p>
              Przetwarzane mogą być następujące dane osobowe:
              <ul>
                <li>imię i nazwisko,</li>
                <li>data urodzenia,</li>
                <li>adres zamieszkania,</li>
                <li>numer telefonu,</li>
                <li>adres e-mail,</li>
                <li>
                  dane dotyczące rodziców lub opiekunów prawnych (w przypadku
                  osób małoletnich),
                </li>
                <li>
                  inne dane przekazane dobrowolnie w związku ze świadczeniem
                  usług psychologicznych lub psychoterapeutycznych.
                </li>
              </ul>
              <br />W toku konsultacji psychologicznych lub psychoterapii mogą
              być przetwarzane również szczególne kategorie danych osobowych, w
              szczególności informacje dotyczące zdrowia psychicznego i
              fizycznego, sytuacji rodzinnej, życiowej oraz innych okoliczności
              niezbędnych do udzielenia profesjonalnej pomocy psychologicznej.
            </li>

            <li>
              <p>
                <strong>Cele i podstawy przetwarzania danych</strong>
              </p>
              Dane osobowe są przetwarzane w celu:
              <ol type="a">
                <li>
                  świadczenia usług psychologicznych i psychoterapeutycznych
                  oraz prowadzenia dokumentacji związanej z udzielaną pomocą,
                </li>
                <li>
                  kontaktu z klientem w sprawach związanych z organizacją wizyt,
                </li>
                <li>
                  realizacji obowiązków wynikających z przepisów prawa, w
                  szczególności podatkowych i rachunkowych,
                </li>
                <li>dochodzenia lub obrony przed ewentualnymi roszczeniami.</li>
              </ol>
              Podstawą prawną przetwarzania danych jest:
              <ul>
                <li>
                  art. 6 ust. 1 lit. b RODO – podjęcie działań przed zawarciem
                  umowy oraz wykonanie umowy,
                </li>
                <li>
                  art. 6 ust. 1 lit. c RODO – wypełnienie obowiązków prawnych
                  ciążących na Administratorze,
                </li>
                <li>
                  art. 6 ust. 1 lit. f RODO – prawnie uzasadniony interes
                  Administratora, polegający m.in. na organizacji pracy gabinetu
                  i ochronie przed roszczeniami,
                </li>
                <li>
                  art. 9 ust. 2 lit. h RODO – świadczenie pomocy psychologicznej
                  i psychoterapeutycznej oraz prowadzenie związanej z nią
                  dokumentacji.
                </li>
              </ul>
            </li>

            <li>
              <p>
                <strong>Odbiorcy danych</strong>
              </p>
              Dane osobowe mogą być przekazywane podmiotom współpracującym z
              Administratorem wyłącznie w zakresie niezbędnym do realizacji
              wskazanych celów, w szczególności:
              <ul>
                <li>podmiotom świadczącym usługi księgowe,</li>
                <li>
                  podmiotom świadczącym usługi informatyczne i
                  teleinformatyczne,
                </li>
                <li>kancelariom prawnym,</li>
                <li>
                  podmiotom zapewniającym obsługę poczty elektronicznej,
                  hostingu lub przechowywania danych.
                </li>
              </ul>
              Dane mogą być również udostępniane podmiotom uprawnionym na
              podstawie obowiązujących przepisów prawa.
            </li>

            <li>
              <p>
                <strong>
                  Przekazywanie danych poza Europejski Obszar Gospodarczy
                </strong>
              </p>
              Co do zasady dane osobowe nie są przekazywane poza Europejski
              Obszar Gospodarczy. Jeżeli Administrator korzysta z usług
              dostawców mających siedzibę poza EOG, dane będą przetwarzane z
              zachowaniem odpowiednich zabezpieczeń wymaganych przez przepisy
              RODO.
            </li>

            <li>
              <p>
                <strong>Okres przechowywania danych</strong>
              </p>
              <p>
                Dane osobowe będą przechowywane przez okres niezbędny do
                realizacji celu, w jakim zostały zebrane, a następnie przez
                okres wymagany przez obowiązujące przepisy prawa lub niezbędny
                do zabezpieczenia ewentualnych roszczeń.
              </p>

              <p>
                Dokumentacja związana ze świadczeniem usług psychologicznych i
                psychoterapeutycznych przechowywana jest przez okres 5 lat od
                końca roku kalendarzowego, w którym odbyła się ostatnia
                konsultacja lub sesja, chyba że przepisy prawa wymagają
                dłuższego okresu przechowywania.
              </p>
            </li>

            <li>
              <p>
                <strong>Prawa osoby, której dane dotyczą</strong>
              </p>
              Osobie, której dane dotyczą, przysługuje prawo do:
              <ul>
                <li>dostępu do danych,</li>
                <li>sprostowania danych,</li>
                <li>usunięcia danych (w przypadkach przewidzianych prawem),</li>
                <li>ograniczenia przetwarzania,</li>
                <li>przenoszenia danych,</li>
                <li>
                  wniesienia sprzeciwu wobec przetwarzania danych w przypadkach
                  przewidzianych prawem.
                </li>
              </ul>
            </li>

            <li>
              <p>
                <strong>Prawo wniesienia skargi</strong>
              </p>
              Osobie, której dane dotyczą, przysługuje prawo wniesienia skargi
              do Prezesa Urzędu Ochrony Danych Osobowych, jeśli uzna, że
              przetwarzanie danych osobowych narusza przepisy RODO.
            </li>

            <li>
              <p>
                <strong>Dobrowolność podania danych</strong>
              </p>
              Podanie danych osobowych jest dobrowolne, jednak niezbędne do
              nawiązania współpracy oraz świadczenia usług psychologicznych i
              psychoterapeutycznych.
            </li>

            <li>
              <p>
                <strong>Zautomatyzowane podejmowanie decyzji</strong>
              </p>
              Dane osobowe nie są wykorzystywane do zautomatyzowanego
              podejmowania decyzji, w tym profilowania.
            </li>
          </ol>
        </section>
      </Layout>
      <Footer footerBackgroundColor={'interior-footer-bg-color'} />
    </>
  );
};

export default Rodo;
