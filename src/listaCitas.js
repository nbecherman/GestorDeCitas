
import React from 'react';
import './listaCita.css';

const ListaCitas = ({ citas, eliminarCita }) => {
  return (
    <div className="lista-citas">
      {citas.map((cita, index) => (
        <div className="tarjeta-cita" key={index}>
          <h3>{cita.nombreMascota}</h3>
          <p>Dueño: {cita.nombreDueño}</p>
          <p>Fecha: {cita.fechaTurno}</p>
          <p>Hora: {cita.horaTurno}</p>
          <p>Síntomas: {cita.sintomas}</p>
          <button onClick={() => eliminarCita(index)}>Eliminar</button>
        </div>
      ))}
    </div>
  );
};

export default ListaCitas;
