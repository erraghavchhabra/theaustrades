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
import FavoriteList from "./pages/favList";
import MyProfile from "./pages/myProfile";
import ChangePassword from "./pages/changePassword";
import SlugPage from './pages/licensing/SlugPage';
import SlugPageOccupation from './pages/occupations/SlugPageOccupation';

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
        <Route path="/favorite" element={<FavoriteList />} />
        <Route path="/profile" element={<MyProfile />} />
        <Route path="/change-password" element={<ChangePassword />} />
        <Route path="/licensing/:slug" element={<SlugPage />} />
        <Route path="/occupations/:slug" element={<SlugPageOccupation />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
