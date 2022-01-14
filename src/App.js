import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, Blog, AboutMe, ContactMe, Whoops404 } from "./resources/Pages";
import { Administrator } from "./resources/includes/Header"


function App(props) {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/blog" element={<Blog />}/>
        <Route path="/about" element={<AboutMe />}/>
        <Route path="/contact" element={<ContactMe />}/>
        <Route path="/admin" element={<Administrator userName={"Billy-06"}/>}/>
        <Route path="*" element={<Whoops404 />}/>
        
      </Routes>
    </>   
  );
}

export default App;
