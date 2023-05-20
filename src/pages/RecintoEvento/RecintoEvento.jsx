import React from "react";

import Tlf from "../../assets/tlf.png";

import { HiMagnifyingGlass, HiOutlineTrash } from "react-icons/hi2"

import BtnSave from "../../components/Buttons/BtnSave"


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
                    <p className="mapa">Mapa</p>
                    <p className="mapa-text">
                      Carga aquí el mapa del recinto. El archivo debe tener
                      unas dimensiones de XXpx x XXpx y estar en formato .jpg o .png
                    </p>
                </div>
                <div className="btn-first-lbl">
                    <div className="icons">
                        <HiMagnifyingGlass/>
                        <HiOutlineTrash/>
                    </div>
                    <div>
                        <BtnSave/>
                    </div>
                </div>
              </div>

              <div className="second-label-recinto">
                    
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RecintoEvento;
