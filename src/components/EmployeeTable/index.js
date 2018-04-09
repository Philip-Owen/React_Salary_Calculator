import React, { Component } from 'react';
import EmployeeRow from '../EmployeeRow';
import EmployeeTableHeader from '../EmployeeTableHeader';
import EmployeeTableFooter from '../EmployeeTableFooter';


class EmployeeTable extends Component {

  getEmployeeId = (employee) => {
    this.props.removeEmployee(employee);
  }

  monthlySalary = () => {
    let employeeArray = [...this.props.employees];
    if (employeeArray.length === 1) {
      return (employeeArray[0].salary / 12).toFixed(2);
    }
    if (employeeArray.length > 1) {
      let value = (employeeArray.reduce((x, y) => ({salary: Number(y.salary) + Number(x.salary)})));
      return (value.salary / 12).toFixed(2);
    }
    return 0;
  };

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
              < EmployeeTableFooter monthlySalary={this.monthlySalary}/>
            </table>
          </div>
        </div>
      </div>
    )
  }
}

export default EmployeeTable;
