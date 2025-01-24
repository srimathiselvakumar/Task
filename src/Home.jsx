import React from "react";
import "./Home.css";
import logo from "./logo.jpeg";

function Home() {
  return (
    <div className="home">
      <img src={logo} alt="Netflix Logo" className="home-logo" />
      <div className="home-links">
        <a href="https://www.netflix.com/in/login" className="home-link">
          Sign In
        </a>
        <span> or </span>
        <a href="https://www.netflix.com/in/" className="home-link">
          Sign Up
        </a>
      </div>
    </div>
  );
}

export default Home;
