import React from "react";
import Hero from "./components/Hero"
import Aboutme from "./components/Aboutme";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer"

export class App extends  React.Component{

    render(){
    return(
     <>
     <Hero/>
     <Aboutme/>
     <Skills/>
     <Projects/>
     <Footer/>
     </>
    )
  }
} 


export default App;
