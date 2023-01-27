import React from 'react'

function Select({lable,options,onOrderHandler}) {
    
  return (
    <div>
       <div>
        <label>{lable}</label>
        <select onChange={(event)=>onOrderHandler(event.target.value)} >
            {options.map((option,index)=> <option key={index} value={option}>{option}</option>)}         
        </select>
        
      </div>


    </div>
  )
}

export default Select