import React, { useState } from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import UserForm from '../UserForm/UserForm'
import UserTable from '../userTable/UserTable'
import styles from "./style.module.css"


export default function Layout() {


  const [users, setUsers] = useState([
    {fName: "Alice", lName: "Johnson", email: "alice.johnson@email.com", ID: 1001},
    {fName: "Bob", lName: "Smith", email: "bob.smith@email.com", ID: 1002},
    {fName: "Carol", lName: "Taylor", email: "carol.taylor@email.com", ID: 1003}  ]);


const addUser = newUser => {
  setUsers([...users, newUser]);
};
  
  return (
    <div>
    <header><Header/></header>
    <main className={styles.formAndTable}>
    <div>
    <UserForm addUser={addUser}/>
     </div>

     <div>
     <UserTable users={users} />

     </div>
       </main>
    <footer><Footer/></footer>
    </div>
  )
}
