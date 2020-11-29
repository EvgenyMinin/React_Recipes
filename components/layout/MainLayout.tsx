import { Layout } from "antd";
import { ThemeProvider } from "styled-components";

import MainHeader from "./MainHeader";
import MainFooter from "./MainFooter";
import MainHead from "./MainHead";

import { GlobalStyle } from "../../utils/globalStyle";
import { theme } from "../../utils/theme";

import { IMainLayout } from "./types";

const MainLayout = ({ title, children }: IMainLayout) => (
  <ThemeProvider theme={theme}>
    <MainHead title={title} />
    <GlobalStyle />
    <Layout>
      <MainHeader />
      <Layout.Content>{children}</Layout.Content>
      <MainFooter />
    </Layout>
  </ThemeProvider>
);

export default MainLayout;
