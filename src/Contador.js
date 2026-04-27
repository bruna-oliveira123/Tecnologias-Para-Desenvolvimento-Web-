import React, { Component } from 'react';



class Contador extends Component {

  constructor(props) {

    super(props);

    // Inicializamos o estado com o valor zero

    this.state = {

      numero: 0

    };

  }



  // Método para adicionar 1

  adicionar = () => {

    this.setState({ numero: this.state.numero + 1 });

  }



  // Método para subtrair 1

  subtrair = () => {

    this.setState({ numero: this.state.numero - 1 });

  }



  render() {

    return (

      <div style={{ textAlign: 'center', marginTop: '50px' }}>

        <h2>Contador</h2>

        {/* A Label demonstrando o valor */}

        <h1 className="label-numero">{this.state.numero}</h1>

        

        {/* Botão 1: Adicionar */}

        <button onClick={this.adicionar}>Adicionar (+1)</button>

        

        {/* Botão 2: Subtrair */}

        <button onClick={this.subtrair} style={{ marginLeft: '10px' }}>

          Subtrair (-1)

        </button>

      </div>

    );

  }

}



export default Contador;