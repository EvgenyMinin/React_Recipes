import { useQuery } from "@apollo/client";
import React from "react";
import { Row } from "antd";
import get from "lodash/get";
import map from "lodash/map";

import { recipesGraphQL } from "../../graphql/queries/recipes";
import { userLikesGraphQL } from "../../graphql/queries/userLikes";

import { Props, queryEnum } from "./types";
import { Recipe } from "../../generated/apollo-components";
import Loading from "../notify/Loading";
import Warning from "../notify/Warning";
import Error from "../notify/Error";
import RecipeItem from "../RecipeItem";

const RecipesList = ({ options, parentRoute, queryType }: Props) => {
  const query =
    queryType === queryEnum.recipes ? recipesGraphQL : userLikesGraphQL;
  const { loading, data, error } = useQuery(query, options);

  const parentArray = get(data, queryType);
  const recipesList = map(parentArray, (value: Recipe) =>
    get(value, "recipe", value)
  );

  if (loading) return <Loading />;
  if (error) return <Error errorText={`${error}`} />;
  if (recipesList.length === 0)
    return (
      <Warning
        warningHeader="No Recipes"
        warningText="No Recipes are present. Why not add one?"
      />
    );

  return (
    <Row>
      {recipesList.map((recipe: Recipe) => (
        <RecipeItem
          key={`${recipe.id}-${queryType}`}
          recipe={recipe}
          parentRoute={parentRoute}
        />
      ))}
    </Row>
  );
};

export default RecipesList;
