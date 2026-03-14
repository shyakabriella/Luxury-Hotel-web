// src/routes/AppRoutes.jsx
import { Routes, Route } from "react-router-dom";


// import the ScrollToTop component
import ScrollToTop from "../components/ScrollToTop";

const AppRoutes = () => {
  return (
    <>
      {/* Scroll to top on route change */}
      <ScrollToTop />

      <Routes>
        <Route element={''}>
          
        </Route>
      </Routes>
    </>
  );
};

export default AppRoutes;