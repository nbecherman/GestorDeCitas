// crearCita.js
import React, { useState } from 'react';
import './crearCita.css';

const CrearCita = ({ agregarCita }) => {
  const [nombreMascota, setNombreMascota] = useState('');
  const [nombreDueño, setNombreDueño] = useState('');
  const [fechaTurno, setFechaTurno] = useState('');
  const [horaTurno, setHoraTurno] = useState('');
  const [sintomas, setSintomas] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const cita = {
      nombreMascota,
      nombreDueño,
      fechaTurno,
      horaTurno,
      sintomas,
    };

    agregarCita(cita);

    // Limpiar formulario
    setNombreMascota('');
    setNombreDueño('');
    setFechaTurno('');
    setHoraTurno('');
    setSintomas('');
  };

  return (
    <div className="crear-cita">
      <h1>Crear cita</h1>
      <form onSubmit={handleSubmit}>
        <label>Nombre de la mascota:</label>
        <input
          type="text"
          value={nombreMascota}
          onChange={(event) => setNombreMascota(event.target.value)}
        />

        <label>Nombre del dueño:</label>
        <input
          type="text"
          value={nombreDueño}
          onChange={(event) => setNombreDueño(event.target.value)}
        />

        <label>Fecha del turno:</label>
        <input
          type="date"
          value={fechaTurno}
          onChange={(event) => setFechaTurno(event.target.value)}
        />

        <label>Hora del turno:</label>
        <input
          type="time"
          value={horaTurno}
          onChange={(event) => setHoraTurno(event.target.value)}
        />

        <label>Síntomas:</label>
        <textarea
          value={sintomas}
          onChange={(event) => setSintomas(event.target.value)}
        />

        <button type="submit">Crear cita</button>
      </form>
    </div>
  );
};

export default CrearCita;
