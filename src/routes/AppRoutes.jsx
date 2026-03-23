// src/routes/AppRoutes.jsx
import { Routes, Route } from "react-router-dom";


// import the ScrollToTop component
import ScrollToTop from "../components/ScrollToTop";
import Wedding from "../pages/Wedding";
import Meeting from "../pages/Meeting";

const AppRoutes = () => {
  return (
    <>
      {/* Scroll to top on route change */}
      <ScrollToTop />

      <Routes>
          <Route path="/weddings" element={<Wedding />} />
          <Route path="/meetings" element={<Meeting />} />
      </Routes>
    </>
  );
};

export default AppRoutes;