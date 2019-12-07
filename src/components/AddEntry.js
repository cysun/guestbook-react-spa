import React, { useState } from "react";
import { connect } from "react-redux";

import Breadcrumb from "react-bootstrap/Breadcrumb";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useHistory } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";

import axios from "axios";
import { addEntry } from "../reduxActions";

let AddEntry = ({ dispatch }) => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const history = useHistory();

  const submit = event => {
    event.preventDefault();
    axios
      .post("/api", {
        name,
        message
      })
      .then(res => {
        dispatch(addEntry(res.data));
        history.push("/");
      });
  };

  return (
    <>
      <Breadcrumb className="my-2">
        <LinkContainer to="/">
          <Breadcrumb.Item>Home</Breadcrumb.Item>
        </LinkContainer>
        <Breadcrumb.Item active>Add Comments</Breadcrumb.Item>
      </Breadcrumb>
      <Form onSubmit={submit}>
        <Form.Group controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            onChange={event => setName(event.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="message">
          <Form.Label>Message</Form.Label>
          <Form.Control
            type="text"
            onChange={event => setMessage(event.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};

AddEntry = connect()(AddEntry);

export default AddEntry;
