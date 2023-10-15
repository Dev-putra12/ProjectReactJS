import { Routes, Route } from "react-router-dom";

// components
import NavbarComponents from "./components/NavbarComponents";
import FooterComponents from "./components/FooterComponents";
// Pages
import HomePage from "./pages/HomePage";
import KelasPage from "./pages/KelasPage";
import TestimonialPage from "./pages/TestimonialPage";
import FaqPage from "./pages/FaqPage";
import SyaratKetenPage from "./pages/SyaratKetenPage";


function App() {
  return <div>
    <NavbarComponents />

    <Routes>
      <Route path="/" Component={HomePage} />
      <Route path="kelas" Component={KelasPage} />
      <Route path="testimonial" Component={TestimonialPage} />
      <Route path="faq" Component={FaqPage} />
      <Route path="syaratketen" Component={SyaratKetenPage} />
    </Routes>

    {/* <FooterComponents /> */}
  </div>;
}

export default App
