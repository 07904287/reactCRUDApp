import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import DepartmentTable from './table/DepartmentTable'
import AddDepartmentForm from './forms/AddDepartmentForm'
import EditDepartmentForm from './forms/EditDepartmentForm'
import AddEmployeeForm from './forms/AddEmployeeForm'
import EditEmployeeForm from './forms/EditEmployeeForm'
import EmployeeTable from './table/EmployeeTable';
import './App.css'

function App() {

  
function Departments(){
    const [departments, setDepartments] = useState([]);
  const [editing, setEditing] = useState(false)

  const initialFormState = { department_id: '', name: '' }
  const [currentDepartment, setCurrentDepartment] = useState(initialFormState)

  async function fetchDepartments() {
    const response = await fetch('http://206.189.72.24:8000/api/department/list');
    const json = await response.json();
    setDepartments(json);
}

const addDepartment = (department) => {

  const data = { name: department.name };
  const response = fetch('http://206.189.72.24:8000/api/department/add', {
    method: 'POST', 
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  .then((response) => response.json())
  .then((data) => {
    console.log('Success:', data);
    setDepartments([ ...departments, data ])
  })
  .catch((error) => {
    console.error('Error:', error);
  });
  
}


const editRow = department => {
  setEditing(true)

  setCurrentDepartment({ ...department, name: department.name })
}

const updateDepartment = (id, updatedDepartment) => {
  setEditing(false)
  
  const data = { name: updatedDepartment.name };
  const response = fetch('http://206.189.72.24:8000/api/department/interact/' + id, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  
  .catch((error) => {
    console.error('Error:', error);
  });

  setDepartments(departments.map(department => (department.department_id === id ? updatedDepartment : department)))
  
}

const deleteDepartment = id => {
  setDepartments(departments.filter(department => department.department_id !== id))

  const data = { department_id: id };
  const response = fetch('http://206.189.72.24:8000/api/department/interact/' + id, {
    method: 'DELETE', 
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  
  .catch((error) => {
    console.error('Error:', error);
  });
  
}


  useEffect(() => {
    fetchDepartments();
}, []);

  return (


    <div className="container">
     
      <div className="flex-row">
          <div className="flex-large">
            {editing ? (
            <div>
          
           <h2>Edit department</h2>
            <EditDepartmentForm
            editing={editing}
            setEditing={setEditing}
            currentDepartment={currentDepartment}
            updateDepartment={updateDepartment}
           />
           </div>
         ) : (
          <div>
              <h2>Add department</h2>
              <AddDepartmentForm addDepartment={addDepartment} />
            </div>
            
            )}
            </div>
            <div className="flex-large">
              <h2>View departments</h2>
              <DepartmentTable departments={departments} editRow={editRow} deleteDepartment={deleteDepartment}/>
            </div>
          </div>
    </div>

    
  );
}

function Employees(){
 
  const [employees, setEmployees] = useState([]);
  const [editing, setEditing] = useState(false)

  const initialFormState = { employee_id: '', name: '' }
  const [currentEmployee, setCurrentEmployee] = useState(initialFormState)

  async function fetchEmployees() {
    const response = await fetch('http://206.189.72.24:8000/api/employee/list');
    const json = await response.json();
    setEmployees(json);
}



const addEmployee = (employee) => {

  const data = { name: employee.name, age: employee.age, contract_employee: employee.contract_employee, address: employee.address, department: employee.department };
  const response = fetch('http://206.189.72.24:8000/api/employee/add', {
    method: 'POST', 
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  .then((response) => response.json())
  .then((data) => {
    console.log('Success:', data);
    setEmployees([ ...employees, data ])
  })
  .catch((error) => {
    console.error('Error:', error);
  });
  
}


const editRow = employee => {
  setEditing(true)

  setCurrentEmployee({ ...employee, name: employee.name, department:employee.department })
}

const updateEmployee = (id, updatedEmployee) => {
  setEditing(false)
  console.log(updatedEmployee)
  const data = { name: updatedEmployee.name, age:updatedEmployee.age, contract_employee: updatedEmployee.contract_employee, address:updatedEmployee.address, department: updatedEmployee.department };
  const response = fetch('http://206.189.72.24:8000/api/employee/interact/' + id, {
    method: 'POST', 
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  
  .catch((error) => {
    console.error('Error:', error);
  });
/*console.log("updateEmployee")
console.log("employees" + employees.department)
console.log("updatedEmployee" + updatedEmployee.department_id)
console.log("employees" + employees.name)
console.log("updatedEmployee" + updatedEmployee.name)
*/
//employees.map(employee => console.log(employee))

  setEmployees(employees.map(employee => (employee.employee_id === id ? updatedEmployee : employee)))
  
}

const deleteEmployee = id => {
  
  
  const data = { employee_id: id };
  const response = fetch('http://206.189.72.24:8000/api/employee/interact/' + id, {
    method: 'DELETE', 
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  
  .catch((error) => {
    console.error('Error:', error);
  });
  setEmployees(employees.filter(employee => employee.employee_id !== id))
  
}


  useEffect(() => {
    console.log("reload")
    fetchEmployees();
}, []);

  return (


    <div className="container">
     
      <div className="flex-row">
          <div className="flex-large">
            {editing ? (
            <div>
          
           <h2>Edit employee</h2>
            <EditEmployeeForm
            editing={editing}
            setEditing={setEditing}
            currentEmployee={currentEmployee}
            updateEmployee={updateEmployee}
           />
           </div>
         ) : (
          <div>
              <h2>Add employee</h2>
              <AddEmployeeForm addEmployee={addEmployee} />
            </div>
            
            )}
            </div>
            <div className="flex-large">
              <h2>View employees</h2>
              <EmployeeTable employees={employees} editRow={editRow} deleteEmployee={deleteEmployee}/>
            </div>
          </div>
    </div>

    
  );
}

return (


  <div className="container">
    <Router>

  <div className="topnav">
    <Link className="navMenuItem" to="/">Departments</Link>
    <Link className="navMenuItem" to="/employees">Employees</Link>
  </div>
    

 <Switch>
          <Route exact path="/">
            <Departments />
          </Route>
          <Route path="/employees">
            <Employees />
          </Route>
          </Switch>
          </Router>
    </div>
    )

}

export default App;
