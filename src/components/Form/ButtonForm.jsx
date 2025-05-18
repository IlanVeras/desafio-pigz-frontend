import React from 'react'
import styles from './ButtonForm.module.css'

export default function ButtonForm({txt, funcBtn}) {
  return (
    <div className={styles.container} onClick={funcBtn}>
      {txt}
    </div>
  )
}
