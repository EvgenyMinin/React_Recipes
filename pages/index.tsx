import React from "react";
import styled from "styled-components";

import MainLayout from "../components/layout/MainLayout";
import RecipesList from "../components/RecipesList";
import { queryEnum } from "../components/RecipesList/types";

const StyledHeader = styled.h1`
  ${({ theme }) => `
    padding: ${theme.padding_small};
  `}
`;

const Index = () => {
  return (
    <MainLayout title="Recipes">
      <StyledHeader>Index Page</StyledHeader>
      <RecipesList parentRoute="recipe" queryType={queryEnum.recipes} />
    </MainLayout>
  );
};

export default Index;
