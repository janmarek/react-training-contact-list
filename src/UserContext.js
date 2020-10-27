import React from "react";

export const UserContext = React.createContext({
    name: "Anonymous",
    loggedIn: false,
    logout: () => {},
});
