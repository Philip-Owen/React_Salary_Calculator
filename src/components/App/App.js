import React, { Component } from 'react';
import EmployeeForm from '../Employee-Form/Employee-Form';
import EmployeeTable from '../Employee-Table/Employee-Table';

class App extends Component {
  state = {
    employees: [],
  };

  handleEmployeeAdd = (employee) => {
    this.setState({
      employees: [...this.state.employees, employee],
    });
  }

  render() {
    return (
      <div className="container">
        <h1>Salary Calculator</h1>
        <EmployeeForm addEmployee={this.handleEmployeeAdd}/>
        <EmployeeTable employees={this.state.employees}/>
      </div>
    );
  }
}


export default App;
