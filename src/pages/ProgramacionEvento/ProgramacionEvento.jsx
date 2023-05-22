import React, { useEffect, useState } from 'react'
import {HiPlusSmall} from "react-icons/hi2"
import "./ProgramacionEvento.scss"
import "../../sass/input.scss"
import BtnAddActivity from '../../components/Buttons/BtnAddActivity'
import BtnSave from '../../components/Buttons/BtnSave';
import BtnNext from '../../components/Buttons/BtnNext';
import ActivityInputGroup from '../../components/ActivityInputGroup/ActivityInputGroup';
import { useDispatch, useSelector } from 'react-redux';
import { changeDay } from '../../features/program/programSlice';
// import ActivityTabList from '../ActivityTabList/ActivityTabList';


const ProgramacionEvento = () => {
  
  const {currentDay}  = useSelector((state) => state.program);

  useEffect (() => {
    console.log(currentDay)
  }, [currentDay])


  const [inputGroups, setInputGroups] = useState([
    { input0: currentDay, input1: '', input2: '', input3: '' }
  ]);

  const handleAddInputGroup = () => {
    setInputGroups([...inputGroups, { input0: currentDay, input1: '', input2: '', input3: '' }]);
  };

//GETTING STUFF FROM LOCAL STORAGE??? IN PROGRESS
  useEffect(() => {
    if (currentDay) {

    console.log("This is currentDay: ", currentDay)
    console.log(`Program${currentDay}`)
    const storedData = localStorage.getItem((`Program${currentDay}`));
    if (storedData) {
      console.log(storedData)
      const parsedData = JSON.parse(storedData);
      setInputGroups(parsedData);
    }
  }
  }, []);





  //BUTTONS
  const [tabCounter, setTabCounter] = useState(1)
  const [selectedButton, setSelectedButton] = useState(1);
  const [tabs, setTabs] = useState([
  <button key={1} className={selectedButton == 1  ? 'btn-tab-day-selected' : 'btn-tab-day'} value={1}     onClick={() => {handleTabChange(1)}}>
        DÍA 1
  </button>
  ]);
  


  const handleTabChange = (day) => {
    setSelectedButton(day)
    console.log("THIS IS DAY: ", day)
    let activityArray =  [];
    inputGroups.forEach(group => activityArray.push({dia:currentDay, inicio:group.input1, fin:group.input2, actividad:group.input3}))
    localStorage.setItem("Program" + currentDay, JSON.stringify(activityArray))
    
    setInputGroups([
      {  input1: '', input2: '', input3: '' }
    ]);
    dispatch(changeDay(day))
  }
  


  const addDay = () => {
      console.log(tabCounter)
        const dayNumber = tabCounter + 1
        const newTab = (
        <button 
        key={dayNumber} 
        className={currentDay == dayNumber  ? 'btn-tab-day-selected' : 'btn-tab-day'}      
        value={dayNumber}
        onClick={() => {handleTabChange(dayNumber)}}
        >
          DÍA {dayNumber}
        </button>
      );
      setTabCounter(tabCounter+1)
      setTabs([...tabs, newTab]);
      console.log(tabCounter, " and ", dayNumber)
    };


const dispatch = useDispatch();


  const handleInputChange = (index, inputName, value) => {
    const updatedGroups = [...inputGroups];
    updatedGroups[index][inputName] = value;
    console.log("updatedgroups,", updatedGroups)
    setInputGroups(updatedGroups);
    console.log(inputGroups)
  };


  //The input can be converted to text by clicking the check icon
  
  const handleConvertToText = (index) => {
    const updatedGroups = [...inputGroups];
    const group = updatedGroups[index];
    const convertedGroup = {
      input1: group.input1 ? group.input1 : '00:00',
      input2: group.input2 ? group.input2 : '00:00',
      input3: group.input3 ? group.input3 : 'N/A',
      showText: true
    };
    updatedGroups[index] = convertedGroup;
    setInputGroups(updatedGroups);
  };
  



//It can be converted back to input fields:

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
  

  const handleSave = () =>{
      const inputGroupsShowTrue =inputGroups.map((row, index) => {
      return {
        input1: row.input1 ? row.input1 : '00:00',
        input2: row.input2 ? row.input2 : '00:00',
        input3: row.input3 ? row.input3 : 'N/A',
        showText: true}
      })
      setInputGroups(inputGroupsShowTrue)
      // e.preventDefault();
      console.log("This is currentDay: ", currentDay) 
      let activityArray =  [];
      inputGroups.forEach(group => activityArray.push({dia:currentDay, inicio:group.input1, fin:group.input2, actividad:group.input3}))
      localStorage.setItem("Program" + currentDay, JSON.stringify(activityArray))
    }
  



  
  // Another component prints the actual form. Passing values
 
  
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

          {/* <ActivityTabList handleSave={handleSave}></ActivityTabList> */}


       
    {tabs}

<button className="btn-tab-plus" onClick={addDay}><span><HiPlusSmall /></span></button>

          {/* <button className="btn-tab-day" >DÍA 1</button>
          <button className="btn-tab-day">DÍA 2</button>
          <button className="btn-tab-day" onClick={()=>(handleDay(3))}>DÍA 3</button>
          <button className="btn-tab-plus"><span><HiPlusSmall /></span></button> */}
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