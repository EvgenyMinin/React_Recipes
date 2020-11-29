import { Layout, Menu } from "antd";
import React from "react";
import Link from "next/link";
import styled from "styled-components";

const StyledHeader = styled(Layout.Header)`
  ${({ theme }) => `
    display: flex;
    justify-content: space-between;
    padding: ${theme.padding_zero};
    background-color: ${theme.header_color};
    ul {
      text-align: right;
      width: 80%;
    }
  `}
`;

const StyledMenu = styled(Menu)``;

const MainHeader = () => {
  return (
    <StyledHeader className="header">
      <img src="/logo.svg" alt="Recipes App Logo" />
      <Menu theme="light" mode="horizontal" defaultSelectedKeys={["/"]}>
        <Menu.Item key="/">
          <Link href="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="my-favorites">
          <Link href="/my-favorites">My Favorites</Link>
        </Menu.Item>
        <Menu.Item key="my-recipes">
          <Link href="/my-recipes">My Recipes</Link>
        </Menu.Item>
        <Menu.Item key="logout">
          <Link href="/logout">Logout</Link>
        </Menu.Item>
      </Menu>
    </StyledHeader>
  );
};

export default MainHeader;
