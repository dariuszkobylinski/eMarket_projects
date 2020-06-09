import React,{Component, useState, useEffect} from "react";
import ReactDOM from "react-dom";
import "../main.scss";
import "../js/slider_manager";
import "../normalize.css";
// import {BurgerClick} from "./offer";


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
            {/* <div className="main-header"> */}
                <div className="slider">
                        <img className="box_image_slider visible" src={"images/pictureTop.jpg"} alt="Slider"/>
                        <img className="box_image_slider" src={"images/pictureTop_second.jpg"} alt="Slider"/>
                        <img className="box_image_slider" src={"images/pictureTop_threetenth.jpg"} alt="Slider"/>
                        <img className="box_image_slider" src={"images/rope_picture.jpg"} alt="Slider"/>
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
                        <a href="Bezpieczenstwo.html" className="classLinkHref" target="_parent">Bezpieczeństwo</a>
                    </li>
                    <li className="classLink">
                        <a href="Kontakt.html" className="classLinkHref" target="_parent" style={{color:"darkorange"}}>Kontakt</a>
                    </li>
                </ul>
            </nav>
        </header>
        )
};

class ContactMain extends React.Component {

    constructor() {
    super();
    this.state = {
        fontSize: "24",
        z:"0"
    };
    }
    componentDidMount() {
        const myChange = () => {
        if (parseInt(window.innerWidth)<="370") {
            console.log(window.innerWidth);
            this.setState({
                    z:"-9"
                }
            )
        }
        else {
            if((parseInt(window.innerWidth)<"460") && (parseInt(window.innerWidth)>"370")) {
                console.log(window.innerWidth);
                this.setState({
                        z:"-6"
                    }
                )
            }
            else {
                console.log(window.innerWidth);
                this.setState(
                    {
                        z:"0"
                    }
                )
            }

        }
    };
        const myResize = () => {
        window.addEventListener("resize", myChange);
        window.addEventListener("load",myChange);

    };
        myResize();
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("update zrobiony");
        console.log(this.state.z, this.state.fontSize);
    }

    render() {
    return (
        <>
                <div  className="classContact">
                    <div className="classContactDetail">
                        <p className="pClassContactDetail" style={{fontSize:this.state.fontSize+"px"}}>MD Investments<br></br> Monika Kobylińska</p>
                        <p className="pClassContactDetail">ul. M. Drzymały 18</p>
                        <p className="pClassContactDetail">02-495 Warszawa</p>
                        <p className="pClassContactDetail" style={{fontSize:this.state.fontSize+"px"}}>NIP: 849-113-64-10</p>
                        <p className="pClassContactDetail" style={{fontSize:this.state.fontSize+"px"}}>Telefon kontaktowy: <br></br>+48 518 836 336</p>
                        <p className="pClassContactDetail" style={{fontSize:parseInt(this.state.fontSize)+parseInt(this.state.z)+"px"}}>Email:</p>
                        <p className="pClassContactDetail">mdinvestments2018@gmail.com</p>
                    </div>
                    <div className="classContactDetailRight">
                        <p className="pClassContactDetail" style={{fontSize:this.state.fontSize+"px"}}>Godziny otwarcia</p>
                        <p className="pClassContactDetail"style={{fontSize:this.state.fontSize+"px"}}>Centrum Informacji</p>
                        <p className="pClassContactDetail">Poniedziałek - Piątek</p>
                        <p className="pClassContactDetail">9:00 - 18:00</p>
                        <p className="pClassContactDetail">Sobota</p>
                        <p className="pClassContactDetail">9:00 - 14:00</p>

                        
                    </div>
                </div>
     
        </>
    )
}
};

const ContactForm = () => {
    const [formData, setFormData] = useState({
        imienazwisko: "",
        adresEmail: "",
        temat:"",
        message:"",
    });
    const [validation, setValidation] = useState([]);
    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.currentTarget.name]: event.currentTarget.value
        })
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        let correct = true;
        let error = [];
        if(formData.imienazwisko.length < 2) {
            correct = false;
            error.push("Pole Imię i Nazwisko musi zawierać co najmniej 2 znaki")
        }
        if((formData.adresEmail.length < 3) && !(formData.adresEmail.includes("@"))) {
            correct = false;
            error.push("Pole Email musi zawierać znak @ i co najmniej 3 znaki")
        }
        if(formData.temat.length < 2) {
            correct = false;
            error.push("Pole Temat musi zawierać co najmniej 2 znaki")
        }
        if(formData.message==="") {
            correct = false;
            error.push("Pole wiadomość musi zostać uzupełnione")
        }
        if(!correct) {
            setValidation(error);

        }
        else {
            MyForm.submit();
            alert("Dziękujemy za przesłany e-mail. Odpowiemy maksymalnie wciągu 24 godzin. Pozdrawiamy, Zespół e-Market");

        }

    };
    return (
        <form name="MyForm" action="https://formspree.io/xzbgalwz" onSubmit={handleSubmit} method="POST" className="message-footer">
                <h3 className="h3TextLeft">Masz pytania, napisz do nas e-mail lub zadzwoń.</h3>
                <input type="text" name="imienazwisko" className="classImieNazwisko"
                       placeholder="Imię i Nazwisko*" value={formData.imienazwisko} onChange={handleChange}/>
                <input type="email" name="adresEmail" className="classEmail" placeholder="E-mail*" value={formData.adresEmail} onChange={handleChange}/>
                <input type="text" name="temat" className="classTitle" placeholder="Tytuł" value={formData.temat} onChange={handleChange}/>
                <textarea rows="8" name="message" className="classMessage" placeholder="Tekst wiadomości" value={formData.message} onChange={handleChange}/>
                <button className="classBtn_footer" type="submit">Wyślij</button>
            <ul className="classErrorMessage">
                {
                    validation.map((e,i) => {
                        return <li key={i} style={{visibility:"visible", listStyle:"none"}}>{e}</li>
                    })
                }
            </ul>
            </form>
    )
};

const FooterMain = () => {
    return (
        <>

            <div className="footer_summary">
            <div className="footerMain">
                <div className="footerPartLeftRight">
                <div className="footerPartLeft">
                    <a href="ONas.html" className="footerPartLeftDetail">O Nas</a>
                    <a href="index.html" className="footerPartLeftDetail">Żeglarstwo</a>
                    <a href="index.html" className="footerPartLeftDetail">Rejsy turystyczne</a>
                    <a href="index.html" className="footerPartLeftDetail">Kolonie, obozy</a>
                    <a href="Kontakt.html" className="footerPartLeftDetail">Kontakt</a>
                </div>
                <div className="footerPartRight">
                    <a href="Regulamin.html" className="footerPartRightDetail">Regulamin</a>
                    <a href="Bezpieczenstwo.html" className="footerPartRightDetail">Polityka prywatności</a>
                    <a href="Bezpieczenstwo.html" className="footerPartRightDetail">Informacje o cookies</a>
                    <a href="MetodyPlatnosci.html" className="footerPartRightDetail">Metody płatności</a>
                    <a href="JakKupowac.html" className="footerPartRightDetail">Jak kupować</a>
                </div>
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

            <footer className="page-footer">
                <ContactForm />
                <ContactMain />
                
            </footer>
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
    ContactForm,
    ContactMain,
    FooterMain

};