import React from 'react'

const DepartmentTable = (props) => (
<table>
    <thead>
      <tr>
        <th>Department ID</th>  
        <th>Department name</th>
        <th>Created at</th>
        <th>Updated at</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
    
    {props.departments.length > 0 ? (
        props.departments.map(department => (
          <tr key={department.department_id}>
            <td>{department.department_id}</td>
            <td>{department.name}</td>
            <td>{department.created_at}</td>
            <td>{department.updated_at}</td>
            <td>
            <button
                onClick={() => {
                  props.editRow(department)
                }}
                className="button muted-button"
              >
                Edit
              </button>
              <button
                onClick={() => props.deleteDepartment(department.department_id)}
                className="button muted-button"
              >
                Delete
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No departments</td>
        </tr>
      )}
    </tbody>
  </table>
)

export default DepartmentTable