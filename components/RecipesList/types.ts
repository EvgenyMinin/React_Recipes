import { QueryHookOptions } from "@apollo/client";

export enum queryEnum {
  userLikes = "userLikes",
  recipes = "recipes",
}

export type Props = {
  options?: QueryHookOptions;
  parentRoute: string;
  queryType: queryEnum;
};
