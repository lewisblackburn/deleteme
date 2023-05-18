import {gql} from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends Record<string, unknown>> = {[K in keyof T]: T[K]};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {[SubKey in K]?: Maybe<T[SubKey]>};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {[SubKey in K]: Maybe<T[SubKey]>};
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type ActorInMovie = {
  __typename?: 'ActorInMovie';
  movie: Movie;
  movieId: Scalars['Int'];
  person: Person;
  personId: Scalars['Int'];
  role: Scalars['String'];
};

export type ActorInMovieAvgAggregate = {
  __typename?: 'ActorInMovieAvgAggregate';
  movieId?: Maybe<Scalars['Float']>;
  personId?: Maybe<Scalars['Float']>;
};

export type ActorInMovieAvgOrderByAggregateInput = {
  movieId?: InputMaybe<SortOrder>;
  personId?: InputMaybe<SortOrder>;
};

export type ActorInMovieCountAggregate = {
  __typename?: 'ActorInMovieCountAggregate';
  _all: Scalars['Int'];
  movieId: Scalars['Int'];
  personId: Scalars['Int'];
  role: Scalars['Int'];
};

export type ActorInMovieCountOrderByAggregateInput = {
  movieId?: InputMaybe<SortOrder>;
  personId?: InputMaybe<SortOrder>;
  role?: InputMaybe<SortOrder>;
};

export type ActorInMovieCreateInput = {
  movie: MovieCreateNestedOneWithoutActorsInput;
  person: PersonCreateNestedOneWithoutMoviesInput;
  role: Scalars['String'];
};

export type ActorInMovieCreateManyInput = {
  movieId: Scalars['Int'];
  personId: Scalars['Int'];
  role: Scalars['String'];
};

export type ActorInMovieCreateManyMovieInput = {
  personId: Scalars['Int'];
  role: Scalars['String'];
};

export type ActorInMovieCreateManyMovieInputEnvelope = {
  data: ActorInMovieCreateManyMovieInput[];
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type ActorInMovieCreateManyPersonInput = {
  movieId: Scalars['Int'];
  role: Scalars['String'];
};

export type ActorInMovieCreateManyPersonInputEnvelope = {
  data: ActorInMovieCreateManyPersonInput[];
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type ActorInMovieCreateNestedManyWithoutMovieInput = {
  connect?: InputMaybe<ActorInMovieWhereUniqueInput[]>;
  connectOrCreate?: InputMaybe<ActorInMovieCreateOrConnectWithoutMovieInput[]>;
  create?: InputMaybe<ActorInMovieCreateWithoutMovieInput[]>;
  createMany?: InputMaybe<ActorInMovieCreateManyMovieInputEnvelope>;
};

export type ActorInMovieCreateNestedManyWithoutPersonInput = {
  connect?: InputMaybe<ActorInMovieWhereUniqueInput[]>;
  connectOrCreate?: InputMaybe<ActorInMovieCreateOrConnectWithoutPersonInput[]>;
  create?: InputMaybe<ActorInMovieCreateWithoutPersonInput[]>;
  createMany?: InputMaybe<ActorInMovieCreateManyPersonInputEnvelope>;
};

export type ActorInMovieCreateOrConnectWithoutMovieInput = {
  create: ActorInMovieCreateWithoutMovieInput;
  where: ActorInMovieWhereUniqueInput;
};

export type ActorInMovieCreateOrConnectWithoutPersonInput = {
  create: ActorInMovieCreateWithoutPersonInput;
  where: ActorInMovieWhereUniqueInput;
};

export type ActorInMovieCreateWithoutMovieInput = {
  person: PersonCreateNestedOneWithoutMoviesInput;
  role: Scalars['String'];
};

export type ActorInMovieCreateWithoutPersonInput = {
  movie: MovieCreateNestedOneWithoutActorsInput;
  role: Scalars['String'];
};

export type ActorInMovieGroupBy = {
  __typename?: 'ActorInMovieGroupBy';
  _avg?: Maybe<ActorInMovieAvgAggregate>;
  _count?: Maybe<ActorInMovieCountAggregate>;
  _max?: Maybe<ActorInMovieMaxAggregate>;
  _min?: Maybe<ActorInMovieMinAggregate>;
  _sum?: Maybe<ActorInMovieSumAggregate>;
  movieId: Scalars['Int'];
  personId: Scalars['Int'];
  role: Scalars['String'];
};

export type ActorInMovieListRelationFilter = {
  every?: InputMaybe<ActorInMovieWhereInput>;
  none?: InputMaybe<ActorInMovieWhereInput>;
  some?: InputMaybe<ActorInMovieWhereInput>;
};

export type ActorInMovieMaxAggregate = {
  __typename?: 'ActorInMovieMaxAggregate';
  movieId?: Maybe<Scalars['Int']>;
  personId?: Maybe<Scalars['Int']>;
  role?: Maybe<Scalars['String']>;
};

export type ActorInMovieMaxOrderByAggregateInput = {
  movieId?: InputMaybe<SortOrder>;
  personId?: InputMaybe<SortOrder>;
  role?: InputMaybe<SortOrder>;
};

export type ActorInMovieMinAggregate = {
  __typename?: 'ActorInMovieMinAggregate';
  movieId?: Maybe<Scalars['Int']>;
  personId?: Maybe<Scalars['Int']>;
  role?: Maybe<Scalars['String']>;
};

export type ActorInMovieMinOrderByAggregateInput = {
  movieId?: InputMaybe<SortOrder>;
  personId?: InputMaybe<SortOrder>;
  role?: InputMaybe<SortOrder>;
};

export type ActorInMovieOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type ActorInMovieOrderByWithAggregationInput = {
  _avg?: InputMaybe<ActorInMovieAvgOrderByAggregateInput>;
  _count?: InputMaybe<ActorInMovieCountOrderByAggregateInput>;
  _max?: InputMaybe<ActorInMovieMaxOrderByAggregateInput>;
  _min?: InputMaybe<ActorInMovieMinOrderByAggregateInput>;
  _sum?: InputMaybe<ActorInMovieSumOrderByAggregateInput>;
  movieId?: InputMaybe<SortOrder>;
  personId?: InputMaybe<SortOrder>;
  role?: InputMaybe<SortOrder>;
};

export type ActorInMovieOrderByWithRelationInput = {
  movie?: InputMaybe<MovieOrderByWithRelationInput>;
  movieId?: InputMaybe<SortOrder>;
  person?: InputMaybe<PersonOrderByWithRelationInput>;
  personId?: InputMaybe<SortOrder>;
  role?: InputMaybe<SortOrder>;
};

export type ActorInMoviePersonIdMovieIdCompoundUniqueInput = {
  movieId: Scalars['Int'];
  personId: Scalars['Int'];
};

export enum ActorInMovieScalarFieldEnum {
  MovieId = 'movieId',
  PersonId = 'personId',
  Role = 'role'
}

export type ActorInMovieScalarWhereInput = {
  AND?: InputMaybe<ActorInMovieScalarWhereInput[]>;
  NOT?: InputMaybe<ActorInMovieScalarWhereInput[]>;
  OR?: InputMaybe<ActorInMovieScalarWhereInput[]>;
  movieId?: InputMaybe<IntFilter>;
  personId?: InputMaybe<IntFilter>;
  role?: InputMaybe<StringFilter>;
};

export type ActorInMovieScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<ActorInMovieScalarWhereWithAggregatesInput[]>;
  NOT?: InputMaybe<ActorInMovieScalarWhereWithAggregatesInput[]>;
  OR?: InputMaybe<ActorInMovieScalarWhereWithAggregatesInput[]>;
  movieId?: InputMaybe<IntWithAggregatesFilter>;
  personId?: InputMaybe<IntWithAggregatesFilter>;
  role?: InputMaybe<StringWithAggregatesFilter>;
};

export type ActorInMovieSumAggregate = {
  __typename?: 'ActorInMovieSumAggregate';
  movieId?: Maybe<Scalars['Int']>;
  personId?: Maybe<Scalars['Int']>;
};

export type ActorInMovieSumOrderByAggregateInput = {
  movieId?: InputMaybe<SortOrder>;
  personId?: InputMaybe<SortOrder>;
};

export type ActorInMovieUpdateInput = {
  movie?: InputMaybe<MovieUpdateOneRequiredWithoutActorsNestedInput>;
  person?: InputMaybe<PersonUpdateOneRequiredWithoutMoviesNestedInput>;
  role?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type ActorInMovieUpdateManyMutationInput = {
  role?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type ActorInMovieUpdateManyWithWhereWithoutMovieInput = {
  data: ActorInMovieUpdateManyMutationInput;
  where: ActorInMovieScalarWhereInput;
};

export type ActorInMovieUpdateManyWithWhereWithoutPersonInput = {
  data: ActorInMovieUpdateManyMutationInput;
  where: ActorInMovieScalarWhereInput;
};

export type ActorInMovieUpdateManyWithoutMovieNestedInput = {
  connect?: InputMaybe<ActorInMovieWhereUniqueInput[]>;
  connectOrCreate?: InputMaybe<ActorInMovieCreateOrConnectWithoutMovieInput[]>;
  create?: InputMaybe<ActorInMovieCreateWithoutMovieInput[]>;
  createMany?: InputMaybe<ActorInMovieCreateManyMovieInputEnvelope>;
  delete?: InputMaybe<ActorInMovieWhereUniqueInput[]>;
  deleteMany?: InputMaybe<ActorInMovieScalarWhereInput[]>;
  disconnect?: InputMaybe<ActorInMovieWhereUniqueInput[]>;
  set?: InputMaybe<ActorInMovieWhereUniqueInput[]>;
  update?: InputMaybe<ActorInMovieUpdateWithWhereUniqueWithoutMovieInput[]>;
  updateMany?: InputMaybe<ActorInMovieUpdateManyWithWhereWithoutMovieInput[]>;
  upsert?: InputMaybe<ActorInMovieUpsertWithWhereUniqueWithoutMovieInput[]>;
};

export type ActorInMovieUpdateManyWithoutPersonNestedInput = {
  connect?: InputMaybe<ActorInMovieWhereUniqueInput[]>;
  connectOrCreate?: InputMaybe<ActorInMovieCreateOrConnectWithoutPersonInput[]>;
  create?: InputMaybe<ActorInMovieCreateWithoutPersonInput[]>;
  createMany?: InputMaybe<ActorInMovieCreateManyPersonInputEnvelope>;
  delete?: InputMaybe<ActorInMovieWhereUniqueInput[]>;
  deleteMany?: InputMaybe<ActorInMovieScalarWhereInput[]>;
  disconnect?: InputMaybe<ActorInMovieWhereUniqueInput[]>;
  set?: InputMaybe<ActorInMovieWhereUniqueInput[]>;
  update?: InputMaybe<ActorInMovieUpdateWithWhereUniqueWithoutPersonInput[]>;
  updateMany?: InputMaybe<ActorInMovieUpdateManyWithWhereWithoutPersonInput[]>;
  upsert?: InputMaybe<ActorInMovieUpsertWithWhereUniqueWithoutPersonInput[]>;
};

export type ActorInMovieUpdateWithWhereUniqueWithoutMovieInput = {
  data: ActorInMovieUpdateWithoutMovieInput;
  where: ActorInMovieWhereUniqueInput;
};

export type ActorInMovieUpdateWithWhereUniqueWithoutPersonInput = {
  data: ActorInMovieUpdateWithoutPersonInput;
  where: ActorInMovieWhereUniqueInput;
};

export type ActorInMovieUpdateWithoutMovieInput = {
  person?: InputMaybe<PersonUpdateOneRequiredWithoutMoviesNestedInput>;
  role?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type ActorInMovieUpdateWithoutPersonInput = {
  movie?: InputMaybe<MovieUpdateOneRequiredWithoutActorsNestedInput>;
  role?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type ActorInMovieUpsertWithWhereUniqueWithoutMovieInput = {
  create: ActorInMovieCreateWithoutMovieInput;
  update: ActorInMovieUpdateWithoutMovieInput;
  where: ActorInMovieWhereUniqueInput;
};

export type ActorInMovieUpsertWithWhereUniqueWithoutPersonInput = {
  create: ActorInMovieCreateWithoutPersonInput;
  update: ActorInMovieUpdateWithoutPersonInput;
  where: ActorInMovieWhereUniqueInput;
};

export type ActorInMovieWhereInput = {
  AND?: InputMaybe<ActorInMovieWhereInput[]>;
  NOT?: InputMaybe<ActorInMovieWhereInput[]>;
  OR?: InputMaybe<ActorInMovieWhereInput[]>;
  movie?: InputMaybe<MovieRelationFilter>;
  movieId?: InputMaybe<IntFilter>;
  person?: InputMaybe<PersonRelationFilter>;
  personId?: InputMaybe<IntFilter>;
  role?: InputMaybe<StringFilter>;
};

export type ActorInMovieWhereUniqueInput = {
  personId_movieId?: InputMaybe<ActorInMoviePersonIdMovieIdCompoundUniqueInput>;
};

export type AffectedRowsOutput = {
  __typename?: 'AffectedRowsOutput';
  count: Scalars['Int'];
};

export type AggregateActorInMovie = {
  __typename?: 'AggregateActorInMovie';
  _avg?: Maybe<ActorInMovieAvgAggregate>;
  _count?: Maybe<ActorInMovieCountAggregate>;
  _max?: Maybe<ActorInMovieMaxAggregate>;
  _min?: Maybe<ActorInMovieMinAggregate>;
  _sum?: Maybe<ActorInMovieSumAggregate>;
};

export type AggregateGenre = {
  __typename?: 'AggregateGenre';
  _avg?: Maybe<GenreAvgAggregate>;
  _count?: Maybe<GenreCountAggregate>;
  _max?: Maybe<GenreMaxAggregate>;
  _min?: Maybe<GenreMinAggregate>;
  _sum?: Maybe<GenreSumAggregate>;
};

export type AggregateMovie = {
  __typename?: 'AggregateMovie';
  _avg?: Maybe<MovieAvgAggregate>;
  _count?: Maybe<MovieCountAggregate>;
  _max?: Maybe<MovieMaxAggregate>;
  _min?: Maybe<MovieMinAggregate>;
  _sum?: Maybe<MovieSumAggregate>;
};

export type AggregateMovieLike = {
  __typename?: 'AggregateMovieLike';
  _avg?: Maybe<MovieLikeAvgAggregate>;
  _count?: Maybe<MovieLikeCountAggregate>;
  _max?: Maybe<MovieLikeMaxAggregate>;
  _min?: Maybe<MovieLikeMinAggregate>;
  _sum?: Maybe<MovieLikeSumAggregate>;
};

export type AggregateMovieReview = {
  __typename?: 'AggregateMovieReview';
  _avg?: Maybe<MovieReviewAvgAggregate>;
  _count?: Maybe<MovieReviewCountAggregate>;
  _max?: Maybe<MovieReviewMaxAggregate>;
  _min?: Maybe<MovieReviewMinAggregate>;
  _sum?: Maybe<MovieReviewSumAggregate>;
};

export type AggregateMovieReviewLike = {
  __typename?: 'AggregateMovieReviewLike';
  _avg?: Maybe<MovieReviewLikeAvgAggregate>;
  _count?: Maybe<MovieReviewLikeCountAggregate>;
  _max?: Maybe<MovieReviewLikeMaxAggregate>;
  _min?: Maybe<MovieReviewLikeMinAggregate>;
  _sum?: Maybe<MovieReviewLikeSumAggregate>;
};

export type AggregatePerson = {
  __typename?: 'AggregatePerson';
  _avg?: Maybe<PersonAvgAggregate>;
  _count?: Maybe<PersonCountAggregate>;
  _max?: Maybe<PersonMaxAggregate>;
  _min?: Maybe<PersonMinAggregate>;
  _sum?: Maybe<PersonSumAggregate>;
};

export type AggregateUser = {
  __typename?: 'AggregateUser';
  _avg?: Maybe<UserAvgAggregate>;
  _count?: Maybe<UserCountAggregate>;
  _max?: Maybe<UserMaxAggregate>;
  _min?: Maybe<UserMinAggregate>;
  _sum?: Maybe<UserSumAggregate>;
};

export type BoolFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['Boolean']>;
};

export type BoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type BoolWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedBoolFilter>;
  _min?: InputMaybe<NestedBoolFilter>;
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolWithAggregatesFilter>;
};

export enum Career {
  Actor = 'ACTOR',
  Artist = 'ARTIST',
  Author = 'AUTHOR'
}

export type ChangePasswordInput = {
  password: Scalars['String'];
  token: Scalars['String'];
};

export type DateTimeFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['DateTime']>;
};

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type DateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type DateTimeNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedDateTimeNullableFilter>;
  _min?: InputMaybe<NestedDateTimeNullableFilter>;
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type DateTimeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedDateTimeFilter>;
  _min?: InputMaybe<NestedDateTimeFilter>;
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type EnumCareerNullableListFilter = {
  equals?: InputMaybe<Career[]>;
  has?: InputMaybe<Career>;
  hasEvery?: InputMaybe<Career[]>;
  hasSome?: InputMaybe<Career[]>;
  isEmpty?: InputMaybe<Scalars['Boolean']>;
};

export type EnumRoleFieldUpdateOperationsInput = {
  set?: InputMaybe<Role>;
};

export type EnumRoleFilter = {
  equals?: InputMaybe<Role>;
  in?: InputMaybe<Role[]>;
  not?: InputMaybe<NestedEnumRoleFilter>;
  notIn?: InputMaybe<Role[]>;
};

export type EnumRoleWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumRoleFilter>;
  _min?: InputMaybe<NestedEnumRoleFilter>;
  equals?: InputMaybe<Role>;
  in?: InputMaybe<Role[]>;
  not?: InputMaybe<NestedEnumRoleWithAggregatesFilter>;
  notIn?: InputMaybe<Role[]>;
};

export type FloatNullableFilter = {
  equals?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<Scalars['Float']>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<NestedFloatNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']>>;
};

export type FloatNullableWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatNullableFilter>;
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedFloatNullableFilter>;
  _min?: InputMaybe<NestedFloatNullableFilter>;
  _sum?: InputMaybe<NestedFloatNullableFilter>;
  equals?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<Scalars['Float']>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<NestedFloatNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']>>;
};

export type Genre = {
  __typename?: 'Genre';
  _count?: Maybe<GenreCount>;
  id: Scalars['Int'];
  movies: Movie[];
  name: Scalars['String'];
};

export type GenreMoviesArgs = {
  cursor?: InputMaybe<MovieWhereUniqueInput>;
  distinct?: InputMaybe<MovieScalarFieldEnum[]>;
  orderBy?: InputMaybe<MovieOrderByWithRelationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MovieWhereInput>;
};

export type GenreAvgAggregate = {
  __typename?: 'GenreAvgAggregate';
  id?: Maybe<Scalars['Float']>;
};

export type GenreAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type GenreCount = {
  __typename?: 'GenreCount';
  movies: Scalars['Int'];
};

export type GenreCountAggregate = {
  __typename?: 'GenreCountAggregate';
  _all: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['Int'];
};

export type GenreCountOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type GenreCreateInput = {
  movies?: InputMaybe<MovieCreateNestedManyWithoutGenresInput>;
  name: Scalars['String'];
};

export type GenreCreateManyInput = {
  id?: InputMaybe<Scalars['Int']>;
  name: Scalars['String'];
};

export type GenreCreateNestedManyWithoutMoviesInput = {
  connect?: InputMaybe<GenreWhereUniqueInput[]>;
  connectOrCreate?: InputMaybe<GenreCreateOrConnectWithoutMoviesInput[]>;
  create?: InputMaybe<GenreCreateWithoutMoviesInput[]>;
};

export type GenreCreateOrConnectWithoutMoviesInput = {
  create: GenreCreateWithoutMoviesInput;
  where: GenreWhereUniqueInput;
};

export type GenreCreateWithoutMoviesInput = {
  name: Scalars['String'];
};

export type GenreGroupBy = {
  __typename?: 'GenreGroupBy';
  _avg?: Maybe<GenreAvgAggregate>;
  _count?: Maybe<GenreCountAggregate>;
  _max?: Maybe<GenreMaxAggregate>;
  _min?: Maybe<GenreMinAggregate>;
  _sum?: Maybe<GenreSumAggregate>;
  id: Scalars['Int'];
  name: Scalars['String'];
};

export type GenreListRelationFilter = {
  every?: InputMaybe<GenreWhereInput>;
  none?: InputMaybe<GenreWhereInput>;
  some?: InputMaybe<GenreWhereInput>;
};

