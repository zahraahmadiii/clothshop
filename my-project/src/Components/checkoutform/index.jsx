import React from "react";
import './style.css';

const CheckoutForm = ({card}) => {
    // console.log(card)
    return (

        <form>
            <label htmlFor="email">email</label>
            <input type="email" id="email" />
            <label htmlFor="name">name</label>
            <input type="text" id="name" />
            <label htmlFor="address">address</label>
            <input type="text" id="address" />

            <input type="button" className="btn" value="checkout" onClick={()=>console.log(card)}/>
        </form>
    )
}
export default CheckoutForm