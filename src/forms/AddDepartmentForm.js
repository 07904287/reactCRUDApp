import React, { useState } from 'react'

const AddDepartmentForm = props => {
  const initialFormState = { name: ''}
  const [department, setDepartment] = useState(initialFormState)

  const handleInputChange = event => {
    const { name, value } = event.target

    setDepartment({ ...department, [name]: value })
  }

  return (
    <form
      onSubmit={event => {
        event.preventDefault()
        if (!department.name) return
        props.addDepartment(department)
        setDepartment(initialFormState)
      }}
    >
      <label>Name</label>
      <input type="text" name="name" value={department.name} onChange={handleInputChange} />
      <button>Add new department</button>
    </form>
  )
}

export default AddDepartmentForm