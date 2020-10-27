import React from "react";
import "./App.css";
import {Container} from "react-bootstrap";
import {ContactListPage} from "./ContactListPage";
import {AddPage} from "./AddPage";
import {BrowserRouter, Route} from "react-router-dom";

function App() {
    return (
        <Container>
            <BrowserRouter>
                <Route path="/add">
                    <AddPage />
                </Route>
                <Route path="/">
                    <ContactListPage />
                </Route>
            </BrowserRouter>
        </Container>
    );
}

export default App;
