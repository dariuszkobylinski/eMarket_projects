import React,{Component, useState, useEffect} from "react";
import ReactDOM from "react-dom";
import "../main.scss";
import "./slider_manager";
import "../normalize.css";
import {FooterMain} from "./contact";
import {Popup} from "./saleForm";
import sourceTable from "./data/deteilOfOffers";
import numberOfOrders from "./slider_manager";

var tableOfFilter=sourceTable;

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
    let typeOfChoose=categoryOfChoose[3].value;

    // console.log(kindOfChoose+" "+placeOfChoose+" "+timeOfChoose+" "+priceOfChoose);

    for (let i=0;i<sourceTable.length;i++) {
         if ((kindOfChoose===sourceTable[i].CategoryOfProduct || kindOfChoose==="Wszystkie kategorie") && 
         (placeOfChoose===sourceTable[i].PlaceOfCourse || placeOfChoose==="Wszystkie miejsca") && 
         (timeOfChoose===sourceTable[i].TimingOfCourse || timeOfChoose==="Wszystkie miesiące") &&
         (typeOfChoose===sourceTable[i].TypeOfCourse || typeOfChoose==="Wszystkie rodzaje")) 
         {
         tableOfFilter.push(sourceTable[i]);
        }  
    };
    console.log("Tablica last: ",tableOfFilter);
    return (
        // console.log("AAAAAA",MyFunc()),
        ReactDOM.render(
            <App />,
            document.getElementById("app")
        )   
    )   
}

const myHoverAction = (e) => {

    let PmyHoverAction=document.querySelectorAll(".pclassInformationOfProductDetail");
    let BtnMyHoverAction=document.querySelectorAll(".classBtnProductReturn");
        // var positionY=(window.scrollY);
        // console.log(positionY);
        
        PmyHoverAction[(e.target.getAttribute("id"))].classList.toggle("classMyHoverAction");
        BtnMyHoverAction[(e.target.getAttribute("id"))].style.visibility="visible";
        };

        const myHoverActionButton = (e) => {

            let BtnMyHoverActionDetail= document.querySelectorAll(".classBtnProductReturn");   
            let PmyHoverAction=document.querySelectorAll(".pclassInformationOfProductDetail");
            let BtnMyHoverAction=document.querySelectorAll(".classBtnProductReturn");
                // var positionY=(window.scrollY);
                // console.log(positionY);
                let myIdNumber=e.target.getAttribute("id");
                PmyHoverAction[myIdNumber].classList.toggle("classMyHoverAction");
                BtnMyHoverAction[myIdNumber].style.visibility="visible";
                };

const myHoverCloseAction = (e) => {

    let PmyHoverAction=document.querySelectorAll(".pclassInformationOfProductDetail");
    // PmyHoverAction[(e.target.getAttribute("id"))].classList.toggle("classMyHoverAction")
    let BtnMyHoverAction=document.querySelectorAll(".classBtnProductReturn");
    for (let i=0;i<PmyHoverAction.length;i++) {
        PmyHoverAction[i].classList.remove("classMyHoverAction");
        BtnMyHoverAction[i].style.visibility="hidden";
    }
    // console.log("to jest pozycja",positionY);
    // window.scrollTo(0,positionY);
    };


