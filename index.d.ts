export type * from "./generated/graphql-types";

import type {
  AppearanceConnection,
  ArcConnection,
  DateFilter,
  Filter,
  Individual,
  IndividualConnection,
  Issue,
  IssueConnection,
  Node,
  NumberFilter,
  PageInfo,
  Publisher,
  PublisherConnection,
  Series,
  SeriesConnection,
} from "./generated/graphql-types";

export type {
  DateFilter,
  Filter,
  Individual,
  Issue,
  Node as SearchNode,
  NumberFilter,
  PageInfo,
  Publisher,
  Series,
} from "./generated/graphql-types";

export interface Edge<T> {
  cursor: string;
  node: T | null;
}

export interface Connection<T> {
  edges: Array<Edge<T> | null>;
  pageInfo: PageInfo;
}

export type QueryCollection<T> = Array<T | null> | Connection<T>;

export interface NodesQueryData {
  nodes: Array<Node | null>;
}

export interface PublishersQueryData {
  publishers: PublisherConnection;
}

export interface SeriesQueryData {
  series: SeriesConnection;
}

export interface IssuesQueryData {
  issues: IssueConnection;
}

export interface IndividualsQueryData {
  individuals: IndividualConnection;
}

export interface AppsQueryData {
  apps: AppearanceConnection;
}

export interface ArcsQueryData {
  arcs: ArcConnection;
}

export interface LastEditedQueryData {
  lastEdited: IssueConnection;
}

export interface SelectedRoot {
  us?: boolean;
  publisher?: Publisher;
  series?: Series;
  issue?: Issue;
  __typename?: "Publisher" | "Series" | "Issue";
}

export interface RouteParams {
  publisher?: string;
  series?: string;
  issue?: string;
  variant?: string;
}
