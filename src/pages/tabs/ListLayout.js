import React, { useEffect, useState } from "react";
import { getTabData } from "../../services/work-data-service";
import "../styles/gender.css";

const ListLayout = ({url}) => {
  const [pageData, setPageData] = useState({status: 0, data:[]})
  
  const getPageData = async ()=>{
    const data = await getTabData(url)
    setPageData(data)
  }
  useEffect(()=>{
    getPageData(url)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const display = pageData.data.map((statement, index) => {
      return (
        <div className='custom-card' key={`statement-${index}`}>
          {statement?.title && <div>{statement.label}</div>}
          <div className="label-style">{statement.title}</div>
          <div>{statement.statement}</div>
        </div>
      );
  });

  return (
    <div className='move-down common'>
      {display}
    </div>
  );
};

export default ListLayout;