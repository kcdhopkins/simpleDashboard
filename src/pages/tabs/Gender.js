import React, { useEffect, useMemo, useState } from "react";
import "../styles/gender.css";

const statObj = [
  {
    label: "Pay Equity Gap",
    statement: " Women earn %value for every %value2 earned by comparable men",
  },
  {
    label: "Employees in Comparison",
    statement: "Women make up %value of employees",
  },
  {
    label: "Budget",
    statement: "%value minumum recommended budget to reduce pay equity gap",
  },
];

const Gender = ({ pageData }) => {
  const [statements, setStatement] = useState([]);

  const createStatements = () => {
    const preparedStatements = statObj.map((info) => {
      if (info.label === "Budget") {
        return {
          label: "Budget",
          statement: info.statement.replace(
            "%value",
            pageData?.budget.data.value
          ),
        };
      }

      if (info.label === "Employees in Comparison") {
        return {
          label: "Employees in Comparison",
          statement: info.statement.replace(
            "%value",
            pageData?.employeeComparison.data.value
          ),
        };
      }

      if (info.label === "Pay Equity Gap") {
        return {
          label: "Pay Equity Gap",
          statement: info.statement
            .replace("%value", pageData?.payEquityGap.data.minority.value)
            .replace("%value2", pageData?.payEquityGap.data.majority.value),
        };
      }

      return {
        label: "",
        statement:""
      }
    });

    setStatement(preparedStatements);
  };

  const display = useMemo(() => {
   return  statements.map((statement, index) => {
      return (
        <div className='custom-card card-width' key={`statement-${index}`}>
          <div className="label-style">{statement.label}</div>
          <div>{statement.statement}</div>
        </div>
      );
    });
  }, [statements]);

  useEffect(() => {
    if (Object.entries(pageData || {}).length) {
      createStatements();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageData]);

  return (
    <div className='move-down common'>
      {display}
    </div>
  );
};

export default Gender;
