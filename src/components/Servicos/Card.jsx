import React from 'react'
import styles from './Card.module.css'

export default function Card({title, subTitle, list, infoPay, InfoBtn}) {
  return (
    <div className={styles.container}>
      <div className={styles.mainContainer}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.subTitle}>{subTitle}</p>
        <div className={styles.list}>
            {
                list.map((item) => (
                    <p>{item}</p>
                ))
            }
        </div>
        <p className={styles.infoPay}>{infoPay}</p>
        <button className={styles.btn}>{InfoBtn}</button>
      </div>
    </div>
  )
}
