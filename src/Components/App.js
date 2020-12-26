import React, { Component } from "react";
import Nav from "./Nav";
import Contadores from "./Contadores";

class App extends Component {
  state = {
    contadores: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  Delete = (ContadorId) => {
    const contadores = this.state.contadores.filter(
      (aux) => aux.id != ContadorId
    );
    this.setState({ contadores: contadores }); //Sobrescriminos nuestro state
  };

  resetear = () => {
    console.log("Reseteando");
    const contadores = this.state.contadores.map((cont) => {
      cont.value = 0;
      return cont;
    });
    this.setState({ contadores: contadores });
  };

  incrementando = (contador) => {
    const contadores = [...this.state.contadores]; //...-> Clonando el array
    const index = contadores.indexOf(contador);
    contadores[index] = { ...contador }; //lo clonamos o insertamos
    contadores[index].value++;
    this.setState({ contadores: contadores });
  };

  render() {
    return (//filtramos el tamaño del array de  aquellos contadores en donde su valor sea >0
      <React.Fragment>
        <Nav
          TotalContadores={
            this.state.contadores.filter((c) => c.value > 0).length
          }
        />
        <main className="container">
          <Contadores
            contadores={this.state.contadores}
            onReset={this.resetear}
            onIncrement={this.incrementando}
            onDelete={this.Delete}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
