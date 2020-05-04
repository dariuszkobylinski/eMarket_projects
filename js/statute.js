import React,{Component, useState, useEffect} from "react";
import ReactDOM from "react-dom";
import "../main.scss";
import "./slider_manager";
import "../normalize.css";
import {FooterMain} from "./contact";


const Header = () => {
    return (
        <header className="page-header">
           
                <div className="slider">
                        <img className="box_image_slider visible" src={"images/pictureTop.png"} alt="Slider"/>
                        <img className="box_image_slider" src={"images/pictureTop_second.png"} alt="Slider"/>
                        <img className="box_image_slider" src={"images/pictureTop_threetenth.png"} alt="Slider"/>
                        <img className="box_image_slider" src={"images/rope_picture.png"} alt="Slider"/>
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
                <div className="burger">
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
                        <a href="JakKupowac.html" className="classLinkHref" target="_parent" style={{color:"darkorange"}}>Jak kupować</a>
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
            {/* <h2 className="h2Text" style={{textAlign:"center", fontSize:"1em"}}>Regulamin</h2> */}
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
                    {/* <a style={{fontWeight:"bold"}}>Jak to zrealizujesz:<br></br></a> */}
                    <p className="pClassONas">
                    <ul style={{margin:"0px", marginTop:"5px", marginBottom:"5px"}} >1. Niniejszy Regulamin określa zasady i warunki korzystania z usług 
                    świadczonych drogą elektroniczną przez Administratora w ramach Serwisu.​<br></br></ul>
                    <ul style={{margin:"0px", marginTop:"5px", marginBottom:"5px"}} >2. W celu przeprowadzenia Rezerwacji Klient powinien posiadać urządzenie 
                    podłączone do internetu i wyposażone w standardową przeglądarkę stron www, aktywny adres poczty elektronicznej oraz aktywny numer 
                    telefonu. Wszelka komunikacja z Klientem będzie odbywać się za pośrednictwem wskazanego przez Klienta: adresu poczty elektronicznej oraz 
                    numeru telefonu.
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