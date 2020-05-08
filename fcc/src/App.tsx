import React from 'react';
import { Statements } from './Statements';
// import './App.css'; -- create react app default

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <p>Welcome to Freedom in Christ Church!</p>
        <a
          className="App-link"
          href="https://www.facebook.com/groups/1667915316820460/?ref=bookmarks"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click here to see our Facebook page.
        </a>
        <br/><br/>
        <Statements text="vision" /><br/>
        <Statements text='mission' />
      </header>
    </div>
  );
}

export default App;
