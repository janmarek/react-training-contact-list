import React from "react";
import "./App.css";
import {Container} from "react-bootstrap";
import {ContactListPage} from "./ContactListPage";
import {AddPage} from "./AddPage";
import {BrowserRouter, Route, Switch} from "react-router-dom";

function App() {
    return (
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
    );
}

export default App;
