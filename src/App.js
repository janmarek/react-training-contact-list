import React from "react";
import "./App.css";
import {Contact} from "./Contact";
import { ContactList } from "./ContactList";

const contacts = [
    {name: "Honza", phone: "123", email: "mail@mdafds.cs"},
    {name: "Pepa", phone: "09978", email: "mail@mdafds.cs"},
    {name: "Antonín", phone: "1234343", email: "mail@mdafds.cs"},
]

function App() {
    const n = 123;

    return (
        <div className="App">
            <ContactList contacts={contacts} />
            <Contact name="Honza" phone={n} email="mail@mail.cz" />
        </div>
    );
}

export default App;
