// src/routes/AppRoutes.jsx
import { Routes, Route } from "react-router-dom";


// import the ScrollToTop component
import ScrollToTop from "../components/ScrollToTop";
import Wedding from "../pages/Wedding";
import Meeting from "../pages/Meeting";
import Accomodation from "../pages/Accomodation";
import HeroSection from "../components/home/Home";
import ContactPage from "../components/contact/Contact";
import Gallery from "../pages/Gallery";

const AppRoutes = () => {
  return (
    <>
      {/* Scroll to top on route change */}
      <ScrollToTop />

      <Routes>

        <Route path="/" element={<HeroSection />} />
          <Route path="/weddings" element={<Wedding />} />
          <Route path="/meetings" element={<Meeting />} />
          <Route path="/accommodations" element={<Accomodation />} />
          <Route path="/contact" element={<ContactPage/>} />
          <Route path="/gallery" element={<Gallery/>} />
      </Routes>
    </>
  );
};

export default AppRoutes;