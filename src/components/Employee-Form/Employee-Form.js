import React, { Component } from 'react';

class EmployeeForm extends Component {

  state = {
    newEmployee: {
      first: '',
      last: '',
      id: '',
      title: '',
      salary: '',
    }
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addEmployee(this.state.newEmployee);
    this.setState({
      newEmployee: {
        first: '',
        last: '',
        id: '',
        title: '',
        salary: '',
      },
    });
  };

  handleChange = (propertyName) => (event) => {
    this.setState({
      newEmployee: {
        ...this.state.newEmployee,
        [propertyName]: event.target.value,
      },
    });
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-offset-1 col-md-10">
          <form onSubmit={this.handleSubmit}>
            <div>
              <input required value={this.state.newEmployee.first} onChange={this.handleChange('first')} type="text" placeholder="First Name" />
              <input required value={this.state.newEmployee.last} onChange={this.handleChange('last')} type="text" placeholder="Last Name" />
              <input required value={this.state.newEmployee.id} onChange={this.handleChange('id')} type="number" placeholder="Employee ID" />
            </div>
            <div>
              <input required value={this.state.newEmployee.title} onChange={this.handleChange('title')} type="text" placeholder="Job Title" />
              <input required value={this.state.newEmployee.salary} onChange={this.handleChange('salary')} type="number" placeholder="Annual Salary" />
              <button className="btn btn-primary" type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}


export default EmployeeForm;
