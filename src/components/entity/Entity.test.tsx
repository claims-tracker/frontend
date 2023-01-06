import { composeStories } from "@storybook/testing-react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";

import * as stories from "components/entity/Entity.stories";

describe("components/Entity", () => {
  const { Simple, Complex } = composeStories(stories);
  test("Should render Simple", () => {
    render(<Simple />);
  });
  test("Should render Complex", () => {
    render(<Complex />);
  });
});
