import React from 'react'
import Child from "./components/Child"
import icon from "./assets/icon.png"
const App = () => {
  const name="must material"
  return (
    <div><Child icon={icon} name={name}/></div>
  )
}

export default App;