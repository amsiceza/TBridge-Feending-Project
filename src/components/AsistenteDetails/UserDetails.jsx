import React from 'react'
import "./UserDetails.scss"

const UserDetails = () => {
  return (
    <>
      <div>UserDetails</div>
      <div className="asistentes-main-container">
        <div className="asistentes-mvl">
        {/* <img className="foto-bio" src={foto-bio} alt="" /> */}
        </div>

        <div className="asistentes-content">
          <h2>Asistentes del evento</h2>
          <div>
            <div className="sendimg-container">
              { /* Label blanco que contiene la imagen del asistente */ }
              <div className="first-label-asistentes">
                <div>
                  <p className="basistente">asistente</p>
                  <p className="asistente-text">
                    Aquí va la información del asistente
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default UserDetails