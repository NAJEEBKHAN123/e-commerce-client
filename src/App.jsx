import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Common/Navbar";
import Topbar from "./Common/Topbar";
import Home from "./components/Home";
import Footer from "./Common/Footer";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import MenuContainer from "./components/MenuContainer";
import SearchResults from "./components/SearchResults";

function App() {
  return (
    <>
      <BrowserRouter>
        <Topbar />
        <Navbar /> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<MenuContainer />} />
          <Route path="/menu/:category" element={<MenuContainer />} />
          <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
          <Route path="/TermsOfService" element={<TermsOfService />} />
          <Route path="/search" element={<SearchResults />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;