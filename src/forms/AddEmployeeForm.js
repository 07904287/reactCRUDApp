import React, { useState } from 'react'
import AsyncSelect from 'react-select/async';
import '../App.css'

const AddEmployeeForm = props => {
  const initialFormState = { name: '', age:'', contract_employee: false, address: ''}
  const [employee, setEmployee] = useState(initialFormState)

  const handleInputChange = event => {
      
    const { name, value } = event.target

    setEmployee({ ...employee, [name]: value })
  }


 
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
      
setEmployee({ ...employee, department: e.department_id, department_name: e.name })
   
  }

  function handleCheckbox(e){
        setEmployee({...employee, contract_employee: e.target.checked})
  }
  
  function clearForm(){
      setEmployee({name: '', age:'', contract_employee: false, address: '', department:'', department_name:''})
  }

  return (
    <form
      onSubmit={event => {
        event.preventDefault()
        if (!employee.name || !employee.age || !employee.address) return
        console.log("submit" + employee.department)
        props.addEmployee(employee)
        clearForm()
        console.log(employee)
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
      
     
      <AsyncSelect className="asyncSelect" value={employee.department_name}  placeholder={employee.department_name} cacheOptions defaultOptions name="department" onChange={handleAsyncSelect} loadOptions={promiseOptions} getOptionValue={getOptionValue}
        getOptionLabel={getOptionLabel}/>
		

      <button>Add new employee</button>
    </form>
  )
}

export default AddEmployeeForm