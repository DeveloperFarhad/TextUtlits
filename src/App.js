


import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

 
function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
          setAlert(null);
      }, 1500);
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
      // document.title = 'TextUtils - Dark Mode';
      // setInterval(() => {
      //   document.title = 'TextUtils is Amazing Mode';
      // }, 2000);
      // setInterval(() => {
      //   document.title = 'Install TextUtils Now';
      // }, 1500);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white'

      // document.title = 'TextUtils - Light Mode';
      showAlert("Light mode has been enabled", "success");

    }
  }
  return (
    <>
    {/* <Navbar title="TextUtils" aboutText="About TextUtils" /> */}
    {/* <Navbar/> */}
    <Router>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert}/>
    <div className="container my-3">
    <Switch>
    {/* /users --> Component 1
        /users/home --> Component 2 */}
          <Route exact path="/about">
            <About mode={mode} />
          </Route>
          <Route exact path="/">
            <TextForm showAlert={showAlert} heading=" Try TextUtlits - Word Counter, Character Counter, Remove Extra Spaces" mode={mode}/>
          </Route>
    </Switch>
    </div>
    </Router>
    </> 
  );
}

export default App;






















// import './App.css';
// import Navbar from './components/Navbar'
// import TextForm from './components/TextForm';
// import About from './components/About';
// import React,{useState} from 'react';
// import Alert from './components/Alert';


// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom"




// function App()  {
//   const [mode, setMode] = useState('light');// weather dark mode is enable or not
//   const [alert, setAlert] = useState(null);
//   const showAlert = (massage, type) => {
//     setAlert({
//       msg : massage,
//       type : type,
//     })
//     setTimeout(()=> {
//       setAlert(null)
//     },1500)
    
//   }
//   const toggleMode= () =>{
//     if(mode === 'light'){
//       setMode ('dark');
//       document.body.style.background = '#042743';
//       showAlert('Dark mode has been eanable', 'success');
//       document.title = "TextUtils - dark Mode";

//       // setInterval(() => {
//       //   document.title = "TextUtils is amazzing Mode";
//       // }, 2000);
//       // setInterval(() => {
//       //   document.title = "Install TextUtils Now";
//       // }, 1500);

//     }
//     else{
//       setMode('light')
//       document.body.style.background = 'white';
//       showAlert('light mode has been eanable', 'success');
//       document.title = "TextUtils - light Mode";
//     }

//   }

//   const toggleModePrimary= () =>{
//     if(mode === 'light'){
//       setMode ('dark');
//       document.body.style.background = 'blue';
//       showAlert('Blue mode has been eanable', 'success')
//     }
//     else{
//       setMode('light')
//       document.body.style.background = 'white';
//       showAlert('light mode has been eanable', 'success')
//     }

//   }

//   const toggleModeSecondary= () =>{
//     if(mode === 'light'){
//       setMode ('dark');
//       document.body.style.background = 'gray';
//       showAlert('Gray mode has been eanable', 'success')
//     }
//     else{
//       setMode('light')
//       document.body.style.background = 'white';
//       showAlert('light mode has been eanable', 'success')
//     }

//   }

//   const toggleModeSuccess= () =>{
//     if(mode === 'light'){
//       setMode ('dark');
//       document.body.style.background = 'green';
//       showAlert('Green mode has been eanable', 'success')
//     }
//     else{
//       setMode('light')
//       document.body.style.background = 'white';
//       showAlert('light mode has been eanable', 'success')
//     }

//   }

//   const toggleModeDanger= () =>{
//     if(mode === 'light'){
//       setMode ('dark');
//       document.body.style.background = 'red';
//       showAlert('Red mode has been eanable', 'success')
//     }
//     else{
//       setMode('light')
//       document.body.style.background = 'white';
//       showAlert('light mode has been eanable', 'success')
//     }

//   }

//   const toggleModeWarning= () =>{
//     if(mode === 'light'){
//       setMode ('dark');
//       document.body.style.background = 'yellow';
//       showAlert('Yellow mode has been eanable', 'success')
//     }
//     else{
//       setMode('light')
//       document.body.style.background = 'white';
//       showAlert('light mode has been eanable', 'success')
//     }

//   }


//   return (
//     <>

//     <Router>


//       <Navbar titale = "Texttutorial" mode={mode} toggleMode={toggleMode} toggleModePrimary={toggleModePrimary} toggleModeSecondary={toggleModeSecondary} toggleModeSuccess={toggleModeSuccess} toggleModeDanger={toggleModeDanger} toggleModeWarning={toggleModeWarning}/>
//       <Alert alert ={alert}/>
//       <div className="container my-3">

//           <Switch>
//               <Route expect path="/about">
//               <About />
//               </Route>
//               <Route expect path='/'>
//                 <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>
//               </Route>

//           </Switch>

//         </div>


//    </Router>
    
//     </>


//   );
// }

// export default App;


