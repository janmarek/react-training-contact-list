import React, {useState} from "react";
import "./App.css";
import {ContactList} from "./ContactList";
import {Score} from "./Score";

const contacts = [
    {id: 1, name: "Honza", phone: "123", email: "mail@mdafds.cs"},
    {id: 2, name: "Pepa", phone: "09978", email: "mail@mdafds.cs"},
    {id: 3, name: "Antonín", phone: "1234343", email: "mail@mdafds.cs"},
];

function App() {
    // react hook
    const [counter, setCounter] = useState(0);
    const [counter2, setCounter2] = useState(0);
    // const stateArray = useState(0);
    // const counter = stateArray[0];
    // const setCounter = stateArray[1];

    function increaseCounter() {
        setCounter(counter + 1);
    }
    function increaseCounter2() {
        setCounter2(counter2 + 1);
    }

    return (
        <div className="App">
            <Score domaci={counter} hoste={counter2} />
            <p>
                <button onClick={increaseCounter}>Domaci</button>
                <button onClick={increaseCounter2}>Hoste</button>
            </p>
            <ContactList contacts={contacts} />
        </div>
    );
}

export default App;
