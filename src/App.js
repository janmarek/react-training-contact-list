import React from "react";
import "./App.css";
import {Contact} from "./Contact";

function App() {
    const n = 123;

    return (
        <div className="App">
            <Contact name="Honza" phone={n} email="mail@mail.cz" />
        </div>
    );
}

export default App;
