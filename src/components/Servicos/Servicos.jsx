import React from "react";
import styles from "./Servicos.module.css";
import ServicoMarket from "../../assets/servicos-market.svg";
import ServicoPhone from "../../assets/servicos-phone.svg";
import ServicoGestao from "../../assets/servicos-gestao.svg";
import ServicoPrinter from "../../assets/servicos-printer.svg";
import ServicoContainer from "./ServicoContainer";
import LogoPigz from "../../assets/pigz-servico.svg?react";
import Card from "./Card";

export default function Servicos() {
  const servicosOferecidos = [
    {
      svg: ServicoMarket,
      titulo: "Marketplace",
      definicao: "Você tem um novo Pigzdido!",
    },
    {
      svg: ServicoPhone,
      titulo: "É fácil e rápido",
      definicao: "É fácil e rápido",
    },
    {
      svg: ServicoGestao,
      titulo: "Pigz Gestão",
      definicao: "Você no controle, sempre",
    },
    {
      svg: ServicoPrinter,
      titulo: "Vias de impressão",
      definicao: "Personalizáveis",
    },
  ];
  return (
    <div className={styles.container}>
      <div className={styles.containerLogo}>
        <LogoPigz />
      </div>
      <h1 className={styles.title}>Você tem um novo Pigzdido!</h1>
      {servicosOferecidos.map((servico) => (
        <ServicoContainer
          titulo={servico.titulo}
          definicao={servico.definicao}
          Logo={servico.svg}
        />
      ))}
      <h1 className={styles.title}>
        Tudo que você precisa por apenas R$199/mês
      </h1>
      <p className={styles.paragraph}>
        Tenha todas as funcionalidades Pigz sem taxa de adesão, sem comissão por
        cada venda, sem letrinhas miúdas.
      </p>
      <h1 className={styles.title}>E mais: suporte que realmente funciona!</h1>
      <p className={styles.paragraph}>
        Respostas automáticas e robôs? Aqui não. Nossa equipe está sempre
        disponível pra ajudar você e seus clientes.
      </p>

      <div>
        <Card
          title="Pigz"
          subTitle="Tudo o que você precisa"
          list={[
            "Pigz Marketplace",
            "Página exclusiva",
            "Pigz Gestão Desktop e Mobile",
            "Gestão de entregadores",
            "ias de impressão personalizáveis",
          ]}
          infoPay="R$199/mês"
          InfoBtn="Vender no Pigz agora"
        />
        <Card
          title="Pagamento On-line"
          subTitle="Segurança e agilidade"
          list={[
            "Aceite Pix E Cartão De Crédito",
            "Antecipação Pix Automática",
            "Não Dependa De Maquininha De Cartão",
            "Segurança Para Receber Pedidos",
            "Agilidade Para Entregar",
          ]}
          infoPay="2,99% por transação"
          InfoBtn="Saiba mais"
        />
      </div>
    </div>
  );
}

//title, subTitle, list, infoPay, InfoBtn
