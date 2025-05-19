import React from 'react'
import styles from "./Footer.module.css"
import PigzLogoBW from "../../assets/footer/pigz-logotipo-colorido.svg?react"
import AppStore from "../../assets/footer/selo-app-store.svg?react"
import GoogleStore from "../../assets/footer/selo-google-play.svg?react"
import IconFale from "../../assets/footer/icone-fale-conosco.svg?react"
import IconLinkedin from "../../assets/footer/linkedin-with-circle.svg?react"
import IconInstagram from "../../assets/footer/instagram-with-circle.svg?react"
import IconFacebook from "../../assets/footer/facebook-with-circle.svg?react"
import IconYoutube from "../../assets/footer/youtube-with-circle.svg?react"

export default function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
          <PigzLogoBW/>
          <p className={styles.needToKnow}>Tudo que você precisa.</p>
      </div>

      <p className={`${styles.baixarApp} ${styles.destaque}`}>Baixe o APP</p>

      <div className={styles.download}>
        <AppStore className={styles.app}/>
        <GoogleStore className={styles.app}/>
      </div>

      <div className={styles.sobre}>
        <p className={styles.destaque}>Pigz</p>
        <p className={styles.sobreLink}>Sobre o Pigz</p>
        <p className={styles.sobreLink}>Portal do Parceiro</p>
        <p className={styles.sobreLink}>Quero ser um Pigz Partner</p>
      </div>

      <div className={styles.fale}>
        <div className={styles.faleIconContainer}>
            <IconFale className={styles.faleIcon}/>
            <p className={styles.destaque}>Fale conosco</p>
        </div>
        <p className={styles.faleParagraph}>falecom@pigz.com.br</p>
        <p className={styles.faleParagraph}>(95) 3224-2603</p>
      </div>

      <p className={styles.destaque}>Pigz nas redes</p>
      <div className={styles.redes}>
        <IconLinkedin className={styles.redesIcon}/>
        <IconInstagram className={styles.redesIcon}/>
        <IconFacebook className={styles.redesIcon}/>
        <IconYoutube className={styles.redesIcon}/>
      </div>

      <div className={styles.division}></div>

      <div className={styles.lastList}>
        <p>Nossos termos</p>
        <p>Privacidade</p>
        <p>Ajuda</p>
      </div>

    <p className={styles.copyRights}>© Copyright 2021 • Pigz • Todos os direitos reservados Orange Labs Tecnologia LTDA. CNPJ 34.895.008/0001-85</p>
    </div>
  )
}
