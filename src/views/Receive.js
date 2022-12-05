import React from "react";
import Table from "react-bootstrap/Table";

function Receive(props) {
  return (
    <Table variant="dark" striped bordered hover>
      <thead>
        <tr>
          <th>Topic</th>
          <th>Message</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Topic 1</td>
          <td>{props.message1}</td>
        </tr>
        <tr>
          <td>Topic 2</td>
          <td>{props.message2}</td>
        </tr>
      </tbody>
    </Table>
  );
}

export { Receive };
