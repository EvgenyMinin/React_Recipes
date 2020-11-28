import React from "react";
import styled from "styled-components";

import { MainLayout } from "../components/layout/MainLayout";

const StyledHeader = styled.h1`
  ${({ theme }) => `
    font-size: ${theme.font_size_xl};
    padding: ${theme.padding_small};
  `}
`;

const Index = () => {
  return (
    <MainLayout>
      <StyledHeader>Index Page</StyledHeader>
    </MainLayout>
  );
};

export default Index;
