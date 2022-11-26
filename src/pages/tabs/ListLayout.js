import React, { useEffect, useState } from "react";
import { getTabData } from "../../services/work-data-service";
import "../styles/gender.css";

const ListLayout = ({url, setLoading}) => {
  const [pageData, setPageData] = useState({status: 0, data:[]})
  
  const getPageData = async ()=>{
    setLoading(true)
    const data = await getTabData(url)
    setPageData(data)
    setLoading(false)
  }
  useEffect(()=>{
    getPageData(url)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const display = pageData?.data.map((dataObj, index) => {
      let bulletDisplay = []
      if(dataObj?.bullets?.length){
        bulletDisplay = dataObj.bullets.map((bullet, index)=>{
          return <li key={`${index}-bullet`}>{bullet}</li>
        })
      }
      return (
        <div className='custom-card' key={`statement-${index}`}>
          {dataObj?.title && <h4>{dataObj.title}</h4>}
          {dataObj?.label && <h6 className="label-style"><i>{dataObj.label.toUpperCase()}</i></h6>}
          {dataObj?.statement && <div>{dataObj.statement}</div>}
          {!!bulletDisplay?.length && <ul className="">{bulletDisplay}</ul>}
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