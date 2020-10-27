import React, { useContext } from "react";
import { UserContext } from "./UserContext";

export function Contact({name, phone, email}) {
    const user = useContext(UserContext)
    return (
        <div>
            <h2>{name}</h2>
            <p>phone: {phone}</p>
            <p>email: {email}</p>
            <p>User: {user.name}</p>
        </div>
    );
}
