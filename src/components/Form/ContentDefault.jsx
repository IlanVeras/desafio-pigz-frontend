import React from "react";
import { useId } from "react";
import styles from "./ContentDefault.module.css";
import ButtonForm from "./ButtonForm";
import InputForm from "./InputForm";

export default function ContentDefault() {
  const [nome, setNome] = React.useState("");
  const nomeId = useId()
  const [email, setEmail] = React.useState("");
  const emailId = useId()
  const [telefone,setTelefone] = React.useState("")
  const telefoneId = useId()
  return (
    <div>
      <h1 className={styles.title}>Quero vender no Pigz</h1>
      <p className={styles.p1}>Dê o primeiro passo para aumentar suas vendas</p>
      <p className={styles.p2}>
        Ao continuar, aceito que a Pigz entre em contato comigo por telefone,
        e-mail ou WhatsApp.
      </p>
      <InputForm
        type="text"
        name="Nome"
        id={nomeId}
        placeholder="Leonecio Goesfeeld"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <InputForm
        type="email"
        name="E-mail"
        id={emailId}
        placeholder="leonercio.goesfeeld@email.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <InputForm
      type="text"
      name="Telefone"
      id={telefoneId}
      placeholder={"(95) 99876-5432"}
      value={telefone}
      onChange={(e) => setTelefone(e.target.value)}
      />
      <ButtonForm txt={"Continuar"} />
    </div>
  );
}