export type GenreMaxAggregate = {
  __typename?: 'GenreMaxAggregate';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

export type GenreMaxOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type GenreMinAggregate = {
  __typename?: 'GenreMinAggregate';
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

export type GenreMinOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type GenreOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type GenreOrderByWithAggregationInput = {
  _avg?: InputMaybe<GenreAvgOrderByAggregateInput>;
  _count?: InputMaybe<GenreCountOrderByAggregateInput>;
  _max?: InputMaybe<GenreMaxOrderByAggregateInput>;
  _min?: InputMaybe<GenreMinOrderByAggregateInput>;
  _sum?: InputMaybe<GenreSumOrderByAggregateInput>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
};

export type GenreOrderByWithRelationInput = {
  id?: InputMaybe<SortOrder>;
  movies?: InputMaybe<MovieOrderByRelationAggregateInput>;
  name?: InputMaybe<SortOrder>;
};

export enum GenreScalarFieldEnum {
  Id = 'id',
  Name = 'name'
}

export type GenreScalarWhereInput = {
  AND?: InputMaybe<GenreScalarWhereInput[]>;
  NOT?: InputMaybe<GenreScalarWhereInput[]>;
  OR?: InputMaybe<GenreScalarWhereInput[]>;
  id?: InputMaybe<IntFilter>;
  name?: InputMaybe<StringFilter>;
};

export type GenreScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<GenreScalarWhereWithAggregatesInput[]>;
  NOT?: InputMaybe<GenreScalarWhereWithAggregatesInput[]>;
  OR?: InputMaybe<GenreScalarWhereWithAggregatesInput[]>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
};

export type GenreSumAggregate = {
  __typename?: 'GenreSumAggregate';
  id?: Maybe<Scalars['Int']>;
};

export type GenreSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type GenreUpdateInput = {
  movies?: InputMaybe<MovieUpdateManyWithoutGenresNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type GenreUpdateManyMutationInput = {
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type GenreUpdateManyWithWhereWithoutMoviesInput = {
  data: GenreUpdateManyMutationInput;
  where: GenreScalarWhereInput;
};

export type GenreUpdateManyWithoutMoviesNestedInput = {
  connect?: InputMaybe<GenreWhereUniqueInput[]>;
  connectOrCreate?: InputMaybe<GenreCreateOrConnectWithoutMoviesInput[]>;
  create?: InputMaybe<GenreCreateWithoutMoviesInput[]>;
  delete?: InputMaybe<GenreWhereUniqueInput[]>;
  deleteMany?: InputMaybe<GenreScalarWhereInput[]>;
  disconnect?: InputMaybe<GenreWhereUniqueInput[]>;
  set?: InputMaybe<GenreWhereUniqueInput[]>;
  update?: InputMaybe<GenreUpdateWithWhereUniqueWithoutMoviesInput[]>;
  updateMany?: InputMaybe<GenreUpdateManyWithWhereWithoutMoviesInput[]>;
  upsert?: InputMaybe<GenreUpsertWithWhereUniqueWithoutMoviesInput[]>;
};

export type GenreUpdateWithWhereUniqueWithoutMoviesInput = {
  data: GenreUpdateWithoutMoviesInput;
  where: GenreWhereUniqueInput;
};

export type GenreUpdateWithoutMoviesInput = {
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type GenreUpsertWithWhereUniqueWithoutMoviesInput = {
  create: GenreCreateWithoutMoviesInput;
  update: GenreUpdateWithoutMoviesInput;
  where: GenreWhereUniqueInput;
};

export type GenreWhereInput = {
  AND?: InputMaybe<GenreWhereInput[]>;
  NOT?: InputMaybe<GenreWhereInput[]>;
  OR?: InputMaybe<GenreWhereInput[]>;
  id?: InputMaybe<IntFilter>;
  movies?: InputMaybe<MovieListRelationFilter>;
  name?: InputMaybe<StringFilter>;
};

export type GenreWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type IntFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Int']>;
  divide?: InputMaybe<Scalars['Int']>;
  increment?: InputMaybe<Scalars['Int']>;
  multiply?: InputMaybe<Scalars['Int']>;
  set?: InputMaybe<Scalars['Int']>;
};

export type IntFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type IntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type IntNullableWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatNullableFilter>;
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedIntNullableFilter>;
  _min?: InputMaybe<NestedIntNullableFilter>;
  _sum?: InputMaybe<NestedIntNullableFilter>;
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type IntWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedIntFilter>;
  _min?: InputMaybe<NestedIntFilter>;
  _sum?: InputMaybe<NestedIntFilter>;
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type LoginInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type Movie = {
  __typename?: 'Movie';
  _count?: Maybe<MovieCount>;
  actors: ActorInMovie[];
  aggregateMovieReview: AggregateMovieReview;
  backdrop: Scalars['String'];
  createdAt: Scalars['DateTime'];
  genres: Genre[];
  id: Scalars['Int'];
  isLiked: Scalars['Boolean'];
  isRated: Scalars['Boolean'];
  likes: MovieLike[];
  locked: Scalars['Boolean'];
  overview: Scalars['String'];
  poster: Scalars['String'];
  rating?: Maybe<Scalars['String']>;
  released?: Maybe<Scalars['DateTime']>;
  reviews: MovieReview[];
  runtime?: Maybe<Scalars['Float']>;
  tagline: Scalars['String'];
  title: Scalars['String'];
  trailer?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};

export type MovieActorsArgs = {
  cursor?: InputMaybe<ActorInMovieWhereUniqueInput>;
  distinct?: InputMaybe<ActorInMovieScalarFieldEnum[]>;
  orderBy?: InputMaybe<ActorInMovieOrderByWithRelationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ActorInMovieWhereInput>;
};

export type MovieAggregateMovieReviewArgs = {
  cursor?: InputMaybe<MovieReviewWhereUniqueInput>;
  orderBy?: InputMaybe<MovieReviewOrderByWithRelationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MovieReviewWhereInput>;
};

export type MovieGenresArgs = {
  cursor?: InputMaybe<GenreWhereUniqueInput>;
  distinct?: InputMaybe<GenreScalarFieldEnum[]>;
  orderBy?: InputMaybe<GenreOrderByWithRelationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<GenreWhereInput>;
};

export type MovieLikesArgs = {
  cursor?: InputMaybe<MovieLikeWhereUniqueInput>;
  distinct?: InputMaybe<MovieLikeScalarFieldEnum[]>;
  orderBy?: InputMaybe<MovieLikeOrderByWithRelationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MovieLikeWhereInput>;
};

export type MovieReviewsArgs = {
  cursor?: InputMaybe<MovieReviewWhereUniqueInput>;
  distinct?: InputMaybe<MovieReviewScalarFieldEnum[]>;
  orderBy?: InputMaybe<MovieReviewOrderByWithRelationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MovieReviewWhereInput>;
};

export type MovieAvgAggregate = {
  __typename?: 'MovieAvgAggregate';
  id?: Maybe<Scalars['Float']>;
  runtime?: Maybe<Scalars['Float']>;
};

export type MovieAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  runtime?: InputMaybe<SortOrder>;
};

export type MovieCount = {
  __typename?: 'MovieCount';
  actors: Scalars['Int'];
  genres: Scalars['Int'];
  likes: Scalars['Int'];
  reviews: Scalars['Int'];
};

export type MovieCountAggregate = {
  __typename?: 'MovieCountAggregate';
  _all: Scalars['Int'];
  backdrop: Scalars['Int'];
  createdAt: Scalars['Int'];
  id: Scalars['Int'];
  locked: Scalars['Int'];
  overview: Scalars['Int'];
  poster: Scalars['Int'];
  rating: Scalars['Int'];
  released: Scalars['Int'];
  runtime: Scalars['Int'];
  tagline: Scalars['Int'];
  title: Scalars['Int'];
  trailer: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type MovieCountOrderByAggregateInput = {
  backdrop?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  locked?: InputMaybe<SortOrder>;
  overview?: InputMaybe<SortOrder>;
  poster?: InputMaybe<SortOrder>;
  rating?: InputMaybe<SortOrder>;
  released?: InputMaybe<SortOrder>;
  runtime?: InputMaybe<SortOrder>;
  tagline?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  trailer?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type MovieCreateInput = {
  actors?: InputMaybe<ActorInMovieCreateNestedManyWithoutMovieInput>;
  backdrop?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  genres?: InputMaybe<GenreCreateNestedManyWithoutMoviesInput>;
  likes?: InputMaybe<MovieLikeCreateNestedManyWithoutMovieInput>;
  locked?: InputMaybe<Scalars['Boolean']>;
  overview: Scalars['String'];
  poster?: InputMaybe<Scalars['String']>;
  rating?: InputMaybe<Scalars['String']>;
  released?: InputMaybe<Scalars['DateTime']>;
  reviews?: InputMaybe<MovieReviewCreateNestedManyWithoutMovieInput>;
  runtime?: InputMaybe<Scalars['Float']>;
  tagline: Scalars['String'];
  title: Scalars['String'];
  trailer?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type MovieCreateManyInput = {
  backdrop?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  locked?: InputMaybe<Scalars['Boolean']>;
  overview: Scalars['String'];
  poster?: InputMaybe<Scalars['String']>;
  rating?: InputMaybe<Scalars['String']>;
  released?: InputMaybe<Scalars['DateTime']>;
  runtime?: InputMaybe<Scalars['Float']>;
  tagline: Scalars['String'];
  title: Scalars['String'];
  trailer?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type MovieCreateNestedManyWithoutGenresInput = {
  connect?: InputMaybe<MovieWhereUniqueInput[]>;
  connectOrCreate?: InputMaybe<MovieCreateOrConnectWithoutGenresInput[]>;
  create?: InputMaybe<MovieCreateWithoutGenresInput[]>;
};

export type MovieCreateNestedOneWithoutActorsInput = {
  connect?: InputMaybe<MovieWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MovieCreateOrConnectWithoutActorsInput>;
  create?: InputMaybe<MovieCreateWithoutActorsInput>;
};

export type MovieCreateNestedOneWithoutLikesInput = {
  connect?: InputMaybe<MovieWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MovieCreateOrConnectWithoutLikesInput>;
  create?: InputMaybe<MovieCreateWithoutLikesInput>;
};

export type MovieCreateNestedOneWithoutReviewsInput = {
  connect?: InputMaybe<MovieWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MovieCreateOrConnectWithoutReviewsInput>;
  create?: InputMaybe<MovieCreateWithoutReviewsInput>;
};

export type MovieCreateOrConnectWithoutActorsInput = {
  create: MovieCreateWithoutActorsInput;
  where: MovieWhereUniqueInput;
};

export type MovieCreateOrConnectWithoutGenresInput = {
  create: MovieCreateWithoutGenresInput;
  where: MovieWhereUniqueInput;
};

export type MovieCreateOrConnectWithoutLikesInput = {
  create: MovieCreateWithoutLikesInput;
  where: MovieWhereUniqueInput;
};

export type MovieCreateOrConnectWithoutReviewsInput = {
  create: MovieCreateWithoutReviewsInput;
  where: MovieWhereUniqueInput;
};

export type MovieCreateWithoutActorsInput = {
  backdrop?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  genres?: InputMaybe<GenreCreateNestedManyWithoutMoviesInput>;
  likes?: InputMaybe<MovieLikeCreateNestedManyWithoutMovieInput>;
  locked?: InputMaybe<Scalars['Boolean']>;
  overview: Scalars['String'];
  poster?: InputMaybe<Scalars['String']>;
  rating?: InputMaybe<Scalars['String']>;
  released?: InputMaybe<Scalars['DateTime']>;
  reviews?: InputMaybe<MovieReviewCreateNestedManyWithoutMovieInput>;
  runtime?: InputMaybe<Scalars['Float']>;
  tagline: Scalars['String'];
  title: Scalars['String'];
  trailer?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type MovieCreateWithoutGenresInput = {
  actors?: InputMaybe<ActorInMovieCreateNestedManyWithoutMovieInput>;
  backdrop?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  likes?: InputMaybe<MovieLikeCreateNestedManyWithoutMovieInput>;
  locked?: InputMaybe<Scalars['Boolean']>;
  overview: Scalars['String'];
  poster?: InputMaybe<Scalars['String']>;
  rating?: InputMaybe<Scalars['String']>;
  released?: InputMaybe<Scalars['DateTime']>;
  reviews?: InputMaybe<MovieReviewCreateNestedManyWithoutMovieInput>;
  runtime?: InputMaybe<Scalars['Float']>;
  tagline: Scalars['String'];
  title: Scalars['String'];
  trailer?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type MovieCreateWithoutLikesInput = {
  actors?: InputMaybe<ActorInMovieCreateNestedManyWithoutMovieInput>;
  backdrop?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  genres?: InputMaybe<GenreCreateNestedManyWithoutMoviesInput>;
  locked?: InputMaybe<Scalars['Boolean']>;
  overview: Scalars['String'];
  poster?: InputMaybe<Scalars['String']>;
  rating?: InputMaybe<Scalars['String']>;
  released?: InputMaybe<Scalars['DateTime']>;
  reviews?: InputMaybe<MovieReviewCreateNestedManyWithoutMovieInput>;
  runtime?: InputMaybe<Scalars['Float']>;
  tagline: Scalars['String'];
  title: Scalars['String'];
  trailer?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type MovieCreateWithoutReviewsInput = {
  actors?: InputMaybe<ActorInMovieCreateNestedManyWithoutMovieInput>;
  backdrop?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  genres?: InputMaybe<GenreCreateNestedManyWithoutMoviesInput>;
  likes?: InputMaybe<MovieLikeCreateNestedManyWithoutMovieInput>;
  locked?: InputMaybe<Scalars['Boolean']>;
  overview: Scalars['String'];
  poster?: InputMaybe<Scalars['String']>;
  rating?: InputMaybe<Scalars['String']>;
  released?: InputMaybe<Scalars['DateTime']>;
  runtime?: InputMaybe<Scalars['Float']>;
  tagline: Scalars['String'];
  title: Scalars['String'];
  trailer?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type MovieGroupBy = {
  __typename?: 'MovieGroupBy';
  _avg?: Maybe<MovieAvgAggregate>;
  _count?: Maybe<MovieCountAggregate>;
  _max?: Maybe<MovieMaxAggregate>;
  _min?: Maybe<MovieMinAggregate>;
  _sum?: Maybe<MovieSumAggregate>;
  backdrop: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  locked: Scalars['Boolean'];
  overview: Scalars['String'];
  poster: Scalars['String'];
  rating?: Maybe<Scalars['String']>;
  released?: Maybe<Scalars['DateTime']>;
  runtime?: Maybe<Scalars['Float']>;
  tagline: Scalars['String'];
  title: Scalars['String'];
  trailer?: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
};

export type MovieLike = {
  __typename?: 'MovieLike';
  createdAt: Scalars['DateTime'];
  movie: Movie;
  movieId: Scalars['Int'];
  user: User;
  userId: Scalars['Int'];
};

export type MovieLikeAvgAggregate = {
  __typename?: 'MovieLikeAvgAggregate';
  movieId?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

export type MovieLikeAvgOrderByAggregateInput = {
  movieId?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type MovieLikeCountAggregate = {
  __typename?: 'MovieLikeCountAggregate';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  movieId: Scalars['Int'];
  userId: Scalars['Int'];
};

export type MovieLikeCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  movieId?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type MovieLikeCreateCustomInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  movie: MovieCreateNestedOneWithoutLikesInput;
};

export type MovieLikeCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  movie: MovieCreateNestedOneWithoutLikesInput;
  user: UserCreateNestedOneWithoutLikedMoviesInput;
};

export type MovieLikeCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  movieId: Scalars['Int'];
  userId: Scalars['Int'];
};

export type MovieLikeCreateManyMovieInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  userId: Scalars['Int'];
};

export type MovieLikeCreateManyMovieInputEnvelope = {
  data: MovieLikeCreateManyMovieInput[];
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type MovieLikeCreateManyUserInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  movieId: Scalars['Int'];
};

export type MovieLikeCreateManyUserInputEnvelope = {
  data: MovieLikeCreateManyUserInput[];
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type MovieLikeCreateNestedManyWithoutMovieInput = {
  connect?: InputMaybe<MovieLikeWhereUniqueInput[]>;
  connectOrCreate?: InputMaybe<MovieLikeCreateOrConnectWithoutMovieInput[]>;
  create?: InputMaybe<MovieLikeCreateWithoutMovieInput[]>;
  createMany?: InputMaybe<MovieLikeCreateManyMovieInputEnvelope>;
};

export type MovieLikeCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<MovieLikeWhereUniqueInput[]>;
  connectOrCreate?: InputMaybe<MovieLikeCreateOrConnectWithoutUserInput[]>;
  create?: InputMaybe<MovieLikeCreateWithoutUserInput[]>;
  createMany?: InputMaybe<MovieLikeCreateManyUserInputEnvelope>;
};

export type MovieLikeCreateOrConnectWithoutMovieInput = {
  create: MovieLikeCreateWithoutMovieInput;
  where: MovieLikeWhereUniqueInput;
};

export type MovieLikeCreateOrConnectWithoutUserInput = {
  create: MovieLikeCreateWithoutUserInput;
  where: MovieLikeWhereUniqueInput;
};

export type MovieLikeCreateWithoutMovieInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutLikedMoviesInput;
};

export type MovieLikeCreateWithoutUserInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  movie: MovieCreateNestedOneWithoutLikesInput;
};

export type MovieLikeGroupBy = {
  __typename?: 'MovieLikeGroupBy';
  _avg?: Maybe<MovieLikeAvgAggregate>;
  _count?: Maybe<MovieLikeCountAggregate>;
  _max?: Maybe<MovieLikeMaxAggregate>;
  _min?: Maybe<MovieLikeMinAggregate>;
  _sum?: Maybe<MovieLikeSumAggregate>;
  createdAt: Scalars['DateTime'];
  movieId: Scalars['Int'];
  userId: Scalars['Int'];
};

export type MovieLikeListRelationFilter = {
  every?: InputMaybe<MovieLikeWhereInput>;
  none?: InputMaybe<MovieLikeWhereInput>;
  some?: InputMaybe<MovieLikeWhereInput>;
};

export type MovieLikeMaxAggregate = {
  __typename?: 'MovieLikeMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  movieId?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

export type MovieLikeMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  movieId?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type MovieLikeMinAggregate = {
  __typename?: 'MovieLikeMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  movieId?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

export type MovieLikeMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  movieId?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type MovieLikeOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type MovieLikeOrderByWithAggregationInput = {
  _avg?: InputMaybe<MovieLikeAvgOrderByAggregateInput>;
  _count?: InputMaybe<MovieLikeCountOrderByAggregateInput>;
  _max?: InputMaybe<MovieLikeMaxOrderByAggregateInput>;
  _min?: InputMaybe<MovieLikeMinOrderByAggregateInput>;
  _sum?: InputMaybe<MovieLikeSumOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  movieId?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type MovieLikeOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  movie?: InputMaybe<MovieOrderByWithRelationInput>;
  movieId?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
};

export enum MovieLikeScalarFieldEnum {
  CreatedAt = 'createdAt',
  MovieId = 'movieId',
  UserId = 'userId'
}

export type MovieLikeScalarWhereInput = {
  AND?: InputMaybe<MovieLikeScalarWhereInput[]>;
  NOT?: InputMaybe<MovieLikeScalarWhereInput[]>;
  OR?: InputMaybe<MovieLikeScalarWhereInput[]>;
  createdAt?: InputMaybe<DateTimeFilter>;
  movieId?: InputMaybe<IntFilter>;
  userId?: InputMaybe<IntFilter>;
};

export type MovieLikeScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<MovieLikeScalarWhereWithAggregatesInput[]>;
  NOT?: InputMaybe<MovieLikeScalarWhereWithAggregatesInput[]>;
  OR?: InputMaybe<MovieLikeScalarWhereWithAggregatesInput[]>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  movieId?: InputMaybe<IntWithAggregatesFilter>;
  userId?: InputMaybe<IntWithAggregatesFilter>;
};

export type MovieLikeSumAggregate = {
  __typename?: 'MovieLikeSumAggregate';
  movieId?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

export type MovieLikeSumOrderByAggregateInput = {
  movieId?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type MovieLikeUpdateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  movie?: InputMaybe<MovieUpdateOneRequiredWithoutLikesNestedInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutLikedMoviesNestedInput>;
};

export type MovieLikeUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type MovieLikeUpdateManyWithWhereWithoutMovieInput = {
  data: MovieLikeUpdateManyMutationInput;
  where: MovieLikeScalarWhereInput;
};

export type MovieLikeUpdateManyWithWhereWithoutUserInput = {
  data: MovieLikeUpdateManyMutationInput;
  where: MovieLikeScalarWhereInput;
};

export type MovieLikeUpdateManyWithoutMovieNestedInput = {
  connect?: InputMaybe<MovieLikeWhereUniqueInput[]>;
  connectOrCreate?: InputMaybe<MovieLikeCreateOrConnectWithoutMovieInput[]>;
  create?: InputMaybe<MovieLikeCreateWithoutMovieInput[]>;
  createMany?: InputMaybe<MovieLikeCreateManyMovieInputEnvelope>;
  delete?: InputMaybe<MovieLikeWhereUniqueInput[]>;
  deleteMany?: InputMaybe<MovieLikeScalarWhereInput[]>;
  disconnect?: InputMaybe<MovieLikeWhereUniqueInput[]>;
  set?: InputMaybe<MovieLikeWhereUniqueInput[]>;
  update?: InputMaybe<MovieLikeUpdateWithWhereUniqueWithoutMovieInput[]>;
  updateMany?: InputMaybe<MovieLikeUpdateManyWithWhereWithoutMovieInput[]>;
  upsert?: InputMaybe<MovieLikeUpsertWithWhereUniqueWithoutMovieInput[]>;
};

export type MovieLikeUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<MovieLikeWhereUniqueInput[]>;
  connectOrCreate?: InputMaybe<MovieLikeCreateOrConnectWithoutUserInput[]>;
  create?: InputMaybe<MovieLikeCreateWithoutUserInput[]>;
  createMany?: InputMaybe<MovieLikeCreateManyUserInputEnvelope>;
  delete?: InputMaybe<MovieLikeWhereUniqueInput[]>;
  deleteMany?: InputMaybe<MovieLikeScalarWhereInput[]>;
  disconnect?: InputMaybe<MovieLikeWhereUniqueInput[]>;
  set?: InputMaybe<MovieLikeWhereUniqueInput[]>;
  update?: InputMaybe<MovieLikeUpdateWithWhereUniqueWithoutUserInput[]>;
  updateMany?: InputMaybe<MovieLikeUpdateManyWithWhereWithoutUserInput[]>;
  upsert?: InputMaybe<MovieLikeUpsertWithWhereUniqueWithoutUserInput[]>;
};

export type MovieLikeUpdateWithWhereUniqueWithoutMovieInput = {
  data: MovieLikeUpdateWithoutMovieInput;
  where: MovieLikeWhereUniqueInput;
};

export type MovieLikeUpdateWithWhereUniqueWithoutUserInput = {
  data: MovieLikeUpdateWithoutUserInput;
  where: MovieLikeWhereUniqueInput;
};

export type MovieLikeUpdateWithoutMovieInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutLikedMoviesNestedInput>;
};

export type MovieLikeUpdateWithoutUserInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  movie?: InputMaybe<MovieUpdateOneRequiredWithoutLikesNestedInput>;
};

export type MovieLikeUpsertWithWhereUniqueWithoutMovieInput = {
  create: MovieLikeCreateWithoutMovieInput;
  update: MovieLikeUpdateWithoutMovieInput;
  where: MovieLikeWhereUniqueInput;
};

export type MovieLikeUpsertWithWhereUniqueWithoutUserInput = {
  create: MovieLikeCreateWithoutUserInput;
  update: MovieLikeUpdateWithoutUserInput;
  where: MovieLikeWhereUniqueInput;
};

export type MovieLikeUserIdMovieIdCompoundUniqueInput = {
  movieId: Scalars['Int'];
  userId: Scalars['Int'];
};

export type MovieLikeWhereInput = {
  AND?: InputMaybe<MovieLikeWhereInput[]>;
  NOT?: InputMaybe<MovieLikeWhereInput[]>;
  OR?: InputMaybe<MovieLikeWhereInput[]>;
  createdAt?: InputMaybe<DateTimeFilter>;
  movie?: InputMaybe<MovieRelationFilter>;
  movieId?: InputMaybe<IntFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<IntFilter>;
};

export type MovieLikeWhereUniqueInput = {
  userId_movieId?: InputMaybe<MovieLikeUserIdMovieIdCompoundUniqueInput>;
};

export type MovieListRelationFilter = {
  every?: InputMaybe<MovieWhereInput>;
  none?: InputMaybe<MovieWhereInput>;
  some?: InputMaybe<MovieWhereInput>;
};

export type MovieMaxAggregate = {
  __typename?: 'MovieMaxAggregate';
  backdrop?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  locked?: Maybe<Scalars['Boolean']>;
  overview?: Maybe<Scalars['String']>;
  poster?: Maybe<Scalars['String']>;
  rating?: Maybe<Scalars['String']>;
  released?: Maybe<Scalars['DateTime']>;
  runtime?: Maybe<Scalars['Float']>;
  tagline?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  trailer?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type MovieMaxOrderByAggregateInput = {
  backdrop?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  locked?: InputMaybe<SortOrder>;
  overview?: InputMaybe<SortOrder>;
  poster?: InputMaybe<SortOrder>;
  rating?: InputMaybe<SortOrder>;
  released?: InputMaybe<SortOrder>;
  runtime?: InputMaybe<SortOrder>;
  tagline?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  trailer?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type MovieMinAggregate = {
  __typename?: 'MovieMinAggregate';
  backdrop?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  locked?: Maybe<Scalars['Boolean']>;
  overview?: Maybe<Scalars['String']>;
  poster?: Maybe<Scalars['String']>;
  rating?: Maybe<Scalars['String']>;
  released?: Maybe<Scalars['DateTime']>;
  runtime?: Maybe<Scalars['Float']>;
  tagline?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  trailer?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type MovieMinOrderByAggregateInput = {
  backdrop?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  locked?: InputMaybe<SortOrder>;
  overview?: InputMaybe<SortOrder>;
  poster?: InputMaybe<SortOrder>;
  rating?: InputMaybe<SortOrder>;
  released?: InputMaybe<SortOrder>;
  runtime?: InputMaybe<SortOrder>;
  tagline?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  trailer?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type MovieOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type MovieOrderByWithAggregationInput = {
  _avg?: InputMaybe<MovieAvgOrderByAggregateInput>;
  _count?: InputMaybe<MovieCountOrderByAggregateInput>;
  _max?: InputMaybe<MovieMaxOrderByAggregateInput>;
  _min?: InputMaybe<MovieMinOrderByAggregateInput>;
  _sum?: InputMaybe<MovieSumOrderByAggregateInput>;
  backdrop?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  locked?: InputMaybe<SortOrder>;
  overview?: InputMaybe<SortOrder>;
  poster?: InputMaybe<SortOrder>;
  rating?: InputMaybe<SortOrder>;
  released?: InputMaybe<SortOrder>;
  runtime?: InputMaybe<SortOrder>;
  tagline?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  trailer?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type MovieOrderByWithRelationInput = {
  actors?: InputMaybe<ActorInMovieOrderByRelationAggregateInput>;
  backdrop?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  genres?: InputMaybe<GenreOrderByRelationAggregateInput>;
  id?: InputMaybe<SortOrder>;
  likes?: InputMaybe<MovieLikeOrderByRelationAggregateInput>;
  locked?: InputMaybe<SortOrder>;
  overview?: InputMaybe<SortOrder>;
  poster?: InputMaybe<SortOrder>;
  rating?: InputMaybe<SortOrder>;
  released?: InputMaybe<SortOrder>;
  reviews?: InputMaybe<MovieReviewOrderByRelationAggregateInput>;
  runtime?: InputMaybe<SortOrder>;
  tagline?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  trailer?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type MovieRelationFilter = {
  is?: InputMaybe<MovieWhereInput>;
  isNot?: InputMaybe<MovieWhereInput>;
};

export type MovieReview = {
  __typename?: 'MovieReview';
  _count?: Maybe<MovieReviewCount>;
  likes: MovieReviewLike[];
  movie: Movie;
  movieId: Scalars['Int'];
  rating: Scalars['Int'];
  review?: Maybe<Scalars['String']>;
  user: User;
  userId: Scalars['Int'];
};

export type MovieReviewLikesArgs = {
  cursor?: InputMaybe<MovieReviewLikeWhereUniqueInput>;
  distinct?: InputMaybe<MovieReviewLikeScalarFieldEnum[]>;
  orderBy?: InputMaybe<MovieReviewLikeOrderByWithRelationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MovieReviewLikeWhereInput>;
};

export type MovieReviewAvgAggregate = {
  __typename?: 'MovieReviewAvgAggregate';
  movieId?: Maybe<Scalars['Float']>;
  rating?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

export type MovieReviewAvgOrderByAggregateInput = {
  movieId?: InputMaybe<SortOrder>;
  rating?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type MovieReviewCount = {
  __typename?: 'MovieReviewCount';
  likes: Scalars['Int'];
};

export type MovieReviewCountAggregate = {
  __typename?: 'MovieReviewCountAggregate';
  _all: Scalars['Int'];
  movieId: Scalars['Int'];
  rating: Scalars['Int'];
  review: Scalars['Int'];
  userId: Scalars['Int'];
};

export type MovieReviewCountOrderByAggregateInput = {
  movieId?: InputMaybe<SortOrder>;
  rating?: InputMaybe<SortOrder>;
  review?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type MovieReviewCreateCustomInput = {
  likes?: InputMaybe<MovieReviewLikeCreateNestedManyWithoutMovieReviewInput>;
  movie: MovieCreateNestedOneWithoutReviewsInput;
  rating: Scalars['Int'];
  review?: InputMaybe<Scalars['String']>;
};

export type MovieReviewCreateInput = {
  likes?: InputMaybe<MovieReviewLikeCreateNestedManyWithoutMovieReviewInput>;
  movie: MovieCreateNestedOneWithoutReviewsInput;
  rating: Scalars['Int'];
  review?: InputMaybe<Scalars['String']>;
  user: UserCreateNestedOneWithoutMovieReviewsInput;
};

export type MovieReviewCreateManyInput = {
  movieId: Scalars['Int'];
  rating: Scalars['Int'];
  review?: InputMaybe<Scalars['String']>;
  userId: Scalars['Int'];
};

export type MovieReviewCreateManyMovieInput = {
  rating: Scalars['Int'];
  review?: InputMaybe<Scalars['String']>;
  userId: Scalars['Int'];
};

export type MovieReviewCreateManyMovieInputEnvelope = {
  data: MovieReviewCreateManyMovieInput[];
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type MovieReviewCreateManyUserInput = {
  movieId: Scalars['Int'];
  rating: Scalars['Int'];
  review?: InputMaybe<Scalars['String']>;
};

export type MovieReviewCreateManyUserInputEnvelope = {
  data: MovieReviewCreateManyUserInput[];
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type MovieReviewCreateNestedManyWithoutMovieInput = {
  connect?: InputMaybe<MovieReviewWhereUniqueInput[]>;
  connectOrCreate?: InputMaybe<MovieReviewCreateOrConnectWithoutMovieInput[]>;
  create?: InputMaybe<MovieReviewCreateWithoutMovieInput[]>;
  createMany?: InputMaybe<MovieReviewCreateManyMovieInputEnvelope>;
};

export type MovieReviewCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<MovieReviewWhereUniqueInput[]>;
  connectOrCreate?: InputMaybe<MovieReviewCreateOrConnectWithoutUserInput[]>;
  create?: InputMaybe<MovieReviewCreateWithoutUserInput[]>;
  createMany?: InputMaybe<MovieReviewCreateManyUserInputEnvelope>;
};

export type MovieReviewCreateNestedOneWithoutLikesInput = {
  connect?: InputMaybe<MovieReviewWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MovieReviewCreateOrConnectWithoutLikesInput>;
  create?: InputMaybe<MovieReviewCreateWithoutLikesInput>;
};

export type MovieReviewCreateOrConnectWithoutLikesInput = {
  create: MovieReviewCreateWithoutLikesInput;
  where: MovieReviewWhereUniqueInput;
};

export type MovieReviewCreateOrConnectWithoutMovieInput = {
  create: MovieReviewCreateWithoutMovieInput;
  where: MovieReviewWhereUniqueInput;
};

export type MovieReviewCreateOrConnectWithoutUserInput = {
  create: MovieReviewCreateWithoutUserInput;
  where: MovieReviewWhereUniqueInput;
};

export type MovieReviewCreateWithoutLikesInput = {
  movie: MovieCreateNestedOneWithoutReviewsInput;
  rating: Scalars['Int'];
  review?: InputMaybe<Scalars['String']>;
  user: UserCreateNestedOneWithoutMovieReviewsInput;
};

export type MovieReviewCreateWithoutMovieInput = {
  likes?: InputMaybe<MovieReviewLikeCreateNestedManyWithoutMovieReviewInput>;
  rating: Scalars['Int'];
  review?: InputMaybe<Scalars['String']>;
  user: UserCreateNestedOneWithoutMovieReviewsInput;
};

export type MovieReviewCreateWithoutUserInput = {
  likes?: InputMaybe<MovieReviewLikeCreateNestedManyWithoutMovieReviewInput>;
  movie: MovieCreateNestedOneWithoutReviewsInput;
  rating: Scalars['Int'];
  review?: InputMaybe<Scalars['String']>;
};

export type MovieReviewGroupBy = {
  __typename?: 'MovieReviewGroupBy';
  _avg?: Maybe<MovieReviewAvgAggregate>;
  _count?: Maybe<MovieReviewCountAggregate>;
  _max?: Maybe<MovieReviewMaxAggregate>;
  _min?: Maybe<MovieReviewMinAggregate>;
  _sum?: Maybe<MovieReviewSumAggregate>;
  movieId: Scalars['Int'];
  rating: Scalars['Int'];
  review?: Maybe<Scalars['String']>;
  userId: Scalars['Int'];
};

export type MovieReviewLike = {
  __typename?: 'MovieReviewLike';
  createdAt: Scalars['DateTime'];
  movieReview: MovieReview;
  reviewMovieId: Scalars['Int'];
  reviewUserId: Scalars['Int'];
  user: User;
  userId: Scalars['Int'];
};

export type MovieReviewLikeAvgAggregate = {
  __typename?: 'MovieReviewLikeAvgAggregate';
  reviewMovieId?: Maybe<Scalars['Float']>;
  reviewUserId?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['Float']>;
};

export type MovieReviewLikeAvgOrderByAggregateInput = {
  reviewMovieId?: InputMaybe<SortOrder>;
  reviewUserId?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type MovieReviewLikeCountAggregate = {
  __typename?: 'MovieReviewLikeCountAggregate';
  _all: Scalars['Int'];
  createdAt: Scalars['Int'];
  reviewMovieId: Scalars['Int'];
  reviewUserId: Scalars['Int'];
  userId: Scalars['Int'];
};

export type MovieReviewLikeCountOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  reviewMovieId?: InputMaybe<SortOrder>;
  reviewUserId?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type MovieReviewLikeCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  movieReview: MovieReviewCreateNestedOneWithoutLikesInput;
  user: UserCreateNestedOneWithoutLikedMovieReviewsInput;
};

export type MovieReviewLikeCreateManyInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  reviewMovieId: Scalars['Int'];
  reviewUserId: Scalars['Int'];
  userId: Scalars['Int'];
};

export type MovieReviewLikeCreateManyMovieReviewInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  userId: Scalars['Int'];
};

export type MovieReviewLikeCreateManyMovieReviewInputEnvelope = {
  data: MovieReviewLikeCreateManyMovieReviewInput[];
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type MovieReviewLikeCreateManyUserInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  reviewMovieId: Scalars['Int'];
  reviewUserId: Scalars['Int'];
};

export type MovieReviewLikeCreateManyUserInputEnvelope = {
  data: MovieReviewLikeCreateManyUserInput[];
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type MovieReviewLikeCreateNestedManyWithoutMovieReviewInput = {
  connect?: InputMaybe<MovieReviewLikeWhereUniqueInput[]>;
  connectOrCreate?: InputMaybe<MovieReviewLikeCreateOrConnectWithoutMovieReviewInput[]>;
  create?: InputMaybe<MovieReviewLikeCreateWithoutMovieReviewInput[]>;
  createMany?: InputMaybe<MovieReviewLikeCreateManyMovieReviewInputEnvelope>;
};

export type MovieReviewLikeCreateNestedManyWithoutUserInput = {
  connect?: InputMaybe<MovieReviewLikeWhereUniqueInput[]>;
  connectOrCreate?: InputMaybe<MovieReviewLikeCreateOrConnectWithoutUserInput[]>;
  create?: InputMaybe<MovieReviewLikeCreateWithoutUserInput[]>;
  createMany?: InputMaybe<MovieReviewLikeCreateManyUserInputEnvelope>;
};

export type MovieReviewLikeCreateOrConnectWithoutMovieReviewInput = {
  create: MovieReviewLikeCreateWithoutMovieReviewInput;
  where: MovieReviewLikeWhereUniqueInput;
};

export type MovieReviewLikeCreateOrConnectWithoutUserInput = {
  create: MovieReviewLikeCreateWithoutUserInput;
  where: MovieReviewLikeWhereUniqueInput;
};

export type MovieReviewLikeCreateWithoutMovieReviewInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  user: UserCreateNestedOneWithoutLikedMovieReviewsInput;
};

export type MovieReviewLikeCreateWithoutUserInput = {
  createdAt?: InputMaybe<Scalars['DateTime']>;
  movieReview: MovieReviewCreateNestedOneWithoutLikesInput;
};

export type MovieReviewLikeGroupBy = {
  __typename?: 'MovieReviewLikeGroupBy';
  _avg?: Maybe<MovieReviewLikeAvgAggregate>;
  _count?: Maybe<MovieReviewLikeCountAggregate>;
  _max?: Maybe<MovieReviewLikeMaxAggregate>;
  _min?: Maybe<MovieReviewLikeMinAggregate>;
  _sum?: Maybe<MovieReviewLikeSumAggregate>;
  createdAt: Scalars['DateTime'];
  reviewMovieId: Scalars['Int'];
  reviewUserId: Scalars['Int'];
  userId: Scalars['Int'];
};

export type MovieReviewLikeListRelationFilter = {
  every?: InputMaybe<MovieReviewLikeWhereInput>;
  none?: InputMaybe<MovieReviewLikeWhereInput>;
  some?: InputMaybe<MovieReviewLikeWhereInput>;
};

export type MovieReviewLikeMaxAggregate = {
  __typename?: 'MovieReviewLikeMaxAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  reviewMovieId?: Maybe<Scalars['Int']>;
  reviewUserId?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

export type MovieReviewLikeMaxOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  reviewMovieId?: InputMaybe<SortOrder>;
  reviewUserId?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type MovieReviewLikeMinAggregate = {
  __typename?: 'MovieReviewLikeMinAggregate';
  createdAt?: Maybe<Scalars['DateTime']>;
  reviewMovieId?: Maybe<Scalars['Int']>;
  reviewUserId?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

export type MovieReviewLikeMinOrderByAggregateInput = {
  createdAt?: InputMaybe<SortOrder>;
  reviewMovieId?: InputMaybe<SortOrder>;
  reviewUserId?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type MovieReviewLikeOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type MovieReviewLikeOrderByWithAggregationInput = {
  _avg?: InputMaybe<MovieReviewLikeAvgOrderByAggregateInput>;
  _count?: InputMaybe<MovieReviewLikeCountOrderByAggregateInput>;
  _max?: InputMaybe<MovieReviewLikeMaxOrderByAggregateInput>;
  _min?: InputMaybe<MovieReviewLikeMinOrderByAggregateInput>;
  _sum?: InputMaybe<MovieReviewLikeSumOrderByAggregateInput>;
  createdAt?: InputMaybe<SortOrder>;
  reviewMovieId?: InputMaybe<SortOrder>;
  reviewUserId?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type MovieReviewLikeOrderByWithRelationInput = {
  createdAt?: InputMaybe<SortOrder>;
  movieReview?: InputMaybe<MovieReviewOrderByWithRelationInput>;
  reviewMovieId?: InputMaybe<SortOrder>;
  reviewUserId?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
};

export enum MovieReviewLikeScalarFieldEnum {
  CreatedAt = 'createdAt',
  ReviewMovieId = 'reviewMovieId',
  ReviewUserId = 'reviewUserId',
  UserId = 'userId'
}

export type MovieReviewLikeScalarWhereInput = {
  AND?: InputMaybe<MovieReviewLikeScalarWhereInput[]>;
  NOT?: InputMaybe<MovieReviewLikeScalarWhereInput[]>;
  OR?: InputMaybe<MovieReviewLikeScalarWhereInput[]>;
  createdAt?: InputMaybe<DateTimeFilter>;
  reviewMovieId?: InputMaybe<IntFilter>;
  reviewUserId?: InputMaybe<IntFilter>;
  userId?: InputMaybe<IntFilter>;
};

export type MovieReviewLikeScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<MovieReviewLikeScalarWhereWithAggregatesInput[]>;
  NOT?: InputMaybe<MovieReviewLikeScalarWhereWithAggregatesInput[]>;
  OR?: InputMaybe<MovieReviewLikeScalarWhereWithAggregatesInput[]>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  reviewMovieId?: InputMaybe<IntWithAggregatesFilter>;
  reviewUserId?: InputMaybe<IntWithAggregatesFilter>;
  userId?: InputMaybe<IntWithAggregatesFilter>;
};

export type MovieReviewLikeSumAggregate = {
  __typename?: 'MovieReviewLikeSumAggregate';
  reviewMovieId?: Maybe<Scalars['Int']>;
  reviewUserId?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

export type MovieReviewLikeSumOrderByAggregateInput = {
  reviewMovieId?: InputMaybe<SortOrder>;
  reviewUserId?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type MovieReviewLikeUpdateInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  movieReview?: InputMaybe<MovieReviewUpdateOneRequiredWithoutLikesNestedInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutLikedMovieReviewsNestedInput>;
};

export type MovieReviewLikeUpdateManyMutationInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type MovieReviewLikeUpdateManyWithWhereWithoutMovieReviewInput = {
  data: MovieReviewLikeUpdateManyMutationInput;
  where: MovieReviewLikeScalarWhereInput;
};

export type MovieReviewLikeUpdateManyWithWhereWithoutUserInput = {
  data: MovieReviewLikeUpdateManyMutationInput;
  where: MovieReviewLikeScalarWhereInput;
};

export type MovieReviewLikeUpdateManyWithoutMovieReviewNestedInput = {
  connect?: InputMaybe<MovieReviewLikeWhereUniqueInput[]>;
  connectOrCreate?: InputMaybe<MovieReviewLikeCreateOrConnectWithoutMovieReviewInput[]>;
  create?: InputMaybe<MovieReviewLikeCreateWithoutMovieReviewInput[]>;
  createMany?: InputMaybe<MovieReviewLikeCreateManyMovieReviewInputEnvelope>;
  delete?: InputMaybe<MovieReviewLikeWhereUniqueInput[]>;
  deleteMany?: InputMaybe<MovieReviewLikeScalarWhereInput[]>;
  disconnect?: InputMaybe<MovieReviewLikeWhereUniqueInput[]>;
  set?: InputMaybe<MovieReviewLikeWhereUniqueInput[]>;
  update?: InputMaybe<MovieReviewLikeUpdateWithWhereUniqueWithoutMovieReviewInput[]>;
  updateMany?: InputMaybe<MovieReviewLikeUpdateManyWithWhereWithoutMovieReviewInput[]>;
  upsert?: InputMaybe<MovieReviewLikeUpsertWithWhereUniqueWithoutMovieReviewInput[]>;
};

export type MovieReviewLikeUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<MovieReviewLikeWhereUniqueInput[]>;
  connectOrCreate?: InputMaybe<MovieReviewLikeCreateOrConnectWithoutUserInput[]>;
  create?: InputMaybe<MovieReviewLikeCreateWithoutUserInput[]>;
  createMany?: InputMaybe<MovieReviewLikeCreateManyUserInputEnvelope>;
  delete?: InputMaybe<MovieReviewLikeWhereUniqueInput[]>;
  deleteMany?: InputMaybe<MovieReviewLikeScalarWhereInput[]>;
  disconnect?: InputMaybe<MovieReviewLikeWhereUniqueInput[]>;
  set?: InputMaybe<MovieReviewLikeWhereUniqueInput[]>;
  update?: InputMaybe<MovieReviewLikeUpdateWithWhereUniqueWithoutUserInput[]>;
  updateMany?: InputMaybe<MovieReviewLikeUpdateManyWithWhereWithoutUserInput[]>;
  upsert?: InputMaybe<MovieReviewLikeUpsertWithWhereUniqueWithoutUserInput[]>;
};

export type MovieReviewLikeUpdateWithWhereUniqueWithoutMovieReviewInput = {
  data: MovieReviewLikeUpdateWithoutMovieReviewInput;
  where: MovieReviewLikeWhereUniqueInput;
};

export type MovieReviewLikeUpdateWithWhereUniqueWithoutUserInput = {
  data: MovieReviewLikeUpdateWithoutUserInput;
  where: MovieReviewLikeWhereUniqueInput;
};

export type MovieReviewLikeUpdateWithoutMovieReviewInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutLikedMovieReviewsNestedInput>;
};

export type MovieReviewLikeUpdateWithoutUserInput = {
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  movieReview?: InputMaybe<MovieReviewUpdateOneRequiredWithoutLikesNestedInput>;
};

export type MovieReviewLikeUpsertWithWhereUniqueWithoutMovieReviewInput = {
  create: MovieReviewLikeCreateWithoutMovieReviewInput;
  update: MovieReviewLikeUpdateWithoutMovieReviewInput;
  where: MovieReviewLikeWhereUniqueInput;
};

export type MovieReviewLikeUpsertWithWhereUniqueWithoutUserInput = {
  create: MovieReviewLikeCreateWithoutUserInput;
  update: MovieReviewLikeUpdateWithoutUserInput;
  where: MovieReviewLikeWhereUniqueInput;
};

export type MovieReviewLikeUserIdReviewUserIdReviewMovieIdCompoundUniqueInput = {
  reviewMovieId: Scalars['Int'];
  reviewUserId: Scalars['Int'];
  userId: Scalars['Int'];
};

export type MovieReviewLikeWhereInput = {
  AND?: InputMaybe<MovieReviewLikeWhereInput[]>;
  NOT?: InputMaybe<MovieReviewLikeWhereInput[]>;
  OR?: InputMaybe<MovieReviewLikeWhereInput[]>;
  createdAt?: InputMaybe<DateTimeFilter>;
  movieReview?: InputMaybe<MovieReviewRelationFilter>;
  reviewMovieId?: InputMaybe<IntFilter>;
  reviewUserId?: InputMaybe<IntFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<IntFilter>;
};

export type MovieReviewLikeWhereUniqueInput = {
  userId_reviewUserId_reviewMovieId?: InputMaybe<MovieReviewLikeUserIdReviewUserIdReviewMovieIdCompoundUniqueInput>;
};

export type MovieReviewListRelationFilter = {
  every?: InputMaybe<MovieReviewWhereInput>;
  none?: InputMaybe<MovieReviewWhereInput>;
  some?: InputMaybe<MovieReviewWhereInput>;
};

export type MovieReviewMaxAggregate = {
  __typename?: 'MovieReviewMaxAggregate';
  movieId?: Maybe<Scalars['Int']>;
  rating?: Maybe<Scalars['Int']>;
  review?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['Int']>;
};

export type MovieReviewMaxOrderByAggregateInput = {
  movieId?: InputMaybe<SortOrder>;
  rating?: InputMaybe<SortOrder>;
  review?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type MovieReviewMinAggregate = {
  __typename?: 'MovieReviewMinAggregate';
  movieId?: Maybe<Scalars['Int']>;
  rating?: Maybe<Scalars['Int']>;
  review?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['Int']>;
};

export type MovieReviewMinOrderByAggregateInput = {
  movieId?: InputMaybe<SortOrder>;
  rating?: InputMaybe<SortOrder>;
  review?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type MovieReviewOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type MovieReviewOrderByWithAggregationInput = {
  _avg?: InputMaybe<MovieReviewAvgOrderByAggregateInput>;
  _count?: InputMaybe<MovieReviewCountOrderByAggregateInput>;
  _max?: InputMaybe<MovieReviewMaxOrderByAggregateInput>;
  _min?: InputMaybe<MovieReviewMinOrderByAggregateInput>;
  _sum?: InputMaybe<MovieReviewSumOrderByAggregateInput>;
  movieId?: InputMaybe<SortOrder>;
  rating?: InputMaybe<SortOrder>;
  review?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type MovieReviewOrderByWithRelationInput = {
  likes?: InputMaybe<MovieReviewLikeOrderByRelationAggregateInput>;
  movie?: InputMaybe<MovieOrderByWithRelationInput>;
  movieId?: InputMaybe<SortOrder>;
  rating?: InputMaybe<SortOrder>;
  review?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
};

export type MovieReviewRelationFilter = {
  is?: InputMaybe<MovieReviewWhereInput>;
  isNot?: InputMaybe<MovieReviewWhereInput>;
};

export enum MovieReviewScalarFieldEnum {
  MovieId = 'movieId',
  Rating = 'rating',
  Review = 'review',
  UserId = 'userId'
}

export type MovieReviewScalarWhereInput = {
  AND?: InputMaybe<MovieReviewScalarWhereInput[]>;
  NOT?: InputMaybe<MovieReviewScalarWhereInput[]>;
  OR?: InputMaybe<MovieReviewScalarWhereInput[]>;
  movieId?: InputMaybe<IntFilter>;
  rating?: InputMaybe<IntFilter>;
  review?: InputMaybe<StringNullableFilter>;
  userId?: InputMaybe<IntFilter>;
};

export type MovieReviewScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<MovieReviewScalarWhereWithAggregatesInput[]>;
  NOT?: InputMaybe<MovieReviewScalarWhereWithAggregatesInput[]>;
  OR?: InputMaybe<MovieReviewScalarWhereWithAggregatesInput[]>;
  movieId?: InputMaybe<IntWithAggregatesFilter>;
  rating?: InputMaybe<IntWithAggregatesFilter>;
  review?: InputMaybe<StringNullableWithAggregatesFilter>;
  userId?: InputMaybe<IntWithAggregatesFilter>;
};

export type MovieReviewSumAggregate = {
  __typename?: 'MovieReviewSumAggregate';
  movieId?: Maybe<Scalars['Int']>;
  rating?: Maybe<Scalars['Int']>;
  userId?: Maybe<Scalars['Int']>;
};

export type MovieReviewSumOrderByAggregateInput = {
  movieId?: InputMaybe<SortOrder>;
  rating?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
};

export type MovieReviewUpdateInput = {
  likes?: InputMaybe<MovieReviewLikeUpdateManyWithoutMovieReviewNestedInput>;
  movie?: InputMaybe<MovieUpdateOneRequiredWithoutReviewsNestedInput>;
  rating?: InputMaybe<IntFieldUpdateOperationsInput>;
  review?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutMovieReviewsNestedInput>;
};

export type MovieReviewUpdateManyMutationInput = {
  rating?: InputMaybe<IntFieldUpdateOperationsInput>;
  review?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type MovieReviewUpdateManyWithWhereWithoutMovieInput = {
  data: MovieReviewUpdateManyMutationInput;
  where: MovieReviewScalarWhereInput;
};

export type MovieReviewUpdateManyWithWhereWithoutUserInput = {
  data: MovieReviewUpdateManyMutationInput;
  where: MovieReviewScalarWhereInput;
};

export type MovieReviewUpdateManyWithoutMovieNestedInput = {
  connect?: InputMaybe<MovieReviewWhereUniqueInput[]>;
  connectOrCreate?: InputMaybe<MovieReviewCreateOrConnectWithoutMovieInput[]>;
  create?: InputMaybe<MovieReviewCreateWithoutMovieInput[]>;
  createMany?: InputMaybe<MovieReviewCreateManyMovieInputEnvelope>;
  delete?: InputMaybe<MovieReviewWhereUniqueInput[]>;
  deleteMany?: InputMaybe<MovieReviewScalarWhereInput[]>;
  disconnect?: InputMaybe<MovieReviewWhereUniqueInput[]>;
  set?: InputMaybe<MovieReviewWhereUniqueInput[]>;
  update?: InputMaybe<MovieReviewUpdateWithWhereUniqueWithoutMovieInput[]>;
  updateMany?: InputMaybe<MovieReviewUpdateManyWithWhereWithoutMovieInput[]>;
  upsert?: InputMaybe<MovieReviewUpsertWithWhereUniqueWithoutMovieInput[]>;
};

export type MovieReviewUpdateManyWithoutUserNestedInput = {
  connect?: InputMaybe<MovieReviewWhereUniqueInput[]>;
  connectOrCreate?: InputMaybe<MovieReviewCreateOrConnectWithoutUserInput[]>;
  create?: InputMaybe<MovieReviewCreateWithoutUserInput[]>;
  createMany?: InputMaybe<MovieReviewCreateManyUserInputEnvelope>;
  delete?: InputMaybe<MovieReviewWhereUniqueInput[]>;
  deleteMany?: InputMaybe<MovieReviewScalarWhereInput[]>;
  disconnect?: InputMaybe<MovieReviewWhereUniqueInput[]>;
  set?: InputMaybe<MovieReviewWhereUniqueInput[]>;
  update?: InputMaybe<MovieReviewUpdateWithWhereUniqueWithoutUserInput[]>;
  updateMany?: InputMaybe<MovieReviewUpdateManyWithWhereWithoutUserInput[]>;
  upsert?: InputMaybe<MovieReviewUpsertWithWhereUniqueWithoutUserInput[]>;
};

export type MovieReviewUpdateOneRequiredWithoutLikesNestedInput = {
  connect?: InputMaybe<MovieReviewWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MovieReviewCreateOrConnectWithoutLikesInput>;
  create?: InputMaybe<MovieReviewCreateWithoutLikesInput>;
  update?: InputMaybe<MovieReviewUpdateWithoutLikesInput>;
  upsert?: InputMaybe<MovieReviewUpsertWithoutLikesInput>;
};

export type MovieReviewUpdateWithWhereUniqueWithoutMovieInput = {
  data: MovieReviewUpdateWithoutMovieInput;
  where: MovieReviewWhereUniqueInput;
};

export type MovieReviewUpdateWithWhereUniqueWithoutUserInput = {
  data: MovieReviewUpdateWithoutUserInput;
  where: MovieReviewWhereUniqueInput;
};

export type MovieReviewUpdateWithoutLikesInput = {
  movie?: InputMaybe<MovieUpdateOneRequiredWithoutReviewsNestedInput>;
  rating?: InputMaybe<IntFieldUpdateOperationsInput>;
  review?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutMovieReviewsNestedInput>;
};

export type MovieReviewUpdateWithoutMovieInput = {
  likes?: InputMaybe<MovieReviewLikeUpdateManyWithoutMovieReviewNestedInput>;
  rating?: InputMaybe<IntFieldUpdateOperationsInput>;
  review?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutMovieReviewsNestedInput>;
};

export type MovieReviewUpdateWithoutUserInput = {
  likes?: InputMaybe<MovieReviewLikeUpdateManyWithoutMovieReviewNestedInput>;
  movie?: InputMaybe<MovieUpdateOneRequiredWithoutReviewsNestedInput>;
  rating?: InputMaybe<IntFieldUpdateOperationsInput>;
  review?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
};

export type MovieReviewUpsertWithWhereUniqueWithoutMovieInput = {
  create: MovieReviewCreateWithoutMovieInput;
  update: MovieReviewUpdateWithoutMovieInput;
  where: MovieReviewWhereUniqueInput;
};

export type MovieReviewUpsertWithWhereUniqueWithoutUserInput = {
  create: MovieReviewCreateWithoutUserInput;
  update: MovieReviewUpdateWithoutUserInput;
  where: MovieReviewWhereUniqueInput;
};

export type MovieReviewUpsertWithoutLikesInput = {
  create: MovieReviewCreateWithoutLikesInput;
  update: MovieReviewUpdateWithoutLikesInput;
};

export type MovieReviewUserIdMovieIdCompoundUniqueInput = {
  movieId: Scalars['Int'];
  userId: Scalars['Int'];
};

export type MovieReviewWhereInput = {
  AND?: InputMaybe<MovieReviewWhereInput[]>;
  NOT?: InputMaybe<MovieReviewWhereInput[]>;
  OR?: InputMaybe<MovieReviewWhereInput[]>;
  likes?: InputMaybe<MovieReviewLikeListRelationFilter>;
  movie?: InputMaybe<MovieRelationFilter>;
  movieId?: InputMaybe<IntFilter>;
  rating?: InputMaybe<IntFilter>;
  review?: InputMaybe<StringNullableFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<IntFilter>;
};

export type MovieReviewWhereUniqueInput = {
  userId_movieId?: InputMaybe<MovieReviewUserIdMovieIdCompoundUniqueInput>;
};

export enum MovieScalarFieldEnum {
  Backdrop = 'backdrop',
  CreatedAt = 'createdAt',
  Id = 'id',
  Locked = 'locked',
  Overview = 'overview',
  Poster = 'poster',
  Rating = 'rating',
  Released = 'released',
  Runtime = 'runtime',
  Tagline = 'tagline',
  Title = 'title',
  Trailer = 'trailer',
  UpdatedAt = 'updatedAt'
}

export type MovieScalarWhereInput = {
  AND?: InputMaybe<MovieScalarWhereInput[]>;
  NOT?: InputMaybe<MovieScalarWhereInput[]>;
  OR?: InputMaybe<MovieScalarWhereInput[]>;
  backdrop?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  locked?: InputMaybe<BoolFilter>;
  overview?: InputMaybe<StringFilter>;
  poster?: InputMaybe<StringFilter>;
  rating?: InputMaybe<StringNullableFilter>;
  released?: InputMaybe<DateTimeNullableFilter>;
  runtime?: InputMaybe<FloatNullableFilter>;
  tagline?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
  trailer?: InputMaybe<StringNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type MovieScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<MovieScalarWhereWithAggregatesInput[]>;
  NOT?: InputMaybe<MovieScalarWhereWithAggregatesInput[]>;
  OR?: InputMaybe<MovieScalarWhereWithAggregatesInput[]>;
  backdrop?: InputMaybe<StringWithAggregatesFilter>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  locked?: InputMaybe<BoolWithAggregatesFilter>;
  overview?: InputMaybe<StringWithAggregatesFilter>;
  poster?: InputMaybe<StringWithAggregatesFilter>;
  rating?: InputMaybe<StringNullableWithAggregatesFilter>;
  released?: InputMaybe<DateTimeNullableWithAggregatesFilter>;
  runtime?: InputMaybe<FloatNullableWithAggregatesFilter>;
  tagline?: InputMaybe<StringWithAggregatesFilter>;
  title?: InputMaybe<StringWithAggregatesFilter>;
  trailer?: InputMaybe<StringNullableWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export type MovieSumAggregate = {
  __typename?: 'MovieSumAggregate';
  id?: Maybe<Scalars['Int']>;
  runtime?: Maybe<Scalars['Float']>;
};

export type MovieSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
  runtime?: InputMaybe<SortOrder>;
};

export type MovieUpdateInput = {
  actors?: InputMaybe<ActorInMovieUpdateManyWithoutMovieNestedInput>;
  backdrop?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  genres?: InputMaybe<GenreUpdateManyWithoutMoviesNestedInput>;
  likes?: InputMaybe<MovieLikeUpdateManyWithoutMovieNestedInput>;
  locked?: InputMaybe<BoolFieldUpdateOperationsInput>;
  overview?: InputMaybe<StringFieldUpdateOperationsInput>;
  poster?: InputMaybe<StringFieldUpdateOperationsInput>;
  rating?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  released?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  reviews?: InputMaybe<MovieReviewUpdateManyWithoutMovieNestedInput>;
  runtime?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  tagline?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  trailer?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type MovieUpdateManyMutationInput = {
  backdrop?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  locked?: InputMaybe<BoolFieldUpdateOperationsInput>;
  overview?: InputMaybe<StringFieldUpdateOperationsInput>;
  poster?: InputMaybe<StringFieldUpdateOperationsInput>;
  rating?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  released?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  runtime?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  tagline?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  trailer?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type MovieUpdateManyWithWhereWithoutGenresInput = {
  data: MovieUpdateManyMutationInput;
  where: MovieScalarWhereInput;
};

export type MovieUpdateManyWithoutGenresNestedInput = {
  connect?: InputMaybe<MovieWhereUniqueInput[]>;
  connectOrCreate?: InputMaybe<MovieCreateOrConnectWithoutGenresInput[]>;
  create?: InputMaybe<MovieCreateWithoutGenresInput[]>;
  delete?: InputMaybe<MovieWhereUniqueInput[]>;
  deleteMany?: InputMaybe<MovieScalarWhereInput[]>;
  disconnect?: InputMaybe<MovieWhereUniqueInput[]>;
  set?: InputMaybe<MovieWhereUniqueInput[]>;
  update?: InputMaybe<MovieUpdateWithWhereUniqueWithoutGenresInput[]>;
  updateMany?: InputMaybe<MovieUpdateManyWithWhereWithoutGenresInput[]>;
  upsert?: InputMaybe<MovieUpsertWithWhereUniqueWithoutGenresInput[]>;
};

export type MovieUpdateOneRequiredWithoutActorsNestedInput = {
  connect?: InputMaybe<MovieWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MovieCreateOrConnectWithoutActorsInput>;
  create?: InputMaybe<MovieCreateWithoutActorsInput>;
  update?: InputMaybe<MovieUpdateWithoutActorsInput>;
  upsert?: InputMaybe<MovieUpsertWithoutActorsInput>;
};

export type MovieUpdateOneRequiredWithoutLikesNestedInput = {
  connect?: InputMaybe<MovieWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MovieCreateOrConnectWithoutLikesInput>;
  create?: InputMaybe<MovieCreateWithoutLikesInput>;
  update?: InputMaybe<MovieUpdateWithoutLikesInput>;
  upsert?: InputMaybe<MovieUpsertWithoutLikesInput>;
};

export type MovieUpdateOneRequiredWithoutReviewsNestedInput = {
  connect?: InputMaybe<MovieWhereUniqueInput>;
  connectOrCreate?: InputMaybe<MovieCreateOrConnectWithoutReviewsInput>;
  create?: InputMaybe<MovieCreateWithoutReviewsInput>;
  update?: InputMaybe<MovieUpdateWithoutReviewsInput>;
  upsert?: InputMaybe<MovieUpsertWithoutReviewsInput>;
};

export type MovieUpdateWithWhereUniqueWithoutGenresInput = {
  data: MovieUpdateWithoutGenresInput;
  where: MovieWhereUniqueInput;
};

export type MovieUpdateWithoutActorsInput = {
  backdrop?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  genres?: InputMaybe<GenreUpdateManyWithoutMoviesNestedInput>;
  likes?: InputMaybe<MovieLikeUpdateManyWithoutMovieNestedInput>;
  locked?: InputMaybe<BoolFieldUpdateOperationsInput>;
  overview?: InputMaybe<StringFieldUpdateOperationsInput>;
  poster?: InputMaybe<StringFieldUpdateOperationsInput>;
  rating?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  released?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  reviews?: InputMaybe<MovieReviewUpdateManyWithoutMovieNestedInput>;
  runtime?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  tagline?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  trailer?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type MovieUpdateWithoutGenresInput = {
  actors?: InputMaybe<ActorInMovieUpdateManyWithoutMovieNestedInput>;
  backdrop?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  likes?: InputMaybe<MovieLikeUpdateManyWithoutMovieNestedInput>;
  locked?: InputMaybe<BoolFieldUpdateOperationsInput>;
  overview?: InputMaybe<StringFieldUpdateOperationsInput>;
  poster?: InputMaybe<StringFieldUpdateOperationsInput>;
  rating?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  released?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  reviews?: InputMaybe<MovieReviewUpdateManyWithoutMovieNestedInput>;
  runtime?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  tagline?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  trailer?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type MovieUpdateWithoutLikesInput = {
  actors?: InputMaybe<ActorInMovieUpdateManyWithoutMovieNestedInput>;
  backdrop?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  genres?: InputMaybe<GenreUpdateManyWithoutMoviesNestedInput>;
  locked?: InputMaybe<BoolFieldUpdateOperationsInput>;
  overview?: InputMaybe<StringFieldUpdateOperationsInput>;
  poster?: InputMaybe<StringFieldUpdateOperationsInput>;
  rating?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  released?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  reviews?: InputMaybe<MovieReviewUpdateManyWithoutMovieNestedInput>;
  runtime?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  tagline?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  trailer?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type MovieUpdateWithoutReviewsInput = {
  actors?: InputMaybe<ActorInMovieUpdateManyWithoutMovieNestedInput>;
  backdrop?: InputMaybe<StringFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  genres?: InputMaybe<GenreUpdateManyWithoutMoviesNestedInput>;
  likes?: InputMaybe<MovieLikeUpdateManyWithoutMovieNestedInput>;
  locked?: InputMaybe<BoolFieldUpdateOperationsInput>;
  overview?: InputMaybe<StringFieldUpdateOperationsInput>;
  poster?: InputMaybe<StringFieldUpdateOperationsInput>;
  rating?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  released?: InputMaybe<NullableDateTimeFieldUpdateOperationsInput>;
  runtime?: InputMaybe<NullableFloatFieldUpdateOperationsInput>;
  tagline?: InputMaybe<StringFieldUpdateOperationsInput>;
  title?: InputMaybe<StringFieldUpdateOperationsInput>;
  trailer?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type MovieUpsertWithWhereUniqueWithoutGenresInput = {
  create: MovieCreateWithoutGenresInput;
  update: MovieUpdateWithoutGenresInput;
  where: MovieWhereUniqueInput;
};

export type MovieUpsertWithoutActorsInput = {
  create: MovieCreateWithoutActorsInput;
  update: MovieUpdateWithoutActorsInput;
};

export type MovieUpsertWithoutLikesInput = {
  create: MovieCreateWithoutLikesInput;
  update: MovieUpdateWithoutLikesInput;
};

export type MovieUpsertWithoutReviewsInput = {
  create: MovieCreateWithoutReviewsInput;
  update: MovieUpdateWithoutReviewsInput;
};

export type MovieWhereInput = {
  AND?: InputMaybe<MovieWhereInput[]>;
  NOT?: InputMaybe<MovieWhereInput[]>;
  OR?: InputMaybe<MovieWhereInput[]>;
  actors?: InputMaybe<ActorInMovieListRelationFilter>;
  backdrop?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  genres?: InputMaybe<GenreListRelationFilter>;
  id?: InputMaybe<IntFilter>;
  likes?: InputMaybe<MovieLikeListRelationFilter>;
  locked?: InputMaybe<BoolFilter>;
  overview?: InputMaybe<StringFilter>;
  poster?: InputMaybe<StringFilter>;
  rating?: InputMaybe<StringNullableFilter>;
  released?: InputMaybe<DateTimeNullableFilter>;
  reviews?: InputMaybe<MovieReviewListRelationFilter>;
  runtime?: InputMaybe<FloatNullableFilter>;
  tagline?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
  trailer?: InputMaybe<StringNullableFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type MovieWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  changePassword: User;
  confirm: Scalars['Boolean'];
  createActorInMovie: Scalars['Boolean'];
  createManyActorInMovie: AffectedRowsOutput;
  createManyGenre: AffectedRowsOutput;
  createManyMovie: AffectedRowsOutput;
  createManyMovieLike: AffectedRowsOutput;
  createManyMovieReview: AffectedRowsOutput;
  createManyMovieReviewLike: AffectedRowsOutput;
  createManyPerson: AffectedRowsOutput;
  createManyUser: AffectedRowsOutput;
  createMovie: Movie;
  createMovieReview: Scalars['Boolean'];
  createOneActorInMovie: ActorInMovie;
  createOneGenre: Genre;
  createOneMovie: Movie;
  createOneMovieLike: MovieLike;
  createOneMovieReview: MovieReview;
  createOneMovieReviewLike: MovieReviewLike;
  createOnePerson: Person;
  createOneUser: User;
  createPerson: Person;
  deleteAccount: Scalars['Boolean'];
  deleteActorInMovie?: Maybe<Scalars['Boolean']>;
  deleteManyActorInMovie: AffectedRowsOutput;
  deleteManyGenre: AffectedRowsOutput;
  deleteManyMovie: AffectedRowsOutput;
  deleteManyMovieLike: AffectedRowsOutput;
  deleteManyMovieReview: AffectedRowsOutput;
  deleteManyMovieReviewLike: AffectedRowsOutput;
  deleteManyPerson: AffectedRowsOutput;
  deleteManyUser: AffectedRowsOutput;
  deleteMovie?: Maybe<Movie>;
  deleteMovieReview: Scalars['Boolean'];
  deleteOneActorInMovie?: Maybe<ActorInMovie>;
  deleteOneGenre?: Maybe<Genre>;
  deleteOneMovie?: Maybe<Movie>;
  deleteOneMovieLike?: Maybe<MovieLike>;
  deleteOneMovieReview?: Maybe<MovieReview>;
  deleteOneMovieReviewLike?: Maybe<MovieReviewLike>;
  deleteOnePerson?: Maybe<Person>;
  deleteOneUser?: Maybe<User>;
  deletePerson?: Maybe<Person>;
  forgotPassword: Scalars['Boolean'];
  likeMovie: Scalars['Boolean'];
  lockMovie?: Maybe<Movie>;
  lockPerson?: Maybe<Person>;
  login: User;
  logout: Scalars['Boolean'];
  register: User;
  unlikeMovie: Scalars['Boolean'];
  updateGenre?: Maybe<Genre>;
  updateManyActorInMovie: AffectedRowsOutput;
  updateManyGenre: AffectedRowsOutput;
  updateManyMovie: AffectedRowsOutput;
  updateManyMovieLike: AffectedRowsOutput;
  updateManyMovieReview: AffectedRowsOutput;
  updateManyMovieReviewLike: AffectedRowsOutput;
  updateManyPerson: AffectedRowsOutput;
  updateManyUser: AffectedRowsOutput;
  updateMovie?: Maybe<Movie>;
  updateMovieReview: MovieReview;
  updateOneActorInMovie?: Maybe<ActorInMovie>;
  updateOneGenre?: Maybe<Genre>;
  updateOneMovie?: Maybe<Movie>;
  updateOneMovieLike?: Maybe<MovieLike>;
  updateOneMovieReview?: Maybe<MovieReview>;
  updateOneMovieReviewLike?: Maybe<MovieReviewLike>;
  updateOnePerson?: Maybe<Person>;
  updateOneUser?: Maybe<User>;
  updatePerson?: Maybe<Person>;
  updateUser?: Maybe<User>;
  uploadAvatar: Scalars['Boolean'];
  uploadBackdrop: Scalars['Boolean'];
  uploadPoster: Scalars['Boolean'];
  upsertOneActorInMovie: ActorInMovie;
  upsertOneGenre: Genre;
  upsertOneMovie: Movie;
  upsertOneMovieLike: MovieLike;
  upsertOneMovieReview: MovieReview;
  upsertOneMovieReviewLike: MovieReviewLike;
  upsertOnePerson: Person;
  upsertOneUser: User;
};

export type MutationChangePasswordArgs = {
  data: ChangePasswordInput;
};

export type MutationConfirmArgs = {
  token: Scalars['String'];
};

export type MutationCreateActorInMovieArgs = {
  data: ActorInMovieCreateInput;
};

export type MutationCreateManyActorInMovieArgs = {
  data: ActorInMovieCreateManyInput[];
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type MutationCreateManyGenreArgs = {
  data: GenreCreateManyInput[];
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type MutationCreateManyMovieArgs = {
  data: MovieCreateManyInput[];
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type MutationCreateManyMovieLikeArgs = {
  data: MovieLikeCreateManyInput[];
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type MutationCreateManyMovieReviewArgs = {
  data: MovieReviewCreateManyInput[];
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type MutationCreateManyMovieReviewLikeArgs = {
  data: MovieReviewLikeCreateManyInput[];
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type MutationCreateManyPersonArgs = {
  data: PersonCreateManyInput[];
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type MutationCreateManyUserArgs = {
  data: UserCreateManyInput[];
  skipDuplicates?: InputMaybe<Scalars['Boolean']>;
};

export type MutationCreateMovieArgs = {
  data: MovieCreateInput;
};

export type MutationCreateMovieReviewArgs = {
  data: MovieReviewCreateCustomInput;
};

export type MutationCreateOneActorInMovieArgs = {
  data: ActorInMovieCreateInput;
};

export type MutationCreateOneGenreArgs = {
  data: GenreCreateInput;
};

export type MutationCreateOneMovieArgs = {
  data: MovieCreateInput;
};

export type MutationCreateOneMovieLikeArgs = {
  data: MovieLikeCreateInput;
};

export type MutationCreateOneMovieReviewArgs = {
  data: MovieReviewCreateInput;
};

export type MutationCreateOneMovieReviewLikeArgs = {
  data: MovieReviewLikeCreateInput;
};

export type MutationCreateOnePersonArgs = {
  data: PersonCreateInput;
};

export type MutationCreateOneUserArgs = {
  data: UserCreateInput;
};

export type MutationCreatePersonArgs = {
  data: PersonCreateInput;
};

export type MutationDeleteAccountArgs = {
  password: Scalars['String'];
};

export type MutationDeleteActorInMovieArgs = {
  where: ActorInMovieWhereUniqueInput;
};

export type MutationDeleteManyActorInMovieArgs = {
  where?: InputMaybe<ActorInMovieWhereInput>;
};

export type MutationDeleteManyGenreArgs = {
  where?: InputMaybe<GenreWhereInput>;
};

export type MutationDeleteManyMovieArgs = {
  where?: InputMaybe<MovieWhereInput>;
};

export type MutationDeleteManyMovieLikeArgs = {
  where?: InputMaybe<MovieLikeWhereInput>;
};

export type MutationDeleteManyMovieReviewArgs = {
  where?: InputMaybe<MovieReviewWhereInput>;
};

export type MutationDeleteManyMovieReviewLikeArgs = {
  where?: InputMaybe<MovieReviewLikeWhereInput>;
};

export type MutationDeleteManyPersonArgs = {
  where?: InputMaybe<PersonWhereInput>;
};

export type MutationDeleteManyUserArgs = {
  where?: InputMaybe<UserWhereInput>;
};

export type MutationDeleteMovieArgs = {
  where: MovieWhereUniqueInput;
};

export type MutationDeleteMovieReviewArgs = {
  movieId: Scalars['Int'];
};

export type MutationDeleteOneActorInMovieArgs = {
  where: ActorInMovieWhereUniqueInput;
};

export type MutationDeleteOneGenreArgs = {
  where: GenreWhereUniqueInput;
};

export type MutationDeleteOneMovieArgs = {
  where: MovieWhereUniqueInput;
};

export type MutationDeleteOneMovieLikeArgs = {
  where: MovieLikeWhereUniqueInput;
};

export type MutationDeleteOneMovieReviewArgs = {
  where: MovieReviewWhereUniqueInput;
};

export type MutationDeleteOneMovieReviewLikeArgs = {
  where: MovieReviewLikeWhereUniqueInput;
};

export type MutationDeleteOnePersonArgs = {
  where: PersonWhereUniqueInput;
};

export type MutationDeleteOneUserArgs = {
  where: UserWhereUniqueInput;
};

export type MutationDeletePersonArgs = {
  where: PersonWhereUniqueInput;
};

export type MutationForgotPasswordArgs = {
  email: Scalars['String'];
};

export type MutationLikeMovieArgs = {
  data: MovieLikeCreateCustomInput;
};

export type MutationLockMovieArgs = {
  lock: Scalars['Boolean'];
  movieId: Scalars['Int'];
};

export type MutationLockPersonArgs = {
  lock: Scalars['Boolean'];
  personId: Scalars['Int'];
};

export type MutationLoginArgs = {
  data: LoginInput;
};

export type MutationRegisterArgs = {
  data: RegisterInput;
};

export type MutationUnlikeMovieArgs = {
  movieId: Scalars['Int'];
};

export type MutationUpdateGenreArgs = {
  data: GenreUpdateInput;
  where: GenreWhereUniqueInput;
};

export type MutationUpdateManyActorInMovieArgs = {
  data: ActorInMovieUpdateManyMutationInput;
  where?: InputMaybe<ActorInMovieWhereInput>;
};

export type MutationUpdateManyGenreArgs = {
  data: GenreUpdateManyMutationInput;
  where?: InputMaybe<GenreWhereInput>;
};

export type MutationUpdateManyMovieArgs = {
  data: MovieUpdateManyMutationInput;
  where?: InputMaybe<MovieWhereInput>;
};

export type MutationUpdateManyMovieLikeArgs = {
  data: MovieLikeUpdateManyMutationInput;
  where?: InputMaybe<MovieLikeWhereInput>;
};

export type MutationUpdateManyMovieReviewArgs = {
  data: MovieReviewUpdateManyMutationInput;
  where?: InputMaybe<MovieReviewWhereInput>;
};

export type MutationUpdateManyMovieReviewLikeArgs = {
  data: MovieReviewLikeUpdateManyMutationInput;
  where?: InputMaybe<MovieReviewLikeWhereInput>;
};

export type MutationUpdateManyPersonArgs = {
  data: PersonUpdateManyMutationInput;
  where?: InputMaybe<PersonWhereInput>;
};

export type MutationUpdateManyUserArgs = {
  data: UserUpdateManyMutationInput;
  where?: InputMaybe<UserWhereInput>;
};

export type MutationUpdateMovieArgs = {
  data: MovieUpdateInput;
  where: MovieWhereUniqueInput;
};

export type MutationUpdateMovieReviewArgs = {
  data: MovieReviewUpdateInput;
  where: MovieReviewWhereUniqueInput;
};

export type MutationUpdateOneActorInMovieArgs = {
  data: ActorInMovieUpdateInput;
  where: ActorInMovieWhereUniqueInput;
};

export type MutationUpdateOneGenreArgs = {
  data: GenreUpdateInput;
  where: GenreWhereUniqueInput;
};

export type MutationUpdateOneMovieArgs = {
  data: MovieUpdateInput;
  where: MovieWhereUniqueInput;
};

export type MutationUpdateOneMovieLikeArgs = {
  data: MovieLikeUpdateInput;
  where: MovieLikeWhereUniqueInput;
};

export type MutationUpdateOneMovieReviewArgs = {
  data: MovieReviewUpdateInput;
  where: MovieReviewWhereUniqueInput;
};

export type MutationUpdateOneMovieReviewLikeArgs = {
  data: MovieReviewLikeUpdateInput;
  where: MovieReviewLikeWhereUniqueInput;
};

export type MutationUpdateOnePersonArgs = {
  data: PersonUpdateInput;
  where: PersonWhereUniqueInput;
};

export type MutationUpdateOneUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};

export type MutationUpdatePersonArgs = {
  data: PersonUpdateInput;
  where: PersonWhereUniqueInput;
};

export type MutationUpdateUserArgs = {
  data: UserUpdateInput;
};

export type MutationUploadAvatarArgs = {
  file: Scalars['Upload'];
};

export type MutationUploadBackdropArgs = {
  file: Scalars['Upload'];
  id: Scalars['Int'];
  type: UploadType;
};

export type MutationUploadPosterArgs = {
  file: Scalars['Upload'];
  id: Scalars['Int'];
  type: UploadType;
};

export type MutationUpsertOneActorInMovieArgs = {
  create: ActorInMovieCreateInput;
  update: ActorInMovieUpdateInput;
  where: ActorInMovieWhereUniqueInput;
};

export type MutationUpsertOneGenreArgs = {
  create: GenreCreateInput;
  update: GenreUpdateInput;
  where: GenreWhereUniqueInput;
};

export type MutationUpsertOneMovieArgs = {
  create: MovieCreateInput;
  update: MovieUpdateInput;
  where: MovieWhereUniqueInput;
};

export type MutationUpsertOneMovieLikeArgs = {
  create: MovieLikeCreateInput;
  update: MovieLikeUpdateInput;
  where: MovieLikeWhereUniqueInput;
};

export type MutationUpsertOneMovieReviewArgs = {
  create: MovieReviewCreateInput;
  update: MovieReviewUpdateInput;
  where: MovieReviewWhereUniqueInput;
};

export type MutationUpsertOneMovieReviewLikeArgs = {
  create: MovieReviewLikeCreateInput;
  update: MovieReviewLikeUpdateInput;
  where: MovieReviewLikeWhereUniqueInput;
};

export type MutationUpsertOnePersonArgs = {
  create: PersonCreateInput;
  update: PersonUpdateInput;
  where: PersonWhereUniqueInput;
};

export type MutationUpsertOneUserArgs = {
  create: UserCreateInput;
  update: UserUpdateInput;
  where: UserWhereUniqueInput;
};

export type NestedBoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type NestedBoolWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedBoolFilter>;
  _min?: InputMaybe<NestedBoolFilter>;
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolWithAggregatesFilter>;
};

export type NestedDateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type NestedDateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type NestedDateTimeNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedDateTimeNullableFilter>;
  _min?: InputMaybe<NestedDateTimeNullableFilter>;
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type NestedDateTimeWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedDateTimeFilter>;
  _min?: InputMaybe<NestedDateTimeFilter>;
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type NestedEnumRoleFilter = {
  equals?: InputMaybe<Role>;
  in?: InputMaybe<Role[]>;
  not?: InputMaybe<NestedEnumRoleFilter>;
  notIn?: InputMaybe<Role[]>;
};

export type NestedEnumRoleWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedEnumRoleFilter>;
  _min?: InputMaybe<NestedEnumRoleFilter>;
  equals?: InputMaybe<Role>;
  in?: InputMaybe<Role[]>;
  not?: InputMaybe<NestedEnumRoleWithAggregatesFilter>;
  notIn?: InputMaybe<Role[]>;
};

export type NestedFloatFilter = {
  equals?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<Scalars['Float']>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<NestedFloatFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']>>;
};

export type NestedFloatNullableFilter = {
  equals?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<Scalars['Float']>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<NestedFloatNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']>>;
};

export type NestedFloatNullableWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatNullableFilter>;
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedFloatNullableFilter>;
  _min?: InputMaybe<NestedFloatNullableFilter>;
  _sum?: InputMaybe<NestedFloatNullableFilter>;
  equals?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<Scalars['Float']>>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  not?: InputMaybe<NestedFloatNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Float']>>;
};

export type NestedIntFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedIntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedIntNullableWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatNullableFilter>;
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedIntNullableFilter>;
  _min?: InputMaybe<NestedIntNullableFilter>;
  _sum?: InputMaybe<NestedIntNullableFilter>;
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedIntWithAggregatesFilter = {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedIntFilter>;
  _min?: InputMaybe<NestedIntFilter>;
  _sum?: InputMaybe<NestedIntFilter>;
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NestedStringNullableFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NestedStringNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedStringNullableFilter>;
  _min?: InputMaybe<NestedStringNullableFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NestedStringWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NullableDateTimeFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['DateTime']>;
};

export type NullableFloatFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Float']>;
  divide?: InputMaybe<Scalars['Float']>;
  increment?: InputMaybe<Scalars['Float']>;
  multiply?: InputMaybe<Scalars['Float']>;
  set?: InputMaybe<Scalars['Float']>;
};

export type NullableIntFieldUpdateOperationsInput = {
  decrement?: InputMaybe<Scalars['Int']>;
  divide?: InputMaybe<Scalars['Int']>;
  increment?: InputMaybe<Scalars['Int']>;
  multiply?: InputMaybe<Scalars['Int']>;
  set?: InputMaybe<Scalars['Int']>;
};

export type NullableStringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']>;
};

export type Person = {
  __typename?: 'Person';
  _count?: Maybe<PersonCount>;
  age?: Maybe<Scalars['Int']>;
  bio?: Maybe<Scalars['String']>;
  career: Career[];
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  locked: Scalars['Boolean'];
  movies: ActorInMovie[];
  name: Scalars['String'];
  poster: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type PersonMoviesArgs = {
  cursor?: InputMaybe<ActorInMovieWhereUniqueInput>;
  distinct?: InputMaybe<ActorInMovieScalarFieldEnum[]>;
  orderBy?: InputMaybe<ActorInMovieOrderByWithRelationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ActorInMovieWhereInput>;
};

export type PersonAvgAggregate = {
  __typename?: 'PersonAvgAggregate';
  age?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

export type PersonAvgOrderByAggregateInput = {
  age?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
};

export type PersonCount = {
  __typename?: 'PersonCount';
  movies: Scalars['Int'];
};

export type PersonCountAggregate = {
  __typename?: 'PersonCountAggregate';
  _all: Scalars['Int'];
  age: Scalars['Int'];
  bio: Scalars['Int'];
  career: Scalars['Int'];
  createdAt: Scalars['Int'];
  id: Scalars['Int'];
  locked: Scalars['Int'];
  name: Scalars['Int'];
  poster: Scalars['Int'];
  updatedAt: Scalars['Int'];
};

export type PersonCountOrderByAggregateInput = {
  age?: InputMaybe<SortOrder>;
  bio?: InputMaybe<SortOrder>;
  career?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  locked?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  poster?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type PersonCreateInput = {
  age?: InputMaybe<Scalars['Int']>;
  bio?: InputMaybe<Scalars['String']>;
  career?: InputMaybe<PersonCreatecareerInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  locked?: InputMaybe<Scalars['Boolean']>;
  movies?: InputMaybe<ActorInMovieCreateNestedManyWithoutPersonInput>;
  name: Scalars['String'];
  poster?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type PersonCreateManyInput = {
  age?: InputMaybe<Scalars['Int']>;
  bio?: InputMaybe<Scalars['String']>;
  career?: InputMaybe<PersonCreatecareerInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  id?: InputMaybe<Scalars['Int']>;
  locked?: InputMaybe<Scalars['Boolean']>;
  name: Scalars['String'];
  poster?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type PersonCreateNestedOneWithoutMoviesInput = {
  connect?: InputMaybe<PersonWhereUniqueInput>;
  connectOrCreate?: InputMaybe<PersonCreateOrConnectWithoutMoviesInput>;
  create?: InputMaybe<PersonCreateWithoutMoviesInput>;
};

export type PersonCreateOrConnectWithoutMoviesInput = {
  create: PersonCreateWithoutMoviesInput;
  where: PersonWhereUniqueInput;
};

export type PersonCreateWithoutMoviesInput = {
  age?: InputMaybe<Scalars['Int']>;
  bio?: InputMaybe<Scalars['String']>;
  career?: InputMaybe<PersonCreatecareerInput>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  locked?: InputMaybe<Scalars['Boolean']>;
  name: Scalars['String'];
  poster?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
};

export type PersonCreatecareerInput = {
  set: Career[];
};

export type PersonGroupBy = {
  __typename?: 'PersonGroupBy';
  _avg?: Maybe<PersonAvgAggregate>;
  _count?: Maybe<PersonCountAggregate>;
  _max?: Maybe<PersonMaxAggregate>;
  _min?: Maybe<PersonMinAggregate>;
  _sum?: Maybe<PersonSumAggregate>;
  age?: Maybe<Scalars['Int']>;
  bio?: Maybe<Scalars['String']>;
  career?: Maybe<Career[]>;
  createdAt: Scalars['DateTime'];
  id: Scalars['Int'];
  locked: Scalars['Boolean'];
  name: Scalars['String'];
  poster: Scalars['String'];
  updatedAt: Scalars['DateTime'];
};

export type PersonMaxAggregate = {
  __typename?: 'PersonMaxAggregate';
  age?: Maybe<Scalars['Int']>;
  bio?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  locked?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  poster?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type PersonMaxOrderByAggregateInput = {
  age?: InputMaybe<SortOrder>;
  bio?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  locked?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  poster?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type PersonMinAggregate = {
  __typename?: 'PersonMinAggregate';
  age?: Maybe<Scalars['Int']>;
  bio?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  id?: Maybe<Scalars['Int']>;
  locked?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  poster?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['DateTime']>;
};

export type PersonMinOrderByAggregateInput = {
  age?: InputMaybe<SortOrder>;
  bio?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  locked?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  poster?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type PersonOrderByWithAggregationInput = {
  _avg?: InputMaybe<PersonAvgOrderByAggregateInput>;
  _count?: InputMaybe<PersonCountOrderByAggregateInput>;
  _max?: InputMaybe<PersonMaxOrderByAggregateInput>;
  _min?: InputMaybe<PersonMinOrderByAggregateInput>;
  _sum?: InputMaybe<PersonSumOrderByAggregateInput>;
  age?: InputMaybe<SortOrder>;
  bio?: InputMaybe<SortOrder>;
  career?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  locked?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  poster?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type PersonOrderByWithRelationInput = {
  age?: InputMaybe<SortOrder>;
  bio?: InputMaybe<SortOrder>;
  career?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  locked?: InputMaybe<SortOrder>;
  movies?: InputMaybe<ActorInMovieOrderByRelationAggregateInput>;
  name?: InputMaybe<SortOrder>;
  poster?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
};

export type PersonRelationFilter = {
  is?: InputMaybe<PersonWhereInput>;
  isNot?: InputMaybe<PersonWhereInput>;
};

export enum PersonScalarFieldEnum {
  Age = 'age',
  Bio = 'bio',
  Career = 'career',
  CreatedAt = 'createdAt',
  Id = 'id',
  Locked = 'locked',
  Name = 'name',
  Poster = 'poster',
  UpdatedAt = 'updatedAt'
}

export type PersonScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<PersonScalarWhereWithAggregatesInput[]>;
  NOT?: InputMaybe<PersonScalarWhereWithAggregatesInput[]>;
  OR?: InputMaybe<PersonScalarWhereWithAggregatesInput[]>;
  age?: InputMaybe<IntNullableWithAggregatesFilter>;
  bio?: InputMaybe<StringNullableWithAggregatesFilter>;
  career?: InputMaybe<EnumCareerNullableListFilter>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  locked?: InputMaybe<BoolWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
  poster?: InputMaybe<StringWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
};

export type PersonSumAggregate = {
  __typename?: 'PersonSumAggregate';
  age?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

export type PersonSumOrderByAggregateInput = {
  age?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
};

export type PersonUpdateInput = {
  age?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  bio?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  career?: InputMaybe<PersonUpdatecareerInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  locked?: InputMaybe<BoolFieldUpdateOperationsInput>;
  movies?: InputMaybe<ActorInMovieUpdateManyWithoutPersonNestedInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  poster?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type PersonUpdateManyMutationInput = {
  age?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  bio?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  career?: InputMaybe<PersonUpdatecareerInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  locked?: InputMaybe<BoolFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  poster?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type PersonUpdateOneRequiredWithoutMoviesNestedInput = {
  connect?: InputMaybe<PersonWhereUniqueInput>;
  connectOrCreate?: InputMaybe<PersonCreateOrConnectWithoutMoviesInput>;
  create?: InputMaybe<PersonCreateWithoutMoviesInput>;
  update?: InputMaybe<PersonUpdateWithoutMoviesInput>;
  upsert?: InputMaybe<PersonUpsertWithoutMoviesInput>;
};

export type PersonUpdateWithoutMoviesInput = {
  age?: InputMaybe<NullableIntFieldUpdateOperationsInput>;
  bio?: InputMaybe<NullableStringFieldUpdateOperationsInput>;
  career?: InputMaybe<PersonUpdatecareerInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  locked?: InputMaybe<BoolFieldUpdateOperationsInput>;
  name?: InputMaybe<StringFieldUpdateOperationsInput>;
  poster?: InputMaybe<StringFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
};

export type PersonUpdatecareerInput = {
  push?: InputMaybe<Career[]>;
  set?: InputMaybe<Career[]>;
};

export type PersonUpsertWithoutMoviesInput = {
  create: PersonCreateWithoutMoviesInput;
  update: PersonUpdateWithoutMoviesInput;
};

export type PersonWhereInput = {
  AND?: InputMaybe<PersonWhereInput[]>;
  NOT?: InputMaybe<PersonWhereInput[]>;
  OR?: InputMaybe<PersonWhereInput[]>;
  age?: InputMaybe<IntNullableFilter>;
  bio?: InputMaybe<StringNullableFilter>;
  career?: InputMaybe<EnumCareerNullableListFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<IntFilter>;
  locked?: InputMaybe<BoolFilter>;
  movies?: InputMaybe<ActorInMovieListRelationFilter>;
  name?: InputMaybe<StringFilter>;
  poster?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
};

export type PersonWhereUniqueInput = {
  id?: InputMaybe<Scalars['Int']>;
};

export type Query = {
  __typename?: 'Query';
  actorInMovie?: Maybe<ActorInMovie>;
  actorInMovies: ActorInMovie[];
  aggregateActorInMovie: AggregateActorInMovie;
  aggregateGenre: AggregateGenre;
  aggregateMovie: AggregateMovie;
  aggregateMovieLike: AggregateMovieLike;
  aggregateMovieReview: AggregateMovieReview;
  aggregateMovieReviewLike: AggregateMovieReviewLike;
  aggregatePerson: AggregatePerson;
  aggregateUser: AggregateUser;
  findFirstActorInMovie?: Maybe<ActorInMovie>;
  findFirstActorInMovieOrThrow?: Maybe<ActorInMovie>;
  findFirstGenre?: Maybe<Genre>;
  findFirstGenreOrThrow?: Maybe<Genre>;
  findFirstMovie?: Maybe<Movie>;
  findFirstMovieLike?: Maybe<MovieLike>;
  findFirstMovieLikeOrThrow?: Maybe<MovieLike>;
  findFirstMovieOrThrow?: Maybe<Movie>;
  findFirstMovieReview?: Maybe<MovieReview>;
  findFirstMovieReviewLike?: Maybe<MovieReviewLike>;
  findFirstMovieReviewLikeOrThrow?: Maybe<MovieReviewLike>;
  findFirstMovieReviewOrThrow?: Maybe<MovieReview>;
  findFirstPerson?: Maybe<Person>;
  findFirstPersonOrThrow?: Maybe<Person>;
  findFirstUser?: Maybe<User>;
  findFirstUserOrThrow?: Maybe<User>;
  genre?: Maybe<Genre>;
  genres: Genre[];
  getActorInMovie?: Maybe<ActorInMovie>;
  getGenre?: Maybe<Genre>;
  getMovie?: Maybe<Movie>;
  getMovieLike?: Maybe<MovieLike>;
  getMovieReview?: Maybe<MovieReview>;
  getMovieReviewLike?: Maybe<MovieReviewLike>;
  getPerson?: Maybe<Person>;
  getUser?: Maybe<User>;
  groupByActorInMovie: ActorInMovieGroupBy[];
  groupByGenre: GenreGroupBy[];
  groupByMovie: MovieGroupBy[];
  groupByMovieLike: MovieLikeGroupBy[];
  groupByMovieReview: MovieReviewGroupBy[];
  groupByMovieReviewLike: MovieReviewLikeGroupBy[];
  groupByPerson: PersonGroupBy[];
  groupByUser: UserGroupBy[];
  likedMovies: MovieLike[];
  me?: Maybe<User>;
  movie?: Maybe<Movie>;
  movieLike?: Maybe<MovieLike>;
  movieLikes: MovieLike[];
  movieReview: MovieReview;
  movieReviewLike?: Maybe<MovieReviewLike>;
  movieReviewLikes: MovieReviewLike[];
  movieReviews: MovieReview[];
  movies?: Maybe<Movie[]>;
  people?: Maybe<Person[]>;
  person?: Maybe<Person>;
  user?: Maybe<User>;
  users: User[];
};

export type QueryActorInMovieArgs = {
  where: ActorInMovieWhereUniqueInput;
};

export type QueryActorInMoviesArgs = {
  cursor?: InputMaybe<ActorInMovieWhereUniqueInput>;
  distinct?: InputMaybe<ActorInMovieScalarFieldEnum[]>;
  orderBy?: InputMaybe<ActorInMovieOrderByWithRelationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ActorInMovieWhereInput>;
};

export type QueryAggregateActorInMovieArgs = {
  cursor?: InputMaybe<ActorInMovieWhereUniqueInput>;
  orderBy?: InputMaybe<ActorInMovieOrderByWithRelationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ActorInMovieWhereInput>;
};

export type QueryAggregateGenreArgs = {
  cursor?: InputMaybe<GenreWhereUniqueInput>;
  orderBy?: InputMaybe<GenreOrderByWithRelationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<GenreWhereInput>;
};

export type QueryAggregateMovieArgs = {
  cursor?: InputMaybe<MovieWhereUniqueInput>;
  orderBy?: InputMaybe<MovieOrderByWithRelationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MovieWhereInput>;
};

export type QueryAggregateMovieLikeArgs = {
  cursor?: InputMaybe<MovieLikeWhereUniqueInput>;
  orderBy?: InputMaybe<MovieLikeOrderByWithRelationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MovieLikeWhereInput>;
};

export type QueryAggregateMovieReviewArgs = {
  cursor?: InputMaybe<MovieReviewWhereUniqueInput>;
  orderBy?: InputMaybe<MovieReviewOrderByWithRelationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MovieReviewWhereInput>;
};

export type QueryAggregateMovieReviewLikeArgs = {
  cursor?: InputMaybe<MovieReviewLikeWhereUniqueInput>;
  orderBy?: InputMaybe<MovieReviewLikeOrderByWithRelationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MovieReviewLikeWhereInput>;
};

export type QueryAggregatePersonArgs = {
  cursor?: InputMaybe<PersonWhereUniqueInput>;
  orderBy?: InputMaybe<PersonOrderByWithRelationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PersonWhereInput>;
};

export type QueryAggregateUserArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  orderBy?: InputMaybe<UserOrderByWithRelationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};

export type QueryFindFirstActorInMovieArgs = {
  cursor?: InputMaybe<ActorInMovieWhereUniqueInput>;
  distinct?: InputMaybe<ActorInMovieScalarFieldEnum[]>;
  orderBy?: InputMaybe<ActorInMovieOrderByWithRelationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ActorInMovieWhereInput>;
};

export type QueryFindFirstActorInMovieOrThrowArgs = {
  cursor?: InputMaybe<ActorInMovieWhereUniqueInput>;
  distinct?: InputMaybe<ActorInMovieScalarFieldEnum[]>;
  orderBy?: InputMaybe<ActorInMovieOrderByWithRelationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ActorInMovieWhereInput>;
};

export type QueryFindFirstGenreArgs = {
  cursor?: InputMaybe<GenreWhereUniqueInput>;
  distinct?: InputMaybe<GenreScalarFieldEnum[]>;
  orderBy?: InputMaybe<GenreOrderByWithRelationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<GenreWhereInput>;
};

export type QueryFindFirstGenreOrThrowArgs = {
  cursor?: InputMaybe<GenreWhereUniqueInput>;
  distinct?: InputMaybe<GenreScalarFieldEnum[]>;
  orderBy?: InputMaybe<GenreOrderByWithRelationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<GenreWhereInput>;
};

export type QueryFindFirstMovieArgs = {
  cursor?: InputMaybe<MovieWhereUniqueInput>;
  distinct?: InputMaybe<MovieScalarFieldEnum[]>;
  orderBy?: InputMaybe<MovieOrderByWithRelationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MovieWhereInput>;
};

export type QueryFindFirstMovieLikeArgs = {
  cursor?: InputMaybe<MovieLikeWhereUniqueInput>;
  distinct?: InputMaybe<MovieLikeScalarFieldEnum[]>;
  orderBy?: InputMaybe<MovieLikeOrderByWithRelationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MovieLikeWhereInput>;
};

export type QueryFindFirstMovieLikeOrThrowArgs = {
  cursor?: InputMaybe<MovieLikeWhereUniqueInput>;
  distinct?: InputMaybe<MovieLikeScalarFieldEnum[]>;
  orderBy?: InputMaybe<MovieLikeOrderByWithRelationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MovieLikeWhereInput>;
};

export type QueryFindFirstMovieOrThrowArgs = {
  cursor?: InputMaybe<MovieWhereUniqueInput>;
  distinct?: InputMaybe<MovieScalarFieldEnum[]>;
  orderBy?: InputMaybe<MovieOrderByWithRelationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MovieWhereInput>;
};

export type QueryFindFirstMovieReviewArgs = {
  cursor?: InputMaybe<MovieReviewWhereUniqueInput>;
  distinct?: InputMaybe<MovieReviewScalarFieldEnum[]>;
  orderBy?: InputMaybe<MovieReviewOrderByWithRelationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MovieReviewWhereInput>;
};

export type QueryFindFirstMovieReviewLikeArgs = {
  cursor?: InputMaybe<MovieReviewLikeWhereUniqueInput>;
  distinct?: InputMaybe<MovieReviewLikeScalarFieldEnum[]>;
  orderBy?: InputMaybe<MovieReviewLikeOrderByWithRelationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MovieReviewLikeWhereInput>;
};

export type QueryFindFirstMovieReviewLikeOrThrowArgs = {
  cursor?: InputMaybe<MovieReviewLikeWhereUniqueInput>;
  distinct?: InputMaybe<MovieReviewLikeScalarFieldEnum[]>;
  orderBy?: InputMaybe<MovieReviewLikeOrderByWithRelationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MovieReviewLikeWhereInput>;
};

export type QueryFindFirstMovieReviewOrThrowArgs = {
  cursor?: InputMaybe<MovieReviewWhereUniqueInput>;
  distinct?: InputMaybe<MovieReviewScalarFieldEnum[]>;
  orderBy?: InputMaybe<MovieReviewOrderByWithRelationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MovieReviewWhereInput>;
};

export type QueryFindFirstPersonArgs = {
  cursor?: InputMaybe<PersonWhereUniqueInput>;
  distinct?: InputMaybe<PersonScalarFieldEnum[]>;
  orderBy?: InputMaybe<PersonOrderByWithRelationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PersonWhereInput>;
};

export type QueryFindFirstPersonOrThrowArgs = {
  cursor?: InputMaybe<PersonWhereUniqueInput>;
  distinct?: InputMaybe<PersonScalarFieldEnum[]>;
  orderBy?: InputMaybe<PersonOrderByWithRelationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PersonWhereInput>;
};

export type QueryFindFirstUserArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<UserScalarFieldEnum[]>;
  orderBy?: InputMaybe<UserOrderByWithRelationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};

export type QueryFindFirstUserOrThrowArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<UserScalarFieldEnum[]>;
  orderBy?: InputMaybe<UserOrderByWithRelationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};

export type QueryGenreArgs = {
  where: GenreWhereUniqueInput;
};

export type QueryGenresArgs = {
  cursor?: InputMaybe<GenreWhereUniqueInput>;
  distinct?: InputMaybe<GenreScalarFieldEnum[]>;
  orderBy?: InputMaybe<GenreOrderByWithRelationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<GenreWhereInput>;
};

export type QueryGetActorInMovieArgs = {
  where: ActorInMovieWhereUniqueInput;
};

export type QueryGetGenreArgs = {
  where: GenreWhereUniqueInput;
};

export type QueryGetMovieArgs = {
  where: MovieWhereUniqueInput;
};

export type QueryGetMovieLikeArgs = {
  where: MovieLikeWhereUniqueInput;
};

export type QueryGetMovieReviewArgs = {
  where: MovieReviewWhereUniqueInput;
};

export type QueryGetMovieReviewLikeArgs = {
  where: MovieReviewLikeWhereUniqueInput;
};

export type QueryGetPersonArgs = {
  where: PersonWhereUniqueInput;
};

export type QueryGetUserArgs = {
  where: UserWhereUniqueInput;
};

export type QueryGroupByActorInMovieArgs = {
  by: ActorInMovieScalarFieldEnum[];
  having?: InputMaybe<ActorInMovieScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<ActorInMovieOrderByWithAggregationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ActorInMovieWhereInput>;
};

export type QueryGroupByGenreArgs = {
  by: GenreScalarFieldEnum[];
  having?: InputMaybe<GenreScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<GenreOrderByWithAggregationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<GenreWhereInput>;
};

export type QueryGroupByMovieArgs = {
  by: MovieScalarFieldEnum[];
  having?: InputMaybe<MovieScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<MovieOrderByWithAggregationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MovieWhereInput>;
};

export type QueryGroupByMovieLikeArgs = {
  by: MovieLikeScalarFieldEnum[];
  having?: InputMaybe<MovieLikeScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<MovieLikeOrderByWithAggregationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MovieLikeWhereInput>;
};

export type QueryGroupByMovieReviewArgs = {
  by: MovieReviewScalarFieldEnum[];
  having?: InputMaybe<MovieReviewScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<MovieReviewOrderByWithAggregationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MovieReviewWhereInput>;
};

export type QueryGroupByMovieReviewLikeArgs = {
  by: MovieReviewLikeScalarFieldEnum[];
  having?: InputMaybe<MovieReviewLikeScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<MovieReviewLikeOrderByWithAggregationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MovieReviewLikeWhereInput>;
};

export type QueryGroupByPersonArgs = {
  by: PersonScalarFieldEnum[];
  having?: InputMaybe<PersonScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<PersonOrderByWithAggregationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PersonWhereInput>;
};

export type QueryGroupByUserArgs = {
  by: UserScalarFieldEnum[];
  having?: InputMaybe<UserScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<UserOrderByWithAggregationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};

export type QueryLikedMoviesArgs = {
  cursor?: InputMaybe<MovieLikeWhereUniqueInput>;
  distinct?: InputMaybe<MovieLikeScalarFieldEnum[]>;
  orderBy?: InputMaybe<MovieLikeOrderByWithRelationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MovieLikeWhereInput>;
};

export type QueryMovieArgs = {
  movieId: Scalars['Int'];
};

export type QueryMovieLikeArgs = {
  where: MovieLikeWhereUniqueInput;
};

export type QueryMovieLikesArgs = {
  cursor?: InputMaybe<MovieLikeWhereUniqueInput>;
  distinct?: InputMaybe<MovieLikeScalarFieldEnum[]>;
  orderBy?: InputMaybe<MovieLikeOrderByWithRelationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MovieLikeWhereInput>;
};

export type QueryMovieReviewArgs = {
  where: MovieReviewWhereUniqueInput;
};

export type QueryMovieReviewLikeArgs = {
  where: MovieReviewLikeWhereUniqueInput;
};

export type QueryMovieReviewLikesArgs = {
  cursor?: InputMaybe<MovieReviewLikeWhereUniqueInput>;
  distinct?: InputMaybe<MovieReviewLikeScalarFieldEnum[]>;
  orderBy?: InputMaybe<MovieReviewLikeOrderByWithRelationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MovieReviewLikeWhereInput>;
};

export type QueryMovieReviewsArgs = {
  cursor?: InputMaybe<MovieReviewWhereUniqueInput>;
  distinct?: InputMaybe<MovieReviewScalarFieldEnum[]>;
  orderBy?: InputMaybe<MovieReviewOrderByWithRelationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MovieReviewWhereInput>;
};

export type QueryMoviesArgs = {
  cursor?: InputMaybe<MovieWhereUniqueInput>;
  distinct?: InputMaybe<MovieScalarFieldEnum[]>;
  orderBy?: InputMaybe<MovieOrderByWithRelationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MovieWhereInput>;
};

export type QueryPeopleArgs = {
  cursor?: InputMaybe<PersonWhereUniqueInput>;
  distinct?: InputMaybe<PersonScalarFieldEnum[]>;
  orderBy?: InputMaybe<PersonOrderByWithRelationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<PersonWhereInput>;
};

export type QueryPersonArgs = {
  personId: Scalars['Int'];
};

export type QueryUserArgs = {
  username: Scalars['String'];
};

export type QueryUsersArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<UserScalarFieldEnum[]>;
  orderBy?: InputMaybe<UserOrderByWithRelationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export type RegisterInput = {
  displayname: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export enum Role {
  Admin = 'ADMIN',
  User = 'USER'
}

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type StringFieldUpdateOperationsInput = {
  set?: InputMaybe<Scalars['String']>;
};

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type StringNullableFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type StringNullableWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntNullableFilter>;
  _max?: InputMaybe<NestedStringNullableFilter>;
  _min?: InputMaybe<NestedStringNullableFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type StringWithAggregatesFilter = {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

/** The type of thumbnail upload */
export enum UploadType {
  Book = 'Book',
  Movie = 'Movie',
  Person = 'Person',
  Show = 'Show',
  Song = 'Song'
}

export type User = {
  __typename?: 'User';
  _count?: Maybe<UserCount>;
  avatar: Scalars['String'];
  bio: Scalars['String'];
  confirmed: Scalars['Boolean'];
  createdAt: Scalars['DateTime'];
  displayname: Scalars['String'];
  dob: Scalars['DateTime'];
  email: Scalars['String'];
  id: Scalars['Int'];
  likedMovieReviews: MovieReviewLike[];
  likedMovies: MovieLike[];
  location: Scalars['String'];
  movieReviews: MovieReview[];
  role: Role;
  updatedAt: Scalars['DateTime'];
  username: Scalars['String'];
  website: Scalars['String'];
};

export type UserLikedMovieReviewsArgs = {
  cursor?: InputMaybe<MovieReviewLikeWhereUniqueInput>;
  distinct?: InputMaybe<MovieReviewLikeScalarFieldEnum[]>;
  orderBy?: InputMaybe<MovieReviewLikeOrderByWithRelationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MovieReviewLikeWhereInput>;
};

export type UserLikedMoviesArgs = {
  cursor?: InputMaybe<MovieLikeWhereUniqueInput>;
  distinct?: InputMaybe<MovieLikeScalarFieldEnum[]>;
  orderBy?: InputMaybe<MovieLikeOrderByWithRelationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MovieLikeWhereInput>;
};

export type UserMovieReviewsArgs = {
  cursor?: InputMaybe<MovieReviewWhereUniqueInput>;
  distinct?: InputMaybe<MovieReviewScalarFieldEnum[]>;
  orderBy?: InputMaybe<MovieReviewOrderByWithRelationInput[]>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<MovieReviewWhereInput>;
};

export type UserAvgAggregate = {
  __typename?: 'UserAvgAggregate';
  id?: Maybe<Scalars['Float']>;
};

export type UserAvgOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type UserCount = {
  __typename?: 'UserCount';
  likedMovieReviews: Scalars['Int'];
  likedMovies: Scalars['Int'];
  movieReviews: Scalars['Int'];
};

export type UserCountAggregate = {
  __typename?: 'UserCountAggregate';
  _all: Scalars['Int'];
  avatar: Scalars['Int'];
  bio: Scalars['Int'];
  confirmed: Scalars['Int'];
  createdAt: Scalars['Int'];
  displayname: Scalars['Int'];
  dob: Scalars['Int'];
  email: Scalars['Int'];
  id: Scalars['Int'];
  location: Scalars['Int'];
  password: Scalars['Int'];
  role: Scalars['Int'];
  updatedAt: Scalars['Int'];
  username: Scalars['Int'];
  website: Scalars['Int'];
};

export type UserCountOrderByAggregateInput = {
  avatar?: InputMaybe<SortOrder>;
  bio?: InputMaybe<SortOrder>;
  confirmed?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  displayname?: InputMaybe<SortOrder>;
  dob?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  location?: InputMaybe<SortOrder>;
  role?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  username?: InputMaybe<SortOrder>;
  website?: InputMaybe<SortOrder>;
};

export type UserCreateInput = {
  avatar?: InputMaybe<Scalars['String']>;
  bio?: InputMaybe<Scalars['String']>;
  confirmed?: InputMaybe<Scalars['Boolean']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  displayname: Scalars['String'];
  dob?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  likedMovieReviews?: InputMaybe<MovieReviewLikeCreateNestedManyWithoutUserInput>;
  likedMovies?: InputMaybe<MovieLikeCreateNestedManyWithoutUserInput>;
  location?: InputMaybe<Scalars['String']>;
  movieReviews?: InputMaybe<MovieReviewCreateNestedManyWithoutUserInput>;
  role?: InputMaybe<Role>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  username: Scalars['String'];
  website?: InputMaybe<Scalars['String']>;
};

export type UserCreateManyInput = {
  avatar?: InputMaybe<Scalars['String']>;
  bio?: InputMaybe<Scalars['String']>;
  confirmed?: InputMaybe<Scalars['Boolean']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  displayname: Scalars['String'];
  dob?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  id?: InputMaybe<Scalars['Int']>;
  location?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Role>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  username: Scalars['String'];
  website?: InputMaybe<Scalars['String']>;
};

export type UserCreateNestedOneWithoutLikedMovieReviewsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutLikedMovieReviewsInput>;
  create?: InputMaybe<UserCreateWithoutLikedMovieReviewsInput>;
};

export type UserCreateNestedOneWithoutLikedMoviesInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutLikedMoviesInput>;
  create?: InputMaybe<UserCreateWithoutLikedMoviesInput>;
};

export type UserCreateNestedOneWithoutMovieReviewsInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutMovieReviewsInput>;
  create?: InputMaybe<UserCreateWithoutMovieReviewsInput>;
};

export type UserCreateOrConnectWithoutLikedMovieReviewsInput = {
  create: UserCreateWithoutLikedMovieReviewsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutLikedMoviesInput = {
  create: UserCreateWithoutLikedMoviesInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutMovieReviewsInput = {
  create: UserCreateWithoutMovieReviewsInput;
  where: UserWhereUniqueInput;
};

export type UserCreateWithoutLikedMovieReviewsInput = {
  avatar?: InputMaybe<Scalars['String']>;
  bio?: InputMaybe<Scalars['String']>;
  confirmed?: InputMaybe<Scalars['Boolean']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  displayname: Scalars['String'];
  dob?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  likedMovies?: InputMaybe<MovieLikeCreateNestedManyWithoutUserInput>;
  location?: InputMaybe<Scalars['String']>;
  movieReviews?: InputMaybe<MovieReviewCreateNestedManyWithoutUserInput>;
  role?: InputMaybe<Role>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  username: Scalars['String'];
  website?: InputMaybe<Scalars['String']>;
};

export type UserCreateWithoutLikedMoviesInput = {
  avatar?: InputMaybe<Scalars['String']>;
  bio?: InputMaybe<Scalars['String']>;
  confirmed?: InputMaybe<Scalars['Boolean']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  displayname: Scalars['String'];
  dob?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  likedMovieReviews?: InputMaybe<MovieReviewLikeCreateNestedManyWithoutUserInput>;
  location?: InputMaybe<Scalars['String']>;
  movieReviews?: InputMaybe<MovieReviewCreateNestedManyWithoutUserInput>;
  role?: InputMaybe<Role>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  username: Scalars['String'];
  website?: InputMaybe<Scalars['String']>;
};

export type UserCreateWithoutMovieReviewsInput = {
  avatar?: InputMaybe<Scalars['String']>;
  bio?: InputMaybe<Scalars['String']>;
  confirmed?: InputMaybe<Scalars['Boolean']>;
  createdAt?: InputMaybe<Scalars['DateTime']>;
  displayname: Scalars['String'];
  dob?: InputMaybe<Scalars['DateTime']>;
  email: Scalars['String'];
  likedMovieReviews?: InputMaybe<MovieReviewLikeCreateNestedManyWithoutUserInput>;
  likedMovies?: InputMaybe<MovieLikeCreateNestedManyWithoutUserInput>;
  location?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<Role>;
  updatedAt?: InputMaybe<Scalars['DateTime']>;
  username: Scalars['String'];
  website?: InputMaybe<Scalars['String']>;
};

export type UserGroupBy = {
  __typename?: 'UserGroupBy';
  _avg?: Maybe<UserAvgAggregate>;
  _count?: Maybe<UserCountAggregate>;
  _max?: Maybe<UserMaxAggregate>;
  _min?: Maybe<UserMinAggregate>;
  _sum?: Maybe<UserSumAggregate>;
  avatar: Scalars['String'];
  bio: Scalars['String'];
  confirmed: Scalars['Boolean'];
  createdAt: Scalars['DateTime'];
  displayname: Scalars['String'];
  dob: Scalars['DateTime'];
  email: Scalars['String'];
  id: Scalars['Int'];
  location: Scalars['String'];
  password: Scalars['String'];
  role: Role;
  updatedAt: Scalars['DateTime'];
  username: Scalars['String'];
  website: Scalars['String'];
};

export type UserMaxAggregate = {
  __typename?: 'UserMaxAggregate';
  avatar?: Maybe<Scalars['String']>;
  bio?: Maybe<Scalars['String']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  displayname?: Maybe<Scalars['String']>;
  dob?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  location?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  role?: Maybe<Role>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  username?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
};

export type UserMaxOrderByAggregateInput = {
  avatar?: InputMaybe<SortOrder>;
  bio?: InputMaybe<SortOrder>;
  confirmed?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  displayname?: InputMaybe<SortOrder>;
  dob?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  location?: InputMaybe<SortOrder>;
  role?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  username?: InputMaybe<SortOrder>;
  website?: InputMaybe<SortOrder>;
};

export type UserMinAggregate = {
  __typename?: 'UserMinAggregate';
  avatar?: Maybe<Scalars['String']>;
  bio?: Maybe<Scalars['String']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['DateTime']>;
  displayname?: Maybe<Scalars['String']>;
  dob?: Maybe<Scalars['DateTime']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  location?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  role?: Maybe<Role>;
  updatedAt?: Maybe<Scalars['DateTime']>;
  username?: Maybe<Scalars['String']>;
  website?: Maybe<Scalars['String']>;
};

export type UserMinOrderByAggregateInput = {
  avatar?: InputMaybe<SortOrder>;
  bio?: InputMaybe<SortOrder>;
  confirmed?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  displayname?: InputMaybe<SortOrder>;
  dob?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  location?: InputMaybe<SortOrder>;
  role?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  username?: InputMaybe<SortOrder>;
  website?: InputMaybe<SortOrder>;
};

export type UserOrderByWithAggregationInput = {
  _avg?: InputMaybe<UserAvgOrderByAggregateInput>;
  _count?: InputMaybe<UserCountOrderByAggregateInput>;
  _max?: InputMaybe<UserMaxOrderByAggregateInput>;
  _min?: InputMaybe<UserMinOrderByAggregateInput>;
  _sum?: InputMaybe<UserSumOrderByAggregateInput>;
  avatar?: InputMaybe<SortOrder>;
  bio?: InputMaybe<SortOrder>;
  confirmed?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  displayname?: InputMaybe<SortOrder>;
  dob?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  location?: InputMaybe<SortOrder>;
  role?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  username?: InputMaybe<SortOrder>;
  website?: InputMaybe<SortOrder>;
};

export type UserOrderByWithRelationInput = {
  avatar?: InputMaybe<SortOrder>;
  bio?: InputMaybe<SortOrder>;
  confirmed?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  displayname?: InputMaybe<SortOrder>;
  dob?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  likedMovieReviews?: InputMaybe<MovieReviewLikeOrderByRelationAggregateInput>;
  likedMovies?: InputMaybe<MovieLikeOrderByRelationAggregateInput>;
  location?: InputMaybe<SortOrder>;
  movieReviews?: InputMaybe<MovieReviewOrderByRelationAggregateInput>;
  role?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  username?: InputMaybe<SortOrder>;
  website?: InputMaybe<SortOrder>;
};

export type UserRelationFilter = {
  is?: InputMaybe<UserWhereInput>;
  isNot?: InputMaybe<UserWhereInput>;
};

export enum UserScalarFieldEnum {
  Avatar = 'avatar',
  Bio = 'bio',
  Confirmed = 'confirmed',
  CreatedAt = 'createdAt',
  Displayname = 'displayname',
  Dob = 'dob',
  Email = 'email',
  Id = 'id',
  Location = 'location',
  Password = 'password',
  Role = 'role',
  UpdatedAt = 'updatedAt',
  Username = 'username',
  Website = 'website'
}

export type UserScalarWhereWithAggregatesInput = {
  AND?: InputMaybe<UserScalarWhereWithAggregatesInput[]>;
  NOT?: InputMaybe<UserScalarWhereWithAggregatesInput[]>;
  OR?: InputMaybe<UserScalarWhereWithAggregatesInput[]>;
  avatar?: InputMaybe<StringWithAggregatesFilter>;
  bio?: InputMaybe<StringWithAggregatesFilter>;
  confirmed?: InputMaybe<BoolWithAggregatesFilter>;
  createdAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  displayname?: InputMaybe<StringWithAggregatesFilter>;
  dob?: InputMaybe<DateTimeWithAggregatesFilter>;
  email?: InputMaybe<StringWithAggregatesFilter>;
  id?: InputMaybe<IntWithAggregatesFilter>;
  location?: InputMaybe<StringWithAggregatesFilter>;
  role?: InputMaybe<EnumRoleWithAggregatesFilter>;
  updatedAt?: InputMaybe<DateTimeWithAggregatesFilter>;
  username?: InputMaybe<StringWithAggregatesFilter>;
  website?: InputMaybe<StringWithAggregatesFilter>;
};

export type UserSumAggregate = {
  __typename?: 'UserSumAggregate';
  id?: Maybe<Scalars['Int']>;
};

export type UserSumOrderByAggregateInput = {
  id?: InputMaybe<SortOrder>;
};

export type UserUpdateInput = {
  avatar?: InputMaybe<StringFieldUpdateOperationsInput>;
  bio?: InputMaybe<StringFieldUpdateOperationsInput>;
  confirmed?: InputMaybe<BoolFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  displayname?: InputMaybe<StringFieldUpdateOperationsInput>;
  dob?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  likedMovieReviews?: InputMaybe<MovieReviewLikeUpdateManyWithoutUserNestedInput>;
  likedMovies?: InputMaybe<MovieLikeUpdateManyWithoutUserNestedInput>;
  location?: InputMaybe<StringFieldUpdateOperationsInput>;
  movieReviews?: InputMaybe<MovieReviewUpdateManyWithoutUserNestedInput>;
  role?: InputMaybe<EnumRoleFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  username?: InputMaybe<StringFieldUpdateOperationsInput>;
  website?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserUpdateManyMutationInput = {
  avatar?: InputMaybe<StringFieldUpdateOperationsInput>;
  bio?: InputMaybe<StringFieldUpdateOperationsInput>;
  confirmed?: InputMaybe<BoolFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  displayname?: InputMaybe<StringFieldUpdateOperationsInput>;
  dob?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  location?: InputMaybe<StringFieldUpdateOperationsInput>;
  role?: InputMaybe<EnumRoleFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  username?: InputMaybe<StringFieldUpdateOperationsInput>;
  website?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserUpdateOneRequiredWithoutLikedMovieReviewsNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutLikedMovieReviewsInput>;
  create?: InputMaybe<UserCreateWithoutLikedMovieReviewsInput>;
  update?: InputMaybe<UserUpdateWithoutLikedMovieReviewsInput>;
  upsert?: InputMaybe<UserUpsertWithoutLikedMovieReviewsInput>;
};

export type UserUpdateOneRequiredWithoutLikedMoviesNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutLikedMoviesInput>;
  create?: InputMaybe<UserCreateWithoutLikedMoviesInput>;
  update?: InputMaybe<UserUpdateWithoutLikedMoviesInput>;
  upsert?: InputMaybe<UserUpsertWithoutLikedMoviesInput>;
};

export type UserUpdateOneRequiredWithoutMovieReviewsNestedInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutMovieReviewsInput>;
  create?: InputMaybe<UserCreateWithoutMovieReviewsInput>;
  update?: InputMaybe<UserUpdateWithoutMovieReviewsInput>;
  upsert?: InputMaybe<UserUpsertWithoutMovieReviewsInput>;
};

export type UserUpdateWithoutLikedMovieReviewsInput = {
  avatar?: InputMaybe<StringFieldUpdateOperationsInput>;
  bio?: InputMaybe<StringFieldUpdateOperationsInput>;
  confirmed?: InputMaybe<BoolFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  displayname?: InputMaybe<StringFieldUpdateOperationsInput>;
  dob?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  likedMovies?: InputMaybe<MovieLikeUpdateManyWithoutUserNestedInput>;
  location?: InputMaybe<StringFieldUpdateOperationsInput>;
  movieReviews?: InputMaybe<MovieReviewUpdateManyWithoutUserNestedInput>;
  role?: InputMaybe<EnumRoleFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  username?: InputMaybe<StringFieldUpdateOperationsInput>;
  website?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutLikedMoviesInput = {
  avatar?: InputMaybe<StringFieldUpdateOperationsInput>;
  bio?: InputMaybe<StringFieldUpdateOperationsInput>;
  confirmed?: InputMaybe<BoolFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  displayname?: InputMaybe<StringFieldUpdateOperationsInput>;
  dob?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  likedMovieReviews?: InputMaybe<MovieReviewLikeUpdateManyWithoutUserNestedInput>;
  location?: InputMaybe<StringFieldUpdateOperationsInput>;
  movieReviews?: InputMaybe<MovieReviewUpdateManyWithoutUserNestedInput>;
  role?: InputMaybe<EnumRoleFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  username?: InputMaybe<StringFieldUpdateOperationsInput>;
  website?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutMovieReviewsInput = {
  avatar?: InputMaybe<StringFieldUpdateOperationsInput>;
  bio?: InputMaybe<StringFieldUpdateOperationsInput>;
  confirmed?: InputMaybe<BoolFieldUpdateOperationsInput>;
  createdAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  displayname?: InputMaybe<StringFieldUpdateOperationsInput>;
  dob?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  email?: InputMaybe<StringFieldUpdateOperationsInput>;
  likedMovieReviews?: InputMaybe<MovieReviewLikeUpdateManyWithoutUserNestedInput>;
  likedMovies?: InputMaybe<MovieLikeUpdateManyWithoutUserNestedInput>;
  location?: InputMaybe<StringFieldUpdateOperationsInput>;
  role?: InputMaybe<EnumRoleFieldUpdateOperationsInput>;
  updatedAt?: InputMaybe<DateTimeFieldUpdateOperationsInput>;
  username?: InputMaybe<StringFieldUpdateOperationsInput>;
  website?: InputMaybe<StringFieldUpdateOperationsInput>;
};

export type UserUpsertWithoutLikedMovieReviewsInput = {
  create: UserCreateWithoutLikedMovieReviewsInput;
  update: UserUpdateWithoutLikedMovieReviewsInput;
};

export type UserUpsertWithoutLikedMoviesInput = {
  create: UserCreateWithoutLikedMoviesInput;
  update: UserUpdateWithoutLikedMoviesInput;
};

export type UserUpsertWithoutMovieReviewsInput = {
  create: UserCreateWithoutMovieReviewsInput;
  update: UserUpdateWithoutMovieReviewsInput;
};

export type UserWhereInput = {
  AND?: InputMaybe<UserWhereInput[]>;
  NOT?: InputMaybe<UserWhereInput[]>;
  OR?: InputMaybe<UserWhereInput[]>;
  avatar?: InputMaybe<StringFilter>;
  bio?: InputMaybe<StringFilter>;
  confirmed?: InputMaybe<BoolFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  displayname?: InputMaybe<StringFilter>;
  dob?: InputMaybe<DateTimeFilter>;
  email?: InputMaybe<StringFilter>;
  id?: InputMaybe<IntFilter>;
  likedMovieReviews?: InputMaybe<MovieReviewLikeListRelationFilter>;
  likedMovies?: InputMaybe<MovieLikeListRelationFilter>;
  location?: InputMaybe<StringFilter>;
  movieReviews?: InputMaybe<MovieReviewListRelationFilter>;
  role?: InputMaybe<EnumRoleFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  username?: InputMaybe<StringFilter>;
  website?: InputMaybe<StringFilter>;
};

export type UserWhereUniqueInput = {
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  username?: InputMaybe<Scalars['String']>;
};

export type RegularMovieFragment = {__typename?: 'Movie'; id: number; title: string; tagline: string; overview: string; poster: string; backdrop: string; released?: any | null; runtime?: number | null; trailer?: string | null; rating?: string | null; isLiked: boolean; isRated: boolean; _count?: {__typename?: 'MovieCount'; likes: number} | null; actors: Array<{__typename?: 'ActorInMovie'; role: string; person: {__typename?: 'Person'; id: number; name: string; poster: string}}>; genres: Array<{__typename?: 'Genre'; name: string}>; reviews: Array<{__typename?: 'MovieReview'; review?: string | null; rating: number; user: {__typename?: 'User'; username: string; avatar: string}; _count?: {__typename?: 'MovieReviewCount'; likes: number} | null}>; aggregateMovieReview: {__typename?: 'AggregateMovieReview'; _avg?: {__typename?: 'MovieReviewAvgAggregate'; rating?: number | null} | null}};

export type RegularPersonFragment = {__typename?: 'Person'; id: number; career: Career[]; name: string; poster: string; bio?: string | null; age?: number | null; _count?: {__typename?: 'PersonCount'; movies: number} | null};

export type RegularUserFragment = {__typename?: 'User'; id: number; email: string; username: string; avatar: string; role: Role};

export type ConfirmMutationVariables = Exact<{
  token: Scalars['String'];
}>;

export type ConfirmMutation = {__typename?: 'Mutation'; confirm: boolean};

export type CreateActorInMovieMutationVariables = Exact<{
  data: ActorInMovieCreateInput;
}>;

export type CreateActorInMovieMutation = {__typename?: 'Mutation'; createActorInMovie: boolean};

export type CreateMovieMutationVariables = Exact<{
  data: MovieCreateInput;
}>;

export type CreateMovieMutation = {__typename?: 'Mutation'; createMovie: {__typename?: 'Movie'; id: number; title: string; overview: string}};

export type CreateMovieReviewMutationVariables = Exact<{
  data: MovieReviewCreateCustomInput;
}>;

export type CreateMovieReviewMutation = {__typename?: 'Mutation'; createMovieReview: boolean};

export type CreatePersonMutationVariables = Exact<{
  data: PersonCreateInput;
}>;

export type CreatePersonMutation = {__typename?: 'Mutation'; createPerson: {__typename?: 'Person'; id: number; career: Career[]; name: string; poster: string; bio?: string | null; age?: number | null}};

export type DeleteAccountMutationVariables = Exact<{
  password: Scalars['String'];
}>;

export type DeleteAccountMutation = {__typename?: 'Mutation'; deleteAccount: boolean};

export type DeleteActorInMovieMutationVariables = Exact<{
  where: ActorInMovieWhereUniqueInput;
}>;

export type DeleteActorInMovieMutation = {__typename?: 'Mutation'; deleteActorInMovie?: boolean | null};

export type DeleteMovieReviewMutationVariables = Exact<{
  movieId: Scalars['Int'];
}>;

export type DeleteMovieReviewMutation = {__typename?: 'Mutation'; deleteMovieReview: boolean};

export type DeletePersonMutationVariables = Exact<{
  where: PersonWhereUniqueInput;
}>;

export type DeletePersonMutation = {__typename?: 'Mutation'; deletePerson?: {__typename?: 'Person'; id: number} | null};

export type LikeMovieMutationVariables = Exact<{
  data: MovieLikeCreateCustomInput;
}>;

export type LikeMovieMutation = {__typename?: 'Mutation'; likeMovie: boolean};

export type LoginMutationVariables = Exact<{
  data: LoginInput;
}>;

export type LoginMutation = {__typename?: 'Mutation'; login: {__typename?: 'User'; id: number; email: string; username: string; avatar: string; role: Role}};

export type LogoutMutationVariables = Exact<Record<string, never>>;

export type LogoutMutation = {__typename?: 'Mutation'; logout: boolean};

export type RegisterMutationVariables = Exact<{
  data: RegisterInput;
}>;

export type RegisterMutation = {__typename?: 'Mutation'; register: {__typename?: 'User'; id: number; email: string; username: string; avatar: string; role: Role}};

export type UnlikeMovieMutationVariables = Exact<{
  movieId: Scalars['Int'];
}>;

export type UnlikeMovieMutation = {__typename?: 'Mutation'; unlikeMovie: boolean};

export type UpdateGenreMutationVariables = Exact<{
  data: GenreUpdateInput;
  where: GenreWhereUniqueInput;
}>;

export type UpdateGenreMutation = {__typename?: 'Mutation'; updateGenre?: {__typename?: 'Genre'; name: string} | null};

export type UpdateMovieMutationVariables = Exact<{
  data: MovieUpdateInput;
  where: MovieWhereUniqueInput;
}>;

export type UpdateMovieMutation = {__typename?: 'Mutation'; updateMovie?: {__typename?: 'Movie'; id: number; title: string; tagline: string; overview: string; poster: string; backdrop: string; released?: any | null; runtime?: number | null; trailer?: string | null; rating?: string | null; isLiked: boolean; isRated: boolean; _count?: {__typename?: 'MovieCount'; likes: number} | null; actors: Array<{__typename?: 'ActorInMovie'; role: string; person: {__typename?: 'Person'; id: number; name: string; poster: string}}>; genres: Array<{__typename?: 'Genre'; name: string}>; reviews: Array<{__typename?: 'MovieReview'; review?: string | null; rating: number; user: {__typename?: 'User'; username: string; avatar: string}; _count?: {__typename?: 'MovieReviewCount'; likes: number} | null}>; aggregateMovieReview: {__typename?: 'AggregateMovieReview'; _avg?: {__typename?: 'MovieReviewAvgAggregate'; rating?: number | null} | null}} | null};

export type UpdateMovieReivewMutationVariables = Exact<{
  data: MovieReviewUpdateInput;
  where: MovieReviewWhereUniqueInput;
}>;

export type UpdateMovieReivewMutation = {__typename?: 'Mutation'; updateMovieReview: {__typename?: 'MovieReview'; review?: string | null; rating: number; _count?: {__typename?: 'MovieReviewCount'; likes: number} | null}};

export type UpdatePersonMutationVariables = Exact<{
  data: PersonUpdateInput;
  where: PersonWhereUniqueInput;
}>;

export type UpdatePersonMutation = {__typename?: 'Mutation'; updatePerson?: {__typename?: 'Person'; id: number; career: Career[]; name: string; poster: string; bio?: string | null; age?: number | null; _count?: {__typename?: 'PersonCount'; movies: number} | null} | null};

export type UpdateUserMutationVariables = Exact<{
  data: UserUpdateInput;
}>;

export type UpdateUserMutation = {__typename?: 'Mutation'; updateUser?: {__typename?: 'User'; id: number; email: string; username: string; avatar: string; role: Role} | null};

export type UploadAvatarMutationVariables = Exact<{
  file: Scalars['Upload'];
}>;

export type UploadAvatarMutation = {__typename?: 'Mutation'; uploadAvatar: boolean};

export type UploadBackdropMutationVariables = Exact<{
  id: Scalars['Int'];
  file: Scalars['Upload'];
  type: UploadType;
}>;

export type UploadBackdropMutation = {__typename?: 'Mutation'; uploadBackdrop: boolean};

export type UploadPosterMutationVariables = Exact<{
  id: Scalars['Int'];
  file: Scalars['Upload'];
  type: UploadType;
}>;

export type UploadPosterMutation = {__typename?: 'Mutation'; uploadPoster: boolean};

export type ActorsInMovieQueryVariables = Exact<{
  movieId: Scalars['Int'];
  where?: InputMaybe<ActorInMovieWhereInput>;
  orderBy?: InputMaybe<ActorInMovieOrderByWithRelationInput[] | ActorInMovieOrderByWithRelationInput>;
  cursor?: InputMaybe<ActorInMovieWhereUniqueInput>;
  take?: InputMaybe<Scalars['Int']>;
}>;

export type ActorsInMovieQuery = {__typename?: 'Query'; movie?: {__typename?: 'Movie'; actors: Array<{__typename?: 'ActorInMovie'; personId: number}>} | null};

export type CountMediaQueryVariables = Exact<Record<string, never>>;

export type CountMediaQuery = {__typename?: 'Query'; aggregateMovie: {__typename?: 'AggregateMovie'; _count?: {__typename?: 'MovieCountAggregate'; _all: number} | null}; aggregateUser: {__typename?: 'AggregateUser'; _count?: {__typename?: 'UserCountAggregate'; _all: number} | null}; aggregatePerson: {__typename?: 'AggregatePerson'; _count?: {__typename?: 'PersonCountAggregate'; _all: number} | null}; aggregateMovieReview: {__typename?: 'AggregateMovieReview'; _count?: {__typename?: 'MovieReviewCountAggregate'; _all: number} | null}};

export type GenresQueryVariables = Exact<{
  where?: InputMaybe<GenreWhereInput>;
}>;

export type GenresQuery = {__typename?: 'Query'; genres: Array<{__typename?: 'Genre'; id: number; name: string}>};

export type LikedMoviesQueryVariables = Exact<{
  where?: InputMaybe<MovieLikeWhereInput>;
  orderBy?: InputMaybe<MovieLikeOrderByWithRelationInput[] | MovieLikeOrderByWithRelationInput>;
  cursor?: InputMaybe<MovieLikeWhereUniqueInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
}>;

export type LikedMoviesQuery = {__typename?: 'Query'; likedMovies: Array<{__typename?: 'MovieLike'; movie: {__typename?: 'Movie'; id: number; title: string}}>};

export type MeQueryVariables = Exact<Record<string, never>>;

export type MeQuery = {__typename?: 'Query'; me?: {__typename?: 'User'; confirmed: boolean; id: number; email: string; username: string; avatar: string; role: Role} | null};

export type MovieQueryVariables = Exact<{
  movieId: Scalars['Int'];
}>;

export type MovieQuery = {__typename?: 'Query'; movie?: {__typename?: 'Movie'; id: number; title: string; tagline: string; overview: string; poster: string; backdrop: string; released?: any | null; runtime?: number | null; trailer?: string | null; rating?: string | null; isLiked: boolean; isRated: boolean; _count?: {__typename?: 'MovieCount'; likes: number} | null; actors: Array<{__typename?: 'ActorInMovie'; role: string; person: {__typename?: 'Person'; id: number; name: string; poster: string}}>; genres: Array<{__typename?: 'Genre'; name: string}>; reviews: Array<{__typename?: 'MovieReview'; review?: string | null; rating: number; user: {__typename?: 'User'; username: string; avatar: string}; _count?: {__typename?: 'MovieReviewCount'; likes: number} | null}>; aggregateMovieReview: {__typename?: 'AggregateMovieReview'; _avg?: {__typename?: 'MovieReviewAvgAggregate'; rating?: number | null} | null}} | null};

export type MovieReviewQueryVariables = Exact<{
  where: MovieReviewWhereUniqueInput;
}>;

export type MovieReviewQuery = {__typename?: 'Query'; movieReview: {__typename?: 'MovieReview'; movieId: number; review?: string | null; rating: number; user: {__typename?: 'User'; id: number; username: string; avatar: string}; _count?: {__typename?: 'MovieReviewCount'; likes: number} | null}};

export type MovieReviewsQueryVariables = Exact<{
  where?: InputMaybe<MovieReviewWhereInput>;
  orderBy?: InputMaybe<MovieReviewOrderByWithRelationInput[] | MovieReviewOrderByWithRelationInput>;
  cursor?: InputMaybe<MovieReviewWhereUniqueInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
}>;

export type MovieReviewsQuery = {__typename?: 'Query'; movieReviews: Array<{__typename?: 'MovieReview'; review?: string | null; rating: number; user: {__typename?: 'User'; id: number; username: string; avatar: string}; _count?: {__typename?: 'MovieReviewCount'; likes: number} | null}>};

export type MoviesQueryVariables = Exact<{
  where?: InputMaybe<MovieWhereInput>;
  orderBy?: InputMaybe<MovieOrderByWithRelationInput[] | MovieOrderByWithRelationInput>;
  cursor?: InputMaybe<MovieWhereUniqueInput>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
}>;

export type MoviesQuery = {__typename?: 'Query'; movies?: Array<{__typename?: 'Movie'; id: number; title: string; poster: string}> | null};

export type PeopleQueryVariables = Exact<{
  where?: InputMaybe<PersonWhereInput>;
  orderBy?: InputMaybe<PersonOrderByWithRelationInput[] | PersonOrderByWithRelationInput>;
  cursor?: InputMaybe<PersonWhereUniqueInput>;
  take?: InputMaybe<Scalars['Int']>;
}>;

export type PeopleQuery = {__typename?: 'Query'; people?: Array<{__typename?: 'Person'; id: number; career: Career[]; name: string; poster: string}> | null};

export type PersonQueryVariables = Exact<{
  personId: Scalars['Int'];
}>;

export type PersonQuery = {__typename?: 'Query'; person?: {__typename?: 'Person'; id: number; career: Career[]; name: string; poster: string; bio?: string | null; age?: number | null; _count?: {__typename?: 'PersonCount'; movies: number} | null} | null};

export type PreferencesQueryVariables = Exact<Record<string, never>>;

export type PreferencesQuery = {__typename?: 'Query'; me?: {__typename?: 'User'; id: number; confirmed: boolean; email: string; username: string; displayname: string; role: Role; avatar: string; bio: string; location: string; website: string; dob: any; createdAt: any; updatedAt: any} | null};

export type UserQueryVariables = Exact<{
  username: Scalars['String'];
}>;

export type UserQuery = {__typename?: 'Query'; user?: {__typename?: 'User'; id: number; confirmed: boolean; email: string; username: string; displayname: string; role: Role; avatar: string; bio: string; location: string; website: string; dob: any; createdAt: any; updatedAt: any} | null};

export const RegularMovieFragmentDoc = gql`
    fragment RegularMovie on Movie {
  id
  title
  tagline
  overview
  poster
  backdrop
  released
  runtime
  trailer
  rating
  isLiked
  isRated
  _count {
    likes
  }
  actors(take: 8) {
    role
    person {
      id
      name
      poster
    }
  }
  genres {
    name
  }
  reviews(take: 8) {
    review
    rating
    user {
      username
      avatar
    }
    _count {
      likes
    }
  }
  aggregateMovieReview {
    _avg {
      rating
    }
  }
}
    `;
export const RegularPersonFragmentDoc = gql`
    fragment RegularPerson on Person {
  id
  career
  name
  poster
  bio
  age
  _count {
    movies
  }
}
    `;
export const RegularUserFragmentDoc = gql`
    fragment RegularUser on User {
  id
  email
  username
  avatar
  role
}
    `;
export const ConfirmDocument = gql`
    mutation Confirm($token: String!) {
  confirm(token: $token)
}
    `;
export type ConfirmMutationFn = Apollo.MutationFunction<ConfirmMutation, ConfirmMutationVariables>;

/**
 * __useConfirmMutation__
 *
 * To run a mutation, you first call `useConfirmMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useConfirmMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [confirmMutation, { data, loading, error }] = useConfirmMutation({
 *   variables: {
 *      token: // value for 'token'
 *   },
 * });
 */
export function useConfirmMutation(baseOptions?: Apollo.MutationHookOptions<ConfirmMutation, ConfirmMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions};
        return Apollo.useMutation<ConfirmMutation, ConfirmMutationVariables>(ConfirmDocument, options);
      }

export type ConfirmMutationHookResult = ReturnType<typeof useConfirmMutation>;
export type ConfirmMutationResult = Apollo.MutationResult<ConfirmMutation>;
export type ConfirmMutationOptions = Apollo.BaseMutationOptions<ConfirmMutation, ConfirmMutationVariables>;
export const CreateActorInMovieDocument = gql`
    mutation createActorInMovie($data: ActorInMovieCreateInput!) {
  createActorInMovie(data: $data)
}
    `;
export type CreateActorInMovieMutationFn = Apollo.MutationFunction<CreateActorInMovieMutation, CreateActorInMovieMutationVariables>;

/**
 * __useCreateActorInMovieMutation__
 *
 * To run a mutation, you first call `useCreateActorInMovieMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateActorInMovieMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createActorInMovieMutation, { data, loading, error }] = useCreateActorInMovieMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateActorInMovieMutation(baseOptions?: Apollo.MutationHookOptions<CreateActorInMovieMutation, CreateActorInMovieMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions};
        return Apollo.useMutation<CreateActorInMovieMutation, CreateActorInMovieMutationVariables>(CreateActorInMovieDocument, options);
      }

export type CreateActorInMovieMutationHookResult = ReturnType<typeof useCreateActorInMovieMutation>;
export type CreateActorInMovieMutationResult = Apollo.MutationResult<CreateActorInMovieMutation>;
export type CreateActorInMovieMutationOptions = Apollo.BaseMutationOptions<CreateActorInMovieMutation, CreateActorInMovieMutationVariables>;
export const CreateMovieDocument = gql`
    mutation CreateMovie($data: MovieCreateInput!) {
  createMovie(data: $data) {
    id
    title
    overview
  }
}
    `;
export type CreateMovieMutationFn = Apollo.MutationFunction<CreateMovieMutation, CreateMovieMutationVariables>;

/**
 * __useCreateMovieMutation__
 *
 * To run a mutation, you first call `useCreateMovieMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateMovieMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createMovieMutation, { data, loading, error }] = useCreateMovieMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateMovieMutation(baseOptions?: Apollo.MutationHookOptions<CreateMovieMutation, CreateMovieMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions};
        return Apollo.useMutation<CreateMovieMutation, CreateMovieMutationVariables>(CreateMovieDocument, options);
      }

export type CreateMovieMutationHookResult = ReturnType<typeof useCreateMovieMutation>;
export type CreateMovieMutationResult = Apollo.MutationResult<CreateMovieMutation>;
export type CreateMovieMutationOptions = Apollo.BaseMutationOptions<CreateMovieMutation, CreateMovieMutationVariables>;
export const CreateMovieReviewDocument = gql`
    mutation createMovieReview($data: MovieReviewCreateCustomInput!) {
  createMovieReview(data: $data)
}
    `;
export type CreateMovieReviewMutationFn = Apollo.MutationFunction<CreateMovieReviewMutation, CreateMovieReviewMutationVariables>;

/**
 * __useCreateMovieReviewMutation__
 *
 * To run a mutation, you first call `useCreateMovieReviewMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateMovieReviewMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createMovieReviewMutation, { data, loading, error }] = useCreateMovieReviewMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateMovieReviewMutation(baseOptions?: Apollo.MutationHookOptions<CreateMovieReviewMutation, CreateMovieReviewMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions};
        return Apollo.useMutation<CreateMovieReviewMutation, CreateMovieReviewMutationVariables>(CreateMovieReviewDocument, options);
      }

export type CreateMovieReviewMutationHookResult = ReturnType<typeof useCreateMovieReviewMutation>;
export type CreateMovieReviewMutationResult = Apollo.MutationResult<CreateMovieReviewMutation>;
export type CreateMovieReviewMutationOptions = Apollo.BaseMutationOptions<CreateMovieReviewMutation, CreateMovieReviewMutationVariables>;
export const CreatePersonDocument = gql`
    mutation CreatePerson($data: PersonCreateInput!) {
  createPerson(data: $data) {
    id
    career
    name
    poster
    bio
    age
  }
}
    `;
export type CreatePersonMutationFn = Apollo.MutationFunction<CreatePersonMutation, CreatePersonMutationVariables>;

/**
 * __useCreatePersonMutation__
 *
 * To run a mutation, you first call `useCreatePersonMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePersonMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPersonMutation, { data, loading, error }] = useCreatePersonMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreatePersonMutation(baseOptions?: Apollo.MutationHookOptions<CreatePersonMutation, CreatePersonMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions};
        return Apollo.useMutation<CreatePersonMutation, CreatePersonMutationVariables>(CreatePersonDocument, options);
      }

export type CreatePersonMutationHookResult = ReturnType<typeof useCreatePersonMutation>;
export type CreatePersonMutationResult = Apollo.MutationResult<CreatePersonMutation>;
export type CreatePersonMutationOptions = Apollo.BaseMutationOptions<CreatePersonMutation, CreatePersonMutationVariables>;
export const DeleteAccountDocument = gql`
    mutation deleteAccount($password: String!) {
  deleteAccount(password: $password)
}
    `;
export type DeleteAccountMutationFn = Apollo.MutationFunction<DeleteAccountMutation, DeleteAccountMutationVariables>;

/**
 * __useDeleteAccountMutation__
 *
 * To run a mutation, you first call `useDeleteAccountMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteAccountMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteAccountMutation, { data, loading, error }] = useDeleteAccountMutation({
 *   variables: {
 *      password: // value for 'password'
 *   },
 * });
 */
export function useDeleteAccountMutation(baseOptions?: Apollo.MutationHookOptions<DeleteAccountMutation, DeleteAccountMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions};
        return Apollo.useMutation<DeleteAccountMutation, DeleteAccountMutationVariables>(DeleteAccountDocument, options);
      }

export type DeleteAccountMutationHookResult = ReturnType<typeof useDeleteAccountMutation>;
export type DeleteAccountMutationResult = Apollo.MutationResult<DeleteAccountMutation>;
export type DeleteAccountMutationOptions = Apollo.BaseMutationOptions<DeleteAccountMutation, DeleteAccountMutationVariables>;
export const DeleteActorInMovieDocument = gql`
    mutation deleteActorInMovie($where: ActorInMovieWhereUniqueInput!) {
  deleteActorInMovie(where: $where)
}
    `;
export type DeleteActorInMovieMutationFn = Apollo.MutationFunction<DeleteActorInMovieMutation, DeleteActorInMovieMutationVariables>;

/**
 * __useDeleteActorInMovieMutation__
 *
 * To run a mutation, you first call `useDeleteActorInMovieMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteActorInMovieMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteActorInMovieMutation, { data, loading, error }] = useDeleteActorInMovieMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useDeleteActorInMovieMutation(baseOptions?: Apollo.MutationHookOptions<DeleteActorInMovieMutation, DeleteActorInMovieMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions};
        return Apollo.useMutation<DeleteActorInMovieMutation, DeleteActorInMovieMutationVariables>(DeleteActorInMovieDocument, options);
      }

export type DeleteActorInMovieMutationHookResult = ReturnType<typeof useDeleteActorInMovieMutation>;
export type DeleteActorInMovieMutationResult = Apollo.MutationResult<DeleteActorInMovieMutation>;
export type DeleteActorInMovieMutationOptions = Apollo.BaseMutationOptions<DeleteActorInMovieMutation, DeleteActorInMovieMutationVariables>;
export const DeleteMovieReviewDocument = gql`
    mutation deleteMovieReview($movieId: Int!) {
  deleteMovieReview(movieId: $movieId)
}
    `;
export type DeleteMovieReviewMutationFn = Apollo.MutationFunction<DeleteMovieReviewMutation, DeleteMovieReviewMutationVariables>;

/**
 * __useDeleteMovieReviewMutation__
 *
 * To run a mutation, you first call `useDeleteMovieReviewMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteMovieReviewMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteMovieReviewMutation, { data, loading, error }] = useDeleteMovieReviewMutation({
 *   variables: {
 *      movieId: // value for 'movieId'
 *   },
 * });
 */
export function useDeleteMovieReviewMutation(baseOptions?: Apollo.MutationHookOptions<DeleteMovieReviewMutation, DeleteMovieReviewMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions};
        return Apollo.useMutation<DeleteMovieReviewMutation, DeleteMovieReviewMutationVariables>(DeleteMovieReviewDocument, options);
      }

export type DeleteMovieReviewMutationHookResult = ReturnType<typeof useDeleteMovieReviewMutation>;
export type DeleteMovieReviewMutationResult = Apollo.MutationResult<DeleteMovieReviewMutation>;
export type DeleteMovieReviewMutationOptions = Apollo.BaseMutationOptions<DeleteMovieReviewMutation, DeleteMovieReviewMutationVariables>;
export const DeletePersonDocument = gql`
    mutation DeletePerson($where: PersonWhereUniqueInput!) {
  deletePerson(where: $where) {
    id
  }
}
    `;
export type DeletePersonMutationFn = Apollo.MutationFunction<DeletePersonMutation, DeletePersonMutationVariables>;

/**
 * __useDeletePersonMutation__
 *
 * To run a mutation, you first call `useDeletePersonMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeletePersonMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deletePersonMutation, { data, loading, error }] = useDeletePersonMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useDeletePersonMutation(baseOptions?: Apollo.MutationHookOptions<DeletePersonMutation, DeletePersonMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions};
        return Apollo.useMutation<DeletePersonMutation, DeletePersonMutationVariables>(DeletePersonDocument, options);
      }

export type DeletePersonMutationHookResult = ReturnType<typeof useDeletePersonMutation>;
export type DeletePersonMutationResult = Apollo.MutationResult<DeletePersonMutation>;
export type DeletePersonMutationOptions = Apollo.BaseMutationOptions<DeletePersonMutation, DeletePersonMutationVariables>;
export const LikeMovieDocument = gql`
    mutation LikeMovie($data: MovieLikeCreateCustomInput!) {
  likeMovie(data: $data)
}
    `;
export type LikeMovieMutationFn = Apollo.MutationFunction<LikeMovieMutation, LikeMovieMutationVariables>;

/**
 * __useLikeMovieMutation__
 *
 * To run a mutation, you first call `useLikeMovieMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLikeMovieMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [likeMovieMutation, { data, loading, error }] = useLikeMovieMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useLikeMovieMutation(baseOptions?: Apollo.MutationHookOptions<LikeMovieMutation, LikeMovieMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions};
        return Apollo.useMutation<LikeMovieMutation, LikeMovieMutationVariables>(LikeMovieDocument, options);
      }

export type LikeMovieMutationHookResult = ReturnType<typeof useLikeMovieMutation>;
export type LikeMovieMutationResult = Apollo.MutationResult<LikeMovieMutation>;
export type LikeMovieMutationOptions = Apollo.BaseMutationOptions<LikeMovieMutation, LikeMovieMutationVariables>;
export const LoginDocument = gql`
    mutation Login($data: LoginInput!) {
  login(data: $data) {
    ...RegularUser
  }
}
    ${RegularUserFragmentDoc}`;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions};
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }

export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const LogoutDocument = gql`
    mutation Logout {
  logout
}
    `;
export type LogoutMutationFn = Apollo.MutationFunction<LogoutMutation, LogoutMutationVariables>;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(baseOptions?: Apollo.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions};
        return Apollo.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, options);
      }

export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = Apollo.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
export const RegisterDocument = gql`
    mutation Register($data: RegisterInput!) {
  register(data: $data) {
    ...RegularUser
  }
}
    ${RegularUserFragmentDoc}`;
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions};
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, options);
      }

export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const UnlikeMovieDocument = gql`
    mutation UnlikeMovie($movieId: Int!) {
  unlikeMovie(movieId: $movieId)
}
    `;
export type UnlikeMovieMutationFn = Apollo.MutationFunction<UnlikeMovieMutation, UnlikeMovieMutationVariables>;

/**
 * __useUnlikeMovieMutation__
 *
 * To run a mutation, you first call `useUnlikeMovieMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUnlikeMovieMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [unlikeMovieMutation, { data, loading, error }] = useUnlikeMovieMutation({
 *   variables: {
 *      movieId: // value for 'movieId'
 *   },
 * });
 */
export function useUnlikeMovieMutation(baseOptions?: Apollo.MutationHookOptions<UnlikeMovieMutation, UnlikeMovieMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions};
        return Apollo.useMutation<UnlikeMovieMutation, UnlikeMovieMutationVariables>(UnlikeMovieDocument, options);
      }

export type UnlikeMovieMutationHookResult = ReturnType<typeof useUnlikeMovieMutation>;
export type UnlikeMovieMutationResult = Apollo.MutationResult<UnlikeMovieMutation>;
export type UnlikeMovieMutationOptions = Apollo.BaseMutationOptions<UnlikeMovieMutation, UnlikeMovieMutationVariables>;
export const UpdateGenreDocument = gql`
    mutation updateGenre($data: GenreUpdateInput!, $where: GenreWhereUniqueInput!) {
  updateGenre(data: $data, where: $where) {
    name
  }
}
    `;
export type UpdateGenreMutationFn = Apollo.MutationFunction<UpdateGenreMutation, UpdateGenreMutationVariables>;

/**
 * __useUpdateGenreMutation__
 *
 * To run a mutation, you first call `useUpdateGenreMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateGenreMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateGenreMutation, { data, loading, error }] = useUpdateGenreMutation({
 *   variables: {
 *      data: // value for 'data'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useUpdateGenreMutation(baseOptions?: Apollo.MutationHookOptions<UpdateGenreMutation, UpdateGenreMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions};
        return Apollo.useMutation<UpdateGenreMutation, UpdateGenreMutationVariables>(UpdateGenreDocument, options);
      }

export type UpdateGenreMutationHookResult = ReturnType<typeof useUpdateGenreMutation>;
export type UpdateGenreMutationResult = Apollo.MutationResult<UpdateGenreMutation>;
export type UpdateGenreMutationOptions = Apollo.BaseMutationOptions<UpdateGenreMutation, UpdateGenreMutationVariables>;
export const UpdateMovieDocument = gql`
    mutation UpdateMovie($data: MovieUpdateInput!, $where: MovieWhereUniqueInput!) {
  updateMovie(data: $data, where: $where) {
    ...RegularMovie
  }
}
    ${RegularMovieFragmentDoc}`;
export type UpdateMovieMutationFn = Apollo.MutationFunction<UpdateMovieMutation, UpdateMovieMutationVariables>;

/**
 * __useUpdateMovieMutation__
 *
 * To run a mutation, you first call `useUpdateMovieMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateMovieMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateMovieMutation, { data, loading, error }] = useUpdateMovieMutation({
 *   variables: {
 *      data: // value for 'data'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useUpdateMovieMutation(baseOptions?: Apollo.MutationHookOptions<UpdateMovieMutation, UpdateMovieMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions};
        return Apollo.useMutation<UpdateMovieMutation, UpdateMovieMutationVariables>(UpdateMovieDocument, options);
      }

export type UpdateMovieMutationHookResult = ReturnType<typeof useUpdateMovieMutation>;
export type UpdateMovieMutationResult = Apollo.MutationResult<UpdateMovieMutation>;
export type UpdateMovieMutationOptions = Apollo.BaseMutationOptions<UpdateMovieMutation, UpdateMovieMutationVariables>;
export const UpdateMovieReivewDocument = gql`
    mutation updateMovieReivew($data: MovieReviewUpdateInput!, $where: MovieReviewWhereUniqueInput!) {
  updateMovieReview(data: $data, where: $where) {
    review
    rating
    _count {
      likes
    }
  }
}
    `;
export type UpdateMovieReivewMutationFn = Apollo.MutationFunction<UpdateMovieReivewMutation, UpdateMovieReivewMutationVariables>;

/**
 * __useUpdateMovieReivewMutation__
 *
 * To run a mutation, you first call `useUpdateMovieReivewMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateMovieReivewMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateMovieReivewMutation, { data, loading, error }] = useUpdateMovieReivewMutation({
 *   variables: {
 *      data: // value for 'data'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useUpdateMovieReivewMutation(baseOptions?: Apollo.MutationHookOptions<UpdateMovieReivewMutation, UpdateMovieReivewMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions};
        return Apollo.useMutation<UpdateMovieReivewMutation, UpdateMovieReivewMutationVariables>(UpdateMovieReivewDocument, options);
      }

export type UpdateMovieReivewMutationHookResult = ReturnType<typeof useUpdateMovieReivewMutation>;
export type UpdateMovieReivewMutationResult = Apollo.MutationResult<UpdateMovieReivewMutation>;
export type UpdateMovieReivewMutationOptions = Apollo.BaseMutationOptions<UpdateMovieReivewMutation, UpdateMovieReivewMutationVariables>;
export const UpdatePersonDocument = gql`
    mutation UpdatePerson($data: PersonUpdateInput!, $where: PersonWhereUniqueInput!) {
  updatePerson(data: $data, where: $where) {
    ...RegularPerson
  }
}
    ${RegularPersonFragmentDoc}`;
export type UpdatePersonMutationFn = Apollo.MutationFunction<UpdatePersonMutation, UpdatePersonMutationVariables>;

/**
 * __useUpdatePersonMutation__
 *
 * To run a mutation, you first call `useUpdatePersonMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePersonMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePersonMutation, { data, loading, error }] = useUpdatePersonMutation({
 *   variables: {
 *      data: // value for 'data'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useUpdatePersonMutation(baseOptions?: Apollo.MutationHookOptions<UpdatePersonMutation, UpdatePersonMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions};
        return Apollo.useMutation<UpdatePersonMutation, UpdatePersonMutationVariables>(UpdatePersonDocument, options);
      }

export type UpdatePersonMutationHookResult = ReturnType<typeof useUpdatePersonMutation>;
export type UpdatePersonMutationResult = Apollo.MutationResult<UpdatePersonMutation>;
export type UpdatePersonMutationOptions = Apollo.BaseMutationOptions<UpdatePersonMutation, UpdatePersonMutationVariables>;
export const UpdateUserDocument = gql`
    mutation UpdateUser($data: UserUpdateInput!) {
  updateUser(data: $data) {
    ...RegularUser
  }
}
    ${RegularUserFragmentDoc}`;
export type UpdateUserMutationFn = Apollo.MutationFunction<UpdateUserMutation, UpdateUserMutationVariables>;

/**
 * __useUpdateUserMutation__
 *
 * To run a mutation, you first call `useUpdateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserMutation, { data, loading, error }] = useUpdateUserMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useUpdateUserMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUserMutation, UpdateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions};
        return Apollo.useMutation<UpdateUserMutation, UpdateUserMutationVariables>(UpdateUserDocument, options);
      }

export type UpdateUserMutationHookResult = ReturnType<typeof useUpdateUserMutation>;
export type UpdateUserMutationResult = Apollo.MutationResult<UpdateUserMutation>;
export type UpdateUserMutationOptions = Apollo.BaseMutationOptions<UpdateUserMutation, UpdateUserMutationVariables>;
export const UploadAvatarDocument = gql`
    mutation UploadAvatar($file: Upload!) {
  uploadAvatar(file: $file)
}
    `;
export type UploadAvatarMutationFn = Apollo.MutationFunction<UploadAvatarMutation, UploadAvatarMutationVariables>;

/**
 * __useUploadAvatarMutation__
 *
 * To run a mutation, you first call `useUploadAvatarMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUploadAvatarMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [uploadAvatarMutation, { data, loading, error }] = useUploadAvatarMutation({
 *   variables: {
 *      file: // value for 'file'
 *   },
 * });
 */
export function useUploadAvatarMutation(baseOptions?: Apollo.MutationHookOptions<UploadAvatarMutation, UploadAvatarMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions};
        return Apollo.useMutation<UploadAvatarMutation, UploadAvatarMutationVariables>(UploadAvatarDocument, options);
      }

export type UploadAvatarMutationHookResult = ReturnType<typeof useUploadAvatarMutation>;
export type UploadAvatarMutationResult = Apollo.MutationResult<UploadAvatarMutation>;
export type UploadAvatarMutationOptions = Apollo.BaseMutationOptions<UploadAvatarMutation, UploadAvatarMutationVariables>;
export const UploadBackdropDocument = gql`
    mutation UploadBackdrop($id: Int!, $file: Upload!, $type: UploadType!) {
  uploadBackdrop(id: $id, file: $file, type: $type)
}
    `;
export type UploadBackdropMutationFn = Apollo.MutationFunction<UploadBackdropMutation, UploadBackdropMutationVariables>;

/**
 * __useUploadBackdropMutation__
 *
 * To run a mutation, you first call `useUploadBackdropMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUploadBackdropMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [uploadBackdropMutation, { data, loading, error }] = useUploadBackdropMutation({
 *   variables: {
 *      id: // value for 'id'
 *      file: // value for 'file'
 *      type: // value for 'type'
 *   },
 * });
 */
export function useUploadBackdropMutation(baseOptions?: Apollo.MutationHookOptions<UploadBackdropMutation, UploadBackdropMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions};
        return Apollo.useMutation<UploadBackdropMutation, UploadBackdropMutationVariables>(UploadBackdropDocument, options);
      }

export type UploadBackdropMutationHookResult = ReturnType<typeof useUploadBackdropMutation>;
export type UploadBackdropMutationResult = Apollo.MutationResult<UploadBackdropMutation>;
export type UploadBackdropMutationOptions = Apollo.BaseMutationOptions<UploadBackdropMutation, UploadBackdropMutationVariables>;
export const UploadPosterDocument = gql`
    mutation UploadPoster($id: Int!, $file: Upload!, $type: UploadType!) {
  uploadPoster(id: $id, file: $file, type: $type)
}
    `;
export type UploadPosterMutationFn = Apollo.MutationFunction<UploadPosterMutation, UploadPosterMutationVariables>;

/**
 * __useUploadPosterMutation__
 *
 * To run a mutation, you first call `useUploadPosterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUploadPosterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [uploadPosterMutation, { data, loading, error }] = useUploadPosterMutation({
 *   variables: {
 *      id: // value for 'id'
 *      file: // value for 'file'
 *      type: // value for 'type'
 *   },
 * });
 */
export function useUploadPosterMutation(baseOptions?: Apollo.MutationHookOptions<UploadPosterMutation, UploadPosterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions};
        return Apollo.useMutation<UploadPosterMutation, UploadPosterMutationVariables>(UploadPosterDocument, options);
      }

export type UploadPosterMutationHookResult = ReturnType<typeof useUploadPosterMutation>;
export type UploadPosterMutationResult = Apollo.MutationResult<UploadPosterMutation>;
export type UploadPosterMutationOptions = Apollo.BaseMutationOptions<UploadPosterMutation, UploadPosterMutationVariables>;
export const ActorsInMovieDocument = gql`
    query ActorsInMovie($movieId: Int!, $where: ActorInMovieWhereInput, $orderBy: [ActorInMovieOrderByWithRelationInput!], $cursor: ActorInMovieWhereUniqueInput, $take: Int) {
  movie(movieId: $movieId) {
    actors(where: $where, orderBy: $orderBy, cursor: $cursor, take: $take) {
      personId
    }
  }
}
    `;

/**
 * __useActorsInMovieQuery__
 *
 * To run a query within a React component, call `useActorsInMovieQuery` and pass it any options that fit your needs.
 * When your component renders, `useActorsInMovieQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useActorsInMovieQuery({
 *   variables: {
 *      movieId: // value for 'movieId'
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *      cursor: // value for 'cursor'
 *      take: // value for 'take'
 *   },
 * });
 */
export function useActorsInMovieQuery(baseOptions: Apollo.QueryHookOptions<ActorsInMovieQuery, ActorsInMovieQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions};
        return Apollo.useQuery<ActorsInMovieQuery, ActorsInMovieQueryVariables>(ActorsInMovieDocument, options);
      }

export function useActorsInMovieLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ActorsInMovieQuery, ActorsInMovieQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions};
          return Apollo.useLazyQuery<ActorsInMovieQuery, ActorsInMovieQueryVariables>(ActorsInMovieDocument, options);
        }

export type ActorsInMovieQueryHookResult = ReturnType<typeof useActorsInMovieQuery>;
export type ActorsInMovieLazyQueryHookResult = ReturnType<typeof useActorsInMovieLazyQuery>;
export type ActorsInMovieQueryResult = Apollo.QueryResult<ActorsInMovieQuery, ActorsInMovieQueryVariables>;
export const CountMediaDocument = gql`
    query CountMedia {
  aggregateMovie {
    _count {
      _all
    }
  }
  aggregateUser {
    _count {
      _all
    }
  }
  aggregatePerson {
    _count {
      _all
    }
  }
  aggregateMovieReview {
    _count {
      _all
    }
  }
}
    `;

/**
 * __useCountMediaQuery__
 *
 * To run a query within a React component, call `useCountMediaQuery` and pass it any options that fit your needs.
 * When your component renders, `useCountMediaQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCountMediaQuery({
 *   variables: {
 *   },
 * });
 */
export function useCountMediaQuery(baseOptions?: Apollo.QueryHookOptions<CountMediaQuery, CountMediaQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions};
        return Apollo.useQuery<CountMediaQuery, CountMediaQueryVariables>(CountMediaDocument, options);
      }

export function useCountMediaLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CountMediaQuery, CountMediaQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions};
          return Apollo.useLazyQuery<CountMediaQuery, CountMediaQueryVariables>(CountMediaDocument, options);
        }

export type CountMediaQueryHookResult = ReturnType<typeof useCountMediaQuery>;
export type CountMediaLazyQueryHookResult = ReturnType<typeof useCountMediaLazyQuery>;
export type CountMediaQueryResult = Apollo.QueryResult<CountMediaQuery, CountMediaQueryVariables>;
export const GenresDocument = gql`
    query Genres($where: GenreWhereInput) {
  genres(where: $where) {
    id
    name
  }
}
    `;

/**
 * __useGenresQuery__
 *
 * To run a query within a React component, call `useGenresQuery` and pass it any options that fit your needs.
 * When your component renders, `useGenresQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGenresQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useGenresQuery(baseOptions?: Apollo.QueryHookOptions<GenresQuery, GenresQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions};
        return Apollo.useQuery<GenresQuery, GenresQueryVariables>(GenresDocument, options);
      }

export function useGenresLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GenresQuery, GenresQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions};
          return Apollo.useLazyQuery<GenresQuery, GenresQueryVariables>(GenresDocument, options);
        }

export type GenresQueryHookResult = ReturnType<typeof useGenresQuery>;
export type GenresLazyQueryHookResult = ReturnType<typeof useGenresLazyQuery>;
export type GenresQueryResult = Apollo.QueryResult<GenresQuery, GenresQueryVariables>;
export const LikedMoviesDocument = gql`
    query LikedMovies($where: MovieLikeWhereInput, $orderBy: [MovieLikeOrderByWithRelationInput!], $cursor: MovieLikeWhereUniqueInput, $skip: Int, $take: Int) {
  likedMovies(
    where: $where
    orderBy: $orderBy
    cursor: $cursor
    skip: $skip
    take: $take
  ) {
    movie {
      id
      title
    }
  }
}
    `;

/**
 * __useLikedMoviesQuery__
 *
 * To run a query within a React component, call `useLikedMoviesQuery` and pass it any options that fit your needs.
 * When your component renders, `useLikedMoviesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLikedMoviesQuery({
 *   variables: {
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *      cursor: // value for 'cursor'
 *      skip: // value for 'skip'
 *      take: // value for 'take'
 *   },
 * });
 */
export function useLikedMoviesQuery(baseOptions?: Apollo.QueryHookOptions<LikedMoviesQuery, LikedMoviesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions};
        return Apollo.useQuery<LikedMoviesQuery, LikedMoviesQueryVariables>(LikedMoviesDocument, options);
      }

export function useLikedMoviesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<LikedMoviesQuery, LikedMoviesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions};
          return Apollo.useLazyQuery<LikedMoviesQuery, LikedMoviesQueryVariables>(LikedMoviesDocument, options);
        }

export type LikedMoviesQueryHookResult = ReturnType<typeof useLikedMoviesQuery>;
export type LikedMoviesLazyQueryHookResult = ReturnType<typeof useLikedMoviesLazyQuery>;
export type LikedMoviesQueryResult = Apollo.QueryResult<LikedMoviesQuery, LikedMoviesQueryVariables>;
export const MeDocument = gql`
    query Me {
  me {
    ...RegularUser
    confirmed
  }
}
    ${RegularUserFragmentDoc}`;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions};
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
      }

export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions};
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }

export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;
export const MovieDocument = gql`
    query Movie($movieId: Int!) {
  movie(movieId: $movieId) {
    ...RegularMovie
  }
}
    ${RegularMovieFragmentDoc}`;

/**
 * __useMovieQuery__
 *
 * To run a query within a React component, call `useMovieQuery` and pass it any options that fit your needs.
 * When your component renders, `useMovieQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMovieQuery({
 *   variables: {
 *      movieId: // value for 'movieId'
 *   },
 * });
 */
export function useMovieQuery(baseOptions: Apollo.QueryHookOptions<MovieQuery, MovieQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions};
        return Apollo.useQuery<MovieQuery, MovieQueryVariables>(MovieDocument, options);
      }

export function useMovieLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MovieQuery, MovieQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions};
          return Apollo.useLazyQuery<MovieQuery, MovieQueryVariables>(MovieDocument, options);
        }

export type MovieQueryHookResult = ReturnType<typeof useMovieQuery>;
export type MovieLazyQueryHookResult = ReturnType<typeof useMovieLazyQuery>;
export type MovieQueryResult = Apollo.QueryResult<MovieQuery, MovieQueryVariables>;
export const MovieReviewDocument = gql`
    query MovieReview($where: MovieReviewWhereUniqueInput!) {
  movieReview(where: $where) {
    movieId
    review
    rating
    user {
      id
      username
      avatar
    }
    _count {
      likes
    }
  }
}
    `;

/**
 * __useMovieReviewQuery__
 *
 * To run a query within a React component, call `useMovieReviewQuery` and pass it any options that fit your needs.
 * When your component renders, `useMovieReviewQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMovieReviewQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useMovieReviewQuery(baseOptions: Apollo.QueryHookOptions<MovieReviewQuery, MovieReviewQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions};
        return Apollo.useQuery<MovieReviewQuery, MovieReviewQueryVariables>(MovieReviewDocument, options);
      }

export function useMovieReviewLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MovieReviewQuery, MovieReviewQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions};
          return Apollo.useLazyQuery<MovieReviewQuery, MovieReviewQueryVariables>(MovieReviewDocument, options);
        }

export type MovieReviewQueryHookResult = ReturnType<typeof useMovieReviewQuery>;
export type MovieReviewLazyQueryHookResult = ReturnType<typeof useMovieReviewLazyQuery>;
export type MovieReviewQueryResult = Apollo.QueryResult<MovieReviewQuery, MovieReviewQueryVariables>;
export const MovieReviewsDocument = gql`
    query MovieReviews($where: MovieReviewWhereInput, $orderBy: [MovieReviewOrderByWithRelationInput!], $cursor: MovieReviewWhereUniqueInput, $skip: Int, $take: Int) {
  movieReviews(
    where: $where
    orderBy: $orderBy
    cursor: $cursor
    skip: $skip
    take: $take
  ) {
    review
    rating
    user {
      id
      username
      avatar
    }
    _count {
      likes
    }
  }
}
    `;

/**
 * __useMovieReviewsQuery__
 *
 * To run a query within a React component, call `useMovieReviewsQuery` and pass it any options that fit your needs.
 * When your component renders, `useMovieReviewsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMovieReviewsQuery({
 *   variables: {
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *      cursor: // value for 'cursor'
 *      skip: // value for 'skip'
 *      take: // value for 'take'
 *   },
 * });
 */
export function useMovieReviewsQuery(baseOptions?: Apollo.QueryHookOptions<MovieReviewsQuery, MovieReviewsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions};
        return Apollo.useQuery<MovieReviewsQuery, MovieReviewsQueryVariables>(MovieReviewsDocument, options);
      }

export function useMovieReviewsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MovieReviewsQuery, MovieReviewsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions};
          return Apollo.useLazyQuery<MovieReviewsQuery, MovieReviewsQueryVariables>(MovieReviewsDocument, options);
        }

export type MovieReviewsQueryHookResult = ReturnType<typeof useMovieReviewsQuery>;
export type MovieReviewsLazyQueryHookResult = ReturnType<typeof useMovieReviewsLazyQuery>;
export type MovieReviewsQueryResult = Apollo.QueryResult<MovieReviewsQuery, MovieReviewsQueryVariables>;
export const MoviesDocument = gql`
    query Movies($where: MovieWhereInput, $orderBy: [MovieOrderByWithRelationInput!], $cursor: MovieWhereUniqueInput, $skip: Int, $take: Int) {
  movies(
    where: $where
    orderBy: $orderBy
    cursor: $cursor
    skip: $skip
    take: $take
  ) {
    id
    title
    poster
  }
}
    `;

/**
 * __useMoviesQuery__
 *
 * To run a query within a React component, call `useMoviesQuery` and pass it any options that fit your needs.
 * When your component renders, `useMoviesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMoviesQuery({
 *   variables: {
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *      cursor: // value for 'cursor'
 *      skip: // value for 'skip'
 *      take: // value for 'take'
 *   },
 * });
 */
export function useMoviesQuery(baseOptions?: Apollo.QueryHookOptions<MoviesQuery, MoviesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions};
        return Apollo.useQuery<MoviesQuery, MoviesQueryVariables>(MoviesDocument, options);
      }

export function useMoviesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MoviesQuery, MoviesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions};
          return Apollo.useLazyQuery<MoviesQuery, MoviesQueryVariables>(MoviesDocument, options);
        }

export type MoviesQueryHookResult = ReturnType<typeof useMoviesQuery>;
export type MoviesLazyQueryHookResult = ReturnType<typeof useMoviesLazyQuery>;
export type MoviesQueryResult = Apollo.QueryResult<MoviesQuery, MoviesQueryVariables>;
export const PeopleDocument = gql`
    query People($where: PersonWhereInput, $orderBy: [PersonOrderByWithRelationInput!], $cursor: PersonWhereUniqueInput, $take: Int) {
  people(where: $where, orderBy: $orderBy, cursor: $cursor, take: $take) {
    id
    career
    name
    poster
  }
}
    `;

/**
 * __usePeopleQuery__
 *
 * To run a query within a React component, call `usePeopleQuery` and pass it any options that fit your needs.
 * When your component renders, `usePeopleQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePeopleQuery({
 *   variables: {
 *      where: // value for 'where'
 *      orderBy: // value for 'orderBy'
 *      cursor: // value for 'cursor'
 *      take: // value for 'take'
 *   },
 * });
 */
export function usePeopleQuery(baseOptions?: Apollo.QueryHookOptions<PeopleQuery, PeopleQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions};
        return Apollo.useQuery<PeopleQuery, PeopleQueryVariables>(PeopleDocument, options);
      }

export function usePeopleLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PeopleQuery, PeopleQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions};
          return Apollo.useLazyQuery<PeopleQuery, PeopleQueryVariables>(PeopleDocument, options);
        }

export type PeopleQueryHookResult = ReturnType<typeof usePeopleQuery>;
export type PeopleLazyQueryHookResult = ReturnType<typeof usePeopleLazyQuery>;
export type PeopleQueryResult = Apollo.QueryResult<PeopleQuery, PeopleQueryVariables>;
export const PersonDocument = gql`
    query Person($personId: Int!) {
  person(personId: $personId) {
    ...RegularPerson
  }
}
    ${RegularPersonFragmentDoc}`;

/**
 * __usePersonQuery__
 *
 * To run a query within a React component, call `usePersonQuery` and pass it any options that fit your needs.
 * When your component renders, `usePersonQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePersonQuery({
 *   variables: {
 *      personId: // value for 'personId'
 *   },
 * });
 */
export function usePersonQuery(baseOptions: Apollo.QueryHookOptions<PersonQuery, PersonQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions};
        return Apollo.useQuery<PersonQuery, PersonQueryVariables>(PersonDocument, options);
      }

export function usePersonLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PersonQuery, PersonQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions};
          return Apollo.useLazyQuery<PersonQuery, PersonQueryVariables>(PersonDocument, options);
        }

