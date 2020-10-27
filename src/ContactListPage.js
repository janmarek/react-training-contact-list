import {ContactList} from "./ContactList";
import {Link} from "react-router-dom";

const contacts = [
    {id: 1, name: "Honza", phone: "123", email: "mail@mdafds.cs"},
    {id: 2, name: "Pepa", phone: "09978", email: "mail@mdafds.cs"},
    {id: 3, name: "Antonín", phone: "1234343", email: "mail@mdafds.cs"},
];

export function ContactListPage() {
    return (
        <>
            <h2>Contact List</h2>
            <p>
                <Link to="/add">Add</Link>
            </p>
            <ContactList contacts={contacts} />
        </>
    );
}
