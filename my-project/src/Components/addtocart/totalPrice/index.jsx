import React from "react";
import "./style.css"

const TotalPrice = ({ card,showCheckout, setShowCheckout }) => {

    let price = 0;
    if (card.length != 0) {

        card.map((item) => {
            price += item.price * item.quantity
        })
    }

    const handleShowCheckout = () => {
        setShowCheckout(!showCheckout)
    }

    return (
        <div className="pay">
            <p>Total: ${price}</p>
            <button onClick={handleShowCheckout}>Proceed</button>
        </div>
    )
}

export default TotalPrice