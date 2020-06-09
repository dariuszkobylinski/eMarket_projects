import React,{Component, useState, useEffect} from "react";
import ReactDOM from "react-dom";
import "../main.scss";
import "./slider_manager";
import "../normalize.css";
import {FooterMain} from "./contact";
import {burgerClick} from "./offer";

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

const MainHowToBuy = () => {
    return (
        <>
        <div className="mainONas">
            <article className="info_ONas">
            <h2 className="h2Text" style={{margin:"10px 0px"}}>Jak rezerwować kursy i szkolenia (w razie pytań zadzwoń +48 518 836 336)</h2>
                    <p className="pClassONas">Rezerwując szkolenia i kursy na naszym Serwisie nie ponosisz żadnych dodatkowych opłat. Dostawcy gwarantują 
                    równość cen. Dokonanie rezerwacji w naszym Serwisie jest bardzo proste i intuicyjne, a dodatkowo oszczędzasz czas wybierając najlepszą 
                    dla Ciebie ofertę w jednym miejscu.<br></br>
                    <br></br>
                    <a style={{fontWeight:"bold"}}>Jak to zrealizujesz:<br></br></a>
                    <ul style={{margin:"0px", marginTop:"5px", marginBottom:"5px"}} >1. Wybierz szkolenie lub kurs, który Cię interesuje klikając na nim, 
                    a następnie naciśnij przycisk „Rezerwuj".<br></br></ul>
                    <ul style={{margin:"0px", marginTop:"5px", marginBottom:"5px"}} >2. Po wybraniu oferty wybrany kurs/szkolenie trafi do Twojego koszyka, 
                    naciśnij "Przejdź do koszyka" i jeszcze raz zweryfikuj czy wybrałeś odpowiednie produkty<br></br></ul>
                    <ul style={{margin:"0px", marginTop:"5px", marginBottom:"5px"}} >3. Wciśnij przycisk „Kup” a zostaniesz przekierowany na formularz, na 
                    którym wprowadzisz dane niezbędne do przeprowadzenia rezerwacji.<br></br></ul>
                    <ul style={{margin:"0px", marginTop:"5px", marginBottom:"5px"}} >4. Zapoznaj się z Regulaminem Serwisu i Polityką Prywatności e-Market.edu.pl i zatwierdź 
                    zamówienie<br></br></ul>
                    <ul style={{margin:"0px", marginTop:"5px", marginBottom:"5px"}} >5. Po zatwierdzeniu otrzymasz potwierdzenie na swój e-mail z danymi do realizacji 
                    Przedpłaty (30% ceny kursu/szkolenia)<br></br></ul>
                    <ul style={{margin:"0px", marginTop:"5px", marginBottom:"5px"}} >6.Zrealizuj przelew w ciągu 48h od potwierdzenia rezerwacji, brak zaksięgowania 
                    Przedpłaty we wskazanym terminie jest równoznaczne z anulacją rezerwacji<br></br></ul>
                    <ul style={{margin:"0px", marginTop:"5px", marginBottom:"5px"}} >7. Po zaksięgowaniu Przedpłaty na koncie bankowym otrzymasz finalne 
                    potwierdzenie rezerwacji na e-mail z dodatkowymi informacjami niezbędnymi do realizacji kursu/szkolenia.<br></br></ul>
                    <ul style={{margin:"0px", marginTop:"5px", marginBottom:"5px"}} >8.Pamiętaj rezerwacja potwierdzona dokonaniem przedpłaty jest wiążąca.<br></br></ul>
                    Powodzenia !<br></br>
                    <br></br>
                    Rezerwuj i dokonaj przedpłaty na konto:<br></br>
                    MD Investments Monika Kobylińska,<br></br>
                    Tytuł przelewu: e-Market/ nr oferty, <br></br>
                    mBank S.A.<br></br>
                    Nr rachunku: 32 1140 2004 0000 3202 6243 1734
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
            <MainHowToBuy/>
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
    MainHowToBuy,
    FooterMain

};