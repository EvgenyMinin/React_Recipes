import { Recipe } from "../../generated/apollo-components";

export interface IRecipeItem {
  recipe: Recipe;
  parentRoute: string;
}
