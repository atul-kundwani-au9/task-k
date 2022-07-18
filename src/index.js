import React from "react";
import ReactDOM from "react-dom";

import UserList from "./components/userList";


import "./style.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        
        <UserList/>
        
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
