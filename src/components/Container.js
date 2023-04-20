import React from "react";
import ReactDOM from "react";
import data from './../data'

export default function Container(props){

    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location !==0) {
        badgeText = "ONLINE"
    }

    return(
        <div className="card">
        {badgeText && <div className="card--badge">{badgeText}</div>}
        <img src={require(`../images/${props.img}`)} className="card--image" alt="katie"/>
        <div className="card--stats">
            <img src={require("../images/star.png")} alt="star"/>
            <span>{props.rating}</span>
            <span className="gray">  ({props.reviewCount})  </span>
            <span className="gray">{props.location}</span>
        </div>
        <div>
        <p className="title">{props.title}</p>
        <p className="heading"><span className="bold">From ${props.price}</span> / person</p>
        </div>
    </div>
    )
}