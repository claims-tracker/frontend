import { useMemo } from "react";
import { PledgeClientFinal } from "./api-client";

const baseUrl = "https://localhost:7024";

export const usePledgeClient = () => {
  const client = useMemo(
    () =>
      new PledgeClientFinal({ getAuthorization: () => "" }, baseUrl, {
        fetch: (...args) => fetch(...args),
      }),
    []
  );
  return client;
};
