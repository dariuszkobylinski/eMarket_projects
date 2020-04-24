import React,{Component, useState, useEffect} from "react";
import ReactDOM from "react-dom";
import "../main.scss";
import "../js/slider_manager";
import "../normalize.css";

const Header = () => {
    return (
        <header className="page-header">
            {/* <div className="main-header"> */}
                <div className="slider">
                        <img className="box_image_slider visible" src={"images/pictureTop.png"} alt="Slider"/>
                        <img className="box_image_slider" src={"images/pictureTop_second.png"} alt="Slider"/>
                        <img className="box_image_slider" src={"images/pictureTop_threetenth.png"} alt="Slider"/>
                        <img className="box_image_slider" src={"images/rope_picture.png"} alt="Slider"/>
                </div>
                <div className="classLogoContact">

                <div className="contact">
                    {/* <p className="text_contact"><a href="mailto:mdinvestments2018@gmail.com">mdinvestments2018@gmail.com</a></p> */}
                    {/* <p className="text_contact">+48 518 836 336</p> */}
                    <p className="text_contact">Zadzwoń lub napisz<br></br>+48 518 836 336<br></br><a href="mailto:mdinvestments2018@gmail.com">mdinvestments2018@gmail.com</a></p>
                </div>  
                <div className="page-logo">
                    <a href="../index.html" style={{height: "0px"}}>
                        <img className="box_image" src={"images/logo_2.jpg"} alt="Logo"/>
                    </a>
                </div>
                </div>
            {/* </div> */}
            <nav className="page-nav">
                <div className="burger">
                    <div className="burger_line"></div>
                    <div className="burger_line"></div>
                    <div className="burger_line"></div>
                </div>
                <ul className="classItem">
                    <li className="classLink">
                        <a href="../O_Nas.html" className="classLinkHref" target="_parent" style={{color:"darkorange"}}>O Nas</a>
                    </li>
                    <li className="classLink">
                        <a href="../index.html" className="classLinkHref" id="keyPageWord"
                           target="_parent">Oferta</a>
                    </li>
                    <li className="classLink">
                        <a href="../cennik.html" className="classLinkHref" target="_parent">Jak kupować</a>
                    </li>
                    <li className="classLink">
                        <a href="../cennik.html" className="classLinkHref" target="_parent">Bezpieczeństwo</a>
                    </li>
                    <li className="classLink">
                        <a href="../Dane_firmy.html" className="classLinkHref" target="_parent">Kontakt</a>
                    </li>
                </ul>
            </nav>
        </header>
        )
};

const mainONas = () => {
    return (
    <>
    <div className="mainONas">
       <p className="pclassONas" style={{fontSize:"10px"}}>lorem10</p>
       {/* <image className="box_image_ONas"></image> */}
    </div>
    </>
    )
}

const FooterMain = () => {
    return (
        <>

            <div className="footer_summary">
            <div className="footerMain">
                <div className="footerPartLeft">
                    <a href="" className="footerPartLeftDetail">O Nas</a>
                    <a href="" className="footerPartLeftDetail">Żeglarstwo</a>
                    <a href="" className="footerPartLeftDetail">Rejsy turystyczne</a>
                    <a href="" className="footerPartLeftDetail">Kolonie, obozy</a>
                    <a href="" className="footerPartLeftDetail">Kontakt</a>
                </div>
                <div className="footerPartRight">
                    <a href="" className="footerPartRightDetail">Regulamin</a>
                    <a href="" className="footerPartRightDetail">Polityka prywatności</a>
                    <a href="" className="footerPartRightDetail">Informacje o cookies</a>
                    <a href="" className="footerPartRightDetail">Metody płatności</a>
                    <a href="" className="footerPartRightDetail">Jak kupować</a>
                </div>
                <div className="classSocialContact">
                <p className="centerOfInformation">Centrum informacji <br></br>+48 518 836 336</p>
                <div className="classSocialLink">
                    <a href="http://www.facebook.com">
                        <div className="classSocialLinkFacebook"></div>
                    </a>
                    <a href="http://www.youtube.com">
                        <div className="classSocialLinkYouTube"></div>
                    </a>
                    <a href="http://www.instagram.com">
                        <div className="classSocialLinkInstagram"></div>
                    </a>
                    <a href="http://www.twitter.com">
                        <div className="classSocialLinkYouTwitter"></div>
                    </a>
                </div>
                </div>
            </div>
                <div className="classLogoFooter">Copyright ©2019 MD Projects. Wszelkie prawa zastrzeżone</div>
                <div className="classLogoFooter">Logo generated by <a
                    href="https://www.designevo.com/logo-maker/" title="Free Online Logo Maker">DesignEvo
                    free logo designer</a></div>
            </div>
        </>
    )
}
function App() {
    return (
        <>
            <div className="container">
            <Header />
            <mainONas/>
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
    mainONas,
    FooterMain

};