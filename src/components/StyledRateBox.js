import React from "react";
import styled from "styled-components";
import { Tag } from "antd";
import StyledCPUrate from "./StyledCPUrate";
import { SettingFilled } from "@ant-design/icons";

const RateBox = styled.div`
  border: 1px solid #666;
  height: 108px;
  width: 300px;
  position: relative;
  background: #fff;
  padding: 10px;
  & title {
    padding-left: 14px;
    width: calc(100% - 20px);
    display: flex;
    justify-content: space-between;
    position: absolute;
    font-size: 21px;
    color: #3274ac;
    font-weight: 600;
    & span {
      width: 38px;
      display: flex;
      justify-content: center;
      align-items: center;
      & svg {
        height: 18px;
        color: #5c7080;
      }
    }
  }
  & div {
    display: flex;
    justify-content: flex-end;
    align-items: end;
    height: 100%;
    & .rate-number {
      font-size: 21px;
      margin-right: 16px;
      line-height: 21px;
      font-weight: 600;
      color: #35434f;
    }
    & .ant-tag {
      height: 20px;
      padding: 0 5px;
      font-size: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-left: 5px;
      margin-right: 0;
      background: #5c7080;
      border: none;
      color: #fff;
    }
  }
`;

const StyledRateBox = () => {
  return (
    <RateBox>
      <title>
        Developement
        <SettingFilled />
      </title>

      <div>
        <span className="rate-number">80%</span>
        <StyledCPUrate />
        <Tag color="geekblue">geekblue</Tag>
      </div>
    </RateBox>
  );
};

export default StyledRateBox;
