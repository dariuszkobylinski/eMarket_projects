import React,{Component, useState, useEffect} from "react";
import ReactDOM from "react-dom";
import "../main.scss";
import "./slider_manager";
import "../normalize.css";
import {ContactForm} from "./contact";

import numberOfOrders from "./slider_manager";


const test = () => {
    numberOfOrders.push(parseInt(numberOfOrders[0]) + parseInt(numberOfOrders.length));
numberOfOrders.push(15);
console.log(numberOfOrders);
console.log(parseInt(numberOfOrders[0]) + parseInt(numberOfOrders.length));
}


const Popup = ()  => {
    
    return (
        <>
        <button className="classBtnProduct" onClick={test}>aaaaa</button>
        <div className="classPopup"></div>
         
        <div className="classPopupDetail">
        <ContactForm/>
       
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
};