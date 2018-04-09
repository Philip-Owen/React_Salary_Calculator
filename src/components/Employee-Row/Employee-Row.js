import React from 'react';

const EmployeeRow = (props) => {
  return (
    <tr>
      <td>{props.first}</td>
      <td>{props.last}</td>
      <td>{props.id}</td>
      <td>{props.title}</td>
      <td>{props.salary}</td>
      <td><button className="btn btn-danger">Delete</button></td>
    </tr>
  );
};

export default EmployeeRow;
