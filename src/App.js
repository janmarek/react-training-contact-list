import React, {useState} from "react";
import "./App.css";
import {ContactList} from "./ContactList";

const contacts = [
    {id: 1, name: "Honza", phone: "123", email: "mail@mdafds.cs"},
    {id: 2, name: "Pepa", phone: "09978", email: "mail@mdafds.cs"},
    {id: 3, name: "Antonín", phone: "1234343", email: "mail@mdafds.cs"},
];

function App() {
    // react hook
    const [counter, setCounter] = useState(0);
    // const stateArray = useState(0);
    // const counter = stateArray[0];
    // const setCounter = stateArray[1];

    function increaseCounter() {
        setCounter(counter + 1);
    }

    return (
        <div className="App">
            <p>Counter: {counter}</p>
            <p>
                <button onClick={increaseCounter}>Increase counter</button>
            </p>
            <ContactList contacts={contacts} />
        </div>
    );
}

export default App;
