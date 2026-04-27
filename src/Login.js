import React, { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      email: '',
      senha: '',
      mensagem: ''
    };
  }

  
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  // Lógica de validação ao clicar no botão
  acessar = () => {
    const { email, senha } = this.state;

    if (email === 'brunafck@gmail.com' && senha === '10489') {
      this.setState({ mensagem: 'Acessado com sucesso!' });
    } else {
      this.setState({ mensagem: 'Usuário ou senha incorretos!' });
    }
  }

  render() {
    return (
      <div style={{ border: '1px solid #ccc', padding: '20px', width: '300px', margin: '20px auto', textAlign: 'center' }}>
        <h1>Login</h1>
        
        <div>
          <input 
            type="text" 
            name="email" 
            placeholder="E-mail" 
            onChange={this.handleChange} 
            style={{ marginBottom: '10px', width: '100%' }}
          />
        </div>

        <div>
          <input 
            type="password" 
            name="senha" 
            placeholder="Senha" 
            onChange={this.handleChange} 
            style={{ marginBottom: '10px', width: '100%' }}
          />
        </div>

        <button onClick={this.acessar} style={{ width: '100%', cursor: 'pointer' }}>
          Acessar
        </button>

        <div style={{ marginTop: '15px', fontWeight: 'bold' }}>
          <label>{this.state.mensagem}</label>
        </div>
      </div>
    );
  }
}

export default Login;