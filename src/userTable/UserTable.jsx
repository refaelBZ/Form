import React from 'react'
import styles from "./style.module.css"

export default function UserTable({users}) {
  

  
  return (
    <div>
<table className={styles.table}>

<tr className={styles.titles}>
    <th>ID</th>
    <th>First name</th>
    <th>Last name</th>
    <th>Email</th>
</tr>

{users.map(user => (
    <tr className={styles.row} key={user.email}>
        <td>{user.ID}</td>
        <td>{user.fName}</td>
        <td>{user.lName}</td>
        <td>{user.email}</td>
    </tr>
))}

</table>
    </div>
  )
}
