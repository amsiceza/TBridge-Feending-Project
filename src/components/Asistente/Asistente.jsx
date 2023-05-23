import React from "react";
import { useSelector } from "react-redux";
import "./Asistente.scss"

const Asistente = () => {
  
  const {asistentes} = useSelector((state) => state.asistentes)

  if(asistentes?.length <= 0){ 
    return "No hay asistentes..."
  }
  const asistents =asistentes.map((asistente,_id) => <div key={_id}>{asistente.nombre} <button>Ver perfil</button> </div>)
  return (
    <>
    <div className="principal-container-asistents">
      <span>Lista de asistentes</span>
      <div>
        <div>
          {asistents}
        </div>
      </div>
    </div>
    </>
    )

}

export default Asistente;
