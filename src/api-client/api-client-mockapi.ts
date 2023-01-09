import {
  FilterLogicEnum,
  FilterOperatorEnum,
  GetPledgesWebRequestDTO,
  GetPledgesWebResponseDTO,
  OrderByEnum,
  PledgePropertyNameEnum,
  PledgeWebDTO,
} from "./api-client";
import { pledges } from "./api-client-mockdata";

export type BaseSorter<T> = {
  field?: T;
  order?: OrderByEnum;
};

export type BaseFilter<T> = {
  field?: T;
  operator?: FilterOperatorEnum;
  value?: string | undefined;
  logic?: FilterLogicEnum;
  filters?: BaseFilter<T>[] | undefined;
};

export type BasePaginatedRequest<T> = {
  count?: number;
  page?: number;
  sort?: BaseSorter<T>[] | undefined;
  filter?: BaseFilter<T>[] | undefined;
};

export interface BasePaginatedData<T> {
  page?: number;
  count?: number;
  items?: T[] | undefined;
  totalPages?: number;
  totalCount?: number;
}

export type FilterFunction = <T, TData>(
  data: TData[],
  filters?: BaseFilter<T>[]
) => TData[];
export type SortFunction = <T, TData>(
  data: TData[],
  sorters?: BaseSorter<T>[]
) => TData[];

export function paginateData<T, TData>(
  request: BasePaginatedRequest<T>,
  data: TData[],
  filter?: FilterFunction,
  sorters?: SortFunction
): BasePaginatedData<TData> {
  const filtered = filter ? filter<T, TData>(data, request.filter) : [...data];
  const sorted = sorters ? sorters<T, TData>(filtered, request.sort) : filtered;
  const { count = 25, page = 1 } = request;
  const paginated = sorted.slice((page - 1) * count, page * count);
  return {
    count,
    page,
    items: paginated,
    totalCount: sorted.length,
    totalPages: Math.ceil(sorted.length / count),
  };
}

export const getPledges = (
  request: GetPledgesWebRequestDTO
): GetPledgesWebResponseDTO => {
  const paginated = paginateData<PledgePropertyNameEnum, PledgeWebDTO>(
    request,
    pledges
  );
  return {
    pledges: paginated,
  };
};
