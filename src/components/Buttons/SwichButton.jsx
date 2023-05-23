import React, { useState } from 'react';
import "../../sass/buttons.scss"

const SwitchButton = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn(!isOn);
  };

  return (
    <button className={`switch-button ${isOn ? 'on' : 'off'}`} onClick={toggleSwitch}>
      <span className={`switch-slider ${isOn ? 'on' : 'off'}`}></span>
    </button>
  );
};

export default SwitchButton;
