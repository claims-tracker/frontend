import dayjs from "dayjs";
import {
  EntityTypeEnum,
  EntityWebDTO,
  PledgeCategoryEnum,
  PledgeStatusEnum,
  PledgeWebDTO,
  VoteTypeEnum,
} from "./api-client";

export type UserWebDTO = {
  id: string;
  username: string;
};

const getNewStableDate = (delayDays = 10) =>
  dayjs("2023-01-09T12:36:36Z").subtract(delayDays, "day");

export const coffeezillaUser: UserWebDTO = {
  id: "1",
  username: "coffeezilla",
};

export const peterUser: UserWebDTO = {
  id: "2",
  username: "peterkottas",
};

export const veronicaUser: UserWebDTO = {
  id: "3",
  username: "nika",
};

export const charlieUser: UserWebDTO = {
  id: "4",
  username: "cpoliver",
};

export const adamSomethingUser: UserWebDTO = {
  id: "5",
  username: "adamsomething",
};

export const users: any[] = [
  coffeezillaUser,
  peterUser,
  veronicaUser,
  charlieUser,
  adamSomethingUser,
];

export const muskEntity: EntityWebDTO = {
  id: "1",
  createdByUserId: adamSomethingUser.id,
  createdOn: getNewStableDate(-325),
  name: "Elon Musk",
  type: EntityTypeEnum.Individual,
};

export const joeBidenEntity: EntityWebDTO = {
  id: "2",
  createdByUserId: peterUser.id,
  createdOn: getNewStableDate(-182),
  name: "Joe Biden",
  type: EntityTypeEnum.Individual,
};

export const usGovernmentEntity: EntityWebDTO = {
  id: "3",
  createdByUserId: peterUser.id,
  createdOn: getNewStableDate(-182),
  name: "Us Government",
  type: EntityTypeEnum.Organization,
};

export const entities = [muskEntity, joeBidenEntity, usGovernmentEntity];

export const baseMockPledge: PledgeWebDTO = {
  id: "1",
  category: PledgeCategoryEnum.Technology,
  name: "Elon Musk claims, once again, that full self driving technology will be available next year",
  status: PledgeStatusEnum.Pending,
  voted: VoteTypeEnum.NotVoted,
  voteScore: 7,
  createdByUserId: adamSomethingUser.id,
  createdOn: getNewStableDate(-52),
  deliverBy: getNewStableDate(52),
  entityId: muskEntity.id,
  tags: ["some", "example", "tags"],
};

export const pledges: PledgeWebDTO[] = [
  baseMockPledge,
  {
    ...baseMockPledge,
    id: "2",
    name: "Joe Biden promises to nominate the first Black woman to the Supreme Court",
    category: PledgeCategoryEnum.Politics,
    voted: VoteTypeEnum.VotedUp,
    voteScore: 7,
    createdByUserId: adamSomethingUser.id,
    entityId: joeBidenEntity.id,
  },
  {
    ...baseMockPledge,
    id: "3",
    name: "Something extra and a bit shorter",
    category: PledgeCategoryEnum.Medical,
    voted: VoteTypeEnum.VotedDown,
    voteScore: 3,
    entityId: usGovernmentEntity.id,
  },
  {
    ...baseMockPledge,
    id: "4",
    name: "We need more pledges, even the ones that are kind of long and therefore should probably be shortened when shown on the main page",
    category: PledgeCategoryEnum.Other,
    voted: VoteTypeEnum.NotVoted,
    voteScore: 9,
  },
  {
    ...baseMockPledge,
    id: "5",
    name: "We need some more pledges, to show off the ui",
    category: PledgeCategoryEnum.PublicProjects,
    voted: VoteTypeEnum.NotVoted,
    voteScore: 11,
  },
  {
    ...baseMockPledge,
    id: "6",
    name: "We need some more pledges, to show off the ui",
    category: PledgeCategoryEnum.Business,
    voteScore: 8,
  },
  {
    ...baseMockPledge,
    id: "7",
    name: "We need some more pledges, to show off the ui",
    category: PledgeCategoryEnum.Business,
    voteScore: 8,
  },
  {
    ...baseMockPledge,
    id: "8",
    name: "We need some more pledges, to show off the ui",
    category: PledgeCategoryEnum.Politics,
    voteScore: 8,
  },
  {
    ...baseMockPledge,
    id: "9",
    name: "We need some more pledges, to show off the ui",
    category: PledgeCategoryEnum.PublicProjects,
    voteScore: 8,
  },
  {
    ...baseMockPledge,
    id: "10",
    name: "We need some more pledges, to show off the ui",
    category: PledgeCategoryEnum.Medical,
    voteScore: 8,
  },
  {
    ...baseMockPledge,
    id: "11",
    name: "We need some more pledges, to show off the ui",
    category: PledgeCategoryEnum.Science,
    voteScore: 8,
  },
  {
    ...baseMockPledge,
    id: "12",
    name: "We need some more pledges, to show off the ui",
    category: PledgeCategoryEnum.Medical,
    voteScore: 8,
  },
  {
    ...baseMockPledge,
    id: "13",
    name: "We need some more pledges, to show off the ui",
    category: PledgeCategoryEnum.Technology,
    voteScore: 8,
  },
  {
    ...baseMockPledge,
    id: "14",
    name: "We need some more pledges, to show off the ui",
    category: PledgeCategoryEnum.Medical,
    voteScore: 8,
  },
  {
    ...baseMockPledge,
    id: "15",
    name: "We need some more pledges, to show off the ui",
    category: PledgeCategoryEnum.Politics,
    voteScore: 8,
  },
  {
    ...baseMockPledge,
    id: "16",
    name: "We need some more pledges, to show off the ui",
    category: PledgeCategoryEnum.Other,
    voteScore: 8,
  },
  {
    ...baseMockPledge,
    id: "17",
    name: "We need some more pledges, to show off the ui",
    category: PledgeCategoryEnum.Business,
    voteScore: 8,
  },
];
