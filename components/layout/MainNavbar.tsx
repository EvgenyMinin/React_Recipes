import { Menu } from "antd";
import React from "react";
import Link from "next/link";

import { useFetchUser } from "../../utils/user";
import { StyledHeader, TitleContainer } from "./styles";

const MainNavbar = () => {
  const { user, loading } = useFetchUser();

  return (
    <StyledHeader className="header">
      <TitleContainer>
        <Link href="/">
          <img src="/logo.svg" alt="Recipes App Logo" />
        </Link>
        <div>
          <h2>Recipes</h2>
          <p>A recipe discovery app powered by Next.js</p>
        </div>
      </TitleContainer>
      <Menu theme="light" mode="horizontal">
        <Menu.Item key="/">
          <Link href="/">Home</Link>
        </Menu.Item>
        {user && !loading ? (
          <>
            <Menu.Item key="/my-recipes">
              <Link href="/my-recipes">My Recipes</Link>
            </Menu.Item>
            <Menu.Item key="/api/logout">
              <Link href="/api/logout">Logout</Link>
            </Menu.Item>
          </>
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
