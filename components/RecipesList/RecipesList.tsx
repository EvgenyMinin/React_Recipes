import { useQuery } from "@apollo/client";
import React from "react";
import { Row } from "antd";
import * as _ from "lodash";

import { recipesGraphQL } from "../../graphql/queries/recipes";
import { userLikesGraphQL } from "../../graphql/queries/userLikes";

import { Props, queryEnum } from "./types";
import { Recipe } from "../../generated/apollo-components";
import Loading from "../notify/Loading";
import Warning from "../notify/Warning";
import Error from "../notify/Error";

const RecipesList = ({ options, queryType }: Props) => {
  const query =
    queryType === queryEnum.recipes ? recipesGraphQL : userLikesGraphQL;
  const { loading, data, error } = useQuery(query, options);

  const parentArray = _.get(data, queryType);
  const recipesList = _.map(parentArray, (value: Recipe) =>
    _.get(value, "recipe", value)
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
        <p key={recipe.id}>{recipe.title}</p>
      ))}
    </Row>
  );
};

export default RecipesList;
