


import React, { useState } from 'react';
import { HiDocumentCheck, HiClock, HiChevronDown, HiMapPin } from 'react-icons/hi2';

import './EventForm.scss';
import BtnSave from '../../components/Buttons/BtnSave';
import BtnNext from '../../components/Buttons/BtnNext';
import { useNavigate } from 'react-router';

const EventForm = () => {

  let navigate = useNavigate();
  const [eventName, setEventName] = useState('');
  const [eventDescription, setEventDescription] = useState('');
  const [eventLocation, setEventLocation] = useState('');
  const [eventCity, setEventCity] = useState('');
  const [eventProvince, setEventProvince] = useState('');
  const [eventStartDate, setEventStartDate] = useState('');
  const [eventStartTime, setEventStartTime] = useState('');
  const [eventEndDate, setEventEndDate] = useState('');
  const [eventEndTime, setEventEndTime] = useState('');

  const handleSave = (e) => {
    e.preventDefault();

    // Aquí puedes realizar la lógica para guardar los datos del evento
    const event = {
      name: eventName,
      description: eventDescription,
      location: eventLocation,
      city: eventCity,
      province: eventProvince,
      startDate: eventStartDate,
      startTime: eventStartTime,
      endDate: eventEndDate,
      endTime: eventEndTime,
    };

    console.log('Evento:', event);
    localStorage.setItem("evento", JSON.stringify(event))

    // Restablecer los campos del formulario
   /* setEventName('');
    setEventDescription('');
    setEventLocation('');
    setEventCity('');
    setEventProvince('');
    setEventStartDate('');
    setEventStartTime('');
    setEventEndDate('');
    setEventEndTime('');*/
  };

const handleNext = () => {
  navigate("/program");
}


  return (
    <>
    <div className="event-form">
      <form >
        <h3>Información del evento</h3>
        <br />

        <div className="event-group">
          <label htmlFor="eventName">Nombre del evento:</label>
          <input
            type="text"
            id="eventName"
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
            required
          />
        </div>

        <div className="event-group">
          <label htmlFor="eventDescription">Descripción del evento:</label>
          <textarea
            id="eventDescription"
            value={eventDescription}
            onChange={(e) => setEventDescription(e.target.value)}
            required
          />
        </div>

        <br />

        <div className="parallel-groups">
          <div className="event-location">


            <label htmlFor="eventLocation">Localización del evento:</label>
            <input
              type="text"
              placeholder=""
              id="eventLocation"
              value={eventLocation}
              onChange={(e) => setEventLocation(e.target.value)}
              required
            />
          </div>

          <button type="button" className="btn-location">
            <span>
              <HiMapPin /> Localidad <HiChevronDown />
            </span>
          </button>

        

          <button type="button" className="btn-location">
            <span>
              <HiMapPin /> Provincia <HiChevronDown />
            </span>
          </button>
        </div>

        <br />

        <div className="datetime-buttons">
          <label htmlFor="eventDate">Fecha inicio:</label>
          <span className="input-date">
            <HiClock />
            <input
              type="date"
              className=""
              value={eventStartDate}
               onChange={(e) => setEventStartDate(e.target.value)}
            />
            <HiChevronDown />
          </span>

          <label htmlFor="eventTime">Hora inicio:</label>
          <span className="input-time">
            <HiClock />
            <input
              type="time"
              className=""
              value= {eventStartTime}
               onChange={(e) => setEventStartTime( e.target.value)}
            />
            <HiChevronDown />
          </span>

          <label htmlFor="eventDate">Fecha fin:</label>
          <span className="input-date">
            <HiClock />
            <input
              type="date"
              className=""
               value={eventEndDate}
               onChange={(e) => setEventEndDate( e.target.value)}
            />
            <HiChevronDown />
          </span>

          <label htmlFor="eventTime">Hora fin:</label>
          <span className="input-time">
            <HiClock />
            <input
              type="time"
              className=""
              value= {eventEndTime}
               onChange={(e) => setEventEndTime(e.target.value)}
            />
            <HiChevronDown />
          </span>
        </div>
      </form>

      <br />

      <BtnSave onClick={handleSave}></BtnSave>
      
    </div>

    <div className="next-recinto-container">
        <p className="steps">1 Paso de 3 Completado</p>
        <p className="points">● &#x25CB; &#x25CB;</p>
        <div className="btns">
          <BtnNext onClick={handleNext}></BtnNext>
        </div>
      </div>
    </>
  );
};

export default EventForm;