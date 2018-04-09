import React from 'react';
import EmployeeRow from '../Employee-Row/Employee-Row';

const EmployeeTable = () => {
  return (
    <div className="row justify-content-center">
      <div className="col-md-offset-1 col-md-10">
        <div id="employeeTable">
          <table>
            <thead>
              <tr id="noHighlight">
                <th>First Name</th>
                <th>Last Name</th>
                <th>Employee ID</th>
                <th>Job Title</th>
                <th>Annual Salary</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody id="employeeData">
              <EmployeeRow />
            </tbody>
            <tfoot>
              <tr>
                <td colSpan="4"></td>
                <td id="salCosts">Monthly Cost: <span id="salTotal"></span></td>
                <td></td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  )
};

export default EmployeeTable;
