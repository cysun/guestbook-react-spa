import React from "react";

import Breadcrumb from "react-bootstrap/Breadcrumb";
import { LinkContainer } from "react-router-bootstrap";

function Add() {
  return (
    <>
      <Breadcrumb className="my-2">
        <LinkContainer to="/">
          <Breadcrumb.Item>Home</Breadcrumb.Item>
        </LinkContainer>
        <Breadcrumb.Item active>Add Comments</Breadcrumb.Item>
      </Breadcrumb>
      <p>Add Comments</p>
    </>
  );
}

export default Add;
