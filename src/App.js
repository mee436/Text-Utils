import logo from './logo.svg';
import Navbar from './components/Navbar';
import './App.css';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';
import { Link } from 'react-router-dom';

import{
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

// let name = "Shastri";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message,type) =>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  const toggleMode = () =>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#0b0f34';
      showAlert("Dark mode has been enabled","Success");
      document.title="TextUtils - Dark mode"
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled","Success");
      document.title="TextUtils - Light mode"

    }
  }
  return (
    <>
    <BrowserRouter>
    <Navbar title="TextUtils" about="About" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container"></div>
      <Routes>
        <Route path="/about" element={<About />}></Route>
        <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze"  mode={mode}/>}></Route>
      </Routes>
    </BrowserRouter>
    </>
    
  );
}

export default App;


