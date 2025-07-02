import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Navbar from "./components/navbar";
import TopBar from "./components/topBar";
import "./App.css";
import Footer from "./components/Footer";
import About from "./pages/About";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import FindTradie from "./pages/FindTradie";
import ForBusiness from "./pages/ForBusiness";
import Login from "./pages/login";
import Register from "./pages/register";
import List from "./pages/list";
function App() {
  return (
    <>
      <TopBar />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsAndConditions />} />
        <Route path="/find_a_tradie" element={<FindTradie />} />
        <Route path="/for_business" element={<ForBusiness />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/list" element={<List />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
