import React from "react";
import { useLocation } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import InteriorServices from "./pages/InteriorServices";
import ExteriorServices from "./pages/ExteriorServices";
import ResidentialServices from "./pages/ResidentialServices";
import CommercialServices from "./pages/CommercialServices";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import AboutPage from "./pages/AboutPage";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Quote from "./pages/Quote";
import Gallery from "./pages/Gallery";
import Footer from "./components/Footer";

function ScrollToTop() {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" }); // change to "smooth" if you want
  }, [pathname]);
  return null;
}
function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Navbar />

        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/interior" element={<InteriorServices />} />
          <Route path="/services/exterior" element={<ExteriorServices />} />
          <Route path="/services/commercial" element={<CommercialServices />} />
          <Route
            path="/services/residential"
            element={<ResidentialServices />}
          />
          <Route path="/contact" element={<Contact />} />
          <Route path="/quote" element={<Quote />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
