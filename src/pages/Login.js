import React, { useState } from 'react';
import { auth, db } from '../firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, senha);
      navigate('/principal');
    } catch (error) {
      setErro("Usuário não cadastrado ou dados incorretos.");
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <input type="email" placeholder="E-mail" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Senha" onChange={(e) => setSenha(e.target.value)} />
      <button onClick={handleLogin}>Acessar Principal</button>
      <button onClick={() => navigate('/cadastro')}>Ir para Cadastro</button>
      {erro && <p style={{color: 'red'}}>{erro}</p>}
    </div>
  );
};

export default Login;