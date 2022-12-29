import React from "react";
import Home from "./component/pages/Home";
import {BrowserRouter as Router ,Route ,Routes}  from "react-router-dom"
import Aboutme from "./component/pages/Aboutme";
import Skills from "./component/pages/Skills"
import Contact from "./component/pages/Contact";
import Footer from "./component/pages/Footer";
function App() {
  
  return (
    
    <div className="App">
      <div className="app_home">
      </div>
      <Router>
    <Routes>
      
      <Route   path="/" exact element ={<Home />}></Route>
      <Route path="/Aboutme" element ={<Aboutme/>}> </Route>
      <Route path="/Skills" element ={<Skills/>} ></Route>
      <Route path="/contact" element ={<Contact/>}></Route>
    </Routes>
    <Footer />
    </Router>
    </div>
  
  );
  
}

export default App;



