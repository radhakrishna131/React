import React from 'react'
import "./Child.css"
const Child = (prop) => {
  return (
    <div className='box'>
      <h3>{prop.name}</h3>
      <img src={prop.icon} alt={name}/>
    </div>
  )
}

export default Child