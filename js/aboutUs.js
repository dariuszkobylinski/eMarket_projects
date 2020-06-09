import React,{Component, useState, useEffect} from "react";
import ReactDOM from "react-dom";
import "../normalize.css";
import "../main.scss";
import "./slider_manager";
import {FooterMain} from "./contact";

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
                        <a href="ONas.html" className="classLinkHref" target="_parent" style={{color:"darkorange"}}>O Nas</a>
                    </li>
                    <li className="classLink">
                        <a href="index.html" className="classLinkHref" id="keyPageWord"
                           target="_parent">Oferta</a>
                    </li>
                    <li className="classLink">
                        <a href="JakKupowac.html" className="classLinkHref" target="_parent">Jak kupować</a>
                    </li>
                    <li className="classLink">
                        <a href="Bezpieczenstwo.html" className="classLinkHref" target="_parent">Bezpieczeństwo</a>
                    </li>
                    <li className="classLink">
                        <a href="Kontakt.html" className="classLinkHref" target="_parent">Kontakt</a>
                    </li>
                </ul>
            </nav>
        </header>
        )
};

const AboutUs = () => {
    return (
        <>
        <div className="mainONas">
            <article className="info_ONas">
                    <p className="pClassONas">
                    <a style={{fontWeight:"bold", marginLeft:"25px", fontSize:"1.0em"}}>e-Market.edu.pl</a> to polski start-up, który tworzy profesjonalny portal dostarczający informacje o kursach i szkoleniach
                    realizowanych w Polsce. Misją firmy jest wsparcie w poszukiwaniu najlepszych ofert w miejscach i terminach preferowanych przez Klientów.
                    Pomysł, który realizujemy powstał w 2017 roku i bazuje na naszych osobistych doświadczeniach przy wyborze kursu żeglarskiego, kiedy okazało
                     się, że duża liczba ofert w różnych miejscach w sieci jest bardzo trudna do przejrzenia. Szczególnie, gdy nie chcemy spędzić weekendu 
                     studiując wszystkie oferty. W tym celu stworzyliśmy i rozwijamy narzędzie pracujące na desktopie, tablecie, smartfonie, aby: <br></br>
                        <ul style={{margin:"0px", marginTop:"5px", marginBottom:"5px"}} >• dostarczyć proste i intuicyjne rozwiązania dla Klientów<br></br></ul>
                        <ul style={{margin:"0px", marginTop:"5px", marginBottom:"5px"}}>• zapewnić możliwość najlepszego wyboru kursu/szkolenia dzięki możliwości porównania ofert w jednym miejscu oraz przez zgromadzone rekomendacje<br></br></ul>
                        <ul style={{margin:"0px", marginTop:"5px", marginBottom:"5px"}}>• poprawiać jakość dostawców przez stałe zbieranie informacji zwrotnej od Klientów<br></br></ul>
                        <a style={{marginLeft:"20px"}}>Nasz</a> serwis e-market.edu.pl pozwala na wybór najkorzystniejszej oferty i szybką jej rezerwację w dowolnym miejscu i czasie. Wystarczy wejść na portal, 
                        prześledzić oferty i kliknąć rezerwuję oraz potwierdzić zamówienie zaliczką. Nie pobieramy od naszych Klientów dodatkowych opłat. Prezentowane ceny to 
                        ceny oferowane przez naszych Partnerów w bezpośrednim kontakcie. Najważniejszy jest komfort i wygoda Klientów, dlatego też w celu zapewnienia najwyższej jakości świadczonych usług udostępniamy dla Państwa Centrum 
                        Informacji, gdzie nasz doświadczony personel pomoże rozwiązywać problemy, jeśli je Państwo napotkają przy wyborze kursu. Dzięki dostarczanej informacji 
                        zwrotnej od Klientów budujemy serwis, który podniesie jakość świadczonych usług na polskim rynku. Dołącz do Nas i buduj z nami przyszłość.
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
            <AboutUs/>
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
    AboutUs,
    FooterMain
};