import React from "react";
import { Route, Routes } from 'react-router-dom';
import Home from "./home/Home";
import Main from "./component/Main";
import About from "./about/About";
import Contactus from "./contact/Contact";
import Footor from "./component/Footor";
import Ebook from "./ebook/Ebooks";
import Login from "./component/Login";
import Signup from "./component/Signup";

const App = () => {
  return (
    <div className="dark:bg-slate-900 dark:text-white">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/main" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contactus />} />
        <Route path="/footor" element={<Footor />} />
        <Route path="/ebook" element={<Ebook />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
};

export default App;
