import React from "react";
import Home from "./Component/Home";
import About from "./Component/About";
import Blog from "./Component/Blog";
import Contact from "./Component/Contact";
import Portfolio from "./Component/Portfolio";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
