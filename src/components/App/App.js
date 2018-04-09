import React, { Component } from 'react';
import EmployeeForm from '../Employee-Form/Employee-Form';
import EmployeeTable from '../Employee-Table/Employee-Table';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="container">
        <h1>Salary Calculator</h1>
        <EmployeeForm />
        <EmployeeTable />
      </div>
    )
  }
}


export default App;
