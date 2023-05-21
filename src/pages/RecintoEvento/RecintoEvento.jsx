import React from "react";

import Tlf from "../../assets/tlf.png";

import { HiMagnifyingGlass, HiOutlineTrash } from "react-icons/hi2";

import BtnSave from "../../components/Buttons/BtnSave";
import BtnPublish from "../../components/Buttons/BtnPublish";
import BtnRevision from "../../components/Buttons/BtnRevision";

import "./RecintoEvento.scss";

function RecintoEvento() {
  return (
    <>
      <div className="recinto-main-container">
        <div className="recinto-mvl">
          <img className="tlf1" src={Tlf} alt="" />
        </div>

        <div className="recinto-content">
          <h2>Recinto del evento</h2>
          <div>
            <div className="sendimg-container">
              <div className="first-label-recinto">
                <div>
                  <p className="mapa">Mapa</p>
                  <p className="mapa-text">
                    Carga aquí el mapa del recinto. El archivo debe tener unas
                    dimensiones de XXpx x XXpx y estar en formato .jpg o .png
                  </p>
                </div>
                <div className="btn-first-lbl">
                  <div className="icons">
                    <HiMagnifyingGlass />
                    <HiOutlineTrash />
                  </div>
                  <div>
                    <BtnSave />
                  </div>
                </div>
              </div>

              <div className="second-label-recinto">
                <form>
                  <div className="row">
                    <div className="inputs">
                      <label for="aforo">Aforo:</label>
                      <input type="number" id="aforo" name="aforo" />
                    </div>
                    <div className="inputs">
                      <label for="acessos">Nº de acessos</label>
                      <input type="number" id="acessos" name="acessos" />
                    </div>
                    <div className="inputs">
                      <label for="discapacitados">Acesso discapacitados</label>
                      <input
                        type="number"
                        id="discapacitados"
                        name="discapacitados"
                      />
                    </div>
                  </div>

                  <div className="row">
                    <div className="inputs">
                      <label for="plantas">Nº de plantas</label>
                      <input type="number" id="plantas" name="plantas" />
                    </div>
                    <div className="inputs">
                      <label for="ascensor">Ascensor</label>
                      <input type="number" id="ascensor" name="ascensor" />
                    </div>
                    <div className="inputs">
                      <label for="aseos">Nº de aseos</label>
                      <input type="number" id="aseos" name="aseos" />
                    </div>
                  </div>

                  <div className="row">
                    <div className="inputs">
                      <label for="wifi">WIFI</label>
                      <input type="number" id="wifi" name="wifi" />
                    </div>
                    <div className="inputs">
                      <label for="parking">Parking</label>
                      <input type="number" id="parking" name="parking" />
                    </div>
                    <div className="inputs">
                      <label for="transporte">Transporte publico</label>
                      <input type="number" id="transporte" name="transporte" />
                    </div>
                  </div>

                  <div className="row two">
                    <div className="inputs">
                      <label for="emergencia">
                        Nº de salidas de emergencia
                      </label>
                      <input type="number" id="emergencia" name="emergencia" />
                    </div>

                    <div className="inputs">
                      <label for="restauracion">Zona restauracion</label>
                      <input
                        type="number"
                        id="restauracion"
                        name="restauracion"
                      />
                    </div>
                  </div>

                  <div className="row">
                    <div className="inputs">
                      <label for="exterior">Zona exterior</label>
                      <input type="number" id="exterior" name="exterior" />
                    </div>
                    <div className="inputs">
                      <label for="interior">Zona interior</label>
                      <input type="number" id="interior" name="interior" />
                    </div>
                    <div className="inputs">
                      <label for="privadas">Salas privadas</label>
                      <input type="number" id="privadas" name="privadas" />
                    </div>
                  </div>
                </form>
                <div className="btn">
                  <BtnSave />
                </div>
              </div>

              
            </div>
            
          </div>
        </div>
      </div>
      <div>
                <div className="next-recinto-container">
                  <p className="steps">3 Pasos de 3 Completados</p>
                  <p className="points">● ● ●</p>
                  <div className="btns">
                    <BtnRevision />
                    <BtnPublish />
                  </div>
                </div>
              </div>
    </>
  );
}

export default RecintoEvento;
