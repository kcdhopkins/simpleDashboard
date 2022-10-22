import React from "react";
import { Link } from "react-router-dom";
import { menuItem } from "../../constants/headerConstants";

const MenuOptions = ({ data, groupSelection, setGroupSelection, setShow }) => {
  const groups = () => {
    return data.map((data, index) => {
      return (
        <Link to={`/?group=${data.id}`} key={"item-"+index}>
            <span
              className="dropdown-item no-link-habits"
              key={`${index}${data.label}`}
              onClick={() => {setGroupSelection(data.label); setShow(false)}}>
              <span className={groupSelection === data.label ? "text-muted" : ""}>
                {menuItem[data.label]}
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
          className={
            !groupSelection || groupSelection === "Change Group"
              ? "text-muted"
              : ""
          }>
          CHANGE GROUP
        </span>
      </div>
      {groups()}
    </div>
  );
};

export default MenuOptions;
