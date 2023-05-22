import React, { useState } from 'react'
import {HiOutlineTrash, HiOutlineCheck, HiOutlinePaintBrush, HiClock, HiChevronDown, HiPlusSmall, HiPlus} from "react-icons/hi2"
import "./KatForm.scss"
import "../sass/input.scss"
import BtnAddActivity from '../components/Buttons/BtnAddActivity';
import BtnSave from '../components/Buttons/BtnSave';
import BtnNext from '../components/Buttons/BtnNext';
const KatForm = () => {
  const [inputGroups, setInputGroups] = useState([
    { input1: '', input2: '', input3: '' }
  ]);

  const handleAddInputGroup = () => {
    setInputGroups([...inputGroups, { input1: '', input2: '', input3: '' }]);
  };

  const handleInputChange = (index, inputName, value) => {
    const updatedGroups = [...inputGroups];
    updatedGroups[index][inputName] = value;
    setInputGroups(updatedGroups);
  };

  const deleteActivity = (index) => {
    const updatedGroups = [...inputGroups];
    updatedGroups.splice(index, 1);
    setInputGroups(updatedGroups);
  };

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

  const handleConvertToInput = (index) => {
    const updatedGroups = [...inputGroups];
    const group = updatedGroups[index];
    updatedGroups[index] = { ...group, showText: false };
    setInputGroups(updatedGroups);
  };

  const renderInputGroups = () => {
    return inputGroups.map((group, index) => (

      <div key={index}  className="inputs-div">
        {group.showText ? (
          <>
            <span className="clock-text">{group.input1} </span> <span className="clock-text">{group.input2} </span>
            <span className="activity-text"> {group.input3} </span>
            <span className="activity-icons">
          <i type="button" onClick={() => handleConvertToInput(index)}><HiOutlinePaintBrush/></i>
              <i type="button"onClick={() => deleteActivity(index)}><HiOutlineTrash/></i>
        </span>
          </>
        ) : (
      <>
        <span className="input-time">
          <HiClock></HiClock>
          <input
          type="time"
          className=""
            value={group.input1}
            onChange={(e) => handleInputChange(index, 'input1', e.target.value)}
          />
          <HiChevronDown></HiChevronDown>
          </span>
          
          <span className="input-time">
          <HiClock></HiClock>
          <input
          type="time"
            value={group.input2}
            onChange={(e) => handleInputChange(index, 'input2', e.target.value)}
          />
          <HiChevronDown></HiChevronDown>
          </span>


          <input
            type="text"
            value={group.input3}
            onChange={(e) => handleInputChange(index, 'input3', e.target.value)}
          />
          <span className="activity-icons">
              <i type="button" onClick={() => handleConvertToText(index)}><HiOutlineCheck/></i>

   
                  <i type="button"onClick={() => deleteActivity(index)}><HiOutlineTrash/></i>
            </span>
           
            </> 
  )}
       

      </div>
    ));
  };


  return (
    <>

           <div className="main-background">
<h3>Programación del evento</h3>

        <div className="tab">
          <button className="btn-tab-day" >DÍA 1</button>
          <button className="btn-tab-day">DÍA 2</button>
          <button className="btn-tab-day" >DÍA 3</button>
          <button className="btn-tab-plus" ><span><HiPlusSmall/></span></button>
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
      <div className="savebutton-div">
      <BtnSave></BtnSave>
      </div>
      </div>


<div className="nextbutton-div" >

  <span>Pasos completados</span> 
  <span> <BtnNext></BtnNext></span>

</div>
     

    </>
  )
}

export default KatForm