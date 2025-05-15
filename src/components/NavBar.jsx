import React from 'react'
import styles from "./NavBar.module.css"
import LogoIcon from '../assets/pigz_logo_navbar.svg?react'

export default function NavBar() {
  return (
    <div className={styles.container}>
        <LogoIcon/>
        <button className={styles.btn}>Já sou parceiro</button>
    </div>
  )
}
