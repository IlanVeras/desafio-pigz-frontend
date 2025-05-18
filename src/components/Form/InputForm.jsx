import React from "react";
import styles from "./InputForm.module.css";

export default function InputForm({
  type,
  name,
  value,
  onChange,
  placeholder,
  id,
}) {
  function renderInput() {
    switch (name) {
      case "Telefone":
        return (
          <div className={`${styles.containerTel} ${styles.inpGeneral}`}>
            <div className={styles.ddd}>+55</div>
            <input
              id={name}
              type={type}
              name={name}
              value={value}
              onChange={onChange}
              placeholder={placeholder}
              className={`${styles.inpTel}`}
            />
          </div>
        );
      default:
        return (
          <input
            id={name}
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className={`${styles.inp} ${styles.inpGeneral}`}
          />
        );
    }
  }
  return (
    <div className={styles.container}>
      <label htmlFor={id} className={styles.lb}>
        {name}
      </label>
      {renderInput()}
    </div>
  );
}
