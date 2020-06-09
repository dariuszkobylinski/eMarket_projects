import React,{Component, useState, useEffect} from "react";
import ReactDOM from "react-dom";
import "../main.scss";
import "./slider_manager";
import "../normalize.css";
import {FooterMain} from "./contact";
// import {burgerClick} from "./offer";


const BurgerClick = (e) => {
    let burgerEvent=document.querySelector(".classItem");
    e.preventDefault();
         console.log(burgerEvent.style);
    if (burgerEvent.style.visibility==="hidden" || burgerEvent.style.visibility==="") {
        burgerEvent.style.visibility="visible"; 
    }
    else {

        burgerEvent.style.visibility="hidden";
    };   
}
const Header = () => {
    return (
        <header className="page-header">
           
                <div className="slider">
                        <img className="box_image_slider visible" src={"images/pictureTop.jpg"} alt="Slider"/>
                        <img className="box_image_slider" src={"images/pictureTop_second.jpg"} alt="Slider"/>
                        <img className="box_image_slider" src={"images/pictureTop_threetenth.jpg"} alt="Slider"/>
                        <img className="box_image_slider" src={"images/rope_picture.jpg"} alt="Slider"/>
                </div>
                <div className="classLogoContact">

                <div className="contact">

                    <p className="text_contact">Zadzwoń lub napisz<br></br>+48 518 836 336<br></br><a href="mailto:mdinvestments2018@gmail.com">mdinvestments2018@gmail.com</a></p>
                </div>  
                <div className="page-logo">
                    <a href="../index.html" style={{height: "0px"}}>
                        <img className="box_image" src={"images/logo_2.jpg"} alt="Logo"/>
                    </a>
                </div>
                </div>
            
            <nav className="page-nav">
                <div className="burger" onClick={BurgerClick}>
                    <div className="burger_line"></div>
                    <div className="burger_line"></div>
                    <div className="burger_line"></div>
                </div>
                <ul className="classItem">
                    <li className="classLink">
                        <a href="ONas.html" className="classLinkHref" target="_parent">O Nas</a>
                    </li>
                    <li className="classLink">
                        <a href="index.html" className="classLinkHref" id="keyPageWord"
                           target="_parent">Oferta</a>
                    </li>
                    <li className="classLink">
                        <a href="JakKupowac.html" className="classLinkHref" target="_parent">Jak kupować</a>
                    </li>
                    <li className="classLink">
                        <a href="Bezpieczenstwo.html" className="classLinkHref" target="_parent" >Bezpieczeństwo</a>
                    </li>
                    <li className="classLink">
                        <a href="Kontakt.html" className="classLinkHref" target="_parent">Kontakt</a>
                    </li>
                </ul>
            </nav>
        </header>
        )
};

