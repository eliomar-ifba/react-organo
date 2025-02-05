import React from "react";
import "./ListaSuspensa.css";

const ListaSuspensa = ({
  label,
  times,
  isObrigatorio,
  itemSelecionado,
  aoSelecionar,
}) => {
  return (
    <div className="lista-suspensa">
      <label>{label}</label>
      <select
        required={isObrigatorio}
        value={itemSelecionado}
        onChange={aoSelecionar}
      >
        <option value="">Selecione um time</option>
        {times.map((time) => (
          <option key={time}>{time}</option>
        ))}
      </select>
    </div>
  );
};

export default ListaSuspensa;
