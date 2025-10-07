import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import { Toaster } from "./components/ui/toaster";

// Pages
import Home from "./pages/Home";
import AboutClinic from "./pages/AboutClinic";
import AboutFounder from "./pages/AboutFounder";
import Treatments from "./pages/Treatments";
import TreatmentDetail from "./pages/TreatmentDetail";
import Appointment from "./pages/Appointment";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about-clinic" element={<AboutClinic />} />
              <Route path="/about-founder" element={<AboutFounder />} />
              <Route path="/treatments" element={<Treatments />} />
              <Route path="/treatments/:slug" element={<TreatmentDetail />} />
              <Route path="/appointment" element={<Appointment />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
          <Toaster />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;