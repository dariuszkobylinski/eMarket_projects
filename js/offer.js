import React,{Component, useState, useEffect} from "react";
import ReactDOM from "react-dom";
import "../main.scss";
import "./slider_manager";
import "../normalize.css";
import {FooterMain} from "./contact";
import {Popup} from "./saleForm"
var sourceTable=[
    {idOfOffer:"1", CategoryOfProduct: "Żeglarz Jachtowy", TimingOfCourse:"Lipiec", PlaceOfCourse:"Zalew Sulejowski", PriceOfCourse:"900", DateOfStart:"2020.07.11", DateOfEnd:"2020.07.19", TypeOfCourse:"Dzienny",
     InformationAboutCourse:"Zapraszamy na kurs oraz egzamin na stopień żeglarza jachtowego nad Zalewem Sulejowskim. Zapraszamy uczestników zainteresowanych"+
     "przejściem szkolenia żeglarskiego i uzyskaniem patentu żeglarza jachtowego, chcących przekonać się, na czym polega żeglarstwo. Szkolenie na patent "+
     "żeglarza realizujemy wg programu Polskiego Związku Żeglarskiego. Program ten obejmuje manewrowanie jachtem i zajęcia teoretyczne. Podczas nauki "+
     "manewrowania jachtem będziemy uczyć się zwrotów przez sztag i przez rufę, manewrów portowych (dojścia i odejścia od kei na żaglach oraz na silniku), "+
     "prawidłowego wykonywania manewru „Alarm człowiek za burtą”, podejścia i odejścia od boi, stawiania jachtu w dryf. Zajęcia teoretyczne to 7 wykładów. "+
     "Żeglujemy na bezpiecznych i wygodnych jachtach kabinowych klasy Sasanka 660, Ocean 720 wyposażonych w silnik zaburtowy oraz jachtach odkryto kabinowych "+
     "typu Omega. Istnieje możliwość podstawienia także innych, podobnych jachtów. ROZPOCZĘCIE I ZAKOŃCZENIE: Port jachtowy Maruś nad Zalewem Sulejowskim. "+
     "Rozpoczęcie 1 dnia od godziny 10.00, zakończenie ostatniego dnia do godziny 15.00. Cena zawiera: Ubezpieczenie - NW, Kadra - skipper na każdym jachcie, "+
     "Szkolenie na stopień żeglarza jachtowgo. Za dodatkową opłatą Egzamin i patent, wg cennika PZŻ (www.pya.org.pl), płatne komisji egzaminacyjnej. "+
    "GŁÓWNE WYMAGANIA: Wiek - 14 lat. Egzamin: 19.07.2019", 
    InformationAboutSuppliers:"Na naszym portalu tylko sprawdzeni dostawcy usug szkoleniowych - 100% wiarygodności i uczciwości. Organizujemy szkolenia na "+
    "patenty żeglarskie i motorowodne. Organizujemy również rejsy po Zalewie Sulejowskim, Mazurach, Zatoce Gdańskiej. W naszej ofercie znajdziesz również "+
    "rejsy na Wyspach Kanaryjskich, ale mamy także doświadczenie w organizacji rejsów po Morzu Śródziemnym na kultowym żaglowcu STS Pogoria. Od siebie "+
    "wymagamy dużo. Stawiamy zawsze na jakość i wysoki poziom szkolenia. Na rejsach szkoleniowo-turystycznych zapewniamy wyjątkową, rodzinną wręcz atmosferę. "+
    "Dla nas każdy klient jest najważniejszy i dokładamy wszelkich starań, aby chwile spędzone z nami na żaglach i na lądzie na długo i pozytywnie zapadły "+
    "mu w pamięć. Nasza Kadra złożona jest z doświadczonych żeglarzy i instruktorów. Spod naszych „skrzydeł” wyszło już wielu żeglarzy i sterników. "+
    "Systematycznie podnosimy również swoje kwalifikacje, by przekazywana wiedza była jak najbardziej aktualna. Żeglarstwo to szkoła charakterów. "+
    "Kształtując je u innych, kształtujemy je również u siebie."},
    {idOfOffer:"2", CategoryOfProduct: "Żeglarz Jachtowy", TimingOfCourse:"Czerwiec", PlaceOfCourse:"Zalew Zegrzyński", PriceOfCourse:"1000", 
    DateOfStart:"2020.06.06", DateOfEnd:"2020.07.04",TypeOfCourse:"Weekendowy", InformationAboutCourse:"Zapraszamy na kurs oraz egzamin na stopień żeglarza "+
    "jachtowego, który składa się z 10 dni szkolenia praktyczno – teoretycznego po 7 godzin dziennie. W trakcie szkolenia realizowany jest pełny pogram "+
    "szkolenia na patent Żeglarza Jachtowego. Wszystkie zajęcia realizowane są w obrębie Portu Jachtowego Nieporęt oraz na akwenie Zalewu Zegrzyńskiego. "+
    "Na tym kursie nauczysz się jak sterować żaglówką, pracować prawidłowo żaglami, obsługiwać osprzęt jachtowy, żeglować w każdym kierunku i zarządzać "+
    "załogą.Nauczysz się też technik manewrowania na silniku w ciasnej marinie jachtowej.Poznasz zasady bezpieczeństwa i ratownictwa na wodzie, prawo drogi "+
    "i oznakowanie na polskich szlakach żeglownych.Dowiesz się jak przewidywać pogodę, co to jest stateczność poprzeczna jachtu oraz jak funkcjonuje "+
    "aerodynamika żagla.Na koniec przeprowadzimy symulację egzaminu praktycznego i teoretycznego. Plan dnia szkoleniowego - 9.00 Początek zajęć, 9.00 – 13.00 "+
    "Zajęcia praktyczne lub teoretyczne,13.00 – 14.00 Przerwa obiadowa, 14.00 – 17.00 Druga część zajęć, 17.00 Zakończenie zajęć. Cena zawiera: realizację "+
    "pełnego programu szkolenia na patent Żeglarza Jachtowego, ubezpieczenie NNW, firmowe materiały szkoleniowe. Cena nie zawiera: Opłat za egzamin i "+
    "wystawienie patentu żeglarskiego (w dniu egzaminu należność za egzamin płatna jest  komisji egzaminacyjnej 250 zł – uczniowie studenci do 26 roku życia "+
    "zniżka 50%), zakwaterowania, wyżywienia, dojazdów, parkingu. Kurs jest prowadzony zgodnie z wytycznymi Rozporządzenia Ministerstwa Sportu i turystyki z "+
    "dnia 9.04.2013 roku określającymi między innymi zakres wymagań egzaminacyjnych na patent żeglarza jachtowego. "+
    "Po zakończeniu kursu można przystąpić do egzaminu na stopień Żeglarza Jachtowego (nieobowiązkowo). * O sposobie realizacji szkolenia w danym dniu "+
    "decyduje Instruktor uwzględniając aktualne warunki meteorologiczne oraz potrzeby szkoleniowe.",
     InformationAboutSuppliers:"Na naszym portalu tylko sprawdzeni dostawcy usug szkoleniowych - 100% wiarygodności i uczciwości. Od kilku lat nasza firma "+
     "organizuje szkolenia żeglarskie na Zalewie Zegrzyńskim. W ofercie znajdziecie między innymi: kursy na patent Żeglarza Jachtowego, patenty motorowodne, "+
     "doskonalenie umiejętności żeglarskich, rekreacyjne rejsy po Zalewie Zegrzyńskim, rejsy morskie, warsztaty nawigacyjne.Szkolenia i kursy żeglarskie "+
     "proponujemy w trybie codziennym i weekendowym. Polecamy również szkolenia indywidualne dopasowane do potrzeb klienta. Dysponujemy nowoczesnym sprzętem "+
     "oraz doświadczoną kadrą szkoleniową.Chcemy Wam przekazać to co z żeglarstwa najlepsze. Zachęcamy Was do odnalezienia nowej pasji. Szkolimy na "+
     "bezpiecznych i nowoczesnych jachtach: kabinowym Tango 730 i Sailhorse. Każda z naszych jednostek wyposażona jest w certyfikowane środki ratunkowe oraz w "+
     "dobrej jakości osprzęt żeglarski. Jachty na których szkolimy są naszą własnością, dlatego stale dbamy o ich dobry stan techniczny i ładny wygląd. Naszym "+
     "głównym jachtem szkoleniowym jest Tango 730 Sportwyposażony w silnik zaburtowy (z 2011 roku). Bardzo dobry osprzęt pokładowy, kompas magnetyczny i "+
     "elektronika jachtowa (log, echosonda, wiatromierz) sprawiają, że jest to jeden z niewielu takich jachtów dostępnych do szkolenia żeglarskiego na Zalewie "+
     "Zegrzyńskim i na Mazurach. Wyposażenie uzupełnia toaleta chemiczna, elektryczna widna miecza oraz kuchenka gazowa (dzień zaczynamy od kawki:) Jacht ten "+
     "jest przystosowany do żeglugi morskiej, co zapewnia bezpieczeństwo w trudnych warunkach atmosferycznych.Sailhorse to jednostka produkcji holenderskiej "+
     "przeznaczona do żeglugi po śródlądziu i morskich wodach osłoniętych. Długi i ciężki miecz zakończony bulbem sprawia, że jacht bezpiecznie i szybko pływa "+
     "nawet przy bardzo silnym wietrze. W Holandii od wielu lat działa klasa regatowa Sailhorse i co roku organizowane są zawody międzynarodowe. Wygodny, "+
     "przestronny kokpit i możliwość zamontowania silnika sprawia, że jacht idealnie nadaje się do nauki żeglowania."},
    {idOfOffer:"3", CategoryOfProduct: "Żeglarz Jachtowy", TimingOfCourse:"Czerwiec", PlaceOfCourse:"Zalew Zegrzyński", PriceOfCourse:"1000",
     DateOfStart:"2020.06.29", DateOfEnd:"2020.07.10",TypeOfCourse:"Dzienny", InformationAboutCourse:"Zapraszamy na kurs oraz egzamin na stopień żeglarza "+
     "jachtowego, który składa się z 10 dni szkolenia praktyczno – teoretycznego w tygodniu (bez weekendów), po 7 godzin dziennie.W trakcie szkolenia "+
     "realizowany jest pełny pogram szkolenia na patent Żeglarza Jachtowego. Wszystkie zajęcia realizowane są w obrębie Portu Jachtowego Nieporęt oraz na "+
     "akwenie Zalewu Zegrzyńskiego. Na tym kursie nauczysz się jak sterować żaglówką, pracować prawidłowo żaglami, obsługiwać osprzęt jachtowy, żeglować w "+
     "każdym kierunku i zarządzać załogą.Nauczysz się też technik manewrowania na silniku w ciasnej marinie jachtowej.Poznasz zasady bezpieczeństwa i "+
     "ratownictwa na wodzie, prawo drogi i oznakowanie na polskich szlakach żeglownych.Dowiesz się jak przewidywać pogodę, co to jest stateczność poprzeczna "+
     "jachtu oraz jak funkcjonuje aerodynamika żagla.Na koniec przeprowadzimy symulację egzaminu praktycznego i teoretycznego. Plan dnia szkoleniowego - 9.00 "+
     "Początek zajęć, 9.00 – 13.00 Zajęcia praktyczne lub teoretyczne,13.00 – 14.00 Przerwa obiadowa, 14.00 – 17.00 Druga część zajęć, 17.00 Zakończenie zajęć. "+
     "* O sposobie realizacji szkolenia w danym dniu decyduje Instruktor uwzględniając aktualne warunki meteorologiczne oraz potrzeby szkoleniowe. Cena "+
     "zawiera: Realizację pełnego programu szkolenia na patent Żeglarza Jachtowego, ubezpieczenie NNW, firmowe materiały szkoleniowe. Cena nie zawiera: "+
     "Opłat za egzamin i wystawienie patentu żeglarskiego (w dniu egzaminu należność za egzamin płatna jest  komisji egzaminacyjnej 250 zł – uczniowie "+
     "studenci do 26 roku życia zniżka 50%), zakwaterowania, wyżywienia, dojazdów, parkingu. Kurs jest prowadzony zgodnie z wytycznymi Rozporządzenia "+
     "Ministerstwa Sportu i Turystyki z dnia 9.04.2013 roku określającymi między innymi zakres wymagań egzaminacyjnych na patent żeglarza jachtowego. "+
    "Po zakończeniu kursu można przystąpić do egzaminu na stopień Żeglarza Jachtowego (nieobowiązkowo).",
     InformationAboutSuppliers:"Na naszym portalu tylko sprawdzeni dostawcy usug szkoleniowych - 100% wiarygodności i uczciwości. Od kilku lat nasza firma "+
     "organizuje szkolenia żeglarskie na Zalewie Zegrzyńskim. W ofercie znajdziecie między innymi: kursy na patent Żeglarza Jachtowego, patenty motorowodne, "+
     "doskonalenie umiejętności żeglarskich, rekreacyjne rejsy po Zalewie Zegrzyńskim, rejsy morskie, warsztaty nawigacyjne.Szkolenia i kursy żeglarskie "+
     "proponujemy w trybie codziennym i weekendowym. Polecamy również szkolenia indywidualne dopasowane do potrzeb klienta. Dysponujemy nowoczesnym sprzętem "+
     "oraz doświadczoną kadrą szkoleniową.Chcemy Wam przekazać to co z żeglarstwa najlepsze. Zachęcamy Was do odnalezienia nowej pasji. Szkolimy na "+
     "bezpiecznych i nowoczesnych jachtach: kabinowym Tango 730 i Sailhorse. Każda z naszych jednostek wyposażona jest w certyfikowane środki ratunkowe oraz w "+
     "dobrej jakości osprzęt żeglarski. Jachty na których szkolimy są naszą własnością, dlatego stale dbamy o ich dobry stan techniczny i ładny wygląd. Naszym "+
     "głównym jachtem szkoleniowym jest Tango 730 Sportwyposażony w silnik zaburtowy (z 2011 roku). Bardzo dobry osprzęt pokładowy, kompas magnetyczny i "+
     "elektronika jachtowa (log, echosonda, wiatromierz) sprawiają, że jest to jeden z niewielu takich jachtów dostępnych do szkolenia żeglarskiego na Zalewie "+
     "Zegrzyńskim i na Mazurach. Wyposażenie uzupełnia toaleta chemiczna, elektryczna widna miecza oraz kuchenka gazowa (dzień zaczynamy od kawki:) Jacht ten "+
     "jest przystosowany do żeglugi morskiej, co zapewnia bezpieczeństwo w trudnych warunkach atmosferycznych.Sailhorse to jednostka produkcji holenderskiej "+
     "przeznaczona do żeglugi po śródlądziu i morskich wodach osłoniętych. Długi i ciężki miecz zakończony bulbem sprawia, że jacht bezpiecznie i szybko pływa "+
     "nawet przy bardzo silnym wietrze. W Holandii od wielu lat działa klasa regatowa Sailhorse i co roku organizowane są zawody międzynarodowe. Wygodny, "+
     "przestronny kokpit i możliwość zamontowania silnika sprawia, że jacht idealnie nadaje się do nauki żeglowania."}];

