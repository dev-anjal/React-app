import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./Home.tsx";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./Components/pages/index.tsx";
// import ListGroup from "./Components/ListGroup.tsx";
// import { useEffect, useState } from "react";
import About from "./About.tsx";
import ListGroup from "./Components/ListGroup";
import NavBar from "./Components/NavBar.tsx";
import Side_Bar from "./Components/Side_Bar.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <NavBar />
      <Side_Bar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/ListGroup" element={<ListGroup />} />

        <Route
          path="*"
          element={
            <center>
              <h1>Page Not Found</h1>
            </center>
          }
        />
      </Routes>
    </Router>
  </React.StrictMode>
);
