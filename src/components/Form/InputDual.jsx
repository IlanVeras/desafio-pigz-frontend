import React from "react";
import styles from "./InputDual.module.css";

export default function InputDual({ campos, id0, name0, id1, name1 }) {
  const estados = [
    "AC", // Acre
    "AL", // Alagoas
    "AP", // Amapá
    "AM", // Amazonas
    "BA", // Bahia
    "CE", // Ceará
    "DF", // Distrito Federal
    "ES", // Espírito Santo
    "GO", // Goiás
    "MA", // Maranhão
    "MT", // Mato Grosso
    "MS", // Mato Grosso do Sul
    "MG", // Minas Gerais
    "PA", // Pará
    "PB", // Paraíba
    "PR", // Paraná
    "PE", // Pernambuco
    "PI", // Piauí
    "RJ", // Rio de Janeiro
    "RN", // Rio Grande do Norte
    "RS", // Rio Grande do Sul
    "RO", // Rondônia
    "RR", // Roraima
    "SC", // Santa Catarina
    "SP", // São Paulo
    "SE", // Sergipe
    "TO", // Tocantins
  ];

  function renderInput() {
    switch (campos) {
      case "estadoCidade":
        return (
          <div className={styles.container}>
            <div className={styles.containerInp}>
              <label htmlFor={id0} className={styles.lb}>
                {name0}
              </label>
              <select className={`${styles.minorInp} ${styles.inpGeneral}`}>
                {estados.map((estado) => (
                  <option value={estado}>{estado}</option>
                ))}
              </select>
            </div>
            <div className={styles.containerInp}>
              <label htmlFor={id1} className={styles.lb}>
                {name1}
              </label>
              <input
                type="text"
                className={`${styles.inpGeneral} ${styles.greaterInp}`}
              />
            </div>
          </div>
        );
      case "numeroComplemento":
        return (
            <div className={styles.container}>
                <div className={styles.containerInp}>
                    <label htmlFor={id0} className={styles.lb}>{name0}</label>
                    <input 
                    type="text" 
                    placeholder="123"
                    className={`${styles.minorInp} ${styles.inpGeneral}`}
                    />
                </div>
                <div className={styles.containerInp}>
                    <label htmlFor={id1} className={styles.lb}>{name1}</label>
                    <input 
                    type="text" 
                    placeholder="Sala 1"
                    className={`${styles.inpGeneral} ${styles.greaterInp}`}
                    />
                </div>
            </div>
        )
      default:
        return null;
    }
  }
  return <div>{renderInput()}</div>;
}

/*
  type,
  name,
  value,
  onChange,
  placeholder,
  id,
*/
