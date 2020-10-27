import React from "react";

export function Contact(props) {
    return (
        <div>
            <h2>{props.name}</h2>
            <p>phone: {props.phone}</p>
            <p>email: {props.email}</p>
        </div>
    );
}
