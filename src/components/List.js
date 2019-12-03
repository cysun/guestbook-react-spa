import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Breadcrumb from "react-bootstrap/Breadcrumb";

import axios from "axios";

function List() {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    axios.get("/api").then(res => setEntries(res.data));
  }, []);

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
            <tr key={entry.id}>
              <td>{entry.name}</td>
              <td>{entry.message}</td>
              <td>
                <Link className="btn btn-primary mr-2" to={`/edit/${entry.id}`}>
                  Edit
                </Link>
                <Button className="btn btn-danger">Delete</Button>
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
}

export default List;
