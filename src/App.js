
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';


function App() {
  const [mode,setMode] = useState('light');
  const [alert,setAlert] = useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1400);
  }

  const toggleMode = ()=>{
    if (mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor='#4c4f44';
      showAlert("Dark Mode has been Enabled.","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='#fff';
      showAlert("Light Mode has been Enabled.","success");

    }
  }
return (
<>
  <Navbar title= "TextUtils" mode ={mode} toggleMode={toggleMode} />
  <Alert alert={alert}/>
  <div className="container">
    <TextForm showAlert={showAlert} heading="Enter the text hear to analyze" mode={mode} toggleMode={toggleMode} />
  </div>
</>
);
}

export default App;
