import React, { useState, useEffect } from 'react'

const EditDepartmentForm = props => {
  const [department, setDepartment] = useState(props.currentDepartment)

  const handleInputChange = event => {
    const { name, value } = event.target

    setDepartment({ ...department, [name]: value })
  }

  useEffect(() => {
    setDepartment(props.currentDepartment)
  }, [props])

  return (
    <form
      onSubmit={event => {
        event.preventDefault()
        props.updateDepartment(department.department_id, department)
      }}
    >
      <label>Name</label>
      <input type="text" name="name" value={department.name} onChange={handleInputChange} />
      <button>Update department</button>
      <button onClick={() => props.setEditing(false)} className="button muted-button">
        Cancel
      </button>
    </form>
  )
}

export default EditDepartmentForm