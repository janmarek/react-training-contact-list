import {useContext} from "react";
import {Contact} from "./Contact";
import {UserContext} from "./UserContext";

export function ContactList(props) {
    const user = useContext(UserContext);

    return (
        <>
            <p>User: {user.name}</p>

            {props.contacts.map((contact) => (
                <Contact
                    key={contact.id}
                    name={contact.name}
                    phone={contact.phone}
                    email={contact.email}
                />
            ))}
        </>
    );
}
