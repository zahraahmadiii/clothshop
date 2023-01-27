import React from "react";
import "./style.css"

const TotalPrice = ({ card }) => {

    let price = 0;
    if (card.length != 0) {

        card.map((item) => {
            price += item.price * item.quantity
        })
    }

    return (
        <div className="pay">
            <p>Total: ${price}</p>
            <button>Proceed</button>
        </div>
    )
}

export default TotalPrice