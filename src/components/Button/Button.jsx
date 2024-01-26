// Button.jsx
import React from 'react';
import './Button.css';

const Button = ({ handleStorage }) => {

  function handleClick() {
    handleStorage();
    alert("Data Saved");
  }

  return (
    <div className='button'>
      <button onClick={handleClick}>Save</button>
    </div>
  );
};

export default Button;