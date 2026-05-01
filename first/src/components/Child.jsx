import React from 'react'

const Child = (prop) => {
  return (
    <div>
      <h3>{prop.name}</h3>
      <img src={prop.icon} alt={name}/>
    </div>
  )
}

export default Child