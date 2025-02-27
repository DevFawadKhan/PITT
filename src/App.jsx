// import React from "react";
import Home from "./pages/Home.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import './App.css'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Detail from "./pages/Detail.jsx";
export default function App() {
  return (
    <>
    <Router>
    <Navbar />
     <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/details" element={<Detail/>} />
</Routes>
<Footer />
    </Router>
    </>
  );
}
