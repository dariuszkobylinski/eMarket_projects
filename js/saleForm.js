import React,{Component, useState, useEffect} from "react";
import ReactDOM from "react-dom";
import "../main.scss";
import "./slider_manager";
import "../normalize.css";
// import {ContactForm} from "./contact";
import numberOfOrders from "./slider_manager";


const MyOrderAction = () => {
    numberOfOrders.push(parseInt(numberOfOrders[0]) + parseInt(numberOfOrders.length));
console.log(numberOfOrders);
console.log(parseInt(numberOfOrders[0]) + parseInt(numberOfOrders.length));
// let tableOfOrders=numberOfOrders;
// // export  default numberOfOrders;
}

const CheckboxChecked = () => {
    var checkBoxStatus= document.querySelectorAll(".classCheckBox");

    if(checkBoxStatus[0].checked===false) {
        checkBoxStatus[0].value=false;
        // formData.rulesCheckBox.value=false;
    }
    else {
        checkBoxStatus[0].value=true;
        // formData.rulesCheckBox.value=true;
    }
    
    console.log("Val",checkBoxStatus[0].value, "Che",checkBoxStatus[0].checked);
    return (
        checkBoxStatus[0].value
    )
}

const SaleFormDetail = () => {
    const [formData, setFormData] = useState({
        imienazwisko: "",
        adresEmail: "",
        telefon:"",
        messageToCustomer:"a",
        rulesCheckBox:" ",
    });
    
    const [validation, setValidation] = useState([]);
    const handleChange = (event) => {
        setFormData({
            ...formData,
            [event.currentTarget.name]: event.currentTarget.value,
            
            
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let correct = true;
        var error = [];
        console.log(formData.messageToCustomer.value);
        if(formData.imienazwisko.length < 2) {
            correct = false;
            error.push("Pole Imię i Nazwisko musi zawierać co najmniej 2 znaki")
        }
        if((formData.adresEmail.length < 3) && !(formData.adresEmail.includes("@"))) {
            correct = false;
            error.push("Pole Email musi zawierać znak @ i co najmniej 3 znaki")
        }
        if(formData.telefon.length < 9) {
            correct = false;
            error.push("Pole Telefon kontaktowy musi zawierać co najmniej 9 znaków")
        }
        if(formData.messageToCustomer==="") {
            correct = false;
            error.push("Pole wiadomość musi zostać uzupełnione")
        }

        if(document.querySelectorAll(".classCheckBox")[0].checked===false) {
            console.log("to jest",formData.rulesCheckBox);
            correct = false;
            error.push("Przed wysłaniem rezerwacji zapoznaj się z reguleminem i polityką prywatności") 
        }
        else {

            console.log("to jesto",formData.rulesCheckBox.value);
        }

        if(!correct) {
            setValidation(error);
            

        
        }
        else {
            MyForm.submit();
            alert("Dziękujemy, zamówienie zostało przyjęte. Potwierdzenie zostanie wysłane na podany e-mail");
        }
    
    };
    return (
        <form name="MyForm" action="https://formspree.io/xzbgalwz" onSubmit={handleSubmit} method="POST" className="classOrderForm">
                <h3 className="h3TextSaleForm">Podaj dane kontaktowe i potwierdź zamówienie</h3>
                <input type="text" name="imienazwisko" className="classImieNazwiskoOrderForm"
                       placeholder="Imię i Nazwisko*" value={formData.imienazwisko} onChange={handleChange}/>
                <input type="email" name="adresEmail" className="classEmailOrderForm" placeholder="E-mail*" value={formData.adresEmail} onChange={handleChange}/>
                <input type="text" name="telefon" className="classTelephoneOrderForm" placeholder="Telefon kontaktowy" value={formData.telefon} onChange={handleChange}/><br></br>
                <div className="classCheckBox_Lebel">
                <input type="checkbox" name="rulesCheckBox" className="classCheckBox" value={formData.rulesCheckBox.checked} onChange={handleChange} onChange={CheckboxChecked}/>
                <label className="classCheckBoxLebel"> Akceptuję <a href="Regulamin.html" target="_blank">Regulamin</a> portalu i <a href="Bezpieczenstwo.html" target="_blank">Politykę Prywatności</a></label>
                </div>
                <button className="classBtn_footerSaleForm" type="submit" onClick={MyOrderAction}>Potwierdź zamówienie</button>
                <textarea style={{visibility:"hidden"}} name="messageToCustomer" className="classMessageToCustomer" placeholder="Tekst wiadomości" onChange={handleChange}/>
                

                    <ul className="classErrorMessage"> {
                    validation.map((e,i) => {
                        return <li key={i} style={{visibility:"visible", listStyle:"none"}} className="liClassErrorMessage">{e}</li>
                    })
                    }
                    </ul>
        </form>     
    )
    
}

const myBtnOrderCancelation = () => {
    let myPopup=document.querySelector(".classPopup");
    let myPopupDetail=document.querySelector(".classPopupDetail");
    let myBtnOrderCancel=document.querySelector(".classBtnProductOrder");
    let myClassErrorClean=document.querySelectorAll(".liClassErrorMessage");

    myPopup.style.visibility="hidden";
    myPopupDetail.style.visibility="hidden";
    myBtnOrderCancel.style.visibility="hidden";

    
    
    for (let i=0;i<myClassErrorClean.length;i++) {
    
               myClassErrorClean[i].style.visibility="hidden";
   
    }
     
    
}

const Popup = ()  => {
    
    return (
        <>
        {/* <button className="classBtnProduct" onClick={test,CheckboxChecked}>aaaaa</button> */}
        <div className="classPopup"></div>
        <div className="classPopupDetail">
        <SaleFormDetail/>
        <div className="classOrderDetails">
            <h3 className="h3TextSaleForm">Szczegóły zamówienia</h3>
            <p className="pclassOrderDetails">Numer zamówienia: {numberOfOrders[numberOfOrders.length-1]+1}</p>
            <p className="pclassOrderDetails">AAAAAAAAAA</p>
            <p className="pclassOrderDetails">AAAAAAAAAA</p>
            <p className="pclassOrderDetails">AAAAAAAAAA</p>
            <p className="pclassOrderDetails">AAAAAAAAAA</p>
            <p className="pclassOrderDetails">AAAAAAAAAA</p>
            <p className="pclassOrderDetails">AAAAAAAAAA</p>
        </div>
        <button className="classBtnProductOrder" onClick={myBtnOrderCancelation}>Anuluj</button>
        {/* <ContactForm/> */}
        </div>
    </>

    )
}

function App() {   
    return (
        <> 
            <Popup/>
        </>
    )
}
ReactDOM.render(
    <App />,
    document.getElementById("app")
);
export {
    App,
    Popup,
    SaleFormDetail,
    
};