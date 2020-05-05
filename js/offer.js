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
                           target="_parent" style={{color:"darkorange"}}>Oferta</a>
                    </li>
                    <li className="classLink">
                        <a href="JakKupowac.html" className="classLinkHref" target="_parent" >Jak kupować</a>
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

const MainOffer = () => {
    return (
        <>
    <div className="mainOffer">
        <div class="classParametersofChoose">
            {/* <div class="classDivCategoryofChoose">
                <h2 class="classH2CategoryofChoose">Filtruj według:</h2>
                <h3 class="classH3CategoryofChoose">Kategorii kursu</h3>
                <select class="classCategoryofChoose">
                    <option>Wszystkie kategorie</option>
                    <option>Żeglarstwo</option>
                    <option>Nurkowanie</option>
                    <option>Programowanie</option>
                </select>
            </div> */}
            <div class="classKindofChoose">
                <h3 class="h3TextFilter">Rodzaju kursu</h3>
                <select class="classCategoryofChoose">
                    <option>Wszystkie rodzaje</option>
                    <option>Żeglarz Jachtowy</option>
                    <option>Sternik Morski</option>
                    <option>Sternik Motorowodny</option>
                    <option>Holowanie narciarza</option>
                    <option>Narty wodne</option>
                </select>
            </div>
            <div class="classPlaceofChoose">
                <h3 class="h3TextFilter">Miejsca kursu</h3>
                <select class="classCategoryofChoose">
                    <option>Wszystkie miejsca</option>
                    <option>Mazury</option>
                    <option>Zalew Sulejowski</option>
                    <option>Zalew Zek</option>
                    <option>Zalew Zegrzyński</option>
                    <option>Kraków</option>
                </select>
            </div>
            <div class="classTimeofChoose">
            <h3 class="h3TextFilter">Cena kursu</h3>
            <select class="classCategoryofChoose">
                <option>Styczeń</option>
                <option>Luty</option>
                <option>Marzec</option>
                <option>Kwiecień</option>
            </select>
            </div>

            <div class="classPriceofChoose">
                <h3 class="h3TextFilter">Cena kursu</h3>
                <select class="classCategoryofChoose">
                    <option>poniżej 500zł</option>
                    <option>500zł - 1000zł</option>
                    <option>1000zł - 2000zł</option>
                    <option>powyżej 2000zł</option>
                </select>
            </div>
            <button class="classBtnCategoryofChoose">Filtruj</button>
        </div>
        {/* <div class="classViewofProduct">
            <div class="classProductDetail">
                <div>
                <img class="classProductImg" src="images/people-2557396_1920.jpg">
                <p class="classImgPromotion">Promocja</p>
                </div>

                <p class="classCategoryStyle">Kategoria</p>
                <p class="classCategoryStyle">Rodzaj</p>
                <p class="classCategoryStyle">Miejscowość</p>
                <p class="classCategoryStyle">Termin</p>
                <button class="classBtnProduct">Rezerwuj / Więcej informacji</button>
            </div>
            <div class="classProductDetail">
                <img class="classProductImg" src="images/logo_2.jpg">
                <p class="classCategoryStyle">Kategoria</p>
                <p class="classCategoryStyle">Rodzaj</p>
                <p class="classCategoryStyle">Miejscowość</p>
                <p class="classCategoryStyle">Termin</p>
                <button class="classBtnProduct">Rezerwuj / Więcej informacji</button>
            </div>
            <div class="classProductDetail">
                <img class="classProductImg" src="images/logo_2.jpg">
                <p class="classCategoryStyle">Kategoria</p>
                <p class="classCategoryStyle">Rodzaj</p>
                <p class="classCategoryStyle">Miejscowość</p>
                <p class="classCategoryStyle">Termin</p>
                <button class="classBtnProduct">Rezerwuj / Więcej informacji</button>
            </div>
            <div class="classProductDetail">
                <img class="classProductImg" src="images/logo_2.jpg">
                <p class="classCategoryStyle">Kategoria</p>
                <p class="classCategoryStyle">Rodzaj</p>
                <p class="classCategoryStyle">Miejscowość</p>
                <p class="classCategoryStyle">Termin</p>
                <button class="classBtnProduct">Rezerwuj / Więcej informacji</button>
            </div>
            <div class="classProductDetail">
                <img class="classProductImg" src="images/logo_2.jpg">
                <p class="classCategoryStyle">Kategoria</p>
                <p class="classCategoryStyle">Rodzaj</p>
                <p class="classCategoryStyle">Miejscowość</p>
                <p class="classCategoryStyle">Termin</p>
                <button class="classBtnProduct">Rezerwuj / Więcej informacji</button>
            </div>
        </div> */}
       <div class="classViewofProduct">
            <div class="classProductDetail">
                <div>
                <img class="classProductImg" src="images/logo_2.jpg"/>
                <p class="classImgPromotion">Promocja</p>
                </div>

                <p class="classCategoryStyle">Kategoria</p>
                <p class="classCategoryStyle">Rodzaj</p>
                <p class="classCategoryStyle">Miejscowość</p>
                <p class="classCategoryStyle">Termin</p>
                <button class="classBtnProduct">Rezerwuj / Więcej informacji</button>
            </div>
            <div class="classProductDetail">
                <img class="classProductImg" src="images/logo_2.jpg"/>
                <p class="classCategoryStyle">Kategoria</p>
                <p class="classCategoryStyle">Rodzaj</p>
                <p class="classCategoryStyle">Miejscowość</p>
                <p class="classCategoryStyle">Termin</p>
                <button class="classBtnProduct">Rezerwuj / Więcej informacji</button>
            </div>
            <div class="classProductDetail">
                <img class="classProductImg" src="images/logo_2.jpg"/>
                <p class="classCategoryStyle">Kategoria</p>
                <p class="classCategoryStyle">Rodzaj</p>
                <p class="classCategoryStyle">Miejscowość</p>
                <p class="classCategoryStyle">Termin</p>
                <button class="classBtnProduct">Rezerwuj / Więcej informacji</button>
            </div>
            <div class="classProductDetail">
                <img class="classProductImg" src="images/logo_2.jpg"/>
                <p class="classCategoryStyle">Kategoria</p>
                <p class="classCategoryStyle">Rodzaj</p>
                <p class="classCategoryStyle">Miejscowość</p>
                <p class="classCategoryStyle">Termin</p>
                <button class="classBtnProduct">Rezerwuj / Więcej informacji</button>
            </div>
            <div class="classProductDetail">
                <img class="classProductImg" src="images/logo_2.jpg"/>
                <p class="classCategoryStyle">Kategoria</p>
                <p class="classCategoryStyle">Rodzaj</p>
                <p class="classCategoryStyle">Miejscowość</p>
                <p class="classCategoryStyle">Termin</p>
                <button class="classBtnProduct">Rezerwuj / Więcej informacji</button>
            </div>
        </div>
            
    </div>
       
        </>
    )
};
function App() {
    return (
        <>
            <div className="container">
            <Header />
            <MainOffer/>
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
    MainOffer,
    FooterMain

};