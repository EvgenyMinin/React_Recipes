import pluralize from "pluralize";

export const generateUnit = (unit: string, amount: string) => {
  if (unit !== "-") {
    return pluralize(unit, parseInt(amount));
  } else {
    return "";
  }
};
