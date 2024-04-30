import React from 'react'

const Dropdown = ({title, options, func}) => {
  return (
    <div className='select'>
      <select default="0" name='format' id='format' onChange={func}>
        <option value='0'>
            {title}
        </option>
        {options.map((option, index) =>(
            <option key={index} value={option}>
                {option.toUpperCase()}
            </option>
        ))}
      </select>
    </div>
  )
}

export default Dropdown