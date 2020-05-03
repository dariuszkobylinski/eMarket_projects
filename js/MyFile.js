import React,{Component, useState, useEffect} from "react";
import ReactDOM from "react-dom";
import "../main.scss";
import "../js/slider_manager";
import "../normalize.css";
import {FooterMain} from "../js/contact";
// import FooterMain from "../dist/main.kontakt"; 

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
                        <a href="../O_Nas.html" className="classLinkHref" target="_parent">O Nas</a>
                    </li>
                    <li className="classLink">
                        <a href="../index.html" className="classLinkHref" id="keyPageWord"
                           target="_parent">Oferta</a>
                    </li>
                    <li className="classLink">
                        <a href="../cennik.html" className="classLinkHref" target="_parent">Jak kupować</a>
                    </li>
                    <li className="classLink">
                        <a href="../cennik.html" className="classLinkHref" target="_parent" style={{color:"darkorange"}}>Bezpieczeństwo</a>
                    </li>
                    <li className="classLink">
                        <a href="../kontakt.html" className="classLinkHref" target="_parent">Kontakt</a>
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
                <h2 className="h2Text" style={{margin:"10px 0px"}}>Lorem ipsum dolor sit amet.</h2>
                    <p className="pClassONas">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, commodi
                        consectetur, dignissimos eius et facere iste modi natus officia provident quas quos sed sint.
                        Aperiam necessitatibus nulla repudiandae unde vitae voluptates. A aliquam amet aperiam at
                        consequatur culpa, cum cumque debitis dicta dignissimos doloribus eaque exercitationem fuga iure
                        laudantium maiores minus molestias nam nobis non nostrum numquam pariatur porro quae quaerat
                        quidem quod quos recusandae reprehenderit repudiandae sed similique sunt totam unde velit
                        voluptas voluptates! Alias explicabo hic placeat quisquam quod vel voluptas. Illum maiores
                        mollitia possimus quo sint. Aperiam asperiores, distinctio doloremque eius eligendi error minus
                        quibusdam similique voluptatibus!</p>
                        <h2 className="h2Text" style={{margin:"10px 0px"}}>Lorem ipsum dolor sit amet.</h2>
                    <p className="pClassONas">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, commodi
                        consectetur, dignissimos eius et facere iste modi natus officia provident quas quos sed sint.
                        Aperiam necessitatibus nulla repudiandae unde vitae voluptates. A aliquam amet aperiam at
                        consequatur culpa, cum cumque debitis dicta dignissimos doloribus eaque exercitationem fuga iure
                        laudantium maiores minus molestias nam nobis non nostrum numquam pariatur porro quae quaerat
                        quidem quod quos recusandae reprehenderit repudiandae sed similique sunt totam unde velit
                        voluptas voluptates! Alias explicabo hic placeat quisquam quod vel voluptas. Illum maiores
                        mollitia possimus quo sint. Aperiam asperiores, distinctio doloremque eius eligendi error minus
                        quibusdam similique voluptatibus!</p>
                        <h2 className="h2Text" style={{margin:"10px 0px"}}>Lorem ipsum dolor sit amet.</h2>
                    <p className="pClassONas">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, commodi
                        consectetur, dignissimos eius et facere iste modi natus officia provident quas quos sed sint.
                        Aperiam necessitatibus nulla repudiandae unde vitae voluptates. A aliquam amet aperiam at
                        consequatur culpa, cum cumque debitis dicta dignissimos doloribus eaque exercitationem fuga iure
                        laudantium maiores minus molestias nam nobis non nostrum numquam pariatur porro quae quaerat
                        quidem quod quos recusandae reprehenderit repudiandae sed similique sunt totam unde velit
                        voluptas voluptates! Alias explicabo hic placeat quisquam quod vel voluptas. Illum maiores
                        mollitia possimus quo sint. Aperiam asperiores, distinctio doloremque eius eligendi error minus
                        quibusdam similique voluptatibus!</p>
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