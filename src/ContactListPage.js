import {ContactList} from "./ContactList";

const contacts = [
    {id: 1, name: "Honza", phone: "123", email: "mail@mdafds.cs"},
    {id: 2, name: "Pepa", phone: "09978", email: "mail@mdafds.cs"},
    {id: 3, name: "Antonín", phone: "1234343", email: "mail@mdafds.cs"},
];

export function ContactListPage() {
    return (
        <>
            <h2>Contact List</h2>
            <ContactList contacts={contacts} />
        </>
    );
}
