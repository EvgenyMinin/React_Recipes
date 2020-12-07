import { Layout } from "antd";
import { ThemeProvider } from "styled-components";

import MainNavbar from "./MainNavbar";
import MainFooter from "./MainFooter";
import MainHead from "./MainHead";

import { GlobalStyle } from "../../utils/globalStyle";
import { theme } from "../../utils/theme";

import { IMainLayout } from "./types";
import { StyledLayout } from "./styles";

const MainLayout = ({ title, children }: IMainLayout) => (
  <ThemeProvider theme={theme}>
    <MainHead title={title} />
    <GlobalStyle />
    <StyledLayout>
      <MainNavbar />
      <Layout.Content>{children}</Layout.Content>
      <MainFooter />
    </StyledLayout>
  </ThemeProvider>
);

export default MainLayout;
