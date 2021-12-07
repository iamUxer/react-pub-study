import React from "react";
import { Menu } from "antd";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
  CrownTwoTone,
} from "@ant-design/icons";
import { StyledMenu, StyledMyMenu } from "./styledComponent";
import main_img from "./images/main-img.png";

const { SubMenu } = Menu;

const handleClick = (e) => {
  if (e.target.className === "menu-open") {
    e.target.className = "";
  } else {
    e.target.className = "menu-open";
  }
};

const Main = () => {
  return (
    <div style={{ display: "flex", height: "100%" }}>
      <div
        style={{
          backgroundImage: `url(${main_img})`,
          backgroundSize: 1376,
          width: 250,
          height: "100%",
        }}
      />
      <StyledMenu
        // onClick={this.handleClick}
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
      >
        {/* <CrownTwoTone /> */}
        <SubMenu key="sub1" icon={<MailOutlined />} title="Navigation One">
          <Menu.ItemGroup key="g1" title="Item 1">
            <Menu.Item key="1">Option 1</Menu.Item>
            <Menu.Item key="2">Option 2</Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup key="g2" title="Item 2">
            <Menu.Item key="3">Option 3</Menu.Item>
            <Menu.Item key="4">Option 4</Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
        <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Navigation Two">
          <Menu.Item key="5">Option 5</Menu.Item>
          <Menu.Item key="6">Option 6</Menu.Item>
          <SubMenu key="sub3" title="Submenu">
            <Menu.Item key="7">Option 7</Menu.Item>
            <Menu.Item key="8">Option 8</Menu.Item>
          </SubMenu>
        </SubMenu>
        <SubMenu key="sub4" icon={<SettingOutlined />} title="Navigation Three">
          <Menu.Item key="9">Option 9</Menu.Item>
          <Menu.Item key="10">Option 10</Menu.Item>
          <Menu.Item key="11">Option 11</Menu.Item>
          <Menu.Item key="12">Option 12</Menu.Item>
        </SubMenu>
      </StyledMenu>
      <StyledMyMenu>
        <div>img</div>
        <ul>
          <li onClick={handleClick}>
            Dashboard
            <ul>
              <li>sub1</li>
              <li>sub2</li>
            </ul>
          </li>
          <li onClick={handleClick}>Pages</li>
        </ul>
      </StyledMyMenu>
    </div>
  );
};

export default Main;
