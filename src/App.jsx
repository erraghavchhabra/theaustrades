import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Navbar from "./components/navbar";
import TopBar from "./components/topBar";
import "./App.css";
import Footer from "./components/footer";
import About from "./pages/About";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndConditions from "./pages/TermsAndConditions";
import FindTradie from "./pages/FindTradie";
import ForBusiness from "./pages/ForBusiness";

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
      </Routes>
      <Footer />
    </>
  );
}

export default App;
