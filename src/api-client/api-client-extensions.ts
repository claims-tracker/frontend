import { ApiClientBase, IApiClientConfig } from "./api-client-base";
import * as generated from "./api-client";
import dayjs2 from "dayjs";

const possibleDates = ["createdOn"];

export class PledgeClientFinal extends generated.PledgeClient {
  constructor(
    configuration: IApiClientConfig,
    baseUrl?: string,
    http?: { fetch(url: RequestInfo, init?: RequestInit): Promise<Response> }
  ) {
    super(configuration, baseUrl, http);

    this.jsonParseReviver = (key: string, value: any) => {
      if (possibleDates.includes(key)) {
        const possible = dayjs2(value);
        if (possible.isValid()) {
          return possible;
        }
      }
      return value;
    };
  }
}
