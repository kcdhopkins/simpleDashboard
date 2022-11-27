import React, { useState, useMemo } from "react";
import "./styles/statistics.css";
import ListLayout from "./tabs/ListLayout";

const tabObj = {
  "About Me": "About Me",
  "Work History": "Work History",
  "Technologies": "Technologies",
};
const Statistics = () => {
  const [active, setActive] = useState("About Me");
  const [loading, setLoading] = useState(false);

  const tabDisplay = useMemo(() => {
    return Object.entries(tabObj).map(([, value], index) => {
      return (
        <div
          key={`${index}-tab`}
          className={`tabs ${index === 0 ? "first-tab" : "next-tab"} ${
            active === value ? "active" : "inactive"
          }`}
          onClick={() => setActive(value)}>
          {value}
        </div>
      );
    });
  }, [active]);

  return (
    <>
      <div className='d-flex last-tab'>{tabDisplay}</div>
      <div className='second-layer-bg'>
        <div className='move-layout-left'>
          {loading && (
            <div className='spinner-border' role='status'>
              <span className='sr-only'></span>
            </div>
          )}
          {active === "About Me" && (
            <ListLayout url='about-me' setLoading={setLoading} />
          )}
          {active === "Work History" && (
            <ListLayout url='work-history' setLoading={setLoading} />
          )}
          {active === "Technologies" && (
            <ListLayout url='technologies' setLoading={setLoading} />
          )}
        </div>
      </div>
    </>
  );
};

export default Statistics;
