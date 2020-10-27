import {Contact} from "./Contact";

export function ContactList(props) {
    return (
        <div>
            {props.contacts.map((contact) => (
                <Contact
                    key={contact.id}
                    name={contact.name}
                    phone={contact.phone}
                    email={contact.email}
                />
            ))}
        </div>
    );
}
