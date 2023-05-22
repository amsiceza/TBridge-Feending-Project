import React, { useEffect, useState } from 'react'
import { HiPlusSmall } from "react-icons/hi2"
import "./ProgramacionEvento.scss"
import "../../sass/input.scss"
import "../../sass/buttons.scss"
import BtnAddActivity from '../../components/Buttons/BtnAddActivity'
import BtnSave from '../../components/Buttons/BtnSave';
import BtnNext from '../../components/Buttons/BtnNext';
import ActivityInputGroup from '../../components/ActivityInputGroup/ActivityInputGroup';
import { useDispatch, useSelector } from 'react-redux';
import { changeDay } from '../../features/program/programSlice';

const ProgramacionEvento = () => {

  const dispatch = useDispatch();
  const { currentDay } = useSelector((state) => state.program);

  const [inputGroups, setInputGroups] = useState([
    { dia: currentDay, inicio: '', fin: '', actividad: '' }
  ]);

  const handleAddInputGroup = () => {
    setInputGroups([...inputGroups, { dia: currentDay, inicio: '', fin: '', actividad: '' }]);
  };

  //BUTTONS
  const [selectedButton, setSelectedButton] = useState(1); //Problem trying to set style
  const [tabs, setTabs] = useState([
    <button key={1} className={selectedButton == 1 ? 'btn-tab-day-selected' : 'btn-tab-day'} value={1} onClick={() => { handleTabChange(1) }}>
      DÍA 1
    </button>
  ]);

  const addDay = () => {
    console.log("tabs length to begin with: ", tabs.length)
    const dayNumber = (tabs.length + 1)
    console.log(dayNumber)
    const newTab = (
      <button
        key={dayNumber}
        className= {buttonStyle(dayNumber)}
        value={dayNumber}
        onClick={() => { handleTabChange(dayNumber) }}
      >
        DÍA {dayNumber}
      </button>
    );
    setTabs([...tabs, newTab]);
    console.log(dayNumber, " and length of tabs ", tabs.length)
  };

// Setting style

const buttonStyle = (dayNumber) => {
  if (selectedButton == dayNumber) {
    return 'btn-tab-day-selected'
  } else {
    return'btn-tab-day'
  }
}

  //Clicking on different day tabs
  const handleTabChange = (day) => {
    setSelectedButton(day)
    console.log("inside handletabchange!!")
    console.log(typeof day, day)
    console.log(typeof selectedButton, selectedButton)
    let storageData = JSON.parse(localStorage.getItem(`Program${day}`))
    if (storageData) {
      setInputGroups(storageData)  //print existing
    } else {
      setInputGroups([{ inicio: '', fin: '', actividad: '' }]) //Empty form
    }
    dispatch(changeDay(day))
  }

  const handleInputChange = (index, inputName, value) => {
    const updatedGroups = [...inputGroups];
    updatedGroups[index][inputName] = value;
    console.log("updatedgroups,", updatedGroups)
    setInputGroups(updatedGroups);
  };

  //The input can be converted to text by clicking the check icon
  const handleConvertToText = (index) => {
    const updatedGroups = [...inputGroups];
    const group = updatedGroups[index];
    const convertedGroup = {
      inicio: group.inicio ? group.inicio : '00:00',
      fin: group.fin ? group.fin : '00:00',
      actividad: group.actividad ? group.actividad : 'N/A',
      showText: true
    };
    updatedGroups[index] = convertedGroup;
    setInputGroups(updatedGroups);
  };

  //It can be converted back to input fields by clicking the pen
  const handleConvertToInput = (index) => {
    const updatedGroups = [...inputGroups];
    const group = updatedGroups[index];
    updatedGroups[index] = { ...group, showText: false };
    setInputGroups(updatedGroups);
  };

  const deleteActivity = (index) => {
    const updatedGroups = [...inputGroups];
    updatedGroups.splice(index, 1);
    setInputGroups(updatedGroups);
  };

  const handleSave = () => {
    const inputGroupsShowTrue = inputGroups.map((row, index) => {
      return {
        inicio: row.inicio ? row.inicio : '00:00',
        fin: row.fin ? row.fin : '00:00',
        actividad: row.actividad ? row.actividad : 'N/A',
        showText: true
      }
    })
    setInputGroups(inputGroupsShowTrue)
    let activityArray = [];
    inputGroups.forEach(group => activityArray.push({ dia: currentDay, inicio: group.inicio, fin: group.fin, actividad: group.actividad }))
    localStorage.setItem("Program" + currentDay, JSON.stringify(activityArray))
  }


  // Another component prints the actual form fields. Passing values
  const renderInputGroups = () => {
    return inputGroups.map((group, index) => (
      <ActivityInputGroup
        key={index}
        group={group}
        index={index}
        // handleSave={handleSave}
        handleInputChange={handleInputChange}
        handleConvertToText={handleConvertToText}
        handleConvertToInput={handleConvertToInput}
        deleteActivity={deleteActivity}
      />
    ));
  };


  return (
    <>

      <div className="main-background">
        <h3>Programación del evento</h3>

        <div className="tab">

          {tabs}

          <button className="btn-tab-plus" onClick={addDay}><span><HiPlusSmall /></span></button>

        </div>
        <div className="activity-form">
          <span className="inputs-div title">
            <span className="clock-text">Hora inicio</span>
            <span className="clock-text">Hora final</span>
            <span className="activity-text">Descripción de la actividad</span>
          </span>

          {renderInputGroups()}

          <div className="addbutton-div">

            <BtnAddActivity handleClick={handleAddInputGroup} />
          </div>

        </div >

        <span className="savebutton-div">
          <BtnSave onClick={handleSave}></BtnSave>
        </span>

      </div>

      <div className="next-recinto-container">
        <p className="steps">2 Pasos de 3 Completados</p>
        <p className="points">● ● &#x25CB;</p>
        <div className="btns">
          <BtnNext></BtnNext>
        </div>
      </div>

    </>
  )
}


export default ProgramacionEvento