import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

import GuestBook from "./components/GuestBook";
import AddEntry from "./components/AddEntry";
import EditEntry from "./components/EditEntry";

function App() {
  return (
    <Router>
      <Container>
        <Navbar bg="light">
          <Navbar.Brand>Welcome to My Guest Book!</Navbar.Brand>
        </Navbar>
        <Switch>
          <Route path="/add">
            <AddEntry />
          </Route>
          <Route path="/edit/:id" component={EditEntry} />
          <Route path="/">
            <GuestBook />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
