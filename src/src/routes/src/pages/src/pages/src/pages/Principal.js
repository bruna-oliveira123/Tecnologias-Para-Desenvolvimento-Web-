import React, { useEffect, useState } from 'react';
import { auth, db } from '../firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';

const Principal = () => {
  const [dados, setDados] = useState(null);

  useEffect(() => {
    const buscarDados = async () => {
      const user = auth.currentUser;
      if (user) {
        const docRef = doc(db, "usuarios", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setDados(docSnap.data());
        }
      }
    };
    buscarDados();
  }, []);

  return (
    <div>
      <h1>Página Principal</h1>
      {dados ? (
        <div>
          <p>Nome: {dados.nome}</p>
          <p>Sobrenome: {dados.sobrenome}</p>
          <p>Data de Nascimento: {dados.dataNascimento}</p>
        </div>
      ) : <p>Carregando dados...</p>}
    </div>
  );
};

export default Principal;