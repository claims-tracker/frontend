import { PledgeCategoryEnum, PledgeStatusEnum } from "api-client/api-client";
import { unreachable } from "utils/typescript/unreachable";

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
    case PledgeCategoryEnum.Medical:
      return "Medical";
    case PledgeCategoryEnum.PublicProjects:
      return "Public projects";
    case PledgeCategoryEnum.Science:
      return "Science";
    case PledgeCategoryEnum.Politics:
      return "Politics";
    default:
      unreachable(val);
      return "Unknown";
  }
};

export const pledgeStatusEnumToString = (val: PledgeStatusEnum | undefined) => {
  switch (val) {
    case PledgeStatusEnum.Failed:
      return "Failed";
    case PledgeStatusEnum.Fulfilled:
      return "Fulfilled";
    case PledgeStatusEnum.Pending:
      return "Pending";
    case PledgeStatusEnum.Postponed:
      return "Postponed";
    default:
      unreachable(val);
      return "Unknown";
  }
};
