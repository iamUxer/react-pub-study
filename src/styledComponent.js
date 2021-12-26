import styled from "styled-components";

import { Menu } from "antd";

export const StyledMenu = styled(Menu)`
  padding: 12px 24px;
  width: 250px;
  & > span {
    width: 100%;
    height: 88px;
    padding: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    & svg {
      height: 58px;
      width: 48px;
    }
  }
  & .ant-menu-submenu {
    & .ant-menu-submenu-title {
      padding: 0 !important;
      height: 40px;
    }
  }
  & .ant-menu-sub {
    &.ant-menu-sub.ant-menu-inline {
      background-color: #fff;
    }
  }
  & .ant-menu-item-group-list {
    & .ant-menu-item-selected {
      color: #12263f;
    }
  }
  & .ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected {
    background-color: #fff;
  }
  & .ant-menu-inline .ant-menu-item::after {
    display: none;
  }
`;
