// App.js
import React, { useState } from 'react';
import './App.css';
import Titulo from './titulo'; 
import CrearCita from './crearCita';
import ListaCitas from './listaCitas';

function App() {
  const [citas, setCitas] = useState([]);

  const agregarCita = (cita) => {
    setCitas([...citas, cita]);
  };

  const eliminarCita = (index) => {
    const nuevasCitas = citas.filter((_, i) => i !== index);
    setCitas(nuevasCitas);
  };

  return (
    <div className="App">
      <Titulo /> 
      <CrearCita agregarCita={agregarCita} />
      <ListaCitas citas={citas} eliminarCita={eliminarCita} />
    </div>
  );
}

export default App;
