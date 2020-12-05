import React from "react";
import EllipsisText from "react-ellipsis-text";
import GraphImage from "graphcms-image";
import Link from "next/link";

import { IRecipeItem } from "./types";

import { Card, Description, StyledRecipe, Title } from "./styles";

const RecipeItem = ({ recipe, parentRoute }: IRecipeItem) => {
  const { image, title, description, id } = recipe;
  return (
    <StyledRecipe
      xs={{ span: 24 }}
      sm={{ span: 12 }}
      lg={{ span: 8 }}
      xl={{ span: 6 }}
    >
      <Link href={`/${parentRoute}/${id}`}>
        <Card>
          <div>{image && <GraphImage image={image} />}</div>
          <Description>
            <Title>{title}</Title>
            <EllipsisText text={description} length={110} />
          </Description>
        </Card>
      </Link>
    </StyledRecipe>
  );
};

export default RecipeItem;
