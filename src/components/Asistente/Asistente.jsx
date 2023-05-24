import React from "react";
import { useSelector } from "react-redux";
import "./Asistente.scss"

const Asistente = () => {
  
  const {asistentes} = useSelector((state) => state.asistentes)

  if(asistentes?.length <= 0){ 
    return "No hay asistentes..."
  }
  const asistents =asistentes.map((asistente,_id) =>
   <div className="asistent" key={_id}> 
  <div className="img-container"> <img src={`http://localhost:8080/${asistente.imagen}`}/> </div>
   {asistente.nombre} {asistente.puesto}
    <button className="button-perfil">Ver perfil</button> </div>)
  
  return (
    <div className="principal-container-asistents">
      <span className="span-asistents-header">Lista de asistentes</span>
      <div className="container-asistent">
          {asistents}
      </div>
    </div>
    
    )

}

export default Asistente;
