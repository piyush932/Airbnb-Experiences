import React from "react";
import ReactDOM from "react";
import airlogo from "./../images/airbnb-logo.png"

export default function Headers(){
    return(
        <div className="header">
        <img src={airlogo} alt="airbnblogo" className="airlogo"></img>
        </div>
    )
}