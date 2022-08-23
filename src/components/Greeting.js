import React, { useState } from 'react'
import Output from './Output'

const Greeting = () => {
  const [changedText, setChangedText] = useState(false)

  const changeTextHandler = () => {
    setChangedText(true)
  }

  return (
    <div>
      <h2>Hello from my world!</h2>

      {!changedText && <Output>It's good to see you!</Output>}
      {changedText && <Output>Changed!</Output>}
      <button id='click-me' onClick={changeTextHandler}>
        Change Text!
      </button>
    </div>
  )
}

export default Greeting
