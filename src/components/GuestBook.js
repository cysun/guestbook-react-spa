import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Breadcrumb from "react-bootstrap/Breadcrumb";

import axios from "axios";
import { deleteEntry } from "../reduxActions";

const mapStateToProps = state => {
  return {
    entries: state.entries
  };
};

let GuestBook = ({ entries, dispatch }) => {
  const deleteEntryHandler = entryId => {
    axios.delete(`/api/${entryId}`).then(() => dispatch(deleteEntry(entryId)));
  };

  return (
    <>
      <Breadcrumb className="my-2">
        <Breadcrumb.Item active>Home</Breadcrumb.Item>
      </Breadcrumb>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Message</th>
            <th>Operations</th>
          </tr>
        </thead>
        <tbody>
          {entries.map(entry => (
            <tr key={entry.id.toString()}>
              <td>{entry.name}</td>
              <td>{entry.message}</td>
              <td>
                <Link className="btn btn-primary mr-2" to={`/edit/${entry.id}`}>
                  Edit
                </Link>
                <Button
                  variant="danger"
                  onClick={() => deleteEntryHandler(entry.id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link className="btn btn-primary" to="/add">
        Add Comments
      </Link>
    </>
  );
};

GuestBook.defaultProps = {
  entries: []
};

GuestBook = connect(mapStateToProps)(GuestBook);

export default GuestBook;
