import React from 'react';

const EmployeeRow = () => {
  return (
    <tr>
      <td>First</td>
      <td>Last</td>
      <td>3311</td>
      <td>Engineer</td>
      <td>75,000</td>
      <td><button className="btn btn-danger">Delete</button></td>
    </tr>
  );
};

export default EmployeeRow;
