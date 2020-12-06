import { useQuery } from "@apollo/client";
import React from "react";
import get from "lodash/get";

import MainLayout from "../../components/layout/MainLayout";
import Error from "../../components/notify/Error";
import Loading from "../../components/notify/Loading";

import { recipeGraphQL } from "../../graphql/queries/recipe";
import { IProps } from "./types";

const Recipe = ({ id }: IProps) => {
  const { loading, data, error } = useQuery(recipeGraphQL, {
    variables: { where: { id } },
  });

  const title = get(data, "recipe.title");

  if (loading) {
    return (
      <MainLayout title="Recipe loading">
        <Loading />
      </MainLayout>
    );
  }

  if (error) {
    return (
      <MainLayout title="Recipe error">
        <Error errorText={`${error}`} />
      </MainLayout>
    );
  }

  if (!title) {
    return (
      <MainLayout title="Not a valid recipe">
        <Error errorText="Not a valid recipe" />
      </MainLayout>
    );
  }

  return (
    <MainLayout title={title}>
      <div>Recipe {id}</div>
    </MainLayout>
  );
};

Recipe.getInitialProps = ({ query }) => {
  const { id } = query;

  return { id };
};

export default Recipe;
