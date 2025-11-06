import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Links from "./components/Link.jsx";
import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";
import Book from "./components/Book.jsx"; 

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Links />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>

      <div id="raghav">
        <Book
          title="Physics"
          price="800"
          img="https://unsw-prod.s3.amazonaws.com/media/images/9781454957805_YEBFtDk.width-1000.jpg"
        />
        <Book
          title="Math"
          price="1200"
          img="https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1328768386i/6393242.jpg"
        />
        <Book
          title="Chemistry"
          price="1000"
          img="https://m.media-amazon.com/images/I/71QENhDe4eL._AC_UF1000,1000_QL80_.jpg"
        />
      </div>
    </div>
  );
}

export default App;