const myReservation = (e) => {
    var tableOfSales=[];
    let ids = e.target.getAttribute("id");
    console.log(ids);
    tableOfSales.push(tableOfFilter[ids]);
    

    // console.log("tabela1",tableOfSales[0].idOfOffer);
    // console.log("tabela",tableOfSales[0]);
    
    let myPopup=document.querySelector(".classPopup");
    let myPopupDetail=document.querySelector(".classPopupDetail");
    let pClassOrderDetails=document.querySelectorAll(".pclassOrderDetails");
    let myBtnOrderCancel=document.querySelector(".classBtnProductOrder");
    let messageToCUstomer=document.querySelector(".classMessageToCustomer");
    console.log(pClassOrderDetails[0]);

    myPopup.style.visibility="visible";
    myPopupDetail.style.visibility="visible";
    myBtnOrderCancel.style.visibility="visible";
    console.log(numberOfOrders);

    // pClassOrderDetails[0].innerHTML="Numer zamówienia: "+numberOfOrders[numberOfOrders.length-1]+1;
    pClassOrderDetails[1].innerHTML="Kategoria kursu: "+tableOfSales[0].CategoryOfProduct;
    pClassOrderDetails[2].innerHTML="Miejsce kursu: " +tableOfSales[0].PlaceOfCourse;
    pClassOrderDetails[3].innerHTML="Data rozpoczęcia: " +tableOfSales[0].DateOfStart;
    pClassOrderDetails[4].innerHTML="Data zakończenia: " +tableOfSales[0].DateOfEnd;
    pClassOrderDetails[5].innerHTML="Miesiąc kursu: " +tableOfSales[0].TimingOfCourse;
    pClassOrderDetails[6].innerHTML="Cena kursu: "+tableOfSales[0].PriceOfCourse+" zł";
    messageToCUstomer.value="Dzień Dobry."+" "+"Dziękujemy za złożenie zamówienia o numerze: "+numberOfOrders[numberOfOrders.length-1]+1+" na "+
    tableOfSales[0].CategoryOfProduct+" "+", które będzie realizowany "+tableOfSales[0].PlaceOfCourse+" w miesiącu "+tableOfSales[0].TimingOfCourse+"-Data startu: "+tableOfSales[0].DateOfStart+" Data zakończenia: "
    +tableOfSales[0].DateOfEnd+". Cena kursu to "+tableOfSales[0].PriceOfCourse+" zł. Proszę o wpłatę zaliczki w celu potwierdzenia rezerwacji. Pozdrawiamy. Zespół e-Market";


    let myClassErrorClean=document.querySelectorAll(".liClassErrorMessage");
    for (let i=0;i<myClassErrorClean.length;i++) {
               myClassErrorClean[i].style.visibility="visible";
    }
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
                <div className="classProductDetail" id={i}>
                        <div className="classInformationOffer">
                            <div className="classMainProductInformation">
                            <p className="classCategoryStyle">Kategoria:<br></br> {tableOfFilter[i].CategoryOfProduct}</p>
                            {/* <p className="classCategoryStyle">Kurs<br></br> weekendowy</p> */}
                            <p className="classCategoryStyle">Miejsce: <br></br> {tableOfFilter[i].PlaceOfCourse}</p>
                            <p className="classCategoryStyle">Termin: <br></br>{tableOfFilter[i].DateOfStart}- {tableOfFilter[i].DateOfEnd}</p>
                            <p className="classCategoryStyle">Cena: <br></br>{tableOfFilter[i].PriceOfCourse} zł</p>
            
                            </div>
                            <div className="classInformationOfProductDetail" >
                                
                                <p className="pclassInformationOfProductDetail" id={i} onMouseLeave={myHoverCloseAction}>
                                    <img className="classProductImg" src={tableOfFilter[i].PictureForCourse}/> 
                                <p style={{color:"black", display:"inline-block", fontWeight:"bold", margin:"0px", fontStyle:"italic", marginRight:"5px"}}>
                                    Oferta:</p>{tableOfFilter[i].InformationAboutCourse} <br></br> 
                                <p style={{color:"black", display:"inline-block", fontWeight:"bold", margin:"0px", fontStyle:"italic", marginRight:"5px"}}>
                                    Informacje o dostawcy:</p>{tableOfFilter[i].InformationAboutSuppliers} <br></br>
                                 <br></br>
                                 <button className="classBtnProductReturn" onClick={myHoverCloseAction} id={i} >Zamknij</button>
                                  <br></br>
                                 <button onClick={myReservation} className="classBtnProduct" id={i}>Rezerwuj</button>
                                </p>
                                <button className="classBtnProductDetails" onClick={myHoverActionButton} id={i} >Rozwiń...</button>
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
                <h3 className="h3TextFilter">Wybierz kategorię</h3>
                <select className="classCategoryofChoose" onChange={MyValueFunc}>
                    <option>Wszystkie kategorie</option>
                    <option>Żeglarz Jachtowy</option>
                    <option>Sternik Morski</option>
                    <option>Sternik Motorowodny</option>
                    {/* <option>Holowanie narciarza</option>
                    <option>Narty wodne</option> */}
                </select>
            </div>
            <div className="classPlaceofChoose">
                <h3 className="h3TextFilter">Wybierz miejsce</h3>
                <select className="classCategoryofChoose" onChange={MyValueFunc}>
                    <option>Wszystkie miejsca</option>
                    <option>J. Dzierżno Małe</option>
                    <option>J. Żywieckie</option>
                    <option>Kraków/ Wawel</option>
                    {/* <option>Mazury</option> */}
                    <option>Mazury-J. Nidzkie</option>
                    <option>Mazury-J. Święcajty</option>
                    <option>Olsztyn J. Ukiel</option>
                    <option>Zalew Rzeszowski</option>
                    <option>Zalew Sulejowski</option>
                    <option>Zalew Zek</option>
                    <option>Zalew Zegrzyński</option>
                    <option>Zalew Zemborzycki</option>
                    
                </select>
            </div>
            <div className="classTimeofChoose">
            <h3 className="h3TextFilter">Wybierz termin</h3>
            <select className="classCategoryofChoose" onChange={MyValueFunc}>
               
                <option>Wszystkie miesiące</option>
                {/* <option>Styczeń</option>
                <option>Luty</option>
                <option>Marzec</option>
                <option>Kwiecień</option>
                <option>Maj</option> */}
                <option>Czerwiec</option>
                <option>Lipiec</option>
                <option>Sierpień</option>
                <option>Wrzesień</option>
                <option>Październik</option>
                <option>Listopad</option>
                <option>Grudzień</option>
            </select>
            </div>

            <div className="classPriceofChoose">
                <h3 className="h3TextFilter">Wybierz rodzaj</h3>
                <select className="classCategoryofChoose" onChange={MyValueFunc}>
                    <option>Wszystkie rodzaje</option>
                    <option>Dzienny</option>
                    <option>Weekendowy</option>
                    
                </select>
            </div>
            <button className="classBtnCategoryofChoose" onClick={MyValueFunc}>Filtruj</button>
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
    FooterMain,
    BurgerClick

};