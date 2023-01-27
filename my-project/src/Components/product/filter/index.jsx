import React from "react";
import Select from "../selectOption";
import "./style.css"
function Filter() {
    return (
      <div className="filter">
        <p>
        <span>6</span> Products
        </p>
        <Select lable='order' options={['lowest','highest']}/>
        <Select lable='filter' options={['all','xs','s','m','l','xl']}/>
       
       
      </div>
    );
  }
  
  export default Filter;