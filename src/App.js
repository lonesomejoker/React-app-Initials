
import './App.css';

//import About from './components/About';
import Navbar from './components/Navbar';
import TxtForm from './components/TxtForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
/*import{ 
  BrowserRoter as Router,
  Switch,
  Route
}  from "react-router-dom";  */

function App() {
  const [mode, setMode] = useState('light');

  const [alert, setAlert] = useState(null); 

  const showAlert=(message,type)=>{
    setAlert({
     msg:message,
     type:type
    }) 
    setTimeout( ()=>{
      setAlert(null);
    },2000);  //alert message will disappear after 2 secs

    }

  const toggleMode=()=>{
    if(mode==='light'){
      setMode('black');
      document.body.style.backgroundColor = 'black';
      showAlert("dark mode has been enabled ","success");
      //document.title="TextUility-Dark Mode"; changes title when enabling dark mode
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("dark mode has been disabled ","success");
    }
  } 

  return ( 
    
    <>
    {/*<Router>*/}
    {/*<Navbar title ="Text_utility" aboutText="About" mode={mode} toggleMode={toggleMode}/>*/}
    
    <Navbar title ="Text_utility"  mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container">
    {/*<Switch>
      <Route exact path="/about"> {/*path to about us*/} 
        {/*</><About />
      </Route>
  <Route exact path ="/">*/}
      <TxtForm heading="Enter to analyze" mode={mode} />
   
     {/*</Route>
    </Switch>*/}
     </div>
     {/*</Router>*/}
     </>
  );
}

export default App; 
