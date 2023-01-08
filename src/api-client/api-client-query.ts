import { useQuery } from "@tanstack/react-query";
import { GetPledgesWebRequestDTO } from "./api-client";
import { usePledgeClient } from "./api-client-hooks";

export const usePledges = ({
  count,
  filter,
  page,
  sort,
}: GetPledgesWebRequestDTO) => {
  const client = usePledgeClient();
  return useQuery(["pledge"], () => client.get(count, page, sort, filter));
};
