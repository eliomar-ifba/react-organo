import Colaborador from "../Colaborador/Colaborador";
import "./Time.css";

const Time = (props) => {
  return (
    // podemos usar o operador ternário também para renderizar o componente apenas se a condição for verdadeira
    (props.listaColaboradores.length > 0) && ( // podemos usar o operador && para renderizar o componente apenas se a condição for verdadeira
      <section className="time" style={{ backgroundColor: props.corPrimaria }}>
        <h3 style={{ borderColor: props.corSecundaria }}> {props.nome} </h3>
        <div className="colaboradores">
          {props.listaColaboradores.map((colaborador, index) => (
            <div key={index}>
              <Colaborador
                nome={colaborador.nome}
                cargo={colaborador.cargo}
                imagem={colaborador.imagem}
                corDeFundo={props.corSecundaria}
              />
            </div>
          ))}
        </div>
      </section>
    )
  );
};

export default Time;
