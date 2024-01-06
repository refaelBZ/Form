import React from 'react'
import styles from "./style.module.css"




const Alert = ({ message }) => {
  if (!message) return null; // אל תציג כלום אם אין הודעה

  return (
    <div className={styles.alert}>
      <span>{message}</span>
    </div>
  );
};

export default Alert;






