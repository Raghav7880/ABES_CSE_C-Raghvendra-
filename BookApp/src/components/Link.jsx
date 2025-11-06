import React from "react";
import { Link, Routes, Route } from "react-router-dom";

function Links() {
  function Home() {
    return <h2>Welcome to BookApp Home</h2>;
  }
  function About() {
    return <h2>About Page</h2>;
  }
  function Contact() {
    return <h2>Contact Page</h2>;
  }

  return (
    <div className="container mt-4 text-center">
      <nav className="d-flex justify-content-center gap-3 mb-4">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default Links;
