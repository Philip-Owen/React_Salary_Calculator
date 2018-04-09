import React from 'react';

const EmployeeTableFooter = (props) => {

  return (
    <tfoot>
      <tr>
        <td colSpan="4"></td>
        <td id="salCosts">Monthly Cost: {props.monthlySalary()}<span id="salTotal"></span></td>
        <td></td>
      </tr>
    </tfoot>
  );
};

export default EmployeeTableFooter;
