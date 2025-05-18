import React from "react";
import { useId } from "react";
import ButtonForm from "../ButtonForm";
import styles from "./ContentSecond.module.css";
import InputForm from "../InputForm";
import InputDual from "../InputDual";

export default function ContentSecond({ currentForm, setCurrentForm }) {
  const [cep, setCep] = React.useState("");
  const cepId = useId();
  const [endereco, setEndereco] = React.useState("");
  const enderecoId = useId();
  const [estado, setEstado] = React.useState("");
  const estadoId = useId();
  const [cidade, setCidade] = React.useState("");
  const cidadeId = useId();
  const [numero,setNumero] = React.useState("")
  const numeroId = useId()
  const [complemento,setComplemento] = React.useState("")
  const complementoId = useId()

  return (
    <div>
      <h1 className={styles.title}>Onde fica a sua loja?</h1>
      <InputForm
        type="text"
        name="CEP"
        id={cepId}
        placeholder="00000-00"
        value={cep}
        onChange={(e) => setCep(e.target.value)}
      />

      <InputDual
        campos="estadoCidade"
        id0={estadoId}
        name0="Estado"
        id1={cidadeId}
        name1="Cidade"
      />

      <InputForm
        type="text"
        name="Endereço"
        id={enderecoId}
        placeholder="Avenida Brasil"
        value={endereco}
        onChange={(e) => setEndereco(e.target.value)}
      />

      <InputDual
      campos="numeroComplemento"
      id0={numeroId}
      name0="Número"
      id1={complementoId}
      name1="Complemento"
      />

      <ButtonForm txt={"Próximo"} funcBtn={() => setCurrentForm(2)} />
    </div>
  );
}

//id0, name0, id1, name1
