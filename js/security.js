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
                        <a href="Bezpieczenstwo.html" className="classLinkHref" target="_parent" style={{color:"darkorange"}}>Bezpieczeństwo</a>
                    </li>
                    <li className="classLink">
                        <a href="Kontakt.html" className="classLinkHref" target="_parent">Kontakt</a>
                    </li>
                </ul>
            </nav>
        </header>
        )
};

const MainSecurity = () => {
    return (
        <>
        <div className="mainONas">
            <article className="info_ONas">
            <h2 className="h2Text" style={{margin:"10px 0px"}}>Polityka prywatności i plików cookies</h2>
                <h2 className="h2Text" style={{margin:"10px 0px"}}><a name="firstAnchor"></a>Polityka prywatności</h2>
                    <p className="pClassONas">Dane osobowe, które udostępniasz na portalu e-Market.edu.pl są chronione z najwyższą starannością i będą
                     wykorzystane wyłącznie w celu:<br></br>
                     <ul style={{margin:"0px", marginTop:"5px", marginBottom:"5px"}} >• realizacji umowy kursu/szkolenia<br></br></ul>
                     <ul style={{margin:"0px", marginTop:"5px", marginBottom:"5px"}} >• odpowiedzi na Twoje zapytania dotyczące realizacji umowy kursu/szkolenia<br></br></ul>
                    Wypełnienie formularza rezerwacji oznacza wyrażenie zgody na przetwarzanie Twoich danych osobowych zgodnie z ustawą o ochronie danych 
                    osobowych (Dz.U. Nr 133, poz. 833 z późniejszymi zmianami) oraz na przekazanie tych danych Dostawcy kursu/szkolenia (właścicielowi lub  
                    reprezentantowi firmy) w celu zapewnienia prawidłowej realizacji umowy. Pamiętaj, że przysługuje Ci prawo wglądu, poprawienia lub  
                    usunięcia danych z serwisu. Przesyłane przez Ciebie dane za pomocą formularza rezerwacji są szyfrowane przy użyciu protokołu 
                    SSL (Secure Socket Layer). Nasze bazy danych i serwery zabezpieczone są przed wglądem osób trzecich. Jeżeli zapisałeś/-aś się na nasz 
                    biuletyn lub w inny sposób wyraziłeś/-aś zgodę na jego otrzymywanie, wykorzystamy Twoje dane wyłącznie w celu wysłania Ci naszego 
                    biuletynu. </p>
                    <h2 className="h2Text" style={{margin:"10px 0px"}}><a name="secondAnchor"></a>Polityka Cookies</h2>
                    <p className="pClassONas">Niniejsza Polityka Prywatności Cookies określa zasady przechowywania i dostępu do informacji na urządzeniach 
                    Użytkownika za pomocą plików Cookies, służących realizacji usług świadczonych drogą elektroniczną żądanych przez Użytkownika, przez 
                    e-Market.edu.pl.<br></br>
                    <br></br>
                    Cookies - oznacza dane informatyczne, w szczególności niewielkie pliki tekstowe, zapisywane i przechowywane na urządzeniach za 
                    pośrednictwem których Użytkownik korzysta ze stron internetowych Serwisu. Cookies są bezpieczne dla Urządzenia Użytkownika, drogą tą 
                    nie jest możliwe przedostanie się do Urządzeń Użytkowników wirusów, złośliwego oprogramowania lub innego niechcianego oprogramowania.<br></br>
                    <br></br>
                    <a style={{fontWeight:"bold"}}>Cel wykorzystywania plików cookies:</a><br></br>  
                    <ul style={{margin:"0px", marginTop:"5px", marginBottom:"5px"}} >• dostosowania zawartości stron internetowych Serwisu do preferencji Użytkownika 
                    oraz optymalizacji korzystania ze stron internetowych, w szczególności pliki te pozwalają rozpoznać urządzenie Użytkownika Serwisu i 
                    odpowiednio wyświetlić stronę internetową dostosowując do jego indywidualnych potrzeb, <br></br></ul>
                    <ul style={{margin:"0px", marginTop:"5px", marginBottom:"5px"}} >• tworzenia statystyk, które pomagają zrozumieć, w jaki sposób Użytkownicy 
                    Serwisu korzystają ze stron internetowych, co umożliwia ulepszanie ich struktury, zawartości oraz w celach reklamowych <br></br></ul>
                    <ul style={{margin:"0px", marginTop:"5px", marginBottom:"5px"}} >• e-Market.edu.pl wykorzystuje Cookies Zewnętrzne partnerów np. 
                    google, facebook, <br></br></ul>
                    <ul style={{margin:"0px", marginTop:"5px", marginBottom:"5px"}} >• utrzymanie sesji Użytkownika Serwisu.<br></br> </ul>
                    <br></br>
                    <a style={{fontWeight:"bold"}}>Możliwości określenia warunków przechowywania lub uzyskiwania dostępu przez Cookies<br></br></a>
                    Wszystkie nowoczesne przeglądarki pozwalają na włączenie bądź wyłączenie mechanizmu ciasteczek. Za pomocą ustawień przeglądarki 
                    internetowej Użytkownik może samodzielnie i w każdym czasie zmienić ustawienia dotyczące plików Cookies, określając warunki ich 
                    przechowywania i uzyskiwania dostępu przez pliki Cookies do Urządzenia Użytkownika. Użytkownik może w każdej chwili usunąć pliki 
                    Cookies korzystając z dostępnych funkcji w przeglądarce internetowej, której używa. Ograniczenie stosowania plików Cookies, może wpłynąć 
                    na niektóre funkcjonalności dostępne na stronie internetowej Serwisu. <br></br>
                    <br></br>

                    <a style={{fontWeight:"bold"}}>Właścicielem i administratorem bazy danych e-Market.edu.pl jest:<br></br></a>
                    MD Investments Monika Kobylińska<br></br>
                    ul. Drzymały 18/19<br></br>
                    02-495 Warszawa<br></br>
                    NIP 849-113-64-10<br></br>
                    Telefon: +48 518 836 336<br></br>
                    e-mail: mdinvestments2018@gmail.com</p>
                        {/* <h2 className="h2Text" style={{margin:"10px 0px"}}>Lorem ipsum dolor sit amet.</h2>
                    <p className="pClassONas">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, commodi
                        consectetur, dignissimos eius et facere iste modi natus officia provident quas quos sed sint.
                        Aperiam necessitatibus nulla repudiandae unde vitae voluptates. A aliquam amet aperiam at
                        consequatur culpa, cum cumque debitis dicta dignissimos doloribus eaque exercitationem fuga iure
                        laudantium maiores minus molestias nam nobis non nostrum numquam pariatur porro quae quaerat
                        quidem quod quos recusandae reprehenderit repudiandae sed similique sunt totam unde velit
                        voluptas voluptates! Alias explicabo hic placeat quisquam quod vel voluptas. Illum maiores
                        mollitia possimus quo sint. Aperiam asperiores, distinctio doloremque eius eligendi error minus
                        quibusdam similique voluptatibus!</p> */}
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
            <MainSecurity/>
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
    MainSecurity,
    FooterMain
};