const MainStatute = () => {
    return (
        <>
        <div className="mainONas">
            <article className="info_ONas">
            <h2 className="h2Text" style={{ fontSize:"1em"}}>Regulamin</h2>
            <h2 className="h2Text" style={{margin:"10px 0px"}}>Wstęp</h2>
                    <p className="pClassONas">MD Investments zarządca e-Market.edu.pl to nowoczesna i dynamiczna firma, która dba o wysoki standard świadczonych 
                    usług. Regulamin został stworzony dla Klientów i ma w przejrzysty sposób przedstawić warunki korzystania z Serwisu przez wszystkich, którzy 
                    szukają ofert w Polsce oraz chcą rozwijać swoje umiejętności w zakresie wiedzy naukowej, biznesowej i hobby. Pamiętaj, nie pobieramy 
                    żadnych dodatkowych opłat rezerwacyjnych z tytułu dokonania zakupu na naszym portalu. Zapoznaj się z pełną treścią Regulaminu zanim 
                    skorzystasz z serwisu. W razie jakichkolwiek pytań czy wątpliwości związanych z jego treścią skontaktuj się z Nami.<br></br></p>
                    {/* <br></br> */}
            <h2 className="h2Text" style={{margin:"10px 0px"}}>Regulamin e-Market.edu.pl</h2>
            <h2 className="h2Text" style={{margin:"10px 0px"}}>Artykuł 1. Definicje</h2>
                    {/* <a style={{fontWeight:"bold"}}>Jak to zrealizujesz:<br></br></a> */}
                    <p className="pClassONas">
                    <ul style={{margin:"0px", marginTop:"5px", marginBottom:"5px"}} >1. Administrator: Monika Kobylińska prowadząca działalność gospodarczą 
                    pod nazwą: MD Investments Monika Kobylińska z siedzibą w Warszawie, 02-495 Warszawa, ul. Drzymały 18/19 posiadającą NIP: 849-113-64-10, 
                    REGON: 141897156<br></br></ul>
                    <ul style={{margin:"0px", marginTop:"5px", marginBottom:"5px"}} >2. Regulamin: regulamin serwisu e-Market.edu.pl,<br></br></ul>
                    <ul style={{margin:"0px", marginTop:"5px", marginBottom:"5px"}} >3. Serwis: prowadzony przez Administratora według zasad określonych w 
                    Regulaminie to system rezerwacji kursów i szkoleń, który dostępny jest w domenie e-Market.edu.pl <br></br></ul>
                    <ul style={{margin:"0px", marginTop:"5px", marginBottom:"5px"}} >4. Klient: <br></br>
                    a) podmiot, który dokonuje Rezerwacji za pośrednictwem Serwisu, na zasadach określonych w Regulaminie<br></br>
                    b) Klientem może być osoba fizyczna, która ukończyła 18 lat, osoba prawna lub jednostka organizacyjna niebędąca osobą prawną, 
                    której ustawa przyznaje zdolność prawną<br></br></ul>
                    <ul style={{margin:"0px", marginTop:"5px", marginBottom:"5px"}} >5. Rezerwacja: procedura zawierania Umowy zakupu oferty na portalu 
                    e-Market.edu.pl<br></br></ul>
                    <ul style={{margin:"0px", marginTop:"5px", marginBottom:"5px"}} >6. Umowa zakupu kursu/szkolenia: umowa zakupu oferty zawierana pomiędzy 
                    Klientem a Dostawcą oferty, której opis prezentowany jest na e-Market.edu.pl<br></br></ul>
                    <ul style={{margin:"0px", marginTop:"5px", marginBottom:"5px"}} >7. Przedpłata: określona kwota pieniężna wymagana w procesie Rezerwacji, 
                    zaliczana na poczet ceny kursu/szkolenia<br></br></ul>
                    <ul style={{margin:"0px", marginTop:"5px", marginBottom:"5px"}} >8. Cena kursu/szkolenia: wynagrodzenie za kurs/szkolenie w wysokości określonej 
                    w umowie kursu/szkolenia<br></br></ul>
                    <ul style={{margin:"0px", marginTop:"5px", marginBottom:"5px"}} >9. Dostawca: podmiot lub lub inna osoba posiadająca prawo do sprzedaży w ramach 
                    przedstawionej oferty, która oferuje kurs/szkolenie w ramach serwisu na zasadach określonych w Ofercie i Umowie kursu/szkolenia<br></br></ul>
                    <ul style={{margin:"0px", marginTop:"5px", marginBottom:"5px"}} >10. Oferta: propozycja zawarcia Umowy kursu/szkolenia na warunkach określonych 
                    przez Dostawcę przy wykorzystaniu i za pomocą funkcjonalności dostępnych w ramach Serwisu, określająca Cenę kursu/szkolenia oraz zawierająca opis 
                    danego produktu szkoleniowego.<br></br></ul> 
                    </p>
            <h2 className="h2Text" style={{margin:"10px 0px"}}>Artykuł 2. Postanowienia ogólne</h2>
                    <p className="pClassONas">
                    <ul style={{margin:"0px", marginTop:"5px", marginBottom:"5px"}} >1. Niniejszy Regulamin określa zasady i warunki korzystania z usług 
                    świadczonych drogą elektroniczną przez Administratora w ramach Serwisu.​<br></br></ul>
                    <ul style={{margin:"0px", marginTop:"5px", marginBottom:"5px"}} >2. W celu przeprowadzenia Rezerwacji Klient powinien posiadać urządzenie 
                    podłączone do internetu i wyposażone w standardową przeglądarkę stron www, aktywny adres poczty elektronicznej oraz aktywny numer 
                    telefonu. Wszelka komunikacja z Klientem będzie odbywać się za pośrednictwem wskazanego przez Klienta: adresu poczty elektronicznej oraz 
                    numeru telefonu.
                    <br></br></ul>
                    </p>

            <h2 className="h2Text" style={{margin:"10px 0px"}}>Artykuł 3. Dokonanie rezerwacji i korzystanie z Serwisu</h2>
                    <p className="pClassONas">
                    <ul style={{margin:"0px", marginTop:"5px", marginBottom:"5px"}} >1. W celu dokonania Rezerwacji należy wybrać Ofertę, następnie przejść 
                    do formularza rezerwacyjnego, podać prawidłowe i pełne dane wymagane w formularzu, a następnie dokonać Przedpłaty w wysokości 30% ceny 
                    kursu/szkolenia.<br></br></ul>
                    <ul style={{margin:"0px", marginTop:"5px", marginBottom:"5px"}} >2. Prawidłowe dokonanie Rezerwacji skutkuje zawarciem Umowy sprzedaży 
                    kursu/szkolenia na warunkach określonych w Ofercie. Powyższe oznacza, że od tej chwili Klient zawarł Umowę z Dostawcą.<br></br></ul>
                    <ul style={{margin:"0px", marginTop:"5px", marginBottom:"5px"}} >3. Rezerwacja jest automatycznie potwierdzona przez wygenerowanie i 
                    wysłanie: <br></br>
                    a) do Klienta - na wskazany adres e-mail potwierdzenia Rezerwacji z informacją o wybranej Ofercie, numerze rezerwacji, potwierdzenie 
                    dokonania Przedpłaty, miejscu i terminie kursu/szkolenia oraz danymi do kontaktu z Dostawcą<br></br>
                    b) do Dostawcy – wiadomości e-mail i SMS z informacją o rezerwacji oraz danymi do kontaktu z Klientem.<br></br></ul>
                    <ul style={{margin:"0px", marginTop:"5px", marginBottom:"5px"}} >4. Administrator upoważniony jest przez Dostawcę do przeprowadzania Rezerwacji oraz 
                    pobrania Przedpłaty. Pozostałą kwotę z tytułu realizacji Umowy sprzedaży Klient zobowiązany jest zapłacić bezpośrednio Dostawcy, na 
                    warunkach i w terminach określonych w Umowie sprzedaży.<br></br></ul>
                    </p>
            <h2 className="h2Text" style={{margin:"10px 0px"}}>Artykuł 4. Odbiór produktu umowy</h2>
                <p className="pClassONas">
                    <ul style={{margin:"0px", marginTop:"5px", marginBottom:"5px"}} >1. Klient zobowiązany jest do odbioru produktu umowy w terminie i 
                    godzinach wskazanych w potwierdzeniu Rezerwacji.​<br></br></ul>
                    <ul style={{margin:"0px", marginTop:"5px", marginBottom:"5px"}} >2. Administrator nie ponosi odpowiedzialności w przypadku odmowy 
                    przyjęcia na kurs/szkolenie przez Dostawcę spowodowaną nieokazaniem przez Klienta właściwych dokumentów takich jak: dokumenty 
                    potwierdzające tożsamość, potwierdzenie dokonania Rezerwacji przez Klienta lub osobę przez niego wyznaczoną, potwierdzenia wpłaty.
                    <br></br></ul>
                </p>

            <h2 className="h2Text" style={{margin:"10px 0px"}}>Artykuł 5. Opinie poszkoleniowe</h2>
                <p className="pClassONas">
                    <ul style={{margin:"0px", marginTop:"5px", marginBottom:"5px"}} >1. Administrator udostępnia Klientom możliwość publikowania opinii 
                    i oceny Oferty, z której skorzystał w ramach Serwisu. Publikowane opinie powinny być zgodne z rzeczywistym przebiegiem realizacji 
                    Umowy kursu/szkolenia,przy czym nie mogą zawierać: <br></br>
                    a) wulgaryzmów, treści obscenicznych lub nawołujących do szerzenia nienawiści rasowej, wyznaniowej lub etnicznej, propagujących przemoc, 
                    nakłaniających do popełnienia przestępstwa, jak również treści ordynarnych, uznanych powszechnie za naganne moralnie oraz społecznie 
                    niewłaściwych,<br></br>
                    b) treści naruszających dobra osobiste, a także nieuprawnione korzystanie z cudzego wizerunku,<br></br>
                    c) danych osobowych bądź danych kontaktowych,<br></br>
                    d) treści o charakterze reklamowym, w tym adresów stron internetowych.<br></br></ul>
                    <ul style={{margin:"0px", marginTop:"5px", marginBottom:"5px"}} >2. Administrator nie ingeruje w treści publikowanych opinii, jednakże 
                    przed publikacją zastrzega sobie prawo do ich moderacji lub usunięcia w uzasadnionych przypadkach, gdy:<br></br>
                    a) naruszają zasady określone w Regulaminie bądź przepisach prawa, <br></br>
                    b) zostały omyłkowo wystawione, jeśli ich treść jednoznacznie wskazuje na pomyłkę,<br></br>
                    c) treść komentarza zawiera znaki, które powodują, że staje się on nieczytelny.<br></br></ul>
                </p>

            <h2 className="h2Text" style={{margin:"10px 0px"}}>Artykuł 6. Rozwiązanie umowy sprzedaży (Odwołanie Rezerwacji)</h2>
                <p className="pClassONas">
                    <ul style={{margin:"0px", marginTop:"5px", marginBottom:"5px"}} >1. Klient może odstąpić od Umowy bez ponoszenia dodatkowych 
                    kosztów.Odstąpienie od Umowy sprzedaży bądź jej rozwiązanie odbywa się na powszechnie obowiązujących przepisach prawa.<br></br></ul>
                    <ul style={{margin:"0px", marginTop:"5px", marginBottom:"5px"}} >2. Dokonując Rezerwacji Klient akceptuje warunki dotyczące odwoływania 
                    rezerwacji (odstąpienia od Umowy sprzedaży) oraz niepojawienia się po odbiór produktu sprzedaży. Dokonana Przedpłata stanowi zapewnienie 
                    wykonania Umowy sprzedaży i jeżeli Klient odstępuje od Umowy sprzedaży (odwołuje Rezerwację) nie ma prawa do otrzymania zwrotu 
                    przedpłaconej kwoty – również zgodnie z powszechnie obowiązującymi przepisami prawa.<br></br></ul>
                    <ul style={{margin:"0px", marginTop:"5px", marginBottom:"5px"}} >3. Dostawca może odstąpić od Umowy sprzedaży wyłącznie na warunkach 
                    określonych w Umowie sprzedaży i zgodnie z powszechnie obowiązującymi przepisami prawa.<br></br></ul>
                </p>

            <h2 className="h2Text" style={{margin:"10px 0px"}}>Artykuł 7. Płatności </h2>
                <p className="pClassONas">
                    <ul style={{margin:"0px", marginTop:"5px", marginBottom:"5px"}} >1. Klient dokonuje Przedpłaty na rachunek bankowy Administratora<br></br>
                    MD Investments Monika Kobylińska<br></br>
                    ul. Drzymały 18/19<br></br>
                    02-495 Warszawa<br></br>
                    mBank S.A. nr rachunku: 32 1140 2004 0000 3202 6243 1734
                    <br></br></ul>
                    <ul style={{margin:"0px", marginTop:"5px", marginBottom:"5px"}} >2. Chwilą dokonania Przedpłaty jest moment otrzymania przez 
                    Administratora środków na wskazane konto bądź otrzymania komunikatu od operatora płatności o zaksięgowaniu płatności.<br></br></ul>
                    <ul style={{margin:"0px", marginTop:"5px", marginBottom:"5px"}} >3. Administrator upoważniony jest przez Dostawców do przeprowadzania 
                    Rezerwacji oraz pobrania Przedpłaty. Pozostałą kwotę z tytułu realizacji Umowy Klient zobowiązany jest zapłacić bezpośrednio Dostawcy, 
                    na warunkach i w terminach określonych w Umowie sprzedaży.<br></br></ul>
                    <ul style={{margin:"0px", marginTop:"5px", marginBottom:"5px"}} >4. Opłaty za dodatkowe usługi, tj. nieobjęte Umową sprzedaży ponosi 
                    Klient (np. opłata za postój na parkingu, opłata za zakwaterowanie na kurs/szkolenie)<br></br></ul>
                    <ul style={{margin:"0px", marginTop:"5px", marginBottom:"5px"}} >5. Ceny podawane w Serwisie są cenami brutto w polskich złotych (PLN). 
                    Klient może zwrócić się do Dostawcy w celu wystawienia stosownej faktury VAT.<br></br></ul>
                </p>

                <h2 className="h2Text" style={{margin:"10px 0px"}}>Artykuł 8. Rola i odpowiedzialność Administratora</h2>
                <p className="pClassONas">
                    <ul style={{margin:"0px", marginTop:"5px", marginBottom:"5px"}} >1. Administrator prezentuje informacje, które otrzymuje od Dostawców. 
                    Dostawcy zobowiązani są do uaktualniania wszystkich informacji, które pojawiają się w Serwisie. Administrator dokłada starań, aby 
                    świadczyć usługi z najwyższą starannością, ale nie jest w stanie sprawdzić i zagwarantować, że wszystkie informacje dostarczone przez 
                    Dostawców są dokładne, kompletne i poprawne. Administrator nie ponosi odpowiedzialności za rzetelność ofert , ich poprawność oraz 
                    kompletność.
                    <br></br></ul>
                    <ul style={{margin:"0px", marginTop:"5px", marginBottom:"5px"}} >2. Administrator udostępnia Klientom Serwis, umożliwiający zawarcie 
                    Umowy sprzedaży, natomiast nie ponosi odpowiedzialności za zachowania Klienta lub Dostawcy, ani za niewykonanie bądź nienależyte 
                    wykonanie przez nich czynności faktycznych bądź prawnych w związku z zawartą Umową sprzedaży. Administrator nie jest stroną Umowy 
                    sprzedaży. Administrator nie ponosi odpowiedzialności za następstwa działań podjętych przez Klienta, Dostawcę oraz osoby trzecie, a 
                    stanowiących naruszenie postanowień Regulaminu. Administrator nie ponosi odpowiedzialności za zdolność Klienta bądź Dostawcy do bycia 
                    podmiotem czynności prawnych.<br></br></ul>
                    <ul style={{margin:"0px", marginTop:"5px", marginBottom:"5px"}} >3. Administrator przekazuje Klientom swoje dane teleadresowe w celu 
                    umożliwienia Klientom szybkiej i efektywnej komunikacji w zakresie objętym świadczonymi usługami, Ofertą oraz Umową sprzedaży.<br></br></ul>
                </p>

            <h2 className="h2Text" style={{margin:"10px 0px"}}>Artykuł 9. Rola i odpowiedzialność Dostawcy</h2>
                <p className="pClassONas">
                    <ul style={{margin:"0px", marginTop:"5px", marginBottom:"5px"}} >1. Odpowiedzialność wobec Klienta za wykonanie Umowy sprzedaży ponosi Dostawca 
                    będący stroną Umowy sprzedaży.
                    <br></br></ul>
                    <ul style={{margin:"0px", marginTop:"5px", marginBottom:"5px"}} >2. Dostawca ponosi pełną odpowiedzialność za treść Oferty. Dostawca ponosi w 
                    szczególności odpowiedzialność za: <br></br>
                    a) rzetelną Ofertę sprzedaży w Serwisie, w szczególności za zgodność z prawdą i zgodność z wymogami prawa, w tym za uwzględnienie 
                    informacji wymaganych przepisami dotyczącymi ochrony konsumentów, prawidłowość parametrów oraz danych dotyczących oferty (ceny sprzedaży, 
                    dostępność, standard oraz aktualność fotografii zamieszczonych w Serwisie)<br></br>
                    b) terminowe przekazanie produktu oferty Klientowi.<br></br></ul>
                    <ul style={{margin:"0px", marginTop:"5px", marginBottom:"5px"}} >3. Dochodzenie i zaspokajanie roszczeń Klienta w stosunku do Dostawcy 
                    odbywa się z uwzględnieniem warunków wskazanych w Umowie sprzedaży oraz na podstawie powszechnie obowiązujących przepisów prawa.<br></br></ul>
                </p>

                <h2 className="h2Text" style={{margin:"10px 0px"}}>Artykuł 10. Działania niedozwolone</h2>
                <p className="pClassONas">
                    <ul style={{margin:"0px", marginTop:"5px", marginBottom:"5px"}} >1. Klient jest zobowiązany do powstrzymania się od jakichkolwiek działań 
                    o charakterze bezprawnym, a w szczególności od korzystania z Serwisu bezpośrednio lub pośrednio w celu sprzecznym z prawem, w celu naruszenia 
                    przepisów prawa, od korzystania z Serwisu w sposób sprzeczny z Regulaminem, dobrymi obyczajami lub powszechnie przyjętymi zasadami korzystania 
                    z sieci Internet, w sposób naruszający prawa Administratora, innych Klientów, Dostawców lub osób trzecich, w szczególności poprzez podawanie 
                    nieprawdziwych bądź wprowadzających w błąd danych, podszywanie się pod inne podmioty, nadużycie posiadanych uprawnień bądź niedopełnienie 
                    obowiązków posiadania uprawnień, a także od dostarczania danych powodujących zachwianie pracy, przeciążenie systemów informatycznych lub 
                    nieuprawnione modyfikowanie danych zawartych w Serwisie.
                    <br></br></ul>
                    <ul style={{margin:"0px", marginTop:"5px", marginBottom:"5px"}} >2. Zabronione jest wykorzystywanie elementów graficznych Serwisu 
                    (w tym logo), układu i kompozycji stron internetowych (tzw. layout), elementów graficznych, a także innych praw własności intelektualnej, 
                    bez wyraźnej, pisemnej zgody Administratora. Zabronione jest jakiekolwiek agregowanie i przetwarzanie danych oraz innych informacji 
                    dostępnych w Serwisie w celu ich dalszego udostępniania osobom trzecim w ramach innych serwisów internetowych, jak i poza siecią 
                    Internet.<br></br></ul>
                </p>

                <h2 className="h2Text" style={{margin:"10px 0px"}}>Artykuł 11. Ochrona i poufność danych</h2>
                <p className="pClassONas">
                    <ul style={{margin:"0px", marginTop:"5px", marginBottom:"5px"}} >1. Administratorem danych osobowych jest: Monika Kobylińska prowadząca 
                    działalność gospodarczą pod nazwą: MD Investments z siedzibą w Warszawie, 02-495 Warszawa, ul. Drzymały 18/19, posiadającą NIP: 849-113-64-10
                    <br></br></ul>
                    <ul style={{margin:"0px", marginTop:"5px", marginBottom:"5px"}} >2. Podane przez Klientów dane osobowe Administrator gromadzi i przetwarza zgodnie 
                    z obowiązującymi przepisami prawa, Polityką Prywatności oraz Polityką Cookies. Priorytetem Administratora jest zapewnienie poufności 
                    i bezpieczeństwa danych osobowych Klientów.<br></br></ul>
                    <ul style={{margin:"0px", marginTop:"5px", marginBottom:"5px"}} >3. Dane Klientów mogą być przekazywane osobom trzecim, w przypadku, gdy jest to niezbędne 
                    do celów komunikacyjnych, zawarcia lub wykonywania Umowy sprzedaży bądź wynika z obowiązujących przepisów prawa. Klient upoważnia 
                    Administratora do przekazania jego danych Dostawcy w związku z zawarciem Umowy sprzedaży, w celu jej wykonania.<br></br></ul>
                </p>

                <h2 className="h2Text" style={{margin:"10px 0px"}}>Artykuł 12. Reklamacje </h2>
                <p className="pClassONas">
                    <ul style={{margin:"0px", marginTop:"5px", marginBottom:"5px"}} >1. Administrator dokłada wszelkich starań, aby świadczone usługi były 
                    najwyższej jakości. Klient może złożyć reklamację, jeżeli usługi świadczone przez Administratora przewidziane w niniejszym Regulaminie 
                    nie są realizowane przez Administratora lub są realizowane niezgodnie z postanowieniami Regulaminu.
                    <br></br></ul>
                    <ul style={{margin:"0px", marginTop:"5px", marginBottom:"5px"}} >2. Reklamacje, których przedmiotem jest nienależyte wywiązanie się z 
                    Umowy Sprzedaży przez Dostawcę, należy kierować wyłącznie do właściwego Dostawcy. Reklamacje rozpoznaje Dostawca na zasadach zapisanych 
                    w warunkach Umowy sprzedaży, zgodnie ze stosowanymi przez siebie zasadami i obowiązującymi w tym zakresie przepisami prawa.<br></br></ul>
                    <ul style={{margin:"0px", marginTop:"5px", marginBottom:"5px"}} >3. Reklamację dotyczącą usług Administratora można złożyć na adres 
                    e-mailowy: mdinvestments2018@gmail.com lub w formie pisemnej na adres Administratora: MD Investments, 02-495 Warszawa, ul. Drzymały 18/19<br></br></ul>
                    <ul style={{margin:"0px", marginTop:"5px", marginBottom:"5px"}} >4. Prawidłowo złożona reklamacja dotycząca usług Administratora powinna zawierać co 
                    najmniej: <br></br>
                    a) oznaczenie Klienta (imię, nazwisko lub nazwę, adres zamieszkania lub siedzibę oraz adres poczty elektronicznej), <br></br>
                    b) przedmiot reklamacji,<br></br>
                    c) okoliczności uzasadniające reklamację.<br></br></ul>
                </p>

                <h2 className="h2Text" style={{margin:"10px 0px"}}>Artykuł 13. Postanowienia końcowe </h2>
                <p className="pClassONas">
                    <ul style={{margin:"0px", marginTop:"5px", marginBottom:"5px"}} >1. Administrator może zmienić Regulamin lub uruchomić zmodyfikowaną 
                    bądź nową wersję usług świadczonych w ramach Serwisu. Zmiana staje się skuteczna w terminie wskazanym przez Administratora, który nie 
                    może być krótszy niż 10 dni od momentu udostępnienia w Serwisie zmienionego Regulaminu, z zastrzeżeniem, że Rezerwacje złożone przed 
                    wejściem w życie zmian są prowadzone na zasadach dotychczasowych.
                    <br></br></ul>
                    <ul style={{margin:"0px", marginTop:"5px", marginBottom:"5px"}} >2. Postanowienia niniejszego Regulaminu w relacjach między 
                    Administratorem a Klientem będącym konsumentem nie uchybiają obowiązującym przepisom prawa, których stosowania nie można wyłączyć, 
                    a które przyznają konsumentom szerszą ochronę.<br></br></ul>
                    <ul style={{margin:"0px", marginTop:"5px", marginBottom:"5px"}} >3. Administrator nie ponosi odpowiedzialności za problemy techniczne 
                    uniemożliwiające świadczenie usług w ramach Serwisu zaistniałe z powodu siły wyższej, zdarzeń, za które odpowiedzialności Administrator nie ponosi, 
                    jak np. w wyniku działania osób trzecich lub Klienta. Administrator ma prawo do czasowego zaprzestania świadczenia usług spowodowanych przerwami na 
                    konserwację, awariami czasowymi lub częściowymi w działaniu Serwisu, usuwania usterek, unowocześniania, jak i zmiany szaty graficznej 
                    Serwisu.<br></br></ul>
                    <ul style={{margin:"0px", marginTop:"5px", marginBottom:"5px"}} >4. Niniejszy Regulamin może zostać przetłumaczony na inne języki. 
                    W przypadku jakichkolwiek wątpliwości dotyczących treści lub interpretacji tychże warunków i postanowień lub w przypadku niezgodności 
                    lub rozbieżności pomiędzy oryginalną polską wersją, z którąkolwiek z wersji językowych tychże warunków i postanowień, punktem odniesienia
                     jest zawsze wersja polska.
                     <br></br></ul>
                </p>
                <br></br>

                <h2 className="h2Text" style={{margin:"10px 0px"}}><a name="thirdAnchor"></a>Metody płatności </h2>
                <p className="pClassONas">
                    <ul style={{margin:"0px", marginTop:"5px", marginBottom:"5px"}} >
                        Za zakupy na naszym portalu zapłać przelewem na konto: <br></br>
                        MD Investments Monika Kobylińska<br></br>
                        Tytuł przelewu: e-Market/nr oferty<br></br>
                        Bank: mBank S.A.<br></br>
                        Rachunek bankowy: 32 1140 2004 0000 3202 6243 1734<br></br>
                        Płatności PayPal
                    <br></br></ul>
                </p>
            </article>
        </div>
        </>
    )
};
function App() {
    return (
        <>
            <div className="container">
            <Header />
            <MainStatute/>
            <FooterMain/>
            </div>
        </>
    )
}
ReactDOM.render(
    <App />,
    document.getElementById("app")
);
export {
    App,
    Header,
    MainStatute,
    FooterMain

};