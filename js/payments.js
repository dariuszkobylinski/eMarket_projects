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
                        <img className="box_image_slider" src={"images/pictureTop_threetenth.jpgg"} alt="Slider"/>
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
                <h2 className="h2Text" style={{margin:"10px 0px"}}><a name="thirdAnchor"></a>Metody płatności </h2>
                <p className="pClassONas">
                    <ul style={{margin:"0px", marginTop:"5px", marginBottom:"5px"}} >
                        Za zakupy na naszym portalu zapłać przelewem na konto: <br></br>
                        MD Investments <br></br>Monika Kobylińska<br></br>
                        Tytuł przelewu: <br></br>e-Market/nr oferty<br></br>
                        Bank: mBank S.A.<br></br>
                        Rachunek bankowy: <br></br>32 1140 2004 0000 3202 6243 1734<br></br>
                        {/* Płatności PayPal */}
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