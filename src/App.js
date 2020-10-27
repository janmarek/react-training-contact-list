import React, {useState} from "react";
import "./App.css";
import {Container} from "react-bootstrap";
import {ContactListPage} from "./ContactListPage";
import {AddPage} from "./AddPage";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {UserContext} from "./UserContext";

function App() {
    const [user, setUser] = useState({name: "Vratislav", loggedIn: true});

    return (
        <UserContext.Provider value={user}>
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
