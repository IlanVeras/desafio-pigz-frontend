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
  return (
    <div className={styles.container}>
      <label htmlFor={id} className={styles.lb}>
        {name}
      </label>
      {name != "Telefone" ? (
        <input
          id={name}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={styles.inp}
        />
      ) : (
        <div className={styles.containerTel}>
          <div className={styles.ddd}>+55</div>
          <input
            id={name}
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className={styles.inpTel}
          />
        </div>
      )}
    </div>
  );
}
