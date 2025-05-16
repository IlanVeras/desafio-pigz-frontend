import React from 'react'
import styles from './ButtonForm.module.css'

export default function ButtonForm({txt}) {
  return (
    <div className={styles.container}>
      {txt}
    </div>
  )
}
