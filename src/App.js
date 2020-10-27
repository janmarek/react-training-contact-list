import React, {useState} from "react";
import "./App.css";
import {Container} from "react-bootstrap";
import {ContactListPage} from "./ContactListPage";
import {AddPage} from "./AddPage";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {UserContext} from "./UserContext";

function App() {
    const [user, setUser] = useState({name: "Vratislav", loggedIn: true});

    function logout() {
        setUser({name: "Anonymous", loggedIn: false});
    }

    const contextValue = {...user, logout};

    return (
        <UserContext.Provider value={contextValue}>
            <Container>
                <BrowserRouter>
                    <Switch>
                        <Route path="/add">
                            <AddPage />
                        </Route>
                        <Route path="/">
                            <ContactListPage />
                        </Route>
                    </Switch>
                </BrowserRouter>
            </Container>
        </UserContext.Provider>
    );
}

export default App;
