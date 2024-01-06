import React, { useState } from 'react'
import styles from "./style.module.css"
import FormInput from '../FormInput/FormInput'
import Alert from '../Alert/Alert'
import UserTable from '../userTable/UserTable'


export default function UserForm({ addUser }) {

const initialState = localStorage.user ? JSON.parse(localStorage.user) : { fName: "", lName: "", email: "", password: "" }
  
const [formState, setFormState] = useState(initialState)
  
  


  const [errors, setErrors] = useState({});
  
  const validateInput = (name, value) => {
    
    let error = '';

    switch (name) {
      case 'fName':
        if (value.length < 2) {
          error = "First name must be longer than 2 characters";
        }
        break;
      case 'lName':
        if (value.length < 2) {
          error = "Last name must be longer than 2 characters";
        }
        break;
      case 'email':
        if (!/\S+@\S+\.\S+/.test(value)) {
          error = "Invalid email address";
        }
        break;
      case 'password':
        if (value.length < 6) {
          error = "Password must be longer than 6 characters";
        }
        break;
      default:
        break;
    }
    return error;
  };
  




  
  const handleChange = (e) => {
    const { name, value } = e.target;

    const error = validateInput(name, value);
    setErrors({...errors, [name]: error});
    
    setFormState(old => {
      const newData = { ...old, [name]: value }
      localStorage.user = JSON.stringify({ ...newData, password: "" });
      return newData
    })
  }

  const inputs = [
    { label: "First Name", name: 'fName', type: 'text', placeholder: 'First Name', value: formState.fName },
    { label: "Last Name", name: 'lName', type: 'text', placeholder: 'Last Name', value: formState.lName },
    { label: "Email", name: 'email', type: 'email', placeholder: 'Email', value: formState.email },
    { label: "Pasword", name: 'password', type: 'password', placeholder: 'Password', value: formState.password },
    { name: 'submit', type: 'submit', className: styles.submitBtn }


  ];





  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formState)
    if(Object.keys(errors).every(key => !errors[key])) {
      addUser(formState);
      console.log(users)
  }
  }


  return (
    <>
    <div className={styles.formBox}>

      {inputs.map(input => (
        <FormInput key={input.name} errors={errors[input.name]} {...input} handleChange={handleChange} handleSubmit={handleSubmit} />
      ))}

    </div>

    <div className={styles.table}>
    </div>
    </>
  )
}

