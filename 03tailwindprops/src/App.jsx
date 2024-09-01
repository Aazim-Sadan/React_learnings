import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  let myObj = {
    role: "Web Developer",
    stack: "React"
  }

  let myArr = [1,2,3,4]

  // passing values from one components to another components 
  // and we recieve the values in function Card(props)

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind Test</h1>
      <Card username="aazimsadan" btnText="Click Me"/>
      <Card username="Web Developer" btnText="Visit Me"/>
    </>
  )
}

export default App
