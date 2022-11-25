import React, { useState } from "react";
import "./styles/statistics.css";
import ListLayout from "./tabs/ListLayout";

const Statistics = () => {
  const [active, setActive] = useState("About Me")
  return (
    <>
      <div className='d-flex last-tab'>
        <div className={`tabs first-tab ${active === "About Me" ? "active" : "inactive"}`} onClick = {()=>setActive("About Me")}>About Me</div>
        <div className={`tabs next-tab ${active === "Work History" ? "active" : "inactive"}`} onClick = {()=>setActive("Work History")}>Work History</div>
      </div>
      <div className='second-layer-bg'>
        <div className="move-layout-left">
          {active === "About Me" && <ListLayout url="about-me"/>}
          {active === "Work History" && <ListLayout url="work-history"/>}
        </div>
      </div>
    </>
  );
};

export default Statistics;
