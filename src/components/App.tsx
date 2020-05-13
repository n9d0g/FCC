import React from 'react';
import '../styles/App.css';

interface MyMessageProps {
  message: string;
}

function MyMessage(props: MyMessageProps){
  return <div>{props.message}</div>;
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="./n9d0ggy.png" className="App-logo" alt="logo" />
        <MyMessage message="Welcome to Freedom in Christ Church!"/>
      </header>
    </div>
  );
}

export default App;