var tableOfFilter=sourceTable;
      
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

 
const MyValueFunc = () => {
    
    tableOfFilter=[];

    let categoryOfChoose=document.querySelectorAll(".classCategoryofChoose");
    
    let kindOfChoose = categoryOfChoose[0].value;
    let placeOfChoose=categoryOfChoose[1].value;
    let timeOfChoose=categoryOfChoose[2].value;
    let priceOfChoose=categoryOfChoose[3].value;

    // console.log(kindOfChoose+" "+placeOfChoose+" "+timeOfChoose+" "+priceOfChoose);

    for (let i=0;i<sourceTable.length;i++) {
         if ((kindOfChoose===sourceTable[i].CategoryOfProduct || kindOfChoose==="Wszystkie rodzaje") && 
         (placeOfChoose===sourceTable[i].PlaceOfCourse || placeOfChoose==="Wszystkie miejsca") && 
         (timeOfChoose===sourceTable[i].TimingOfCourse || timeOfChoose==="Wszystkie miesiące")) 
         {
         tableOfFilter.push(sourceTable[i]);
        }
        
    };
    console.log("Tablica last: ",tableOfFilter);
    return (
        console.log("AAAAAA",MyFunc()),
        ReactDOM.render(
            <App />,
            document.getElementById("app")
        )


        
    )
    
}

