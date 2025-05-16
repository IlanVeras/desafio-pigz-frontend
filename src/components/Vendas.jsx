import React from 'react'
import styles from "./Vendas.module.css"
import hamburgerImg from '../assets/hamburger-with-floating-ingredients-on-dark-background.png'; // ajuste a extensão conforme o arquivo real
import Form from './Form/Form';


export default function Vendas() {
  return (
    <div className={styles.container}>
      <div className={styles.containerTitle}>
        Pigz: tudo que você precisa pra vender ainda mais!
      </div>
      <div className={styles.containerImage }>
        <img src={hamburgerImg} className={styles.imagemVendas}/>
      </div>
      <div className={styles.containerText}>
        <p>Temos uma equipe ansiosa para cadastrar seus produtos no Pigz Marketplace e deixar sua loja prontinha para iniciar as vendas.</p>
      </div>
      <Form/>
    </div>
  )
}
