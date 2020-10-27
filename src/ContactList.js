import {Contact} from "./Contact";

export function ContactList(props) {
    return (
        <div>
            {props.contacts.map((contact) => (
                <Contact
                    name={contact.name}
                    phone={contact.phone}
                    email={contact.email}
                />
            ))}
        </div>
    );
}
