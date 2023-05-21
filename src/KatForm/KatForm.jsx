import React, { useState } from 'react'
import {HiOutlineTrash, HiOutlineCheck, HiOutlinePaintBrush} from "react-icons/hi2"
import "./KatForm.scss"
import BtnAddActivity from '../components/Buttons/BtnAddActivity';
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
      input3: group.input3 ? group.input3 : '00:00',
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

      <div key={index}  className="activity-div">
        {group.showText ? (
          <span className = "inputs-div"><span>{group.input1} </span>- <span>{group.input2} </span><span> {group.input3} </span><span className="activity-icons">
          <i type="button" onClick={() => handleConvertToInput(index)}><HiOutlinePaintBrush/></i>


              <i type="button"onClick={() => deleteActivity(index)}><HiOutlineTrash/></i>
        </span></span>
        ) : (
      
        <span className="inputs-div">
          <input
          type="time"
          className=""
            value={group.input1}
            onChange={(e) => handleInputChange(index, 'input1', e.target.value)}
          />
          <input
          type="time"
            value={group.input2}
            onChange={(e) => handleInputChange(index, 'input2', e.target.value)}
          />
          <input
            type="text"
            value={group.input3}
            onChange={(e) => handleInputChange(index, 'input3', e.target.value)}
          />
          <span className="activity-icons">
              <i type="button" onClick={() => handleConvertToText(index)}><HiOutlineCheck/></i>

   
                  <i type="button"onClick={() => deleteActivity(index)}><HiOutlineTrash/></i>
            </span>
           
        </span>
  )}
       

      </div>
    ));
  };


  return (
    <>


<div className="activity-form-container">
<div>
      <button onClick={handleAddInputGroup}>Add Input Group</button>
    
    </div>
    </div>


<div className="form-background">


<div className="tab">
  <button className="tablinks" >Day 1</button>
  <button className="tablinks">Day 2</button>
  <button className="tablinks" >Day 3</button>
</div>




<div className="activity-form">




      <form action="">

      {renderInputGroups()}

     </form>

<BtnAddActivity handleClick={handleAddInputGroup}/>

</div>

</div>

    </>
  )
}

export default KatForm