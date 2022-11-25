/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import chevron from "../../images/chevron.svg";
import { useState } from "react";
import MenuOptions from "./MenuOptions";


const Dropdown = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className='move-right'>
        <button
          data-testid='change-button'
          type='button'
          className={`d-flex justify-content-around align-items-center dropdown-buttons ${
            show ? "border-outline" : ""
          }`}
          onClick={() => setShow(!show)}>
          <span>Other Sites</span>
          <img className='dropdown-size' src={chevron} alt='dropdown' />
        </button>
        {show && <MenuOptions/>}
      </div>
    </>
  );
};

export default Dropdown;
