import React from "react";

import Tlf from "../../assets/tlf.png";
import ScreenTlf from "../../assets/screen-tlf.png";


import "./RecintoEvento.scss";

function RecintoEvento() {
  return (
    <>
      <div className="recinto-main-container">
        <div className="recinto-mvl">
          <img  className="tlf1" src={Tlf} alt="" />
        </div>

        <div className="recinto-content">
          <h2>Recinto del evento</h2>
          <div>
            <div className="sendimg-container">
              <div className="first-label-recinto">
                <div>
                    <p>Mapa</p>
                    <p>
                      Copy Carga aquí el mapa del recinto. El archivo debe tener
                      unas dimensiones de XXpx x XXpx y estar en formato .jpg o .png
                    </p>
                </div>
                <div>
                    
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RecintoEvento;
