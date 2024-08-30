import React from "react";

const Toggle = ({quantity, setDecrease, setIncrease}) => {
  return (
    <>
      <div className="toggle-btn">
        <i className="fas fa-minus" onClick={()=>setDecrease()}></i>
        <div className="input">{quantity}</div>
        <i className="fas fa-plus" onClick={()=>setIncrease()}></i>
      </div>
    </>
  );
};

export default Toggle;