export type PersonQueryHookResult = ReturnType<typeof usePersonQuery>;
export type PersonLazyQueryHookResult = ReturnType<typeof usePersonLazyQuery>;
export type PersonQueryResult = Apollo.QueryResult<PersonQuery, PersonQueryVariables>;
export const PreferencesDocument = gql`
    query Preferences {
  me {
    id
    confirmed
    email
    username
    displayname
    role
    avatar
    bio
    location
    website
    dob
    createdAt
    updatedAt
  }
}
    `;

/**
 * __usePreferencesQuery__
 *
 * To run a query within a React component, call `usePreferencesQuery` and pass it any options that fit your needs.
 * When your component renders, `usePreferencesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePreferencesQuery({
 *   variables: {
 *   },
 * });
 */
export function usePreferencesQuery(baseOptions?: Apollo.QueryHookOptions<PreferencesQuery, PreferencesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions};
        return Apollo.useQuery<PreferencesQuery, PreferencesQueryVariables>(PreferencesDocument, options);
      }

export function usePreferencesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PreferencesQuery, PreferencesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions};
          return Apollo.useLazyQuery<PreferencesQuery, PreferencesQueryVariables>(PreferencesDocument, options);
        }

export type PreferencesQueryHookResult = ReturnType<typeof usePreferencesQuery>;
export type PreferencesLazyQueryHookResult = ReturnType<typeof usePreferencesLazyQuery>;
export type PreferencesQueryResult = Apollo.QueryResult<PreferencesQuery, PreferencesQueryVariables>;
export const UserDocument = gql`
    query User($username: String!) {
  user(username: $username) {
    id
    confirmed
    email
    username
    displayname
    role
    avatar
    bio
    location
    website
    dob
    createdAt
    updatedAt
  }
}
    `;

/**
 * __useUserQuery__
 *
 * To run a query within a React component, call `useUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserQuery({
 *   variables: {
 *      username: // value for 'username'
 *   },
 * });
 */
export function useUserQuery(baseOptions: Apollo.QueryHookOptions<UserQuery, UserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions};
        return Apollo.useQuery<UserQuery, UserQueryVariables>(UserDocument, options);
      }

export function useUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserQuery, UserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions};
          return Apollo.useLazyQuery<UserQuery, UserQueryVariables>(UserDocument, options);
        }

export type UserQueryHookResult = ReturnType<typeof useUserQuery>;
export type UserLazyQueryHookResult = ReturnType<typeof useUserLazyQuery>;
export type UserQueryResult = Apollo.QueryResult<UserQuery, UserQueryVariables>;
