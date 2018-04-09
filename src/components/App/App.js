import React, { Component } from 'react';
import EmployeeForm from '../EmployeeForm';
import EmployeeTable from '../EmployeeTable';
import EmployeeTableHeader from '../EmployeeTableHeader'

class App extends Component {
  state = {
    employees: [{
          first: 'Phil',
          last: 'Owen',
          id: 3333,
          title: 'Engineer',
          salary: 65000,
        }],
  };

  handleEmployeeAdd = (employee) => {
    this.setState({
      employees: [...this.state.employees, employee],
    });
  }

  removeEmployee = (removed) => {
    this.setState({
      employees: this.state.employees.filter(employee => employee.id !== removed.id)
    });
  };

  render() {
    return (
      <div className="container">
        <h1>Salary Calculator</h1>
        <EmployeeForm addEmployee={this.handleEmployeeAdd}/>
        <EmployeeTable employees={this.state.employees}
                       removeEmployee={this.removeEmployee}/>
      </div>
    );
  }
}


export default App;
