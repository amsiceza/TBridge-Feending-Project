import React, { useState } from 'react';


import { HiDocumentCheck,HiClock,HiChevronDown } from 'react-icons/hi2';




const EventForm = () => {
  const [eventName, setEventName] = useState('');
  const [eventDescription, setEventDescription] = useState('');
  const [eventLocation, setEventLocation] = useState('');
  const [eventCity, setEventCity] = useState('');
  const [eventProvince, setEventProvince] = useState('');
  const [eventStartDate, setEventStartDate] = useState('');
  const [eventStartTime, setEventStartTime] = useState('');
  const [eventEndDate, setEventEndDate] = useState('');
  const [eventEndTime, setEventEndTime] = useState('');

  const handleSubmit = (e) => {
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

    // Restablecer los campos del formulario
    setEventName('');
    setEventDescription('');
    setEventLocation('');
    setEventCity('');
    setEventProvince('');
    setEventStartDate('');
    setEventStartTime('');
    setEventEndDate('');
    setEventEndTime('');
  };

  return (
    <div className="event-form">
      <form onSubmit={handleSubmit}>
        <h1>Información del evento</h1>
        <br></br>
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
        <br></br>
        <div className="parallel-groups">
        <div className="event-group">
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
        <div className="event-group">
        
          <label htmlFor="eventCity">Localidad:</label>
          <div className="input-container">
       
           
        </div>
        </div>
        <div className="event-group">
          <label htmlFor="eventProvince">Provincia:</label>
          
        </div>
        </div>
        <br></br>

        <span className="input-time">
            <HiClock></HiClock>
            <input
              type="time"
              className=""
              // value=
              // onChange={(e) => handleInputChange(index, 'inicio', e.target.value)}
            />
            <HiChevronDown></HiChevronDown>
          </span>

          <span className="input-date">
            <HiClock></HiClock>
            <input
              type="date"
              className=""
              // value=
              // onChange={(e) => handleInputChange(index, 'inicio', e.target.value)}
            />
            <HiChevronDown></HiChevronDown>
          </span>


       
        <button type="submit">
        <HiDocumentCheck /> Guardar
            </button>
      </form>
    </div>
  );
};

export default EventForm;