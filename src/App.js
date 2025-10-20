// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeroSection from "./components/HeroSection";
import Philosophy from "./components/Philosophy";
import Experience from "./components/Experience";
import Team from "./components/Team";
import Founder from "./components/Founder";
import Footer from "./components/Footer";
import BookingForm from "./pages/BookingForm";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <Philosophy />
              <Experience />
              <Team />
              <Founder />
              <Footer />
            </>
          }
        />
        <Route path="/book" element={<BookingForm />} />
      </Routes>
    </Router>
  );
}

export default App;
