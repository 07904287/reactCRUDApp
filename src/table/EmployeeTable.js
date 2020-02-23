import React from 'react'

const EmployeeTable = (props) => (
<table>
    <thead>
      <tr>
        <th>Employee name</th>
        <th>Age</th>
        <th>Contract</th>
        <th>Address</th>
        <th>Department</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
    
    {props.employees.length > 0 ? (
        props.employees.map(employee => (
          <tr key={employee.employee_id}>
            <td>{employee.name}</td>
            <td>{employee.age}</td>
            <td>{`${employee.contract_employee}`}</td>
            <td>{employee.address}</td>
            <td>{employee.department}</td>
            <td>
            <button
                onClick={() => {
                  props.editRow(employee)
                }}
                className="button muted-button"
              >
                Edit
              </button>
              <button
                onClick={() => props.deleteEmployee(employee.employee_id)}
                className="button muted-button"
              >
                Delete
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No employees</td>
        </tr>
      )}
    </tbody>
  </table>
)

export default EmployeeTable