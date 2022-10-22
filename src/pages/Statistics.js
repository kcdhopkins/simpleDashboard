import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getGroupByFunction, getGroupByRole } from "../services/statisticServices";
import "./styles/statistics.css";
import Gender from "./tabs/Gender";
import Race from "./tabs/Race";

const obj = {
   'f1b01b57-3147-476a-a632-0c10ad2a3c1a': 'groupByRole',
   'a9f6a4b7-d03c-4a45-b64b-791e054f36b8': 'groupByFunction'
}

const Statistics = () => {
  let {search} = useLocation()
  const [, groupId] = search.split("=")
  const [active, setActive] = useState("gender")
  const [groupBy, setGroupBy] = useState("groupByRole")
  const [pageData, setPageData] = useState();

  const getGroupByData = async ()=>{
    if(groupBy === 'groupByRole'){
      const data = await getGroupByRole()
      const {race, gender} = data.data
      setPageData({race, gender})
    } else if(groupBy === 'groupByFunction') {
      const data = await getGroupByFunction()
      const {race, gender} = data.data
      setPageData({race, gender})
    }
  }
 
  useEffect(()=>{
    getGroupByData()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [groupBy])

  useEffect(()=>{
    setGroupBy(obj[groupId])
  }, [groupId])

  return (
    <>
      <div className='d-flex last-tab'>
        <div className={`tabs first-tab ${active === "gender" ? "active" : "inactive"}`} onClick = {()=>setActive("gender")}>Gender</div>
        <div className={`tabs next-tab ${active === "race" ? "active" : "inactive"}`} onClick = {()=>setActive("race")}>Race</div>
      </div>
      <div className='second-layer-bg'>
        <div className="move-layout-left">
          {active === "gender" && <Gender pageData={pageData?.gender}/>}
          {active === "race" && <Race pageData={pageData?.race}/>}
        </div>
      </div>
    </>
  );
};

export default Statistics;
