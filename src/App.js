import React from "react";
import "./App.css";
import * as Contact from "./Contact";
// import Contact, {a} from "./Contact";

function App() {
    const n = 123;

    return (
        <div className="App">
            <Contact.default name="Honza" phone={n} email={Contact.a} />
        </div>
    );
}

export default App;
