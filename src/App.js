import React from "react";
import "./App.css";

function App() {
    return (
        <div className="App">
            <div className="cls">123</div>
            {React.createElement("div", {className: "cls"}, "123")}
        </div>
    );
}

export default App;
