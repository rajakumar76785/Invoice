import React, { useState } from 'react';
import './ToggleSwitch.css'; // Assuming you have a CSS file for styling

function ToggleSwitch() {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div className='flex justify-between'>
       <h1>Status</h1>
      <label className="toggle-switch">
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleToggle}
      />
      <span className="toggle-slider"></span>
    </label>
    </div>
    
  );
}

export default ToggleSwitch;
