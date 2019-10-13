import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import Content from "./components/Content";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Menu />
      <Content />
    </div>
  );
}

export default App;