const myReservation = (e) => {
    var tableOfSales=[];
    let ids = e.target.getAttribute("id");
    console.log(ids)
    tableOfSales.push(tableOfFilter[ids])
    console.log(tableOfSales)
    } 

const MyFunc = () => { 
    
    let z=[]; 
    console.log("MyFuncPrzejście",tableOfFilter)
    for (let i=0;i<tableOfFilter.length;i++) {

    let y = 
    <div className="classViewofProduct">
                {/* <div className="classProductImgMain">
                    <img className="classProductImg" src="images/logo_2.jpg"/>
                    <p className="classImgPromotion">Kurs weekendowy</p>
                </div> */}
                <div className="classProductDetail">
                        <div className="classInformationOffer">
                            <div className="classMainProductInformation">
                            <p className="classCategoryStyle">Kategoria kursu:<br></br> {tableOfFilter[i].CategoryOfProduct}</p>
                            {/* <p className="classCategoryStyle">Kurs<br></br> weekendowy</p> */}
                            <p className="classCategoryStyle">Miejsce: <br></br> {tableOfFilter[i].PlaceOfCourse}</p>
                            <p className="classCategoryStyle">Termin: <br></br>{tableOfFilter[i].DateOfStart} - {tableOfFilter[i].DateOfEnd}</p>
                            <p className="classCategoryStyle">Cena: <br></br>{tableOfFilter[i].PriceOfCourse} zł</p>
            
                            </div>
                            <div className="classInformationOfProductDetail">
                                
                                <p className="pclassInformationOfProductDetail">
                                    <img className="classProductImg" src="images/logo_2.jpg"/> 
                                {tableOfFilter[i].InformationAboutCourse} + {tableOfFilter[i].InformationAboutSuppliers}
                                </p>
                                <button onClick={myReservation} className="classBtnProduct" id={i}>Rezerwuj</button>
                            </div>
                        </div>
                </div> 
            </div>;

    z.push(y);
    
    }
    return (
        <>
            {z} 
        </>
        
    )
   
}
    return (   
    <>

    <div className="mainOffer">
        <div className="classParametersofChoose">
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
            <div className="classKindofChoose">
                <h3 className="h3TextFilter">Rodzaju kursu</h3>
                <select className="classCategoryofChoose" onClick={MyValueFunc}>
                    <option>Wszystkie rodzaje</option>
                    <option>Żeglarz Jachtowy</option>
                    <option>Sternik Morski</option>
                    <option>Sternik Motorowodny</option>
                    <option>Holowanie narciarza</option>
                    <option>Narty wodne</option>
                </select>
            </div>
            <div className="classPlaceofChoose">
                <h3 className="h3TextFilter">Miejsca kursu</h3>
                <select className="classCategoryofChoose" onClick={MyValueFunc}>
                    <option>Wszystkie miejsca</option>
                    <option>Mazury</option>
                    <option>Zalew Sulejowski</option>
                    <option>Zalew Zek</option>
                    <option>Zalew Zegrzyński</option>
                    <option>Kraków</option>
                </select>
            </div>
            <div className="classTimeofChoose">
            <h3 className="h3TextFilter">Miesiąc kursu</h3>
            <select className="classCategoryofChoose" onClick={MyValueFunc}>
                <option>Wszystkie miesiące</option>
                <option>Styczeń</option>
                <option>Luty</option>
                <option>Marzec</option>
                <option>Kwiecień</option>
            </select>
            </div>

            <div className="classPriceofChoose">
                <h3 className="h3TextFilter">Cena kursu</h3>
                <select className="classCategoryofChoose" onClick={MyValueFunc}>
                    <option>Wszystkie ceny</option>
                    <option>poniżej 500zł</option>
                    <option>500zł - 1000zł</option>
                    <option>1000zł - 2000zł</option>
                    <option>powyżej 2000zł</option>
                </select>
            </div>
            {/* <button className="classBtnCategoryofChoose" onClick={MyValueFunc}>Filtruj</button> */}
        </div>
        <div className="classViewofProductMain">
            <MyFunc/>
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
            <Popup/>
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