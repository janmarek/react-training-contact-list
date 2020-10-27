import React, {useContext} from "react";
import {UserContext} from "./UserContext";

export interface ContactProps {
    name: string;
    phone: string;
    email: string;
}

export function Contact({name, phone, email}: ContactProps) {
    const user = useContext(UserContext);
    return (
        <div>
            <h2>{name}</h2>
            <p>phone: {phone}</p>
            <p>email: {email}</p>
            <p>User: {user.name}</p>
        </div>
    );
}
