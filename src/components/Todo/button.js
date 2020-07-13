import React from "react";

const Button = ({ btnClass, handleClick, btnText, iconClass }) => {
  return (
    <button className={btnClass} onClick={handleClick}>
      {btnText ? btnText : <i className={iconClass}></i>}
    </button>
  );
};

export default Button;
