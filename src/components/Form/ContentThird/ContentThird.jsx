import React from "react";
import styles from "./ContentThird.module.css";
import InputForm from "../InputForm";
import ButtonForm from "../ButtonForm";

export default function ContentThird({ currentForm, setCurrentForm }) {
  const [nomeLoja, setNomeLoja] = React.useState("");
  const [cnpj, setCnpj] = React.useState("");
  const [tipoLoja, setTipoLoja] = React.useState("");
  return (
    <div>
      <h1 className={styles.title}>Me conta um pouco sobre a sua loja</h1>

      <div className={styles.containerInputsForm}>
        <InputForm
          type="text"
          name="Nome da loja"
          placeholder="Restaurante Todo Mundo Gosta"
          value={nomeLoja}
          onChange={(e) => setNomeLoja(e.target.value)}
        />

        <InputForm
          type="text"
          name="CNPJ da loja"
          placeholder="12.345.678/0001-99"
          value={cnpj}
          onChange={(e) => setCnpj(e.target.value)}
        />

        <InputForm
          type="text"
          name="Tipo de loja"
          placeholder="Selecione"
          value={tipoLoja}
          onChange={(e) => setNomeLoja(e.target.value)}
        />
      </div>

      <ButtonForm txt="Concluir" funcBtn={() => setCurrentForm(0)} />
    </div>
  );
}

/*
      <InputForm
        type="email"
        name="E-mail"
        id={emailId}
        placeholder="leonercio.goesfeeld@email.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
*/
