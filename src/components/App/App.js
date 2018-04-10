import React, { Component } from 'react';
import AppHeader from '../AppHeader';
import EmployeeForm from '../EmployeeForm';
import EmployeeTable from '../EmployeeTable';
import EmployeeTableHeader from '../EmployeeTableHeader';


class App extends Component {
  state = {
    employees: [],
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
      <div className="container-fluid">
        <div id="main-head">
          <AppHeader />
          <EmployeeForm addEmployee={this.handleEmployeeAdd}/>
        </div>
        <EmployeeTable employees={this.state.employees}
                       removeEmployee={this.removeEmployee}/>
      </div>
    );
  }
}


export default App;
