import React,{Component, useState, useEffect} from "react";
import ReactDOM from "react-dom";
import "../main.scss";
import "./slider_manager";
import "../normalize.css";
import {ContactForm} from "./contact";


const Popup = ()  => {
    return (
        <>
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