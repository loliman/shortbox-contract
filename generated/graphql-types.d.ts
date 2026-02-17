export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string | number; output: string | number; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Date: { input: string; output: string; }
  DateTime: { input: string; output: string; }
};

export type Appearance = {
  __typename?: 'Appearance';
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  role?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type AppearanceConnection = {
  __typename?: 'AppearanceConnection';
  edges?: Maybe<Array<Maybe<AppearanceEdge>>>;
  pageInfo: PageInfo;
};

export type AppearanceEdge = {
  __typename?: 'AppearanceEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<Appearance>;
};

export type AppearanceInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type Arc = {
  __typename?: 'Arc';
  id?: Maybe<Scalars['ID']['output']>;
  issues?: Maybe<Array<Maybe<Issue>>>;
  title?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type ArcConnection = {
  __typename?: 'ArcConnection';
  edges?: Maybe<Array<Maybe<ArcEdge>>>;
  pageInfo: PageInfo;
};

export type ArcEdge = {
  __typename?: 'ArcEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<Arc>;
};

export type ArcInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};

export type Cover = {
  __typename?: 'Cover';
  addinfo?: Maybe<Scalars['String']['output']>;
  children?: Maybe<Array<Maybe<Cover>>>;
  exclusive?: Maybe<Scalars['Boolean']['output']>;
  firstapp?: Maybe<Scalars['Boolean']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  individuals?: Maybe<Array<Maybe<Individual>>>;
  issue?: Maybe<Issue>;
  number?: Maybe<Scalars['Int']['output']>;
  onlyapp?: Maybe<Scalars['Boolean']['output']>;
  parent?: Maybe<Cover>;
  url?: Maybe<Scalars['String']['output']>;
};

export type CoverInput = {
  addinfo?: InputMaybe<Scalars['String']['input']>;
  exclusive?: InputMaybe<Scalars['Boolean']['input']>;
  individuals?: InputMaybe<Array<InputMaybe<IndividualInput>>>;
  issue?: InputMaybe<IssueInput>;
  number: Scalars['Int']['input'];
  parent?: InputMaybe<CoverInput>;
};

export type DateFilter = {
  compare?: InputMaybe<Scalars['String']['input']>;
  date?: InputMaybe<Scalars['Date']['input']>;
};

export type Filter = {
  and?: InputMaybe<Scalars['Boolean']['input']>;
  appearances?: InputMaybe<Scalars['String']['input']>;
  arcs?: InputMaybe<Scalars['String']['input']>;
  exclusive?: InputMaybe<Scalars['Boolean']['input']>;
  firstPrint?: InputMaybe<Scalars['Boolean']['input']>;
  formats?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  individuals?: InputMaybe<Array<InputMaybe<IndividualInput>>>;
  noContent?: InputMaybe<Scalars['Boolean']['input']>;
  noCover?: InputMaybe<Scalars['Boolean']['input']>;
  noPrint?: InputMaybe<Scalars['Boolean']['input']>;
  numbers?: InputMaybe<Array<InputMaybe<NumberFilter>>>;
  onlyCollected?: InputMaybe<Scalars['Boolean']['input']>;
  onlyNotCollected?: InputMaybe<Scalars['Boolean']['input']>;
  onlyOnePrint?: InputMaybe<Scalars['Boolean']['input']>;
  onlyPrint?: InputMaybe<Scalars['Boolean']['input']>;
  onlyTb?: InputMaybe<Scalars['Boolean']['input']>;
  otherOnlyTb?: InputMaybe<Scalars['Boolean']['input']>;
  publishers?: InputMaybe<Array<InputMaybe<PublisherInput>>>;
  releasedates?: InputMaybe<Array<InputMaybe<DateFilter>>>;
  reprint?: InputMaybe<Scalars['Boolean']['input']>;
  sellable?: InputMaybe<Scalars['Boolean']['input']>;
  series?: InputMaybe<Array<InputMaybe<SeriesInput>>>;
  us: Scalars['Boolean']['input'];
  withVariants?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Individual = {
  __typename?: 'Individual';
  id?: Maybe<Scalars['ID']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type IndividualConnection = {
  __typename?: 'IndividualConnection';
  edges?: Maybe<Array<Maybe<IndividualEdge>>>;
  pageInfo: PageInfo;
};

export type IndividualEdge = {
  __typename?: 'IndividualEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<Individual>;
};

export type IndividualInput = {
  name?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Issue = {
  __typename?: 'Issue';
  addinfo?: Maybe<Scalars['String']['output']>;
  arcs?: Maybe<Array<Maybe<Arc>>>;
  collected?: Maybe<Scalars['Boolean']['output']>;
  comicguideid?: Maybe<Scalars['String']['output']>;
  cover?: Maybe<Cover>;
  covers?: Maybe<Array<Maybe<Cover>>>;
  createdat?: Maybe<Scalars['DateTime']['output']>;
  currency?: Maybe<Scalars['String']['output']>;
  format?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  individuals?: Maybe<Array<Maybe<Individual>>>;
  isbn?: Maybe<Scalars['String']['output']>;
  limitation?: Maybe<Scalars['String']['output']>;
  number?: Maybe<Scalars['String']['output']>;
  pages?: Maybe<Scalars['Int']['output']>;
  price?: Maybe<Scalars['Float']['output']>;
  releasedate?: Maybe<Scalars['Date']['output']>;
  series?: Maybe<Series>;
  stories?: Maybe<Array<Maybe<Story>>>;
  tags?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  title?: Maybe<Scalars['String']['output']>;
  updatedat?: Maybe<Scalars['DateTime']['output']>;
  variant?: Maybe<Scalars['String']['output']>;
  variants?: Maybe<Array<Maybe<Issue>>>;
  verified?: Maybe<Scalars['Boolean']['output']>;
};

export type IssueConnection = {
  __typename?: 'IssueConnection';
  edges?: Maybe<Array<Maybe<IssueEdge>>>;
  pageInfo: PageInfo;
};

export type IssueEdge = {
  __typename?: 'IssueEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<Issue>;
};

export type IssueInput = {
  addinfo?: InputMaybe<Scalars['String']['input']>;
  currency?: InputMaybe<Scalars['String']['input']>;
  format?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  isbn?: InputMaybe<Scalars['String']['input']>;
  limitation?: InputMaybe<Scalars['String']['input']>;
  number?: InputMaybe<Scalars['String']['input']>;
  pages?: InputMaybe<Scalars['Int']['input']>;
  price?: InputMaybe<Scalars['Float']['input']>;
  releasedate?: InputMaybe<Scalars['Date']['input']>;
  series?: InputMaybe<SeriesInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  variant?: InputMaybe<Scalars['String']['input']>;
};

export type LoginInput = {
  name: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  _empty?: Maybe<Scalars['String']['output']>;
  createIssue?: Maybe<Issue>;
  createPublisher?: Maybe<Publisher>;
  createSeries?: Maybe<Series>;
  deleteIssue?: Maybe<Scalars['Boolean']['output']>;
  deletePublisher?: Maybe<Scalars['Boolean']['output']>;
  deleteSeries?: Maybe<Scalars['Boolean']['output']>;
  editIssue?: Maybe<Issue>;
  editPublisher?: Maybe<Publisher>;
  editSeries?: Maybe<Series>;
  login: User;
  logout: Scalars['Boolean']['output'];
};


export type MutationCreateIssueArgs = {
  item: IssueInput;
};


export type MutationCreatePublisherArgs = {
  item: PublisherInput;
};


export type MutationCreateSeriesArgs = {
  item: SeriesInput;
};


export type MutationDeleteIssueArgs = {
  item: IssueInput;
};


export type MutationDeletePublisherArgs = {
  item: PublisherInput;
};


export type MutationDeleteSeriesArgs = {
  item: SeriesInput;
};


export type MutationEditIssueArgs = {
  item: IssueInput;
  old: IssueInput;
};


export type MutationEditPublisherArgs = {
  item: PublisherInput;
  old: PublisherInput;
};


export type MutationEditSeriesArgs = {
  item: SeriesInput;
  old: SeriesInput;
};


export type MutationLoginArgs = {
  credentials: LoginInput;
};

export type Node = {
  __typename?: 'Node';
  label?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};

export type NumberFilter = {
  compare?: InputMaybe<Scalars['String']['input']>;
  number?: InputMaybe<Scalars['String']['input']>;
  variant?: InputMaybe<Scalars['String']['input']>;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']['output']>;
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type Publisher = {
  __typename?: 'Publisher';
  active?: Maybe<Scalars['Boolean']['output']>;
  addinfo?: Maybe<Scalars['String']['output']>;
  endyear?: Maybe<Scalars['Int']['output']>;
  firstIssue?: Maybe<Issue>;
  id?: Maybe<Scalars['ID']['output']>;
  issueCount?: Maybe<Scalars['Int']['output']>;
  lastEdited?: Maybe<Array<Maybe<Issue>>>;
  lastIssue?: Maybe<Issue>;
  name?: Maybe<Scalars['String']['output']>;
  series?: Maybe<Array<Maybe<Series>>>;
  seriesCount?: Maybe<Scalars['Int']['output']>;
  startyear?: Maybe<Scalars['Int']['output']>;
  us?: Maybe<Scalars['Boolean']['output']>;
};


export type PublisherLastEditedArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
};

export type PublisherConnection = {
  __typename?: 'PublisherConnection';
  edges?: Maybe<Array<Maybe<PublisherEdge>>>;
  pageInfo: PageInfo;
};

export type PublisherEdge = {
  __typename?: 'PublisherEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<Publisher>;
};

export type PublisherInput = {
  addinfo?: InputMaybe<Scalars['String']['input']>;
  endyear?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  startyear?: InputMaybe<Scalars['Int']['input']>;
  us?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Query = {
  __typename?: 'Query';
  _empty?: Maybe<Scalars['String']['output']>;
  apps?: Maybe<AppearanceConnection>;
  arcs?: Maybe<ArcConnection>;
  export?: Maybe<Scalars['String']['output']>;
  individuals?: Maybe<IndividualConnection>;
  issueDetails?: Maybe<Issue>;
  issueList?: Maybe<IssueConnection>;
  lastEdited?: Maybe<IssueConnection>;
  me?: Maybe<User>;
  nodes?: Maybe<Array<Maybe<Node>>>;
  publisherDetails?: Maybe<Publisher>;
  publisherList?: Maybe<PublisherConnection>;
  seriesDetails?: Maybe<Series>;
  seriesList?: Maybe<SeriesConnection>;
};


export type QueryAppsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  pattern?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};


export type QueryArcsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  pattern?: InputMaybe<Scalars['String']['input']>;
  type?: InputMaybe<Scalars['String']['input']>;
};


export type QueryExportArgs = {
  filter: Filter;
  type: Scalars['String']['input'];
};


export type QueryIndividualsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  pattern?: InputMaybe<Scalars['String']['input']>;
};


export type QueryIssueDetailsArgs = {
  edit?: InputMaybe<Scalars['Boolean']['input']>;
  issue: IssueInput;
};


export type QueryIssueListArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Filter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  pattern?: InputMaybe<Scalars['String']['input']>;
  series: SeriesInput;
};


export type QueryLastEditedArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  direction?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Filter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Scalars['String']['input']>;
};


