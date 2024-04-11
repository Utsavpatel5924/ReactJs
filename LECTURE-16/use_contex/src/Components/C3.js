import React ,{useContext} from 'react'
import {Context1} from "../App"

const C3 = () => {
  const name=useContext(Context1)
  return (
    <div>
      <h1>Name is...{name}</h1>
    </div>
  )
}

export default C3
