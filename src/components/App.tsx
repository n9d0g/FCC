import React from "react";
import "../styles/App.css";
import { MyMessage } from "./Statements";
import { Button } from "./Button";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MyMessage />
        <img src="./n9d0ggy.png" className="App-logo" alt="logo" />
        <MyMessage churchStatement="mission" />
        <br />
        <MyMessage churchStatement="vision" />
        <Button label="facebook" />
        <Button label="instagram" />
      </header>
    </div>
  );
}

export default App;
