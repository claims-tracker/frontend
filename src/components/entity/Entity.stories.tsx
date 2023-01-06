import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";
import Entity from "components/entity/Entity";
import { userEvent, within } from "@storybook/testing-library";

export default {
  title: "Entity card",
  component: Entity,
} as ComponentMeta<typeof Entity>;

const Template: ComponentStory<typeof Entity> = (args) => <Entity {...args} />;

export const Simple = Template.bind({});
Simple.args = {
  entity: { id: 1 },
};
Simple.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  userEvent.click(canvas.getByRole("button"));
};

export const Complex = Template.bind({});
Complex.args = {
  entity: { id: 2 },
};
