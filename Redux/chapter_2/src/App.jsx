import { useState } from 'react'
import './App.css'
import Account from './conponents/Account'
import Bonus from './conponents/Bonus'
import { useSelector } from 'react-redux'

function App() {

 const amount = useSelector(state=> state.account.amount)
 const points = useSelector(state=> state.bonus.points)

  return (
    <>
      <div className="App">
        <h4>App</h4>
        <h3>Current Amount : {amount} </h3>
        <h3>Totel Bonus : {points} </h3>

        <Account></Account>
        <Bonus></Bonus>
      </div>
    </>
  )
}

export default App
