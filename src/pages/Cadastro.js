import React, { useState } from 'react';
import { auth, db } from '../firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

const Cadastro = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [dataNasc, setDataNasc] = useState('');
  const navigate = useNavigate();

  const handleCadastro = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, senha);
      const user = userCredential.user;

      // Grava no Firestore usando o UID do Auth
      await setDoc(doc(db, "usuarios", user.uid), {
        uid: user.uid,
        nome,
        sobrenome,
        dataNascimento: dataNasc,
        email
      });

      alert("Usuário cadastrado com sucesso!");
      navigate('/');
    } catch (error) {
      alert("Erro ao cadastrar: " + error.message);
    }
  };

  return (
    <div>
      <h1>Cadastro</h1>
      <input type="text" placeholder="Nome" onChange={(e) => setNome(e.target.value)} />
      <input type="text" placeholder="Sobrenome" onChange={(e) => setSobrenome(e.target.value)} />
      <input type="date" onChange={(e) => setDataNasc(e.target.value)} />
      <input type="email" placeholder="E-mail" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Senha" onChange={(e) => setSenha(e.target.value)} />
      <button onClick={handleCadastro}>Cadastrar</button>
    </div>
  );
};

export default Cadastro;
