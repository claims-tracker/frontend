import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";
import PledgeCard from "components/pledgeCard/PledgeCard";
import { userEvent, within } from "@storybook/testing-library";

export default {
  title: "Pledge card",
  component: PledgeCard,
} as ComponentMeta<typeof PledgeCard>;

const Template: ComponentStory<typeof PledgeCard> = (args) => (
  <PledgeCard {...args} />
);

export const Simple = Template.bind({});
Simple.args = {
  pledge: {
    id: 1,
    description:
      "Elon Musk claims, once again, that full self driving technology will be available next year",
  },
  entity: {
    id: 1,
    name: "Elon Musk",
  },
  author: { id: 1, name: "Elon " },
};
Simple.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  userEvent.click(canvas.getByRole("button"));
};
