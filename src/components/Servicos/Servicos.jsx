import React from "react";
import styles from "./Servicos.module.css";
import ServicoMarket from "../../assets/servicos-market.svg";
import ServicoPhone from "../../assets/servicos-phone.svg"
import ServicoGestao from "../../assets/servicos-gestao.svg"
import ServicoPrinter from "../../assets/servicos-printer.svg"
import ServicoContainer from "./ServicoContainer";
import LogoPigz from "../../assets/pigz-servico.svg?react"

export default function Servicos() {
    const servicosOferecidos = [
        {
            svg: ServicoMarket,
            titulo: "Marketplace",
            definicao: "Você tem um novo Pigzdido!"
        },
        {
            svg: ServicoPhone,
            titulo: "É fácil e rápido",
            definicao: "É fácil e rápido"
        },
        {
            svg: ServicoGestao,
            titulo: "Pigz Gestão",
            definicao: "Você no controle, sempre"
        },
        {
            svg: ServicoPrinter,
            titulo: "Vias de impressão",
            definicao: "Personalizáveis"
        }
    ]
  return (
    <div className={styles.container}>
      <div className={styles.containerLogo}>
        <LogoPigz/>
      </div>
      <h1 className={styles.title}>Você tem um novo Pigzdido!</h1>
              {
            servicosOferecidos.map((servico) => (
                <ServicoContainer titulo={servico.titulo} definicao={servico.definicao} Logo={servico.svg}/>
            ))
        }
    </div>
  );
}
