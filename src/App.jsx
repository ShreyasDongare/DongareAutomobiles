import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Navigator from "./components/Navigator";
import Services from "./components/Services";


const App = () => {
  return (
    <>
      <Header/>
      <Home/>
      <Services/>
      <About/>
      <Contact/>
      <Footer/>

      <Navigator/>
      
    </>
  );
};

export default App;
