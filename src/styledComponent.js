import styled from "styled-components";

import { Menu } from "antd";

export const StyledMenu = styled(Menu)`
  width: 256px;
  padding: 12px 24px;
`;
export const StyledMyMenu = styled.div`
  & ul {
    list-style-type: none;
    & li {
      & ul {
        /* visibility: hidden; */
        height: 0;
        opacity: 0;
        transition: all 2s;
      }
      &.menu-open {
        height: 100px;
        background-color: red;
        transition: height 2s, background-color 2s;
      }
    }
  }
`;
