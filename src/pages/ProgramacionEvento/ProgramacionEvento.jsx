import React, { useState } from 'react'
import { HiPlusSmall} from "react-icons/hi2"
import "../../components/KatForm/KatForm.scss"
import "../../sass/input.scss"
import BtnNext from '../../components/Buttons/BtnNext';
import ActivityForm from '../../components/KatForm/ActivityForm';


const ProgramacionEvento = () => {
  
  const [tabCounter, setTabCounter] = useState(2)
  const [selectedButton, setSelectedButton] = useState(1)
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
    setSelectedButton(tabCounter + 1)
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