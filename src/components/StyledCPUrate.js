import React from "react";
import styled from "styled-components";

const rates = [40, 30, 50, 70, 15, 60, 45, 75, 30, 10];

// ${props => props.rate}

const CPURateCss = styled.div`
  display: flex;
  align-items: flex-end;
  height: 80px;
  .rate {
    background: #81b7db;
    width: 8px;
    & + .rate {
      margin-left: 1px;
    }
  }
`;

const StyledCPUrate = () => {
  return (
    <CPURateCss>
      {rates.map((rate) => {
        return <div className="rate" style={{ height: `${rate}px` }}></div>;
      })}
    </CPURateCss>
  );
};

export default StyledCPUrate;
