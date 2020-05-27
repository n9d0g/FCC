import React, { useState, useRef, useReducer } from "react";
import "../styles/App.css";
import { ChurchStatements } from "./Statements";
import { SocialButtons } from "./Button";
import { NavBar } from "./NavBar";

// function reducer(state, action) {
//   switch (action.type) {
//     case "add-todo":
//       return {
//         todos: [...state.todos, { text: action.text, completed: false }],
//       };
//     case "toggle-todo":
//       return {
//         todos: state.todos.map((t, idx) =>
//           idx === action.idx ? { ...t, completed: !t.completed } : t
//         ),
//       };
//   }
// }

function App() {
  // useReducer -- todo list
  // const [{todos}, dispatch] = useReducer(reducer, {todos: []});
  // const [text, setText] = useState();

  // useState
  const [showStatements, setShowStatements] = useState(false);
  const [showSocials, setShowSocials] = useState(false);
  const [showNav, setShowNav] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        {showNav && <NavBar />}
        <button onClick={() => setShowNav(!showNav)}>Toggle NavBar</button>
        <button onClick={() => setShowStatements(!showStatements)}>
          Toggle Statements
        </button>
        <button onClick={() => setShowSocials(!showSocials)}>
          Toggle Socials
        </button>
        <img src="./n9d0ggy.png" className="App-logo" alt="logo" />
        {showStatements && <ChurchStatements />}
        {showSocials && <SocialButtons />}
        <br />
        {/* <form
          onSubmit={e => {
            e.preventDefault();
            dispatch( { type: "add-todo", text });
            setText("");
          }}
        >
          <input value={text} onChange={e => setText(e.target.value)} />
        </form>
        { todos.map((t, idx) => (
          <div
            key={t.text}
            onClick={() => dispatch({ type: "toggle-todo", idx })}
          >
            {t.text}
          </div>
        ))} */}
      </header>
    </div>
  );
}

export default App;
