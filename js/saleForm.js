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
        messageToCustomer:"",
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
        // console.log(formData.rulesCheckBox.value);
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
            alert("Potwierdzenie do złożenego zamówienia zostało przyjęte i wysłane na podany e-mail");

        }

    };
    return (
        <form name="MyForm" action="https://formspree.io/xzbgalwz" onSubmit={handleSubmit} method="POST" className="classOrderForm">
                <h3 className="h3TextLeft">Masz pytania, napisz do nas e-mail lub zadzwoń.</h3>
                <input type="text" name="imienazwisko" className="classImieNazwiskoOrderForm"
                       placeholder="Imię i Nazwisko*" value={formData.imienazwisko} onChange={handleChange}/>
                <input type="email" name="adresEmail" className="classEmailOrderForm" placeholder="E-mail*" value={formData.adresEmail} onChange={handleChange}/>
                <input type="text" name="telefon" className="classTelephoneOrderForm" placeholder="Telefon kontaktowy" value={formData.telefon} onChange={handleChange}/>
                <input type="checkbox" name="rulesCheckBox" className="classCheckBox" value={formData.rulesCheckBox.checked} onChange={handleChange} onChange={CheckboxChecked}/>
                <label className="classCheckBoxLebel"> Zgadzam się na Regulamin portalu i Politykę Prywatności</label>
                <textarea style={{visibility:"hidden"}} name="messageToCustomer" className="classMessageToCustomer" placeholder="Tekst wiadomości" value={formData.message} onChange={handleChange}/>
                
                <button className="classBtn_footer" type="submit">Potwierdź zamówienie</button>
            <ul className="classErrorMessage">
                {
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
        <button className="classBtnProduct" onClick={test,CheckboxChecked}>aaaaa</button>
        <div className="classPopup"></div>
        <div className="classPopupDetail">
        <SaleFormDetail/>
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