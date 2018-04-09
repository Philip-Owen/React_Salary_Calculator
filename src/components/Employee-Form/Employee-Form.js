import React from 'react';

const EmployeeForm = () => (
  <div className="row">
    <div className="col-md-offset-1 col-md-10">
      <div id="employeeInput">
        <div id="top-row">
          <input type="text" id="firstName" placeholder="First Name" />
          <input type="text" id="lastName" placeholder="Last Name" />
          <input type="number" id="empID" placeholder="Employee ID" />
        </div>
        <div id="bottom-row">
          <input type="text" id="jobTitle" placeholder="Job Title" />
          <input type="number" id="annualSalary" placeholder="Annual Salary" />
          <button className="btn btn-primary" type="button" id="submitEmployee">Submit</button>
        </div>
      </div>
    </div>
  </div>
);

export default EmployeeForm;
