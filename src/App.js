import React from "react";
import "./App.css";

function App() {
    const a = 123;
    const classNameX = "abcd";

    return (
        <div className="App">
            <div className={classNameX}>{a + 1}</div>
            {React.createElement("div", {className: "cls"}, "123")}
        </div>
    );
}

export default App;
