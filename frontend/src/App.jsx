import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { SignUp } from "./pages/SignUp";
import { TermsAndCondition } from "./pages/TermsAndCondition";
import { Shop } from "./pages/Shop.jsx";
import Services from "./pages/Services";
import Branches from "./pages/Branches.jsx";
import Contact from "./pages/Contact";
import About from "./pages/About.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="create-account" element={<SignUp />} />
        <Route path="terms-conditions" element={<TermsAndCondition />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/services" element={<Services />} />
        <Route path="/branches" element={<Branches />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
