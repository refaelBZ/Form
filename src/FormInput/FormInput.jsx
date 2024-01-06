import Alert from "../Alert/Alert"
import styles from "./style.module.css"
import { useState } from "react"


export default function FormInput({ label, name, type, placeholder, value, className, handleChange, errors, handleSubmit }) {






  return (
    <div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.inputAndLabel}>
          <label className={styles.label}>
            {label}
            <div className={styles.input}>
              <input onChange={handleChange} value={value} type={type} name={name} className={className ? className : ''} // החלת המחלקה במידה וקיימת
 />
              {errors && <Alert message={errors} />}
            </div>
          </label>
        </div>
      </form>
    </div>


  );
}

