import React from "react";

import { Link } from "react-router-dom";
import Breadcrumb from "react-bootstrap/Breadcrumb";

function List() {
  return (
    <>
      <Breadcrumb className="my-2">
        <Breadcrumb.Item active>Home</Breadcrumb.Item>
      </Breadcrumb>
      <p>List of entries</p>
      <Link className="btn btn-primary" to="/add">
        Add Comments
      </Link>
    </>
  );
}

export default List;
