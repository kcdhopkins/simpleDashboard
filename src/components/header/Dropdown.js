/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import chevron from "../../images/chevron.svg";
import { useState, useEffect } from "react";
import MenuOptions from "./MenuOptions";
import { getHeaderData } from "../../services/statisticServices";
import { menuItem } from "../../constants/headerConstants";


const Dropdown = () => {
  const [show, setShow] = useState(false);
  const [dropdownInfo, setDropdownInfo] = useState([]);
  const [groupSelection, setGroupSelection] = useState("");

  const getHeaderInfo = async () => {
    const dropdownData = await getHeaderData();
    setDropdownInfo(dropdownData);
  };

  useEffect(() => {
    getHeaderInfo();
  }, []);

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
          <span>{menuItem[groupSelection] || "Change Group"}</span>
          <img className='dropdown-size' src={chevron} alt='dropdown' />
        </button>
        {show && (
          <MenuOptions
            data={dropdownInfo}
            groupSelection={groupSelection}
            setGroupSelection={setGroupSelection}
            setShow={setShow}
          />
        )}
      </div>
    </>
  );
};

export default Dropdown;
