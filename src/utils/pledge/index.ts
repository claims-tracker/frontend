import { PledgeCategoryEnum } from "api-client/api-client";

export const pledgeCategoryEnumToString = (
  val: PledgeCategoryEnum | undefined
) => {
  switch (val) {
    case PledgeCategoryEnum.Business:
      return "Business";
    case PledgeCategoryEnum.Other:
      return "Other";
    case PledgeCategoryEnum.Technology:
      return "Technology";
    default:
      return "Unknown";
  }
};
