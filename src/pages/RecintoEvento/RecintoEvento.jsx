import React, { useState } from "react";

import Tlf from "../../assets/tlf.png";

import { HiMagnifyingGlass, HiOutlineTrash } from "react-icons/hi2";

import BtnSave from "../../components/Buttons/BtnSave";
import BtnPublish from "../../components/Buttons/BtnPublish";
import BtnRevision from "../../components/Buttons/BtnRevision";

import "./RecintoEvento.scss";

function RecintoEvento() {
  const [formData, setFormData] = useState({
    aforo: '',
    accesos: '',
    discapacitados: 'true',
    plantas: '',
    ascensor: 'true',
    aseos: '',
    wifi: 'true',
    parking: 'true',
    transporte: 'true',
    emergencia: '',
    restauracion: 'true',
    exterior: 'true',
    interior: 'true',
    privadas: 'true',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSaveForm = (event) => {
    event.preventDefault();
    const jsonData = JSON.stringify(formData);
    localStorage.setItem('formData', jsonData);
    console.log('Los datos se han guardado en el Local Storage.');
  };

  const [imageName, setImageName] = useState(localStorage.getItem('savedImage') || '');
  const [isImageSaved, setIsImageSaved] = useState(false);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    setImageName(file.name);
  };
  const handleDeleteImage = () => {
    setImageName("");
    localStorage.removeItem("savedImage");
  };
  const saveImageLs = () => {
    localStorage.removeItem("imageName");
    localStorage.setItem("savedImage", imageName);
    setIsImageSaved(true);
  };

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
                    <label htmlFor="file-input" className="icon">
                      <HiMagnifyingGlass />
                      <input
                        id="file-input"
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        style={{ display: "none" }}
                      />
                    </label>
                    <HiOutlineTrash onClick={handleDeleteImage} />
                  </div>
                  {imageName && (
                    <p className={`img-charge ${isImageSaved ? "saved" : ""}`}>
                      {imageName}
                    </p>
                  )}
                  <div>
                    <BtnSave onClick={saveImageLs} />
                  </div>
                </div>
              </div>

              <div className="second-label-recinto">
                <form>
                  <div className="row">
                    <div className="inputs">
                      <label for="aforo">Aforo:</label>
                      <input
                        type="number"
                        id="aforo"
                        name="aforo"
                        min="0"
                        step="1"
                        placeholder="200"
                        value={formData.aforo}
                        onChange={handleInputChange}

                      />
                    </div>
                    <div className="inputs">
                      <label for="accesos">Nº de accesos:</label>
                      <input
                        type="number"
                        id="accesos"
                        name="accesos"
                        min="1"
                        step="1"
                        placeholder="20"
                        value={formData.accesos}
                        onChange={handleInputChange}

                      />
                    </div>
                    <div className="inputs">
                      <label for="discapacitados">Acceso discapacitados:</label>
                      <select name="discapacitados" value={formData.discapacitados} onChange={handleInputChange}>
                        <option value="true">Si</option>
                        <option value="false">No</option>
                      </select>
                    </div>
                  </div>

                  <div className="row">
                    <div className="inputs">
                      <label for="plantas">Nº de plantas:</label>
                      <input
                        type="number"
                        id="plantas"
                        name="plantas"
                        min="1"
                        step="1"
                        placeholder="4"
                        value={formData.plantas}
                        onChange={handleInputChange}

                      />
                    </div>
                    <div className="inputs">
                      <label for="ascensor">Ascensor:</label>
                      <select name="ascensor" value={formData.ascensor} onChange={handleInputChange}>
                        <option value="true">Si</option>
                        <option value="false">No</option>
                      </select>{" "}
                    </div>
                    <div className="inputs">
                      <label for="aseos">Nº de aseos:</label>
                      <input
                        type="number"
                        id="aseos"
                        name="aseos"
                        min="1"
                        step="1"
                        placeholder="20"
                        value={formData.aseos}
                        onChange={handleInputChange}

                      />
                    </div>
                  </div>

                  <div className="row">
                    <div className="inputs">
                      <label for="wifi">WIFI:</label>
                      <select name="wifi" value={formData.wifi} onChange={handleInputChange}>
                        <option value="true">Si</option>
                        <option value="false">No</option>
                      </select>
                    </div>
                    <div className="inputs">
                      <label for="parking">Parking:</label>
                      <select name="parking" value={formData.parking} onChange={handleInputChange}>
                        <option value="true">Si</option>
                        <option value="false">No</option>
                      </select>
                    </div>
                    <div className="inputs">
                      <label for="transporte">Transporte público:</label>
                      <select name="transporte" value={formData.transporte} onChange={handleInputChange}>
                        <option value="true">Si</option>
                        <option value="false">No</option>
                      </select>
                    </div>
                  </div>

                  <div className="row two">
                    <div className="inputs">
                      <label for="emergencia">
                        Nº de salidas de emergencia:
                      </label>
                      <input
                        type="number"
                        id="emergencia"
                        name="emergencia"
                        min="1"
                        step="1"
                        placeholder="20"
                        value={formData.emergencia}
                        onChange={handleInputChange}

                      />
                    </div>

                    <div className="inputs">
                      <label for="restauracion">Zona restauración:</label>
                      <select name="restauracion" value={formData.restauracion} onChange={handleInputChange}>
                        <option value="true">Si</option>
                        <option value="false">No</option>
                      </select>
                    </div>
                  </div>

                  <div className="row">
                    <div className="inputs">
                      <label for="exterior">Zona exterior:</label>
                      <select name="exterior" value={formData.exterior} onChange={handleInputChange}>
                        <option value="true">Si</option>
                        <option value="false">No</option>
                      </select>
                    </div>
                    <div className="inputs">
                      <label for="interior">Zona interior:</label>
                      <select name="interior" value={formData.interior} onChange={handleInputChange}>
                        <option value="true">Si</option>
                        <option value="false">No</option>
                      </select>
                    </div>
                    <div className="inputs">
                      <label for="privadas">Salas privadas:</label>
                      <select name="privadas" value={formData.privadas} onChange={handleInputChange}>
                        <option value="true">Si</option>
                        <option value="false">No</option>
                      </select>
                    </div>
                  </div>
                </form>
                <div className="btn">
                  <BtnSave onClick={handleSaveForm} />
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
