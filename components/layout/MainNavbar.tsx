import { Layout, Menu } from "antd";
import React from "react";
import Link from "next/link";
import styled from "styled-components";

import { useFetchUser } from "../../utils/user";

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
  img {
    cursor: pointer;
  }
`;

const MainNavbar = () => {
  const { user, loading } = useFetchUser();

  return (
    <StyledHeader className="header">
      <Link href="/">
        <img src="/logo.svg" alt="Recipes App Logo" />
      </Link>
      <Menu theme="light" mode="horizontal" defaultSelectedKeys={["/"]}>
        <Menu.Item key="/">
          <Link href="/">Home</Link>
        </Menu.Item>
        {user && !loading ? (
          <Menu.Item key="/api/logout">
            <Link href="/api/logout">Logout</Link>
          </Menu.Item>
        ) : (
          <Menu.Item key="/api/login">
            <Link href="/api/login">Login</Link>
          </Menu.Item>
        )}
      </Menu>
    </StyledHeader>
  );
};

export default MainNavbar;
