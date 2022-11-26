import React, { useState, useMemo } from "react";
import "./styles/statistics.css";
import ListLayout from "./tabs/ListLayout";

const tabObj = {
  "About Me": "About Me",
  "Work History": "Work History",
  "Technologies" : "Technologies"
}
const Statistics = () => {
  const [active, setActive] = useState("About Me")

  const tabDisplay = useMemo(()=>{
    return Object.entries(tabObj).map(([, value], index)=>{
        return <div key={`${index}-tab`} className={`tabs ${index === 0 ? 'first-tab' : 'next-tab'} ${active === value ? "active" : "inactive"}`} onClick = {()=>setActive(value)}>{value}</div>
    })
  }, [active])

  return (
    <>
      <div className='d-flex last-tab'>
        {tabDisplay}
      </div>
      <div className='second-layer-bg'>
        <div className="move-layout-left">
          {active === "About Me" && <ListLayout url="about-me"/>}
          {active === "Work History" && <ListLayout url="work-history"/>}
          {active === "Technologies" && <ListLayout url="technologies"/>}
        </div>
      </div>
    </>
  );
};

export default Statistics;
