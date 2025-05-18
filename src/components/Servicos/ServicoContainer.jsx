import React from 'react'
import styles from "./ServicoContainer.module.css"



export default function ServicoContainer({titulo,definicao, Logo}) {
  return (
    <div className={styles.container}>
      <div className={styles.containerServ}>
        {/* <Logo/> */}
        <img src={Logo}/>
        <p className={styles.title}>{titulo}</p>
        <p className={styles.definition}>{definicao}</p>
      </div>
    </div>
  )
}
