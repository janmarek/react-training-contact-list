import {ContactList} from "./ContactList";
import {Link} from "react-router-dom";
import {useState, useEffect} from "react";
import {loadContacts} from "./contactModel";

export function ContactListPage() {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        loadContacts().then((contacts) => setContacts(contacts));
    }, []);

    return (
        <>
            <h2>Contact List</h2>
            <p>
                <Link to="/add" className="btn btn-primary">
                    Add
                </Link>
            </p>
            <ContactList contacts={contacts} />
        </>
    );
}
