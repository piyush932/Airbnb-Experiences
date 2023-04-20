import React from "react";
import ReactDOM from "react";
import data from "./data";
import Container from "./components/Container";

export default function App(){
    const cards = data.map(el => {
        return(
            <Container  
                   img = {el.coverImg}
                   rating = {el.stats.rating}
                   reviewCount = {el.stats.reviewCount}
                   location = {el.location}
                   title = {el.title}
                   price = {el.price}
                   openSpots = {el.openSpots}
            />
        )
    })

    return(
        <div>
            <section className="card--list">
            {cards}
            </section>
        </div>
    )
}

