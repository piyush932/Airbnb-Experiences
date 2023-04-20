import React from "react";
import ReactDOM from "react";
import grid from "./../images/photo-grid.png"
export default function Main(){
    return(
        <div className="Main">
        <img src={grid} alt="grid" className="photo-grid"></img>
        </div>
    )
}