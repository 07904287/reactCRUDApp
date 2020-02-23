import React, { useState, useEffect } from 'react'
import AsyncSelect from 'react-select/async';
import '../App.css'

const EditEmployeeForm = props => {
    
const [employee, setEmployee] = useState(props.currentEmployee)

const handleInputChange = event => {
    const { name, value } = event.target

    setEmployee({ ...employee, [name]: value })
}

useEffect(() => {
    setEmployee(props.currentEmployee)
}, [props])


const getOptionValue = (department) => department.name;

const getOptionLabel = (department) => department.name;
  
const promiseOptions = inputValue => {
    const url = `http://206.189.72.24:8000/api/department/list${inputValue ? '?searchParam=' + inputValue : ''}`;
    return fetch(url)
        .then(response => response.json()) // my option list array?
        .catch(err => {
            console.log('some error', err);
        });
};

function handleAsyncSelect(e) {
    console.log("handleAsyncSelect" + e.department_id)
    setEmployee({ ...employee, department: e.department_id })
}

function handleCheckbox(e){
    setEmployee({...employee, contract_employee: e.target.checked})
}

  return (
    <form
      onSubmit={event => {
        event.preventDefault()
        props.updateEmployee(employee.employee_id, employee)
      }}
    >
      <label>Name</label>
      <input type="text" name="name" value={employee.name} onChange={handleInputChange} />
      <label>Age</label>
      <input type="number" name="age" value={employee.age} onChange={handleInputChange} />
      <label>Address</label>
      <input type="text" name="address" value={employee.address} onChange={handleInputChange} />
      <label>Contract Type</label>
      <input type="checkbox" name="contract" checked={employee.contract_employee} onChange={handleCheckbox} /> Check if employee is a contractor 
      <label>Department</label>
      <AsyncSelect className="asyncSelect" placeholder={employee.department} cacheOptions defaultOptions name="department" onChange={handleAsyncSelect} loadOptions={promiseOptions} getOptionValue={getOptionValue}
        getOptionLabel={getOptionLabel}/>
      <button>Update employee</button>
      <button onClick={() => props.setEditing(false)} className="button muted-button">
        Cancel
      </button>
    </form>
  )
}

export default EditEmployeeForm