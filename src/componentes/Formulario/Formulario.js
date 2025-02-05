import { useState } from "react";
import Botao from "../Botao/Botao";
import CampoTexto from "../CampoTexto/CampoTexto";
import ListaSuspensa from "../ListaSuspensa/ListaSuspensa";
import "./Formulario.css";

const Formulario = (props) => {
  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("");

  function aoSalvar(evento) {
    evento.preventDefault();
    const colaborador = {
      nome: nome,
      cargo: cargo,
      imagem: imagem,
      time: time,
    };
    props.aoSalvarOperador(colaborador);

    setNome("");
    setCargo("");
    setImagem("");
    setTime("");
    
  }


  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do colaborador.</h2>
        <CampoTexto
          isObrigatorio={true}
          label="Nome"
          placehold="Digite seu nome"
          texto={nome}
          aoDigitar={(evento) => setNome(evento.target.value)}
        />
        <CampoTexto
          isObrigatorio={true}
          label="Cargo"
          placehold="Digite seu cargo"
          texto={cargo}
          aoDigitar={(evento) => setCargo(evento.target.value)}
        />
        <CampoTexto
          isObrigatorio={true}
          label="Imagem"
          placehold="Informe o endereço da imagem"
          texto={imagem}
          aoDigitar={(evento) => setImagem(evento.target.value)}
        />
        <ListaSuspensa
          isObrigatorio={true}
          label="Time"
          times={props.times}
          itemSelecionado={time}
          aoSelecionar={(evento) => setTime(evento.target.value)}
        />
        <Botao>Criar card</Botao>
      </form>
    </section>
  );
};

export default Formulario;
