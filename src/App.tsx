import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Blog, AboutMe, ContactMe, Whoops404 } from "./resources/Pages";
import { Administrator, Header, Footer } from "./resources/includes/Header";


export class App extends React.Component {
  render(): React.ReactNode {
    return (
    <>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/blog" element={<Blog />}/>
        <Route path="/about" element={<AboutMe />}/>
        <Route path="/contact" element={<ContactMe />}/>
        <Route path="/admin" element={<Administrator userName={"Billy-06"}/>}/>
        <Route path="*" element={<Whoops404 />}/>
      </Routes>
      <Footer />
    </Router>
      
    </>   
  );
  }
  
}

export default App;
