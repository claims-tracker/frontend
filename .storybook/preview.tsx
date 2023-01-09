import React from "react";
require("../src/common/dayjs.setup");
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { initialize, mswDecorator } from "msw-storybook-addon";

// Initialize MSW
initialize({
  // onUnhandledRequest: "bypass",
});
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

export const decorators = [
  (Story) => (
    <QueryClientProvider client={queryClient}>
      <Story />
      <ReactQueryDevtools />
    </QueryClientProvider>
  ),
  mswDecorator,
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
