import React from "react";

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import List from "./components/List";
import Add from "./components/Add";

function App() {
  return (
    <Router>
      <Container>
        <Navbar bg="light">
          <Navbar.Brand>Welcome to My Guest Book!</Navbar.Brand>
        </Navbar>
        <Switch>
          <Route path="/add">
            <Add />
          </Route>
          <Route path="/">
            <List />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
