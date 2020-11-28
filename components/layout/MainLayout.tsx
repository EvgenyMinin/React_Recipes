import { Component } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../../utils/globalStyle";

import { theme } from "../../utils/theme";
import MainHead from "./MainHead";
import { IMainLayout } from "./types";

const MainLayout = ({ title, children }: IMainLayout) => (
  <ThemeProvider theme={theme}>
    <MainHead title={title} />
    <GlobalStyle />
    {children}
  </ThemeProvider>
);

export default MainLayout;