export type QueryNodesArgs = {
  offset?: InputMaybe<Scalars['Int']['input']>;
  pattern: Scalars['String']['input'];
  us: Scalars['Boolean']['input'];
};


export type QueryPublisherDetailsArgs = {
  publisher: PublisherInput;
};


export type QueryPublisherListArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Filter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  pattern?: InputMaybe<Scalars['String']['input']>;
  us: Scalars['Boolean']['input'];
};


export type QuerySeriesDetailsArgs = {
  series: SeriesInput;
};


export type QuerySeriesListArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  filter?: InputMaybe<Filter>;
  first?: InputMaybe<Scalars['Int']['input']>;
  pattern?: InputMaybe<Scalars['String']['input']>;
  publisher: PublisherInput;
};

export type Series = {
  __typename?: 'Series';
  active?: Maybe<Scalars['Boolean']['output']>;
  addinfo?: Maybe<Scalars['String']['output']>;
  endyear?: Maybe<Scalars['Int']['output']>;
  firstIssue?: Maybe<Issue>;
  id?: Maybe<Scalars['ID']['output']>;
  issueCount?: Maybe<Scalars['Int']['output']>;
  lastEdited?: Maybe<Array<Maybe<Issue>>>;
  lastIssue?: Maybe<Issue>;
  publisher?: Maybe<Publisher>;
  startyear?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  volume?: Maybe<Scalars['Int']['output']>;
};


