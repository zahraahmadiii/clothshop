import React from 'react'

function Select({lable,options}) {
    
  return (
    <div>
       <div>
        <label>{lable}</label>
        <select >
            {options.map((option,index)=> <option key={index} value={option}>{option}</option>)}         
        </select>
        
      </div>


    </div>
  )
}

export default Select