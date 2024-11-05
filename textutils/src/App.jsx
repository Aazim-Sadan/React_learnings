import './App.css'
import About from './components/About'
import Alert from './components/Alert'
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
import { useState } from 'react'


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);


  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = "#243b5c"
      showAlert("Dark mode has been enbale", "Success")
    } else {
      setMode('light')
      document.body.style.backgroundColor = "white"
      showAlert("Light mode has been enbale", "Success")
    }
  }
  return (
    <>
      <Navbar title="TextUtils" aboutText=" About TextUtils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container">
        <TextForm showAlert={showAlert} heading="Enter the to analyze" mode={mode} />
        <About mode={mode} />
      </div>
    </>
  )
}

export default App
