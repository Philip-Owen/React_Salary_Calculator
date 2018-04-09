import React, { Component } from 'react';
import EmployeeRow from '../EmployeeRow';
import EmployeeTableHeader from '../EmployeeTableHeader'

class EmployeeTable extends Component {

  getEmployeeId = (employee) => {
    this.props.removeEmployee(employee);
  }

  render() {
    return (
      <div className="row justify-content-center">
        <div className="col-md-offset-1 col-md-10">
          <div id="employeeTable">
            <table>
              <EmployeeTableHeader />
              <tbody>
                {this.props.employees
                  .map(employee => <EmployeeRow key={employee.id} {...employee} getEmployeeId={this.getEmployeeId} />)}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}

export default EmployeeTable;
