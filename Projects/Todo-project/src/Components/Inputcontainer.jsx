import React from 'react'

const Inputcontainer = ({ inValue, write, add }) => {
  return (
    <>
      <div className="inputField">
      <input type="text" placeholder="Enter todo" value={inValue} onChange={write}/>
      <button onClick={add}>+</button>
      </div>
    </>
  )
}

export default Inputcontainer