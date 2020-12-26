import React, { Component } from "react";
import Contador from "./Contador";

class Contadores extends Component {
  render() {
    const{onIncrement,onDelete,onReset,contadores}=this.props;

    return (
      <div>
        <button
          onClick={onReset}
          className="btn btn-primary btn-sm m-2"
        >
          Resetear
        </button>
        {contadores.map((contador) => (
          <Contador
            key={contador.id}
            onIncrement={onIncrement}
            counter={contador}
            onDelete={onDelete}
          >
            <h4>Contador #{contador.id}</h4>
          </Contador>
        ))}
      </div>
    );
  }
}
export default Contadores;
