import React, { useReducer, useState } from 'react';

const formReducer = (state, event) => {
 return {
   ...state,
   [event.name]: event.value
 }
}

function Form() {
  const [formData, setFormData] = useReducer(formReducer, {});

  const handleSubmit = event => {
    event.preventDefault();
    fetch("http://174.138.103.233/api/employees", {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
     
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
     
      body: JSON.stringify(formData) // body data type must match "Content-Type" header
    });
 
  }

  const handleChange = event => {
    setFormData({
      name: event.target.name,
      value: event.target.value,
    });
  }

  return(
    <div className="wrapper">
      <h1>Person List</h1>

      <form onSubmit={handleSubmit}>
        <fieldset>
          <label>
            <p>First Name</p>
            <input name="firstName"  type="text" onChange={handleChange}/>
          </label>

          <label>
            <p>Last Name</p>
            <input name="lastName" onChange={handleChange}/>
          </label>

          <label>
            <p>Gender</p>
            <input name="gender" onChange={handleChange}/>
          </label>
          <label>
            <p>Birthday</p>
            <input name="birthday" type="date" onChange={handleChange}/>
          </label>
          <label>
            <p>E-Mail</p>
            <input name="email" type="email" onChange={handleChange}/>
          </label>
          <label>
            <p>Password</p>
            <input name="password" type="password" onChange={handleChange}/>
          </label>
          <label>
            <p>About</p>
            <textarea name="about" type="textarea"></textarea>
          </label>

        </fieldset>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Form;