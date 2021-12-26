import React from "react";
import Main from "./Main";
import StyledCPUrate from "./components/StyledCPUrate";
import Styled from "styled-components";
import StyledRateBox from "./components/StyledRateBox";

const StyledSalesforce = Styled.div`
    display: flex;
    & .wrap-ratebox {
      background: #EBF1F6;
      padding: 14px 28px;
      & div {
        & + div {
          margin-top: 40px;
        }
      }
    }
`;

const SalesForce = () => {
  return (
    <StyledSalesforce>
      <Main />
      <div className="wrap-ratebox">
        <StyledRateBox />
        <StyledRateBox />
        <StyledRateBox />
      </div>
    </StyledSalesforce>
  );
};

export default SalesForce;
