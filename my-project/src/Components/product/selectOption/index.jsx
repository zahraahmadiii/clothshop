import React from 'react'

function Select({lable,options}) {
    
  return (
    <div>
       <div>
        <labele>{lable}</labele>
        <select >
            {options.map((option)=> <option value={option}>{option}</option>)}         
        </select>
        
      </div>


    </div>
  )
}

export default Select