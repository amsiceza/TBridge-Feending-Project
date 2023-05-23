import React from 'react'
import "../../../sass/buttons.scss"
import "../../../sass/input.scss"
import { HiDocumentCheck, HiClipboardDocumentList, HiClipboardDocumentCheck, HiEnvelope, HiClock, HiChevronRight, HiMapPin, HiChevronDown, HiCalendar } from "react-icons/hi2"
import BtnDate from '../BtnDate'
import "./KatTest.scss"

const KatTest = () => {

//TEST FOR EVENT FORM:
// date is this format: 
// 2023-07-29


// const dateTimeconverter = (dateString, timeString) => {
//   const [year, month, day] = dateString.split("-");
//   const [hours, minutes] = timeString.split(":");
//   // JavaScript's Date object uses a zero-based index for the month
//   const combinedDate = new Date(year, month - 1, day, hours, minutes);
//   return combinedDate
// }

// const storedEvent = JSON.parse(localStorage.getItem("event"))
// const eventData = {
//   nombre: storedEvent.eventName,
//   descripcion: storedEvent.eventDescription,
//   location: storedEvent.eventLocation,
//   inicio: dateTimeconverter(storedEvent.startDate, storedEvent.startTime),
//   fin: dateTimeconverter(storedEvent.endDate, storedEvent.endTime),
//   direccion: {
//     calle: storedEvent.eventLocation, // THIS IS WRONG, CHANGE TO LUGAR?? on backend
//     localidad: storedEvent.eventCity, 
//     provincia: storedEvent.eventProvince,
//   }
// }

// dispatch(createEvent(eventData))












  return (
    <div className='container'>
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


<label htmlFor="date">
      <span className="input-date">
        <HiCalendar></HiCalendar>
          <input type="date" id="date" className="" />
        <HiChevronDown></HiChevronDown>
      </span>
    </label>  

</div>

<label htmlFor="start-time">
     <span className="input-time">
        <HiClock></HiClock>
          <input type="time" id="start-time" className=""/>
        <HiChevronDown></HiChevronDown>
      </span>

</label>


    </div>
  )

}

export default KatTest