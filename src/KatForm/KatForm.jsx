import React, { useState } from 'react'
import {HiOutlineTrash, HiOutlineCheck} from "react-icons/hi2"
import "./KatForm.scss"
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

  const renderInputGroups = () => {
    return inputGroups.map((group, index) => (
      <div key={index} className="activity-div">
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
              <i type="button"><HiOutlineCheck/></i>
              <i type="button"><HiOutlineTrash/></i>
            </span>
        </span>

      </div>
    ));
  };


  return (
    <>


<div>
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

<button onClick={handleAddInputGroup}>añadir actividad</button>
</div>

</div>

    </>
  )
}

export default KatForm