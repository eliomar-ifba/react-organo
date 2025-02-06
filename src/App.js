import { useEffect, useState } from "react";
import Banner from "./componentes/Banner/Banner";
import Formulario from "./componentes/Formulario/Formulario";
import Time from "./componentes/Time/Time";
import Rodape from "./componentes/Rodape/Rodape";

function App() {
  const times = [
    { nome: "Programação", corPrimaria: "#D9F7E9", corSecundaria: "#57C278" },
    { nome: "Front-end", corPrimaria: "#E8F8FF", corSecundaria: "#82CFFA" },
    { nome: "Data Science", corPrimaria: "#F0F8E2", corSecundaria: "#A6D157" },
    { nome: "Devops", corPrimaria: "#FDE7E8", corSecundaria: "#E06B69" },
    { nome: "UX e Design", corPrimaria: "#FAE9F5", corSecundaria: "#DB6EBF" },
    { nome: "Mobile", corPrimaria: "#FFF5D9", corSecundaria: "#FFBA05" },
    {
      nome: "Inovação e Gestão",
      corPrimaria: "#FFEEDF",
      corSecundaria: "#FF8A29",
    },
  ];

  const [colaboradores, setColaboradores] = useState([]);

  function aoNovoOperadorSalvo(operador) {
    setColaboradores([...colaboradores, operador]);
  }

  useEffect(() => {
    console.log(colaboradores);
  }, [colaboradores]);

  return (
    <div>
      <Banner />
      <Formulario
        aoSalvarOperador={(operador) => aoNovoOperadorSalvo(operador)}
        times={times.map((time) => time.nome)}
      />

      <section className="titulo">
        <div>
          <h1>Minha Organização</h1>
          <img src="/assets/imagens/botao-add.png" alt="Logo organo" />
        </div>
      </section>

      {/* Componente <Time/>  */}
      {times
        // .filter((time) =>
        //   colaboradores.some((colaborador) => colaborador.time === time.nome)
        // )
        .map((time, index) => (
          <Time
            key={index}
            nome={time.nome}
            corPrimaria={time.corPrimaria}
            corSecundaria={time.corSecundaria}
            listaColaboradores={colaboradores.filter(
              (colaborador) => colaborador.time === time.nome
            )}
          />
        ))}

      <Rodape />
    </div>
  );
}

export default App;
