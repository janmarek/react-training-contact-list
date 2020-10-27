import React from "react";
import "./App.css";
import {Contact} from "./Contact";

function App() {
    const a = 123;

    return (
        <div className="App">
            <Contact name="Honza" phone={a} email="mail@google.com" />
        </div>
    );
}

export default App;
