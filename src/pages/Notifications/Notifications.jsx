import React, { useEffect, useState } from 'react'
import "./Notifications.scss";
// import BtnDate from '../../components/Buttons/BtnDate';
// import BtnTime from '../../components/Buttons/BtnTime';
import AssCategory from '../../components/Buttons/AssistantsCategory';
import SwitchButton from '../../components/Buttons/Swichbutton';
import BtnSendNow from '../../components/Buttons/BtnSendNow';
import ProgramNotification from '../../components/Buttons/ProgramNotification';
import BrushEdit from '../../assets/icons/brush-edit.png'
import { HiCalendar, HiChevronDown, HiClock } from 'react-icons/hi2';



const Notifications = () => {
    const [notification, setNotification] = useState('');
    const maxLength = 700;

    const handleNotificationChange = (event) => {
        const { value } = event.target;
        if (value.length <= maxLength) {
            setNotification(value);
        }
    };
    return (
        <>
            <div className="notification-main-container">

                <div className='notification-content'>
                    <h2 className='notification-title'>Enviar notificaciones</h2>

                    <div className='new-notification'>
                        <p className='new-notification-text1'>Nueva notificación:</p>
                        <textarea
                            className='input-new-notification'
                            placeholder='Añadir notificación'
                            value={notification}
                            onChange={handleNotificationChange}
                            maxLength={maxLength}
                        ></textarea>
                        <span className="character-count">{notification.length}/{maxLength}</span>
                    </div>

                    <div className='select-options-notifications'>
                        <div className='div-swichButton'>
                            <p className='text-buttons-nots'>Notificación recurrente</p>
                            <SwitchButton />
                        </div>
                        <div className='filter-assistants-buttons'>
                            <p className='text-buttons-nots'>Filtrar receptores</p>
                            <AssCategory />

                            <span className="input-date-nots">
                                <HiCalendar />
                                <input
                                    type="date"
                                    className=""
                                // value={eventStartDate}
                                // onChange={(e) => setEventStartDate(e.target.value)}
                                />
                                <HiChevronDown />
                            </span>

                            <span className="input-time-nots">
                                <HiClock />
                                <input
                                    type="time"
                                    className=""
                                // value={eventStartTime}
                                // onChange={(e) => setEventStartTime(e.target.value)}
                                />
                                <HiChevronDown />
                            </span>
                        </div>
                    </div>

                    <div className='send-notifications-buttons'>
                        <BtnSendNow />   {/*onClick={createNotification}*/}
                        <ProgramNotification />
                    </div>


                    <p className='new-notification-text'>Notificaciones programadas:</p>


                    <div className='programmed-notifications'>

                        <div className='scroll-container-notifications'>

                            <div className='master-card-notification'>
                                <div className='card-complete-notification'>
                                    <div className='card-notification'>
                                        <p className='Date-card-notification'>24/05/2023</p>
                                        <p className='Hour-card-notification'>16:00</p>
                                        <p className='who-card-notification'>Allaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
                                        <p className='text-card-notification'>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
                                    </div>
                                    <button className='image-button-edit-not'>  {/*onClick={handleGoBookings}*/}
                                        <img src={BrushEdit} alt='edit-notification' className='button-edit-notification' />
                                    </button>
                                </div>
                                <hr className='separator-line' />
                            </div>

                            
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default Notifications;
