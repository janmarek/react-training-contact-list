import React from "react";

export function Contact({name, phone, email}) {
    return (
        <div>
            <h2>{name}</h2>
            <p>phone: {phone}</p>
            <p>email: {email}</p>
        </div>
    );
}
