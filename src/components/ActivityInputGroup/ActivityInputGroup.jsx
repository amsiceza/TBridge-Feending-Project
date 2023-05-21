import React from 'react';
import {HiOutlineTrash, HiOutlineCheck, HiOutlinePaintBrush, HiClock, HiChevronDown, HiPlusSmall, HiPlus} from "react-icons/hi2"
import "../KatForm/KatForm.scss"


const InputGroup = ({
  group,
  index,
  handleInputChange,
  handleConvertToText,
  handleConvertToInput,
  deleteActivity
}) => {
  return (
    <div key={index} className="inputs-div">
      {group.showText ? (
        <>
          <span className="clock-text">{group.input1} </span>
          <span className="clock-text">{group.input2} </span>
          <span className="activity-text"> {group.input3} </span>
          <span className="activity-icons">
            <i type="button" onClick={() => handleConvertToInput(index)}>
              <HiOutlinePaintBrush />
            </i>
            <i type="button" onClick={() => deleteActivity(index)}>
              <HiOutlineTrash />
            </i>
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
            <i type="button" onClick={() => handleConvertToText(index)}>
              <HiOutlineCheck />
            </i>

            <i type="button" onClick={() => deleteActivity(index)}>
              <HiOutlineTrash />
            </i>
          </span>
        </>
      )}
    </div>
  );
};

export default InputGroup;