import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

class Contador extends Component {
 


  TomandoClases() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value == 0 ? "warning" : "primary";
    return classes;
  }

  metodo() {
    const {  value } = this.props.counter;
    return value == 0 ? <h2>Zero</h2> : value;
  }

  

  render() {
   
    return (
      <div>
        <span className={this.TomandoClases()}>{this.metodo()}</span>
        <button
          onClick={()=>this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Incrementar
        </button>
        <button
          className="btn btn-danger btn-sm m-2"
          onClick={() => this.props.onDelete(this.props.counter.id)}
        >
          Eliminar
        </button>
      
      </div>
    );
  }
}

export default Contador;
