import React from 'react'
import styles from "./Vendas.module.css"
import hamburgerImg from '../assets/hamburger-with-floating-ingredients-on-dark-background.png'; // ajuste a extensão conforme o arquivo real


export default function Vendas() {
  return (
    <div className={styles.container}>
      <div className={styles.containerText}>
        Pigz: tudo que você precisa pra vender ainda mais!
      </div>
      <div className={styles.containerImage }>
        <img src={hamburgerImg} className={styles.imagemVendas}/>
      </div>
    </div>
  )
}
