import {ContactList} from "./ContactList";
import {Link} from "react-router-dom";
import {useState, useEffect} from "react";
import {loadContacts} from "./contactModel";
import {Alert} from "react-bootstrap";

export function ContactListPage() {
    const [contactState, setContactState] = useState({
        contacts: [],
        loading: true,
        loadingError: false,
    });

    function load() {
        loadContacts()
            .then((contacts) => {
                setContactState({
                    loading: false,
                    loadingError: false,
                    contacts,
                });
            })
            .catch(() => {
                setContactState({
                    ...contactState,
                    loadingError: true,
                    loading: false,
                });
            });
    }

    useEffect(() => {
        load();
    }, []);

    return (
        <>
            <h2>Contact List</h2>
            <p>
                <Link to="/add" className="btn btn-primary">
                    Add
                </Link>
            </p>
            {contactState.loadingError && (
                <Alert variant="danger">
                    Error loading. <a onClick={load}>Reload</a>
                </Alert>
            )}
            {contactState.loading ? (
                <p>Loading</p>
            ) : (
                <ContactList contacts={contactState.contacts} />
            )}
        </>
    );
}
