import React, { useState } from "react";
import { connect } from "react-redux";

import Breadcrumb from "react-bootstrap/Breadcrumb";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useHistory } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";

import axios from "axios";
import { editEntry } from "../reduxActions";

let EditEntry = ({ entry, dispatch }) => {
  const [name, setName] = useState(entry.name);
  const [message, setMessage] = useState(entry.message);
  const history = useHistory();

  const submit = event => {
    event.preventDefault();
    axios
      .patch(`/api/${entry.id}`, {
        name,
        message
      })
      .then(() => {
        dispatch(
          editEntry({
            id: entry.id,
            name,
            message
          })
        );
        history.push("/");
      });
  };

  return (
    <>
      <Breadcrumb className="my-2">
        <LinkContainer to="/">
          <Breadcrumb.Item>Home</Breadcrumb.Item>
        </LinkContainer>
        <Breadcrumb.Item active>Edit Comments</Breadcrumb.Item>
      </Breadcrumb>
      <Form onSubmit={submit}>
        <Form.Group controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            defaultValue={name}
            onChange={event => setName(event.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="message">
          <Form.Label>Message</Form.Label>
          <Form.Control
            type="text"
            defaultValue={message}
            onChange={event => setMessage(event.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Save
        </Button>
      </Form>
    </>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    entry: state.entries.find(
      entry => entry.id === parseInt(ownProps.match.params.id)
    )
  };
};

EditEntry = connect(mapStateToProps)(EditEntry);

export default EditEntry;
