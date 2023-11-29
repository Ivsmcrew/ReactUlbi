import React from "react";

const Select = function({options, defaultOption, value, change}) {
  return(
    <select 
      value={value}
      onChange={(event)=>{change(event.target.value)}}
    >
      <option disabled value="sort">{defaultOption}</option>
      {options.map((option) => {
        return(
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        )
      })}
    </select>
  ) 
}

export default Select