import React from "react";
import "./App.css";

function App() {
    const a = 123;
    const classNameX = "abcd";

    return (
        <div className="App">
            <Contact name="Honza" phone={a} email="mail@google.com" />
            <div className={classNameX}>{a + 1}</div>
            {React.createElement("div", {className: "cls"}, "123")}
        </div>
    );
}

function Contact(props) {
    return (
        <div>
            <h2>{props.name}</h2>
            <p>phone: {props.phone}</p>
            <p>email: {props.email}</p>
        </div>
    );
}

export default App;
