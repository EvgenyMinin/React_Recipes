import React from "react";
import styled from "styled-components";

import MainLayout from "../components/layout/MainLayout";

const StyledHeader = styled.h1`
  ${({ theme }) => `
    padding: ${theme.padding_small};
  `}
`;

const Index = () => {
  return (
    <MainLayout title="Recipes">
      <StyledHeader>Index Page</StyledHeader>
    </MainLayout>
  );
};

export default Index;
