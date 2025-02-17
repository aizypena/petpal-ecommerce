import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { SignUp } from "./pages/SignUp";
import { TermsAndCondition } from "./pages/TermsAndCondition";
import { Shop } from "./pages/Shop";
import { About } from "./pages/About";
import { Services } from "./pages/Services";
import { Branch } from "./pages/Branch";
import { Contact } from "./pages/Contact";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="create-account" element={<SignUp />} />
        <Route path="terms-conditions" element={<TermsAndCondition />} />
        <Route path="shop" element={<Shop />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="branch" element={<Branch />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
