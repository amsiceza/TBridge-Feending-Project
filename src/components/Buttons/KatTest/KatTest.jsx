import React from 'react'
import "../../../sass/buttons.scss"
import { HiDocumentCheck, HiClipboardDocumentList, HiClipboardDocumentCheck, HiEnvelope, HiClock, HiChevronRight, HiMapPin, HiChevronDown, HiCalendar } from "react-icons/hi2"
import BtnDate from '../BtnDate'


/* ICON LIBRARY SHOULD BE HEROICON directly, but I can't change the icon color!!! So using react-icons heroicons instead, slight differences */


const KatTest = () => {

  return (
    <>
      <div>KatTest</div>

      <div>
        <button type="button" className="btn-green-md"><span>
                 <HiDocumentCheck></HiDocumentCheck>
        Guardar</span></button>
        </div>

      <div>
        <button type="button" className="btn-green-lg">    <span className="iconText">
          <HiClipboardDocumentList></HiClipboardDocumentList>
        Enviar a revisión</span>
        </button>
        </div>


      <div>
        <button type="button" className="btn-green-lg">    <span><HiClipboardDocumentCheck></HiClipboardDocumentCheck>Publicar</span></button>
        </div>

      <div>
        <button type="button" className="btn-green-sm"><span>Ver</span></button>
      </div>

      <div>
        <button type="button" className="btn-green-lg"><span><HiEnvelope></HiEnvelope>Enviar ahora</span></button>
      </div>

      <div>
        <button type="button" className="btn-green-lg"><span><HiClock></HiClock>Programar</span></button>
      </div>

      <div>
        <button type="button" className="btn-gray-md"><span>Siguiente<HiChevronRight></HiChevronRight></span></button>
      </div>


      <div>

      
      <button type="button" className="btn-location">
          <span>
            <HiMapPin></HiMapPin>         
                    Localidad
            <HiChevronDown></HiChevronDown>
         
          </span>
     </button>
      </div>

      <div>

      
<button type="button" className="btn-location">
    <span>
      <HiMapPin></HiMapPin>         
              Provincia
      <HiChevronDown></HiChevronDown>
   
    </span>
</button>
</div>
      
      
<div>

      
<button type="button" className="btn-time">
    <span>
      <HiClock></HiClock>         
              20:30
      <HiChevronDown></HiChevronDown>
   
    </span>
</button>
</div>

<div>
<button type="button" className="btn-location">
    <span>
      <HiCalendar></HiCalendar>         
              23/05/2023
      <HiChevronDown></HiChevronDown>
    </span>
</button>
</div>
      
      
<BtnDate></BtnDate>
<div>
<div>Input tests</div>
<button type="button" className="btn-location">
    <span>
      <HiCalendar></HiCalendar>         
      <input type="date"/>
      <HiChevronDown></HiChevronDown>
    </span>
</button>
</div>





    </>
  )

}

export default KatTest