export type SeriesLastEditedArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
};

export type SeriesConnection = {
  __typename?: 'SeriesConnection';
  edges?: Maybe<Array<Maybe<SeriesEdge>>>;
  pageInfo: PageInfo;
};

export type SeriesEdge = {
  __typename?: 'SeriesEdge';
  cursor: Scalars['String']['output'];
  node?: Maybe<Series>;
};

export type SeriesInput = {
  addinfo?: InputMaybe<Scalars['String']['input']>;
  endyear?: InputMaybe<Scalars['Int']['input']>;
  id?: InputMaybe<Scalars['String']['input']>;
  publisher?: InputMaybe<PublisherInput>;
  startyear?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  volume?: InputMaybe<Scalars['Int']['input']>;
};

export type Story = {
  __typename?: 'Story';
  addinfo?: Maybe<Scalars['String']['output']>;
  appearances?: Maybe<Array<Maybe<Appearance>>>;
  children?: Maybe<Array<Maybe<Story>>>;
  collected?: Maybe<Scalars['Boolean']['output']>;
  collectedmultipletimes?: Maybe<Scalars['Boolean']['output']>;
  exclusive?: Maybe<Scalars['Boolean']['output']>;
  firstapp?: Maybe<Scalars['Boolean']['output']>;
  id?: Maybe<Scalars['ID']['output']>;
  individuals?: Maybe<Array<Maybe<Individual>>>;
  issue?: Maybe<Issue>;
  number?: Maybe<Scalars['Int']['output']>;
  onlyapp?: Maybe<Scalars['Boolean']['output']>;
  onlyoneprint?: Maybe<Scalars['Boolean']['output']>;
  onlytb?: Maybe<Scalars['Boolean']['output']>;
  otheronlytb?: Maybe<Scalars['Boolean']['output']>;
  parent?: Maybe<Story>;
  part?: Maybe<Scalars['String']['output']>;
  reprintOf?: Maybe<Story>;
  reprints?: Maybe<Array<Maybe<Story>>>;
  title?: Maybe<Scalars['String']['output']>;
};

export type StoryInput = {
  addinfo?: InputMaybe<Scalars['String']['input']>;
  appearances?: InputMaybe<Array<InputMaybe<AppearanceInput>>>;
  collected?: InputMaybe<Scalars['Boolean']['input']>;
  exclusive?: InputMaybe<Scalars['Boolean']['input']>;
  firstapp?: InputMaybe<Scalars['Boolean']['input']>;
  individuals?: InputMaybe<Array<InputMaybe<IndividualInput>>>;
  issue?: InputMaybe<IssueInput>;
  number: Scalars['Int']['input'];
  onlyapp?: InputMaybe<Scalars['Boolean']['input']>;
  onlyoneprint?: InputMaybe<Scalars['Boolean']['input']>;
  onlytb?: InputMaybe<Scalars['Boolean']['input']>;
  otheronlytb?: InputMaybe<Scalars['Boolean']['input']>;
  parent?: InputMaybe<StoryInput>;
  part?: InputMaybe<Scalars['String']['input']>;
  reprintOf?: InputMaybe<StoryInput>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'User';
  id?: Maybe<Scalars['ID']['output']>;
};
