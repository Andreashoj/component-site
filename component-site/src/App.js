import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Menu from "./components/Menu";
import Content from "./components/Content";
import FormContextProvider from "./contexts/FormContext";

function App() {
  return (
    <div className="App">
      <Navbar />
      <FormContextProvider>
        <Menu />
        <Content />
      </FormContextProvider>
    </div>
  );
}

export default App;
