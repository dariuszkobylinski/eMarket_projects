import React,{Component, useState, useEffect} from "react";
import ReactDOM from "react-dom";
import "../main.scss";
import "./slider_manager";
import "../normalize.css";
// import {ContactForm} from "./contact";
import numberOfOrders from "./slider_manager";


const test = () => {
    numberOfOrders.push(parseInt(numberOfOrders[0]) + parseInt(numberOfOrders.length));
numberOfOrders.push(15);
console.log(numberOfOrders);
console.log(parseInt(numberOfOrders[0]) + parseInt(numberOfOrders.length));
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
        let error = [];
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
            error.push("Przed wysłaniem rezerwacji zapoznaj się z reguleminem") 
        }
        else {

            console.log("to jesto",formData.rulesCheckBox.value);
        }

        if(!correct) {
            setValidation(error);

        }
        else {
            MyForm.submit();
            alert("Dziękujemy, zamówienie zostało przyjęte i wysłane na podany e-mail");

        }

    };
    return (
        <form name="MyForm" action="https://formspree.io/xzbgalwz" onSubmit={handleSubmit} method="POST" className="classOrderForm">
                <h3 className="h3TextLeft" style={{fontSize:"1.5em", fontStyle:"Italic", top:"20px"}}>Podaj dane kontaktowe i potwierdź zamówienie</h3>
                <input type="text" name="imienazwisko" className="classImieNazwiskoOrderForm"
                       placeholder="Imię i Nazwisko*" value={formData.imienazwisko} onChange={handleChange}/>
                <input type="email" name="adresEmail" className="classEmailOrderForm" placeholder="E-mail*" value={formData.adresEmail} onChange={handleChange}/>
                <input type="text" name="telefon" className="classTelephoneOrderForm" placeholder="Telefon kontaktowy" value={formData.telefon} onChange={handleChange}/><br></br>
                <div className="classCheckBox_Lebel">
                <input type="checkbox" name="rulesCheckBox" className="classCheckBox" value={formData.rulesCheckBox.checked} onChange={handleChange} onChange={CheckboxChecked}/>
                <label className="classCheckBoxLebel"> Akceptuję Regulamin portalu<br></br> i Politykę Prywatności</label><br></br>
                </div>
                <textarea style={{visibility:"hidden"}} name="messageToCustomer" className="classMessageToCustomer" placeholder="Tekst wiadomości" value="Ala ma kota" onChange={handleChange}/>
                <button className="classBtn_footer" type="submit" style={{height:"50px", borderRadius:"12px"}}>Potwierdź zamówienie</button>
                    <ul className="classErrorMessage"> {
                    validation.map((e,i) => {
                        return <li key={i} style={{visibility:"visible", listStyle:"none"}}>{e}</li>
                    })
                    }
                    </ul>
        </form>     
    )
    
}

const Popup = ()  => {
    
    return (
        <>
        {/* <button className="classBtnProduct" onClick={test,CheckboxChecked}>aaaaa</button> */}
        <div className="classPopup"></div>
        <div className="classPopupDetail">
        <SaleFormDetail/>
        <div className="classOrderDetails">
            <h3 className="h3TextLeft" style={{fontSize:"1.5em", fontStyle:"Italic", top:"20px"}}>Szczegóły zamówienia</h3><br></br>
            <p>AAAAAAAAAA</p>
            <p>AAAAAAAAAA</p>
            <p>AAAAAAAAAA</p>
            <p>AAAAAAAAAA</p>
            <p>AAAAAAAAAA</p>
            <p>AAAAAAAAAA</p>
        </div>
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