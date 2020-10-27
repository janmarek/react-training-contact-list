import {useContext} from "react";
import {Contact} from "./Contact";
import {UserContext} from "./UserContext";

export function ContactList(props) {
    const user = useContext(UserContext);

    return (
        <>
            <p>
                User: {user.name}{" "}
                {user.loggedIn && <button onClick={user.logout}>logout</button>}
            </p>

            <UserContext.Provider
                value={{name: "Pes", loggedIn: false, logout: () => {}}}
            >
                {props.contacts.map((contact) => (
                    <Contact
                        key={contact.id}
                        name={contact.name}
                        phone={contact.phone}
                        email={contact.email}
                    />
                ))}
            </UserContext.Provider>
        </>
    );
}
