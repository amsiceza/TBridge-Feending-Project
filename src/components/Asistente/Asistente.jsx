import React from "react";

const Asistente = () => {
  const { asistentes } = useSelector((state) => state.asistentes);

  const asistente = asistentes.map((asistente) => {
    return (
      <div className="post">
        <p>{asistente.nombre}</p>
      </div>
    );
  });

  return <div>{asistente}</div>;
};

export default Asistente;
