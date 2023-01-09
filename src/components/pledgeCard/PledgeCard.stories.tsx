import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";
import PledgeCard from "components/pledgeCard/PledgeCard";
import { userEvent, within } from "@storybook/testing-library";
import dayjs from "dayjs";
import { PledgeCategoryEnum, PledgeStatusEnum } from "api-client/api-client";
import { baseMockPledge } from "api-client/api-client-mockdata";

export default {
  title: "Pledge card",
  component: PledgeCard,
} as ComponentMeta<typeof PledgeCard>;

const Template: ComponentStory<typeof PledgeCard> = (args) => (
  <PledgeCard {...args} />
);

export const Basic = Template.bind({});
Basic.args = {
  pledge: baseMockPledge,
  entity: {
    id: "1",
    name: "Elon Musk",
  },
  author: { id: 1, username: "Coffeeezilla" },
};
/*Basic.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  userEvent.click(canvas.getByRole("button"));
};*/

export const LongEntityName = Template.bind({});

LongEntityName.args = {
  ...Basic.args,
  entity: {
    ...Basic.args.entity,
    name: "This is some very long entity name",
  },
};
