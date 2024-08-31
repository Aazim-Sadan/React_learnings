import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0)

  // let counter = 15

  let addValue = () => {
  if(counter < 20){
    counter = counter + 1
    setCounter(counter)
  }
    
  }

  let removeValue = () => {
    do {
      counter = counter - 1
      setCounter(counter)
    }
    while (counter < 0);
      
  }


  return (
    <>
      <h1>  Don't scared me, I'm a Programmer </h1>
      <h2>Counter value: {counter}</h2>

      <button
        onClick={addValue}
      >Add value</button>
      <br />
      <button
      onClick={removeValue}
      >Remove value {counter}</button>
      <p>Footer: {counter}</p>

    </>
  )
}

export default App
