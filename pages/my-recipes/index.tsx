import React from "react";
import Router from "next/router";
import get from "lodash/get";

import MainLayout from "../../components/layout/MainLayout";
import RecipesList from "../../components/RecipesList";
import { queryEnum } from "../../components/RecipesList/types";

import { useFetchUser } from "../../utils/user";

import { StyledHeader } from "../../styles";
import Loading from "../../components/notify/Loading";

const MyRecipes = () => {
  const { user, loading: isFetchUser } = useFetchUser();
  const owner = get(user, "sub");
  const options = owner ? { variables: { where: { owner } } } : {};

  if (isFetchUser) return <Loading />;

  if (!user) {
    Router.replace("/");
  }

  return (
    <MainLayout title="My Recipes">
      <StyledHeader>My Recipes</StyledHeader>
      <RecipesList
        parentRoute="my-recipes"
        options={options}
        queryType={queryEnum.recipes}
      />
    </MainLayout>
  );
};

export default MyRecipes;
