import React from "react";
import { Link } from "react-router-dom";

const MenuOptions = () => {
  const data = [{site:'https://zen-torvalds-515ad2.netlify.app/', label: "time-zone-manager", name: "Time Zone Manager"}]
  const groups = () => {
    return data.map((obj, index) => {
      return (
        <Link to={{pathname:obj.site}} target="_blank" key={"item-"+index}>
            <span
              className="dropdown-item no-link-habits"
              key={`${index}${obj.label}`}>
              <span>
                {obj.name}
              </span>
            </span>
          </Link>
      );
    });
  };
  return (
    <div className='menu-position box-shadow p-2 over' data-testid="drop-down">
      <div className='dropdown-item'>
        <span
          className="text-muted">
          Other React Sites
        </span>
      </div>
      {groups()}
    </div>
  );
};

export default MenuOptions;
