import React from "react";
import Nav from "./components/Nav";
import Events from "./components/Events";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <div className="flex flex-col h-screen justify-between">
      <Nav />
      <Events />
      <Footer />
    </div>
  );
}

export default App;
