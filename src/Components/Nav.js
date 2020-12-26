import React, { Component } from "react";
class Nav extends Component {
  //Componente sin stado es mejor hacerlo con  funcion dice pero depende de uno ya 

 /*  const NavBar=()=>{
    return (
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar 
             <span className="badge badge-pill badge-secondary">{this.props.TotalContadores}</span>
          </a>
        </div>
      </nav>
    );
  } */

  render() {
    const{TotalContadores}=this.props;

    return (
      
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar 
             <span className="badge badge-pill badge-secondary">{TotalContadores}</span>
          </a>
        </div>
      </nav>
    );
  }
}

export default Nav;
