import './App.css'
import About from './components/About'
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
import { useState } from 'react'


function App() {
  const [mode, setMode] = useState('light');

 const toggleMode = () => {
   if (mode === 'light') {
     setMode ('dark')
     document.body.style.backgroundColor = "#243b5c"
    } else {
      setMode('light')
      document.body.style.backgroundColor = "white"
    }
  }
  return (
    <>
      <Navbar title="TextUtils" aboutText=" About TextUtils" mode={mode} toggleMode={toggleMode} />
      <div className="container">
        <TextForm heading="Enter the to analyze"  mode={mode}/>
        <About mode={mode} />
      </div>
    </>
  )
}

export default App
