import React, { useState } from 'react'
import { HiPlusSmall} from "react-icons/hi2"
import "../../components/KatForm/KatForm.scss"
import "../../sass/input.scss"
import BtnAddActivity from '../../components/Buttons/BtnAddActivity';
import BtnSave from '../../components/Buttons/BtnSave';
import BtnNext from '../../components/Buttons/BtnNext';
import InputGroup from '../../components/ActivityInputGroup/ActivityInputGroup';
import ActivityForm from '../../components/KatForm/ActivityForm';


const ProgramacionEvento = () => {
  
  // const [inputGroups, setInputGroups] = useState([
  //   { input1: '', input2: '', input3: '' }
  // ]);

  // const handleAddInputGroup = () => {
  //   setInputGroups([...inputGroups, { input1: '', input2: '', input3: '' }]);
  // };


  // const handleInputChange = (index, inputName, value) => {
  //   const updatedGroups = [...inputGroups];
  //   updatedGroups[index][inputName] = value;
  //   setInputGroups(updatedGroups);
  // };


  const [tabCounter, setTabCounter] = useState(2)
  const [selectedButton, setSelectedButton] = useState()
  const [tabs, setTabs] = useState([
    <button key={1} className={selectedButton == 1  ? 'btn-tab-day-selected' : 'btn-tab-day'} value={1}>
      DÍA 1
    </button>
  ]);
 
 
  const handleTabChange = (event) => {
    console.log("tabcounter is ", tabCounter)
    console.log(typeof event.target.value)
    console.log("SelectedButton is ", selectedButton)
    console.log("Value of the buttons is: ", event.target.value)
    setSelectedButton(event.target.value)
    console.log("SelectedButton is ", selectedButton)
  }


const addDay = () => {
  console.log(tabCounter)
  setTabCounter(tabCounter+1)
  const newTab = (
    <button 
    key={tabCounter} 
    className={selectedButton == {tabCounter}  ? 'btn-tab-day-selected' : 'btn-tab-day'} 
    value={tabCounter}
    onClick={handleTabChange}
    >
    
      DÍA {tabCounter}
    </button>
  );
  setTabs([...tabs, newTab]);
  console.log(tabCounter)
};




  
 return (
    <>

      <div className="main-background">
        <h3>Programación del evento</h3>

        <div className="tab">
      
          {tabs}

          <button className="btn-tab-plus" onClick={addDay}><span><HiPlusSmall /></span></button>
        </div>

          <ActivityForm day={1}></ActivityForm>

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