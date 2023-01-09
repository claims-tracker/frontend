import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";
import Index from ".";
import { rest } from "msw";
import { GetPledgesWebResponseDTO } from "api-client/api-client";

export default {
  title: "Home page",
  component: Index,
} as ComponentMeta<typeof Index>;

const Template: ComponentStory<typeof Index> = (args) => <Index />;

export const Simple = Template.bind({});
Simple.parameters = {
  msw: {
    handlers: [
      rest.get("https://localhost:7024/rest/pledge", (req, res, ctx) => {
        return res(
          ctx.json<GetPledgesWebResponseDTO>({
            pledges: {
              items: [
                {
                  id: "1",
                },
                {
                  id: "2",
                },
              ],
            },
          })
        );
      }),
    ],
  },
};
