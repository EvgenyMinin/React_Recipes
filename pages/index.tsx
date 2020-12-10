import React from "react";

import MainLayout from "../components/layout/MainLayout";
import RecipesList from "../components/RecipesList";
import { queryEnum } from "../components/RecipesList/types";

import { StyledHeader } from "../styles";

const Index = () => {
  return (
    <MainLayout title="Recipes">
      <StyledHeader>Index Page</StyledHeader>
      <RecipesList parentRoute="recipe" queryType={queryEnum.recipes} />
    </MainLayout>
  );
};

export default Index;
