import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { SignUp } from "./pages/SignUp";
import { TermsAndCondition } from "./pages/TermsAndCondition";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="create-account" element={<SignUp />} />
        <Route path="terms-conditions" element={<TermsAndCondition />} />
      </Routes>
    </Router>
  );
}

export default App;
