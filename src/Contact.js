import React from "react";

export default function Contact(props) {
    return (
        <div>
            <h2>{props.name}</h2>
            <p>phone: {props.phone}</p>
            <p>email: {props.email}</p>
        </div>
    );
}

export const a = 1;
