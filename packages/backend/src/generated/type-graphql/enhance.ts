import { ClassType } from "type-graphql";
import * as tslib from "tslib";
import * as crudResolvers from "./resolvers/crud/resolvers-crud.index";
import * as argsTypes from "./resolvers/crud/args.index";
import * as actionResolvers from "./resolvers/crud/resolvers-actions.index";
import * as relationResolvers from "./resolvers/relations/resolvers.index";
import * as models from "./models";
import * as outputTypes from "./resolvers/outputs";
import * as inputTypes from "./resolvers/inputs";

export type MethodDecoratorOverrideFn = (decorators: MethodDecorator[]) => MethodDecorator[];

const crudResolversMap = {
  User: crudResolvers.UserCrudResolver,
  Person: crudResolvers.PersonCrudResolver,
  Movie: crudResolvers.MovieCrudResolver,
  ActorInMovie: crudResolvers.ActorInMovieCrudResolver,
  Genre: crudResolvers.GenreCrudResolver,
  MovieLike: crudResolvers.MovieLikeCrudResolver,
  MovieReview: crudResolvers.MovieReviewCrudResolver,
  MovieReviewLike: crudResolvers.MovieReviewLikeCrudResolver
};
const actionResolversMap = {
  User: {
    aggregateUser: actionResolvers.AggregateUserResolver,
    createManyUser: actionResolvers.CreateManyUserResolver,
    createOneUser: actionResolvers.CreateOneUserResolver,
    deleteManyUser: actionResolvers.DeleteManyUserResolver,
    deleteOneUser: actionResolvers.DeleteOneUserResolver,
    findFirstUser: actionResolvers.FindFirstUserResolver,
    findFirstUserOrThrow: actionResolvers.FindFirstUserOrThrowResolver,
    users: actionResolvers.FindManyUserResolver,
    user: actionResolvers.FindUniqueUserResolver,
    getUser: actionResolvers.FindUniqueUserOrThrowResolver,
    groupByUser: actionResolvers.GroupByUserResolver,
    updateManyUser: actionResolvers.UpdateManyUserResolver,
    updateOneUser: actionResolvers.UpdateOneUserResolver,
    upsertOneUser: actionResolvers.UpsertOneUserResolver
  },
  Person: {
    aggregatePerson: actionResolvers.AggregatePersonResolver,
    createManyPerson: actionResolvers.CreateManyPersonResolver,
    createOnePerson: actionResolvers.CreateOnePersonResolver,
    deleteManyPerson: actionResolvers.DeleteManyPersonResolver,
    deleteOnePerson: actionResolvers.DeleteOnePersonResolver,
    findFirstPerson: actionResolvers.FindFirstPersonResolver,
    findFirstPersonOrThrow: actionResolvers.FindFirstPersonOrThrowResolver,
    people: actionResolvers.FindManyPersonResolver,
    person: actionResolvers.FindUniquePersonResolver,
    getPerson: actionResolvers.FindUniquePersonOrThrowResolver,
    groupByPerson: actionResolvers.GroupByPersonResolver,
    updateManyPerson: actionResolvers.UpdateManyPersonResolver,
    updateOnePerson: actionResolvers.UpdateOnePersonResolver,
    upsertOnePerson: actionResolvers.UpsertOnePersonResolver
  },
  Movie: {
    aggregateMovie: actionResolvers.AggregateMovieResolver,
    createManyMovie: actionResolvers.CreateManyMovieResolver,
    createOneMovie: actionResolvers.CreateOneMovieResolver,
    deleteManyMovie: actionResolvers.DeleteManyMovieResolver,
    deleteOneMovie: actionResolvers.DeleteOneMovieResolver,
    findFirstMovie: actionResolvers.FindFirstMovieResolver,
    findFirstMovieOrThrow: actionResolvers.FindFirstMovieOrThrowResolver,
    movies: actionResolvers.FindManyMovieResolver,
    movie: actionResolvers.FindUniqueMovieResolver,
    getMovie: actionResolvers.FindUniqueMovieOrThrowResolver,
    groupByMovie: actionResolvers.GroupByMovieResolver,
    updateManyMovie: actionResolvers.UpdateManyMovieResolver,
    updateOneMovie: actionResolvers.UpdateOneMovieResolver,
    upsertOneMovie: actionResolvers.UpsertOneMovieResolver
  },
  ActorInMovie: {
    aggregateActorInMovie: actionResolvers.AggregateActorInMovieResolver,
    createManyActorInMovie: actionResolvers.CreateManyActorInMovieResolver,
    createOneActorInMovie: actionResolvers.CreateOneActorInMovieResolver,
    deleteManyActorInMovie: actionResolvers.DeleteManyActorInMovieResolver,
    deleteOneActorInMovie: actionResolvers.DeleteOneActorInMovieResolver,
    findFirstActorInMovie: actionResolvers.FindFirstActorInMovieResolver,
    findFirstActorInMovieOrThrow: actionResolvers.FindFirstActorInMovieOrThrowResolver,
    actorInMovies: actionResolvers.FindManyActorInMovieResolver,
    actorInMovie: actionResolvers.FindUniqueActorInMovieResolver,
    getActorInMovie: actionResolvers.FindUniqueActorInMovieOrThrowResolver,
    groupByActorInMovie: actionResolvers.GroupByActorInMovieResolver,
    updateManyActorInMovie: actionResolvers.UpdateManyActorInMovieResolver,
    updateOneActorInMovie: actionResolvers.UpdateOneActorInMovieResolver,
    upsertOneActorInMovie: actionResolvers.UpsertOneActorInMovieResolver
  },
  Genre: {
    aggregateGenre: actionResolvers.AggregateGenreResolver,
    createManyGenre: actionResolvers.CreateManyGenreResolver,
    createOneGenre: actionResolvers.CreateOneGenreResolver,
    deleteManyGenre: actionResolvers.DeleteManyGenreResolver,
    deleteOneGenre: actionResolvers.DeleteOneGenreResolver,
    findFirstGenre: actionResolvers.FindFirstGenreResolver,
    findFirstGenreOrThrow: actionResolvers.FindFirstGenreOrThrowResolver,
    genres: actionResolvers.FindManyGenreResolver,
    genre: actionResolvers.FindUniqueGenreResolver,
    getGenre: actionResolvers.FindUniqueGenreOrThrowResolver,
    groupByGenre: actionResolvers.GroupByGenreResolver,
    updateManyGenre: actionResolvers.UpdateManyGenreResolver,
    updateOneGenre: actionResolvers.UpdateOneGenreResolver,
    upsertOneGenre: actionResolvers.UpsertOneGenreResolver
  },
  MovieLike: {
    aggregateMovieLike: actionResolvers.AggregateMovieLikeResolver,
    createManyMovieLike: actionResolvers.CreateManyMovieLikeResolver,
    createOneMovieLike: actionResolvers.CreateOneMovieLikeResolver,
    deleteManyMovieLike: actionResolvers.DeleteManyMovieLikeResolver,
    deleteOneMovieLike: actionResolvers.DeleteOneMovieLikeResolver,
    findFirstMovieLike: actionResolvers.FindFirstMovieLikeResolver,
    findFirstMovieLikeOrThrow: actionResolvers.FindFirstMovieLikeOrThrowResolver,
    movieLikes: actionResolvers.FindManyMovieLikeResolver,
    movieLike: actionResolvers.FindUniqueMovieLikeResolver,
    getMovieLike: actionResolvers.FindUniqueMovieLikeOrThrowResolver,
    groupByMovieLike: actionResolvers.GroupByMovieLikeResolver,
    updateManyMovieLike: actionResolvers.UpdateManyMovieLikeResolver,
    updateOneMovieLike: actionResolvers.UpdateOneMovieLikeResolver,
    upsertOneMovieLike: actionResolvers.UpsertOneMovieLikeResolver
  },
  MovieReview: {
    aggregateMovieReview: actionResolvers.AggregateMovieReviewResolver,
    createManyMovieReview: actionResolvers.CreateManyMovieReviewResolver,
    createOneMovieReview: actionResolvers.CreateOneMovieReviewResolver,
    deleteManyMovieReview: actionResolvers.DeleteManyMovieReviewResolver,
    deleteOneMovieReview: actionResolvers.DeleteOneMovieReviewResolver,
    findFirstMovieReview: actionResolvers.FindFirstMovieReviewResolver,
    findFirstMovieReviewOrThrow: actionResolvers.FindFirstMovieReviewOrThrowResolver,
    movieReviews: actionResolvers.FindManyMovieReviewResolver,
    movieReview: actionResolvers.FindUniqueMovieReviewResolver,
    getMovieReview: actionResolvers.FindUniqueMovieReviewOrThrowResolver,
    groupByMovieReview: actionResolvers.GroupByMovieReviewResolver,
    updateManyMovieReview: actionResolvers.UpdateManyMovieReviewResolver,
    updateOneMovieReview: actionResolvers.UpdateOneMovieReviewResolver,
    upsertOneMovieReview: actionResolvers.UpsertOneMovieReviewResolver
  },
  MovieReviewLike: {
    aggregateMovieReviewLike: actionResolvers.AggregateMovieReviewLikeResolver,
    createManyMovieReviewLike: actionResolvers.CreateManyMovieReviewLikeResolver,
    createOneMovieReviewLike: actionResolvers.CreateOneMovieReviewLikeResolver,
    deleteManyMovieReviewLike: actionResolvers.DeleteManyMovieReviewLikeResolver,
    deleteOneMovieReviewLike: actionResolvers.DeleteOneMovieReviewLikeResolver,
    findFirstMovieReviewLike: actionResolvers.FindFirstMovieReviewLikeResolver,
    findFirstMovieReviewLikeOrThrow: actionResolvers.FindFirstMovieReviewLikeOrThrowResolver,
    movieReviewLikes: actionResolvers.FindManyMovieReviewLikeResolver,
    movieReviewLike: actionResolvers.FindUniqueMovieReviewLikeResolver,
    getMovieReviewLike: actionResolvers.FindUniqueMovieReviewLikeOrThrowResolver,
    groupByMovieReviewLike: actionResolvers.GroupByMovieReviewLikeResolver,
    updateManyMovieReviewLike: actionResolvers.UpdateManyMovieReviewLikeResolver,
    updateOneMovieReviewLike: actionResolvers.UpdateOneMovieReviewLikeResolver,
    upsertOneMovieReviewLike: actionResolvers.UpsertOneMovieReviewLikeResolver
  }
};
const crudResolversInfo = {
  User: ["aggregateUser", "createManyUser", "createOneUser", "deleteManyUser", "deleteOneUser", "findFirstUser", "findFirstUserOrThrow", "users", "user", "getUser", "groupByUser", "updateManyUser", "updateOneUser", "upsertOneUser"],
  Person: ["aggregatePerson", "createManyPerson", "createOnePerson", "deleteManyPerson", "deleteOnePerson", "findFirstPerson", "findFirstPersonOrThrow", "people", "person", "getPerson", "groupByPerson", "updateManyPerson", "updateOnePerson", "upsertOnePerson"],
  Movie: ["aggregateMovie", "createManyMovie", "createOneMovie", "deleteManyMovie", "deleteOneMovie", "findFirstMovie", "findFirstMovieOrThrow", "movies", "movie", "getMovie", "groupByMovie", "updateManyMovie", "updateOneMovie", "upsertOneMovie"],
  ActorInMovie: ["aggregateActorInMovie", "createManyActorInMovie", "createOneActorInMovie", "deleteManyActorInMovie", "deleteOneActorInMovie", "findFirstActorInMovie", "findFirstActorInMovieOrThrow", "actorInMovies", "actorInMovie", "getActorInMovie", "groupByActorInMovie", "updateManyActorInMovie", "updateOneActorInMovie", "upsertOneActorInMovie"],
  Genre: ["aggregateGenre", "createManyGenre", "createOneGenre", "deleteManyGenre", "deleteOneGenre", "findFirstGenre", "findFirstGenreOrThrow", "genres", "genre", "getGenre", "groupByGenre", "updateManyGenre", "updateOneGenre", "upsertOneGenre"],
  MovieLike: ["aggregateMovieLike", "createManyMovieLike", "createOneMovieLike", "deleteManyMovieLike", "deleteOneMovieLike", "findFirstMovieLike", "findFirstMovieLikeOrThrow", "movieLikes", "movieLike", "getMovieLike", "groupByMovieLike", "updateManyMovieLike", "updateOneMovieLike", "upsertOneMovieLike"],
  MovieReview: ["aggregateMovieReview", "createManyMovieReview", "createOneMovieReview", "deleteManyMovieReview", "deleteOneMovieReview", "findFirstMovieReview", "findFirstMovieReviewOrThrow", "movieReviews", "movieReview", "getMovieReview", "groupByMovieReview", "updateManyMovieReview", "updateOneMovieReview", "upsertOneMovieReview"],
  MovieReviewLike: ["aggregateMovieReviewLike", "createManyMovieReviewLike", "createOneMovieReviewLike", "deleteManyMovieReviewLike", "deleteOneMovieReviewLike", "findFirstMovieReviewLike", "findFirstMovieReviewLikeOrThrow", "movieReviewLikes", "movieReviewLike", "getMovieReviewLike", "groupByMovieReviewLike", "updateManyMovieReviewLike", "updateOneMovieReviewLike", "upsertOneMovieReviewLike"]
};
const argsInfo = {
  AggregateUserArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyUserArgs: ["data", "skipDuplicates"],
  CreateOneUserArgs: ["data"],
  DeleteManyUserArgs: ["where"],
  DeleteOneUserArgs: ["where"],
  FindFirstUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstUserOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueUserArgs: ["where"],
  FindUniqueUserOrThrowArgs: ["where"],
  GroupByUserArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyUserArgs: ["data", "where"],
  UpdateOneUserArgs: ["data", "where"],
  UpsertOneUserArgs: ["where", "create", "update"],
  AggregatePersonArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyPersonArgs: ["data", "skipDuplicates"],
  CreateOnePersonArgs: ["data"],
  DeleteManyPersonArgs: ["where"],
  DeleteOnePersonArgs: ["where"],
  FindFirstPersonArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstPersonOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyPersonArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniquePersonArgs: ["where"],
  FindUniquePersonOrThrowArgs: ["where"],
  GroupByPersonArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyPersonArgs: ["data", "where"],
  UpdateOnePersonArgs: ["data", "where"],
  UpsertOnePersonArgs: ["where", "create", "update"],
  AggregateMovieArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyMovieArgs: ["data", "skipDuplicates"],
  CreateOneMovieArgs: ["data"],
  DeleteManyMovieArgs: ["where"],
  DeleteOneMovieArgs: ["where"],
  FindFirstMovieArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstMovieOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyMovieArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueMovieArgs: ["where"],
  FindUniqueMovieOrThrowArgs: ["where"],
  GroupByMovieArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyMovieArgs: ["data", "where"],
  UpdateOneMovieArgs: ["data", "where"],
  UpsertOneMovieArgs: ["where", "create", "update"],
  AggregateActorInMovieArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyActorInMovieArgs: ["data", "skipDuplicates"],
  CreateOneActorInMovieArgs: ["data"],
  DeleteManyActorInMovieArgs: ["where"],
  DeleteOneActorInMovieArgs: ["where"],
  FindFirstActorInMovieArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstActorInMovieOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyActorInMovieArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueActorInMovieArgs: ["where"],
  FindUniqueActorInMovieOrThrowArgs: ["where"],
  GroupByActorInMovieArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyActorInMovieArgs: ["data", "where"],
  UpdateOneActorInMovieArgs: ["data", "where"],
  UpsertOneActorInMovieArgs: ["where", "create", "update"],
  AggregateGenreArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyGenreArgs: ["data", "skipDuplicates"],
  CreateOneGenreArgs: ["data"],
  DeleteManyGenreArgs: ["where"],
  DeleteOneGenreArgs: ["where"],
  FindFirstGenreArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstGenreOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyGenreArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueGenreArgs: ["where"],
  FindUniqueGenreOrThrowArgs: ["where"],
  GroupByGenreArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyGenreArgs: ["data", "where"],
  UpdateOneGenreArgs: ["data", "where"],
  UpsertOneGenreArgs: ["where", "create", "update"],
  AggregateMovieLikeArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyMovieLikeArgs: ["data", "skipDuplicates"],
  CreateOneMovieLikeArgs: ["data"],
  DeleteManyMovieLikeArgs: ["where"],
  DeleteOneMovieLikeArgs: ["where"],
  FindFirstMovieLikeArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstMovieLikeOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyMovieLikeArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueMovieLikeArgs: ["where"],
  FindUniqueMovieLikeOrThrowArgs: ["where"],
  GroupByMovieLikeArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyMovieLikeArgs: ["data", "where"],
  UpdateOneMovieLikeArgs: ["data", "where"],
  UpsertOneMovieLikeArgs: ["where", "create", "update"],
  AggregateMovieReviewArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyMovieReviewArgs: ["data", "skipDuplicates"],
  CreateOneMovieReviewArgs: ["data"],
  DeleteManyMovieReviewArgs: ["where"],
  DeleteOneMovieReviewArgs: ["where"],
  FindFirstMovieReviewArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstMovieReviewOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyMovieReviewArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueMovieReviewArgs: ["where"],
  FindUniqueMovieReviewOrThrowArgs: ["where"],
  GroupByMovieReviewArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyMovieReviewArgs: ["data", "where"],
  UpdateOneMovieReviewArgs: ["data", "where"],
  UpsertOneMovieReviewArgs: ["where", "create", "update"],
  AggregateMovieReviewLikeArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyMovieReviewLikeArgs: ["data", "skipDuplicates"],
  CreateOneMovieReviewLikeArgs: ["data"],
  DeleteManyMovieReviewLikeArgs: ["where"],
  DeleteOneMovieReviewLikeArgs: ["where"],
  FindFirstMovieReviewLikeArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstMovieReviewLikeOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyMovieReviewLikeArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueMovieReviewLikeArgs: ["where"],
  FindUniqueMovieReviewLikeOrThrowArgs: ["where"],
  GroupByMovieReviewLikeArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyMovieReviewLikeArgs: ["data", "where"],
  UpdateOneMovieReviewLikeArgs: ["data", "where"],
  UpsertOneMovieReviewLikeArgs: ["where", "create", "update"]
};

type ResolverModelNames = keyof typeof crudResolversMap;

type ModelResolverActionNames<
  TModel extends ResolverModelNames
> = keyof typeof crudResolversMap[TModel]["prototype"];

export type ResolverActionsConfig<
  TModel extends ResolverModelNames
> = Partial<Record<ModelResolverActionNames<TModel>, MethodDecorator[] | MethodDecoratorOverrideFn>>
  & { _all?: MethodDecorator[] };

export type ResolversEnhanceMap = {
  [TModel in ResolverModelNames]?: ResolverActionsConfig<TModel>;
};

export function applyResolversEnhanceMap(
  resolversEnhanceMap: ResolversEnhanceMap,
) {
  for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
    const modelName = resolversEnhanceMapKey as keyof typeof resolversEnhanceMap;
    const crudTarget = crudResolversMap[modelName].prototype;
    const resolverActionsConfig = resolversEnhanceMap[modelName]!;
    const actionResolversConfig = actionResolversMap[modelName];
    const allActionsDecorators = resolverActionsConfig._all ?? [];
    const resolverActionNames = crudResolversInfo[modelName as keyof typeof crudResolversInfo];
    for (const resolverActionName of resolverActionNames) {
      const maybeDecoratorsOrFn = resolverActionsConfig[
        resolverActionName as keyof typeof resolverActionsConfig
      ] as MethodDecorator[] | MethodDecoratorOverrideFn | undefined;
      let decorators: MethodDecorator[];
      if (typeof maybeDecoratorsOrFn === "function") {
        decorators = maybeDecoratorsOrFn(allActionsDecorators);
      } else {
        decorators = [...allActionsDecorators, ...maybeDecoratorsOrFn ?? []];
      }
      const actionTarget = (actionResolversConfig[
        resolverActionName as keyof typeof actionResolversConfig
      ] as Function).prototype;
      tslib.__decorate(decorators, crudTarget, resolverActionName, null);
      tslib.__decorate(decorators, actionTarget, resolverActionName, null);
    }
  }
}

type ArgsTypesNames = keyof typeof argsTypes;

type ArgFieldNames<TArgsType extends ArgsTypesNames> = Exclude<
  keyof typeof argsTypes[TArgsType]["prototype"],
  number | symbol
>;

type ArgFieldsConfig<
  TArgsType extends ArgsTypesNames
> = FieldsConfig<ArgFieldNames<TArgsType>>;

export type ArgConfig<TArgsType extends ArgsTypesNames> = {
  class?: ClassDecorator[];
  fields?: ArgFieldsConfig<TArgsType>;
};

export type ArgsTypesEnhanceMap = {
  [TArgsType in ArgsTypesNames]?: ArgConfig<TArgsType>;
};

export function applyArgsTypesEnhanceMap(
  argsTypesEnhanceMap: ArgsTypesEnhanceMap,
) {
  for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
    const argsTypeName = argsTypesEnhanceMapKey as keyof typeof argsTypesEnhanceMap;
    const typeConfig = argsTypesEnhanceMap[argsTypeName]!;
    const typeClass = argsTypes[argsTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      argsInfo[argsTypeName as keyof typeof argsInfo],
    );
  }
}

const relationResolversMap = {
  User: relationResolvers.UserRelationsResolver,
  Person: relationResolvers.PersonRelationsResolver,
  Movie: relationResolvers.MovieRelationsResolver,
  ActorInMovie: relationResolvers.ActorInMovieRelationsResolver,
  Genre: relationResolvers.GenreRelationsResolver,
  MovieLike: relationResolvers.MovieLikeRelationsResolver,
  MovieReview: relationResolvers.MovieReviewRelationsResolver,
  MovieReviewLike: relationResolvers.MovieReviewLikeRelationsResolver
};
const relationResolversInfo = {
  User: ["likedMovies", "movieReviews", "likedMovieReviews"],
  Person: ["movies"],
  Movie: ["actors", "genres", "reviews", "likes"],
  ActorInMovie: ["movie", "person"],
  Genre: ["movies"],
  MovieLike: ["user", "movie"],
  MovieReview: ["likes", "user", "movie"],
  MovieReviewLike: ["user", "movieReview"]
};

type RelationResolverModelNames = keyof typeof relationResolversMap;

type RelationResolverActionNames<
  TModel extends RelationResolverModelNames
> = keyof typeof relationResolversMap[TModel]["prototype"];

export type RelationResolverActionsConfig<TModel extends RelationResolverModelNames>
  = Partial<Record<RelationResolverActionNames<TModel>, MethodDecorator[] | MethodDecoratorOverrideFn>>
  & { _all?: MethodDecorator[] };

export type RelationResolversEnhanceMap = {
  [TModel in RelationResolverModelNames]?: RelationResolverActionsConfig<TModel>;
};

export function applyRelationResolversEnhanceMap(
  relationResolversEnhanceMap: RelationResolversEnhanceMap,
) {
  for (const relationResolversEnhanceMapKey of Object.keys(relationResolversEnhanceMap)) {
    const modelName = relationResolversEnhanceMapKey as keyof typeof relationResolversEnhanceMap;
    const relationResolverTarget = relationResolversMap[modelName].prototype;
    const relationResolverActionsConfig = relationResolversEnhanceMap[modelName]!;
    const allActionsDecorators = relationResolverActionsConfig._all ?? [];
    const relationResolverActionNames = relationResolversInfo[modelName as keyof typeof relationResolversInfo];
    for (const relationResolverActionName of relationResolverActionNames) {
      const maybeDecoratorsOrFn = relationResolverActionsConfig[
        relationResolverActionName as keyof typeof relationResolverActionsConfig
      ] as MethodDecorator[] | MethodDecoratorOverrideFn | undefined;
      let decorators: MethodDecorator[];
      if (typeof maybeDecoratorsOrFn === "function") {
        decorators = maybeDecoratorsOrFn(allActionsDecorators);
      } else {
        decorators = [...allActionsDecorators, ...maybeDecoratorsOrFn ?? []];
      }
      tslib.__decorate(decorators, relationResolverTarget, relationResolverActionName, null);
    }
  }
}

type TypeConfig = {
  class?: ClassDecorator[];
  fields?: FieldsConfig;
};

export type PropertyDecoratorOverrideFn = (decorators: PropertyDecorator[]) => PropertyDecorator[];

type FieldsConfig<TTypeKeys extends string = string> = Partial<
  Record<TTypeKeys, PropertyDecorator[] | PropertyDecoratorOverrideFn>
> & { _all?: PropertyDecorator[] };

function applyTypeClassEnhanceConfig<
  TEnhanceConfig extends TypeConfig,
  TType extends object
>(
  enhanceConfig: TEnhanceConfig,
  typeClass: ClassType<TType>,
  typePrototype: TType,
  typeFieldNames: string[]
) {
  if (enhanceConfig.class) {
    tslib.__decorate(enhanceConfig.class, typeClass);
  }
  if (enhanceConfig.fields) {
    const allFieldsDecorators = enhanceConfig.fields._all ?? [];
    for (const typeFieldName of typeFieldNames) {
      const maybeDecoratorsOrFn = enhanceConfig.fields[
        typeFieldName
      ] as PropertyDecorator[] | PropertyDecoratorOverrideFn | undefined;
      let decorators: PropertyDecorator[];
      if (typeof maybeDecoratorsOrFn === "function") {
        decorators = maybeDecoratorsOrFn(allFieldsDecorators);
      } else {
        decorators = [...allFieldsDecorators, ...maybeDecoratorsOrFn ?? []];
      }
      tslib.__decorate(decorators, typePrototype, typeFieldName, void 0);
    }
  }
}

const modelsInfo = {
  User: ["id", "confirmed", "email", "username", "displayname", "role", "avatar", "bio", "location", "website", "dob", "createdAt", "updatedAt"],
  Person: ["id", "career", "name", "poster", "locked", "bio", "age", "createdAt", "updatedAt"],
  Movie: ["id", "title", "tagline", "overview", "poster", "backdrop", "locked", "released", "runtime", "trailer", "rating", "updatedAt", "createdAt"],
  ActorInMovie: ["movieId", "personId", "role"],
  Genre: ["id", "name"],
  MovieLike: ["userId", "movieId", "createdAt"],
  MovieReview: ["review", "rating", "userId", "movieId"],
  MovieReviewLike: ["userId", "reviewUserId", "reviewMovieId", "createdAt"]
};

type ModelNames = keyof typeof models;

type ModelFieldNames<TModel extends ModelNames> = Exclude<
  keyof typeof models[TModel]["prototype"],
  number | symbol
>;

type ModelFieldsConfig<TModel extends ModelNames> = FieldsConfig<
  ModelFieldNames<TModel>
>;

export type ModelConfig<TModel extends ModelNames> = {
  class?: ClassDecorator[];
  fields?: ModelFieldsConfig<TModel>;
};

export type ModelsEnhanceMap = {
  [TModel in ModelNames]?: ModelConfig<TModel>;
};

export function applyModelsEnhanceMap(modelsEnhanceMap: ModelsEnhanceMap) {
  for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
    const modelName = modelsEnhanceMapKey as keyof typeof modelsEnhanceMap;
    const modelConfig = modelsEnhanceMap[modelName]!;
    const modelClass = models[modelName];
    const modelTarget = modelClass.prototype;
    applyTypeClassEnhanceConfig(
      modelConfig,
      modelClass,
      modelTarget,
      modelsInfo[modelName as keyof typeof modelsInfo],
    );
  }
}

const outputsInfo = {
  AggregateUser: ["_count", "_avg", "_sum", "_min", "_max"],
  UserGroupBy: ["id", "confirmed", "email", "username", "displayname", "password", "role", "avatar", "bio", "location", "website", "dob", "createdAt", "updatedAt", "_count", "_avg", "_sum", "_min", "_max"],
  AggregatePerson: ["_count", "_avg", "_sum", "_min", "_max"],
  PersonGroupBy: ["id", "career", "name", "poster", "locked", "bio", "age", "createdAt", "updatedAt", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateMovie: ["_count", "_avg", "_sum", "_min", "_max"],
  MovieGroupBy: ["id", "title", "tagline", "overview", "poster", "backdrop", "locked", "released", "runtime", "trailer", "rating", "updatedAt", "createdAt", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateActorInMovie: ["_count", "_avg", "_sum", "_min", "_max"],
  ActorInMovieGroupBy: ["movieId", "personId", "role", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateGenre: ["_count", "_avg", "_sum", "_min", "_max"],
  GenreGroupBy: ["id", "name", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateMovieLike: ["_count", "_avg", "_sum", "_min", "_max"],
  MovieLikeGroupBy: ["userId", "movieId", "createdAt", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateMovieReview: ["_count", "_avg", "_sum", "_min", "_max"],
  MovieReviewGroupBy: ["review", "rating", "userId", "movieId", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateMovieReviewLike: ["_count", "_avg", "_sum", "_min", "_max"],
  MovieReviewLikeGroupBy: ["userId", "reviewUserId", "reviewMovieId", "createdAt", "_count", "_avg", "_sum", "_min", "_max"],
  AffectedRowsOutput: ["count"],
  UserCount: ["likedMovies", "movieReviews", "likedMovieReviews"],
  UserCountAggregate: ["id", "confirmed", "email", "username", "displayname", "password", "role", "avatar", "bio", "location", "website", "dob", "createdAt", "updatedAt", "_all"],
  UserAvgAggregate: ["id"],
  UserSumAggregate: ["id"],
  UserMinAggregate: ["id", "confirmed", "email", "username", "displayname", "password", "role", "avatar", "bio", "location", "website", "dob", "createdAt", "updatedAt"],
  UserMaxAggregate: ["id", "confirmed", "email", "username", "displayname", "password", "role", "avatar", "bio", "location", "website", "dob", "createdAt", "updatedAt"],
  PersonCount: ["movies"],
  PersonCountAggregate: ["id", "career", "name", "poster", "locked", "bio", "age", "createdAt", "updatedAt", "_all"],
  PersonAvgAggregate: ["id", "age"],
  PersonSumAggregate: ["id", "age"],
  PersonMinAggregate: ["id", "name", "poster", "locked", "bio", "age", "createdAt", "updatedAt"],
  PersonMaxAggregate: ["id", "name", "poster", "locked", "bio", "age", "createdAt", "updatedAt"],
  MovieCount: ["actors", "genres", "reviews", "likes"],
  MovieCountAggregate: ["id", "title", "tagline", "overview", "poster", "backdrop", "locked", "released", "runtime", "trailer", "rating", "updatedAt", "createdAt", "_all"],
  MovieAvgAggregate: ["id", "runtime"],
  MovieSumAggregate: ["id", "runtime"],
  MovieMinAggregate: ["id", "title", "tagline", "overview", "poster", "backdrop", "locked", "released", "runtime", "trailer", "rating", "updatedAt", "createdAt"],
  MovieMaxAggregate: ["id", "title", "tagline", "overview", "poster", "backdrop", "locked", "released", "runtime", "trailer", "rating", "updatedAt", "createdAt"],
  ActorInMovieCountAggregate: ["movieId", "personId", "role", "_all"],
  ActorInMovieAvgAggregate: ["movieId", "personId"],
  ActorInMovieSumAggregate: ["movieId", "personId"],
  ActorInMovieMinAggregate: ["movieId", "personId", "role"],
  ActorInMovieMaxAggregate: ["movieId", "personId", "role"],
  GenreCount: ["movies"],
  GenreCountAggregate: ["id", "name", "_all"],
  GenreAvgAggregate: ["id"],
  GenreSumAggregate: ["id"],
  GenreMinAggregate: ["id", "name"],
  GenreMaxAggregate: ["id", "name"],
  MovieLikeCountAggregate: ["userId", "movieId", "createdAt", "_all"],
  MovieLikeAvgAggregate: ["userId", "movieId"],
  MovieLikeSumAggregate: ["userId", "movieId"],
  MovieLikeMinAggregate: ["userId", "movieId", "createdAt"],
  MovieLikeMaxAggregate: ["userId", "movieId", "createdAt"],
  MovieReviewCount: ["likes"],
  MovieReviewCountAggregate: ["review", "rating", "userId", "movieId", "_all"],
  MovieReviewAvgAggregate: ["rating", "userId", "movieId"],
  MovieReviewSumAggregate: ["rating", "userId", "movieId"],
  MovieReviewMinAggregate: ["review", "rating", "userId", "movieId"],
  MovieReviewMaxAggregate: ["review", "rating", "userId", "movieId"],
  MovieReviewLikeCountAggregate: ["userId", "reviewUserId", "reviewMovieId", "createdAt", "_all"],
  MovieReviewLikeAvgAggregate: ["userId", "reviewUserId", "reviewMovieId"],
  MovieReviewLikeSumAggregate: ["userId", "reviewUserId", "reviewMovieId"],
  MovieReviewLikeMinAggregate: ["userId", "reviewUserId", "reviewMovieId", "createdAt"],
  MovieReviewLikeMaxAggregate: ["userId", "reviewUserId", "reviewMovieId", "createdAt"]
};

type OutputTypesNames = keyof typeof outputTypes;

type OutputTypeFieldNames<TOutput extends OutputTypesNames> = Exclude<
  keyof typeof outputTypes[TOutput]["prototype"],
  number | symbol
>;

type OutputTypeFieldsConfig<
  TOutput extends OutputTypesNames
> = FieldsConfig<OutputTypeFieldNames<TOutput>>;

export type OutputTypeConfig<TOutput extends OutputTypesNames> = {
  class?: ClassDecorator[];
  fields?: OutputTypeFieldsConfig<TOutput>;
};

export type OutputTypesEnhanceMap = {
  [TOutput in OutputTypesNames]?: OutputTypeConfig<TOutput>;
};

export function applyOutputTypesEnhanceMap(
  outputTypesEnhanceMap: OutputTypesEnhanceMap,
) {
  for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
    const outputTypeName = outputTypeEnhanceMapKey as keyof typeof outputTypesEnhanceMap;
    const typeConfig = outputTypesEnhanceMap[outputTypeName]!;
    const typeClass = outputTypes[outputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      outputsInfo[outputTypeName as keyof typeof outputsInfo],
    );
  }
}

const inputsInfo = {
  UserWhereInput: ["AND", "OR", "NOT", "id", "confirmed", "email", "username", "displayname", "password", "role", "avatar", "bio", "location", "website", "dob", "createdAt", "updatedAt", "likedMovies", "movieReviews", "likedMovieReviews"],
  UserOrderByWithRelationInput: ["id", "confirmed", "email", "username", "displayname", "password", "role", "avatar", "bio", "location", "website", "dob", "createdAt", "updatedAt", "likedMovies", "movieReviews", "likedMovieReviews"],
  UserWhereUniqueInput: ["id", "email", "username"],
  UserOrderByWithAggregationInput: ["id", "confirmed", "email", "username", "displayname", "password", "role", "avatar", "bio", "location", "website", "dob", "createdAt", "updatedAt", "_count", "_avg", "_max", "_min", "_sum"],
  UserScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "confirmed", "email", "username", "displayname", "password", "role", "avatar", "bio", "location", "website", "dob", "createdAt", "updatedAt"],
  PersonWhereInput: ["AND", "OR", "NOT", "id", "career", "name", "poster", "locked", "bio", "age", "createdAt", "updatedAt", "movies"],
  PersonOrderByWithRelationInput: ["id", "career", "name", "poster", "locked", "bio", "age", "createdAt", "updatedAt", "movies"],
  PersonWhereUniqueInput: ["id"],
  PersonOrderByWithAggregationInput: ["id", "career", "name", "poster", "locked", "bio", "age", "createdAt", "updatedAt", "_count", "_avg", "_max", "_min", "_sum"],
  PersonScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "career", "name", "poster", "locked", "bio", "age", "createdAt", "updatedAt"],
  MovieWhereInput: ["AND", "OR", "NOT", "id", "title", "tagline", "overview", "poster", "backdrop", "locked", "released", "runtime", "trailer", "rating", "updatedAt", "createdAt", "actors", "genres", "reviews", "likes"],
  MovieOrderByWithRelationInput: ["id", "title", "tagline", "overview", "poster", "backdrop", "locked", "released", "runtime", "trailer", "rating", "updatedAt", "createdAt", "actors", "genres", "reviews", "likes"],
  MovieWhereUniqueInput: ["id"],
  MovieOrderByWithAggregationInput: ["id", "title", "tagline", "overview", "poster", "backdrop", "locked", "released", "runtime", "trailer", "rating", "updatedAt", "createdAt", "_count", "_avg", "_max", "_min", "_sum"],
  MovieScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "title", "tagline", "overview", "poster", "backdrop", "locked", "released", "runtime", "trailer", "rating", "updatedAt", "createdAt"],
  ActorInMovieWhereInput: ["AND", "OR", "NOT", "movieId", "personId", "role", "movie", "person"],
  ActorInMovieOrderByWithRelationInput: ["movieId", "personId", "role", "movie", "person"],
  ActorInMovieWhereUniqueInput: ["personId_movieId"],
  ActorInMovieOrderByWithAggregationInput: ["movieId", "personId", "role", "_count", "_avg", "_max", "_min", "_sum"],
  ActorInMovieScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "movieId", "personId", "role"],
  GenreWhereInput: ["AND", "OR", "NOT", "id", "name", "movies"],
  GenreOrderByWithRelationInput: ["id", "name", "movies"],
  GenreWhereUniqueInput: ["id"],
  GenreOrderByWithAggregationInput: ["id", "name", "_count", "_avg", "_max", "_min", "_sum"],
  GenreScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "name"],
  MovieLikeWhereInput: ["AND", "OR", "NOT", "userId", "movieId", "createdAt", "user", "movie"],
  MovieLikeOrderByWithRelationInput: ["userId", "movieId", "createdAt", "user", "movie"],
  MovieLikeWhereUniqueInput: ["userId_movieId"],
  MovieLikeOrderByWithAggregationInput: ["userId", "movieId", "createdAt", "_count", "_avg", "_max", "_min", "_sum"],
  MovieLikeScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "userId", "movieId", "createdAt"],
  MovieReviewWhereInput: ["AND", "OR", "NOT", "review", "rating", "userId", "movieId", "likes", "user", "movie"],
  MovieReviewOrderByWithRelationInput: ["review", "rating", "userId", "movieId", "likes", "user", "movie"],
  MovieReviewWhereUniqueInput: ["userId_movieId"],
  MovieReviewOrderByWithAggregationInput: ["review", "rating", "userId", "movieId", "_count", "_avg", "_max", "_min", "_sum"],
  MovieReviewScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "review", "rating", "userId", "movieId"],
  MovieReviewLikeWhereInput: ["AND", "OR", "NOT", "userId", "reviewUserId", "reviewMovieId", "createdAt", "user", "movieReview"],
  MovieReviewLikeOrderByWithRelationInput: ["userId", "reviewUserId", "reviewMovieId", "createdAt", "user", "movieReview"],
  MovieReviewLikeWhereUniqueInput: ["userId_reviewUserId_reviewMovieId"],
  MovieReviewLikeOrderByWithAggregationInput: ["userId", "reviewUserId", "reviewMovieId", "createdAt", "_count", "_avg", "_max", "_min", "_sum"],
  MovieReviewLikeScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "userId", "reviewUserId", "reviewMovieId", "createdAt"],
  UserCreateInput: ["confirmed", "email", "username", "displayname", "password", "role", "avatar", "bio", "location", "website", "dob", "createdAt", "updatedAt", "likedMovies", "movieReviews", "likedMovieReviews"],
  UserUpdateInput: ["confirmed", "email", "username", "displayname", "password", "role", "avatar", "bio", "location", "website", "dob", "createdAt", "updatedAt", "likedMovies", "movieReviews", "likedMovieReviews"],
  UserCreateManyInput: ["id", "confirmed", "email", "username", "displayname", "password", "role", "avatar", "bio", "location", "website", "dob", "createdAt", "updatedAt"],
  UserUpdateManyMutationInput: ["confirmed", "email", "username", "displayname", "password", "role", "avatar", "bio", "location", "website", "dob", "createdAt", "updatedAt"],
  PersonCreateInput: ["career", "name", "poster", "locked", "bio", "age", "createdAt", "updatedAt", "movies"],
  PersonUpdateInput: ["career", "name", "poster", "locked", "bio", "age", "createdAt", "updatedAt", "movies"],
  PersonCreateManyInput: ["id", "career", "name", "poster", "locked", "bio", "age", "createdAt", "updatedAt"],
  PersonUpdateManyMutationInput: ["career", "name", "poster", "locked", "bio", "age", "createdAt", "updatedAt"],
  MovieCreateInput: ["title", "tagline", "overview", "poster", "backdrop", "locked", "released", "runtime", "trailer", "rating", "updatedAt", "createdAt", "actors", "genres", "reviews", "likes"],
  MovieUpdateInput: ["title", "tagline", "overview", "poster", "backdrop", "locked", "released", "runtime", "trailer", "rating", "updatedAt", "createdAt", "actors", "genres", "reviews", "likes"],
  MovieCreateManyInput: ["id", "title", "tagline", "overview", "poster", "backdrop", "locked", "released", "runtime", "trailer", "rating", "updatedAt", "createdAt"],
  MovieUpdateManyMutationInput: ["title", "tagline", "overview", "poster", "backdrop", "locked", "released", "runtime", "trailer", "rating", "updatedAt", "createdAt"],
  ActorInMovieCreateInput: ["role", "movie", "person"],
  ActorInMovieUpdateInput: ["role", "movie", "person"],
  ActorInMovieCreateManyInput: ["movieId", "personId", "role"],
  ActorInMovieUpdateManyMutationInput: ["role"],
  GenreCreateInput: ["name", "movies"],
  GenreUpdateInput: ["name", "movies"],
  GenreCreateManyInput: ["id", "name"],
  GenreUpdateManyMutationInput: ["name"],
  MovieLikeCreateInput: ["createdAt", "user", "movie"],
  MovieLikeUpdateInput: ["createdAt", "user", "movie"],
  MovieLikeCreateManyInput: ["userId", "movieId", "createdAt"],
  MovieLikeUpdateManyMutationInput: ["createdAt"],
  MovieReviewCreateInput: ["review", "rating", "likes", "user", "movie"],
  MovieReviewUpdateInput: ["review", "rating", "likes", "user", "movie"],
  MovieReviewCreateManyInput: ["review", "rating", "userId", "movieId"],
  MovieReviewUpdateManyMutationInput: ["review", "rating"],
  MovieReviewLikeCreateInput: ["createdAt", "user", "movieReview"],
  MovieReviewLikeUpdateInput: ["createdAt", "user", "movieReview"],
  MovieReviewLikeCreateManyInput: ["userId", "reviewUserId", "reviewMovieId", "createdAt"],
  MovieReviewLikeUpdateManyMutationInput: ["createdAt"],
  IntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  BoolFilter: ["equals", "not"],
  StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  EnumRoleFilter: ["equals", "in", "notIn", "not"],
  DateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  MovieLikeListRelationFilter: ["every", "some", "none"],
  MovieReviewListRelationFilter: ["every", "some", "none"],
  MovieReviewLikeListRelationFilter: ["every", "some", "none"],
  MovieLikeOrderByRelationAggregateInput: ["_count"],
  MovieReviewOrderByRelationAggregateInput: ["_count"],
  MovieReviewLikeOrderByRelationAggregateInput: ["_count"],
  UserCountOrderByAggregateInput: ["id", "confirmed", "email", "username", "displayname", "password", "role", "avatar", "bio", "location", "website", "dob", "createdAt", "updatedAt"],
  UserAvgOrderByAggregateInput: ["id"],
  UserMaxOrderByAggregateInput: ["id", "confirmed", "email", "username", "displayname", "password", "role", "avatar", "bio", "location", "website", "dob", "createdAt", "updatedAt"],
  UserMinOrderByAggregateInput: ["id", "confirmed", "email", "username", "displayname", "password", "role", "avatar", "bio", "location", "website", "dob", "createdAt", "updatedAt"],
  UserSumOrderByAggregateInput: ["id"],
  IntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  BoolWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
  StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
  EnumRoleWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  DateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  EnumCareerNullableListFilter: ["equals", "has", "hasEvery", "hasSome", "isEmpty"],
  StringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  IntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  ActorInMovieListRelationFilter: ["every", "some", "none"],
  ActorInMovieOrderByRelationAggregateInput: ["_count"],
  PersonCountOrderByAggregateInput: ["id", "career", "name", "poster", "locked", "bio", "age", "createdAt", "updatedAt"],
  PersonAvgOrderByAggregateInput: ["id", "age"],
  PersonMaxOrderByAggregateInput: ["id", "name", "poster", "locked", "bio", "age", "createdAt", "updatedAt"],
  PersonMinOrderByAggregateInput: ["id", "name", "poster", "locked", "bio", "age", "createdAt", "updatedAt"],
  PersonSumOrderByAggregateInput: ["id", "age"],
  StringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
  IntNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  DateTimeNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  FloatNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  GenreListRelationFilter: ["every", "some", "none"],
  GenreOrderByRelationAggregateInput: ["_count"],
  MovieCountOrderByAggregateInput: ["id", "title", "tagline", "overview", "poster", "backdrop", "locked", "released", "runtime", "trailer", "rating", "updatedAt", "createdAt"],
  MovieAvgOrderByAggregateInput: ["id", "runtime"],
  MovieMaxOrderByAggregateInput: ["id", "title", "tagline", "overview", "poster", "backdrop", "locked", "released", "runtime", "trailer", "rating", "updatedAt", "createdAt"],
  MovieMinOrderByAggregateInput: ["id", "title", "tagline", "overview", "poster", "backdrop", "locked", "released", "runtime", "trailer", "rating", "updatedAt", "createdAt"],
  MovieSumOrderByAggregateInput: ["id", "runtime"],
  DateTimeNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  FloatNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  MovieRelationFilter: ["is", "isNot"],
  PersonRelationFilter: ["is", "isNot"],
  ActorInMoviePersonIdMovieIdCompoundUniqueInput: ["personId", "movieId"],
  ActorInMovieCountOrderByAggregateInput: ["movieId", "personId", "role"],
  ActorInMovieAvgOrderByAggregateInput: ["movieId", "personId"],
  ActorInMovieMaxOrderByAggregateInput: ["movieId", "personId", "role"],
  ActorInMovieMinOrderByAggregateInput: ["movieId", "personId", "role"],
  ActorInMovieSumOrderByAggregateInput: ["movieId", "personId"],
  MovieListRelationFilter: ["every", "some", "none"],
  MovieOrderByRelationAggregateInput: ["_count"],
  GenreCountOrderByAggregateInput: ["id", "name"],
  GenreAvgOrderByAggregateInput: ["id"],
  GenreMaxOrderByAggregateInput: ["id", "name"],
  GenreMinOrderByAggregateInput: ["id", "name"],
  GenreSumOrderByAggregateInput: ["id"],
  UserRelationFilter: ["is", "isNot"],
  MovieLikeUserIdMovieIdCompoundUniqueInput: ["userId", "movieId"],
  MovieLikeCountOrderByAggregateInput: ["userId", "movieId", "createdAt"],
  MovieLikeAvgOrderByAggregateInput: ["userId", "movieId"],
  MovieLikeMaxOrderByAggregateInput: ["userId", "movieId", "createdAt"],
  MovieLikeMinOrderByAggregateInput: ["userId", "movieId", "createdAt"],
  MovieLikeSumOrderByAggregateInput: ["userId", "movieId"],
  MovieReviewUserIdMovieIdCompoundUniqueInput: ["userId", "movieId"],
  MovieReviewCountOrderByAggregateInput: ["review", "rating", "userId", "movieId"],
  MovieReviewAvgOrderByAggregateInput: ["rating", "userId", "movieId"],
  MovieReviewMaxOrderByAggregateInput: ["review", "rating", "userId", "movieId"],
  MovieReviewMinOrderByAggregateInput: ["review", "rating", "userId", "movieId"],
  MovieReviewSumOrderByAggregateInput: ["rating", "userId", "movieId"],
  MovieReviewRelationFilter: ["is", "isNot"],
  MovieReviewLikeUserIdReviewUserIdReviewMovieIdCompoundUniqueInput: ["userId", "reviewUserId", "reviewMovieId"],
  MovieReviewLikeCountOrderByAggregateInput: ["userId", "reviewUserId", "reviewMovieId", "createdAt"],
  MovieReviewLikeAvgOrderByAggregateInput: ["userId", "reviewUserId", "reviewMovieId"],
  MovieReviewLikeMaxOrderByAggregateInput: ["userId", "reviewUserId", "reviewMovieId", "createdAt"],
  MovieReviewLikeMinOrderByAggregateInput: ["userId", "reviewUserId", "reviewMovieId", "createdAt"],
  MovieReviewLikeSumOrderByAggregateInput: ["userId", "reviewUserId", "reviewMovieId"],
  MovieLikeCreateNestedManyWithoutUserInput: ["create", "connectOrCreate", "createMany", "connect"],
  MovieReviewCreateNestedManyWithoutUserInput: ["create", "connectOrCreate", "createMany", "connect"],
  MovieReviewLikeCreateNestedManyWithoutUserInput: ["create", "connectOrCreate", "createMany", "connect"],
  BoolFieldUpdateOperationsInput: ["set"],
  StringFieldUpdateOperationsInput: ["set"],
  EnumRoleFieldUpdateOperationsInput: ["set"],
  DateTimeFieldUpdateOperationsInput: ["set"],
  MovieLikeUpdateManyWithoutUserNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  MovieReviewUpdateManyWithoutUserNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  MovieReviewLikeUpdateManyWithoutUserNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  IntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  PersonCreatecareerInput: ["set"],
  ActorInMovieCreateNestedManyWithoutPersonInput: ["create", "connectOrCreate", "createMany", "connect"],
  PersonUpdatecareerInput: ["set", "push"],
  NullableStringFieldUpdateOperationsInput: ["set"],
  NullableIntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  ActorInMovieUpdateManyWithoutPersonNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  ActorInMovieCreateNestedManyWithoutMovieInput: ["create", "connectOrCreate", "createMany", "connect"],
  GenreCreateNestedManyWithoutMoviesInput: ["create", "connectOrCreate", "connect"],
  MovieReviewCreateNestedManyWithoutMovieInput: ["create", "connectOrCreate", "createMany", "connect"],
  MovieLikeCreateNestedManyWithoutMovieInput: ["create", "connectOrCreate", "createMany", "connect"],
  NullableDateTimeFieldUpdateOperationsInput: ["set"],
  NullableFloatFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  ActorInMovieUpdateManyWithoutMovieNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  GenreUpdateManyWithoutMoviesNestedInput: ["create", "connectOrCreate", "upsert", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  MovieReviewUpdateManyWithoutMovieNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  MovieLikeUpdateManyWithoutMovieNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  MovieCreateNestedOneWithoutActorsInput: ["create", "connectOrCreate", "connect"],
  PersonCreateNestedOneWithoutMoviesInput: ["create", "connectOrCreate", "connect"],
  MovieUpdateOneRequiredWithoutActorsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  PersonUpdateOneRequiredWithoutMoviesNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  MovieCreateNestedManyWithoutGenresInput: ["create", "connectOrCreate", "connect"],
  MovieUpdateManyWithoutGenresNestedInput: ["create", "connectOrCreate", "upsert", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  UserCreateNestedOneWithoutLikedMoviesInput: ["create", "connectOrCreate", "connect"],
  MovieCreateNestedOneWithoutLikesInput: ["create", "connectOrCreate", "connect"],
  UserUpdateOneRequiredWithoutLikedMoviesNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  MovieUpdateOneRequiredWithoutLikesNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  MovieReviewLikeCreateNestedManyWithoutMovieReviewInput: ["create", "connectOrCreate", "createMany", "connect"],
  UserCreateNestedOneWithoutMovieReviewsInput: ["create", "connectOrCreate", "connect"],
  MovieCreateNestedOneWithoutReviewsInput: ["create", "connectOrCreate", "connect"],
  MovieReviewLikeUpdateManyWithoutMovieReviewNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  UserUpdateOneRequiredWithoutMovieReviewsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  MovieUpdateOneRequiredWithoutReviewsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  UserCreateNestedOneWithoutLikedMovieReviewsInput: ["create", "connectOrCreate", "connect"],
  MovieReviewCreateNestedOneWithoutLikesInput: ["create", "connectOrCreate", "connect"],
  UserUpdateOneRequiredWithoutLikedMovieReviewsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  MovieReviewUpdateOneRequiredWithoutLikesNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedBoolFilter: ["equals", "not"],
  NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedEnumRoleFilter: ["equals", "in", "notIn", "not"],
  NestedDateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedIntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  NestedFloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedBoolWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
  NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedEnumRoleWithAggregatesFilter: ["equals", "in", "notIn", "not", "_count", "_min", "_max"],
  NestedDateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  NestedStringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedIntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedIntNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  NestedFloatNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedDateTimeNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedDateTimeNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  NestedFloatNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  MovieLikeCreateWithoutUserInput: ["createdAt", "movie"],
  MovieLikeCreateOrConnectWithoutUserInput: ["where", "create"],
  MovieLikeCreateManyUserInputEnvelope: ["data", "skipDuplicates"],
  MovieReviewCreateWithoutUserInput: ["review", "rating", "likes", "movie"],
  MovieReviewCreateOrConnectWithoutUserInput: ["where", "create"],
  MovieReviewCreateManyUserInputEnvelope: ["data", "skipDuplicates"],
  MovieReviewLikeCreateWithoutUserInput: ["createdAt", "movieReview"],
  MovieReviewLikeCreateOrConnectWithoutUserInput: ["where", "create"],
  MovieReviewLikeCreateManyUserInputEnvelope: ["data", "skipDuplicates"],
  MovieLikeUpsertWithWhereUniqueWithoutUserInput: ["where", "update", "create"],
  MovieLikeUpdateWithWhereUniqueWithoutUserInput: ["where", "data"],
  MovieLikeUpdateManyWithWhereWithoutUserInput: ["where", "data"],
  MovieLikeScalarWhereInput: ["AND", "OR", "NOT", "userId", "movieId", "createdAt"],
  MovieReviewUpsertWithWhereUniqueWithoutUserInput: ["where", "update", "create"],
  MovieReviewUpdateWithWhereUniqueWithoutUserInput: ["where", "data"],
  MovieReviewUpdateManyWithWhereWithoutUserInput: ["where", "data"],
  MovieReviewScalarWhereInput: ["AND", "OR", "NOT", "review", "rating", "userId", "movieId"],
  MovieReviewLikeUpsertWithWhereUniqueWithoutUserInput: ["where", "update", "create"],
  MovieReviewLikeUpdateWithWhereUniqueWithoutUserInput: ["where", "data"],
  MovieReviewLikeUpdateManyWithWhereWithoutUserInput: ["where", "data"],
  MovieReviewLikeScalarWhereInput: ["AND", "OR", "NOT", "userId", "reviewUserId", "reviewMovieId", "createdAt"],
  ActorInMovieCreateWithoutPersonInput: ["role", "movie"],
  ActorInMovieCreateOrConnectWithoutPersonInput: ["where", "create"],
  ActorInMovieCreateManyPersonInputEnvelope: ["data", "skipDuplicates"],
  ActorInMovieUpsertWithWhereUniqueWithoutPersonInput: ["where", "update", "create"],
  ActorInMovieUpdateWithWhereUniqueWithoutPersonInput: ["where", "data"],
  ActorInMovieUpdateManyWithWhereWithoutPersonInput: ["where", "data"],
  ActorInMovieScalarWhereInput: ["AND", "OR", "NOT", "movieId", "personId", "role"],
  ActorInMovieCreateWithoutMovieInput: ["role", "person"],
  ActorInMovieCreateOrConnectWithoutMovieInput: ["where", "create"],
  ActorInMovieCreateManyMovieInputEnvelope: ["data", "skipDuplicates"],
  GenreCreateWithoutMoviesInput: ["name"],
  GenreCreateOrConnectWithoutMoviesInput: ["where", "create"],
  MovieReviewCreateWithoutMovieInput: ["review", "rating", "likes", "user"],
  MovieReviewCreateOrConnectWithoutMovieInput: ["where", "create"],
  MovieReviewCreateManyMovieInputEnvelope: ["data", "skipDuplicates"],
  MovieLikeCreateWithoutMovieInput: ["createdAt", "user"],
  MovieLikeCreateOrConnectWithoutMovieInput: ["where", "create"],
  MovieLikeCreateManyMovieInputEnvelope: ["data", "skipDuplicates"],
  ActorInMovieUpsertWithWhereUniqueWithoutMovieInput: ["where", "update", "create"],
  ActorInMovieUpdateWithWhereUniqueWithoutMovieInput: ["where", "data"],
  ActorInMovieUpdateManyWithWhereWithoutMovieInput: ["where", "data"],
  GenreUpsertWithWhereUniqueWithoutMoviesInput: ["where", "update", "create"],
  GenreUpdateWithWhereUniqueWithoutMoviesInput: ["where", "data"],
  GenreUpdateManyWithWhereWithoutMoviesInput: ["where", "data"],
  GenreScalarWhereInput: ["AND", "OR", "NOT", "id", "name"],
  MovieReviewUpsertWithWhereUniqueWithoutMovieInput: ["where", "update", "create"],
  MovieReviewUpdateWithWhereUniqueWithoutMovieInput: ["where", "data"],
  MovieReviewUpdateManyWithWhereWithoutMovieInput: ["where", "data"],
  MovieLikeUpsertWithWhereUniqueWithoutMovieInput: ["where", "update", "create"],
  MovieLikeUpdateWithWhereUniqueWithoutMovieInput: ["where", "data"],
  MovieLikeUpdateManyWithWhereWithoutMovieInput: ["where", "data"],
  MovieCreateWithoutActorsInput: ["title", "tagline", "overview", "poster", "backdrop", "locked", "released", "runtime", "trailer", "rating", "updatedAt", "createdAt", "genres", "reviews", "likes"],
  MovieCreateOrConnectWithoutActorsInput: ["where", "create"],
  PersonCreateWithoutMoviesInput: ["career", "name", "poster", "locked", "bio", "age", "createdAt", "updatedAt"],
  PersonCreateOrConnectWithoutMoviesInput: ["where", "create"],
  MovieUpsertWithoutActorsInput: ["update", "create"],
  MovieUpdateWithoutActorsInput: ["title", "tagline", "overview", "poster", "backdrop", "locked", "released", "runtime", "trailer", "rating", "updatedAt", "createdAt", "genres", "reviews", "likes"],
  PersonUpsertWithoutMoviesInput: ["update", "create"],
  PersonUpdateWithoutMoviesInput: ["career", "name", "poster", "locked", "bio", "age", "createdAt", "updatedAt"],
  MovieCreateWithoutGenresInput: ["title", "tagline", "overview", "poster", "backdrop", "locked", "released", "runtime", "trailer", "rating", "updatedAt", "createdAt", "actors", "reviews", "likes"],
  MovieCreateOrConnectWithoutGenresInput: ["where", "create"],
  MovieUpsertWithWhereUniqueWithoutGenresInput: ["where", "update", "create"],
  MovieUpdateWithWhereUniqueWithoutGenresInput: ["where", "data"],
  MovieUpdateManyWithWhereWithoutGenresInput: ["where", "data"],
  MovieScalarWhereInput: ["AND", "OR", "NOT", "id", "title", "tagline", "overview", "poster", "backdrop", "locked", "released", "runtime", "trailer", "rating", "updatedAt", "createdAt"],
  UserCreateWithoutLikedMoviesInput: ["confirmed", "email", "username", "displayname", "password", "role", "avatar", "bio", "location", "website", "dob", "createdAt", "updatedAt", "movieReviews", "likedMovieReviews"],
  UserCreateOrConnectWithoutLikedMoviesInput: ["where", "create"],
  MovieCreateWithoutLikesInput: ["title", "tagline", "overview", "poster", "backdrop", "locked", "released", "runtime", "trailer", "rating", "updatedAt", "createdAt", "actors", "genres", "reviews"],
  MovieCreateOrConnectWithoutLikesInput: ["where", "create"],
  UserUpsertWithoutLikedMoviesInput: ["update", "create"],
  UserUpdateWithoutLikedMoviesInput: ["confirmed", "email", "username", "displayname", "password", "role", "avatar", "bio", "location", "website", "dob", "createdAt", "updatedAt", "movieReviews", "likedMovieReviews"],
  MovieUpsertWithoutLikesInput: ["update", "create"],
  MovieUpdateWithoutLikesInput: ["title", "tagline", "overview", "poster", "backdrop", "locked", "released", "runtime", "trailer", "rating", "updatedAt", "createdAt", "actors", "genres", "reviews"],
  MovieReviewLikeCreateWithoutMovieReviewInput: ["createdAt", "user"],
  MovieReviewLikeCreateOrConnectWithoutMovieReviewInput: ["where", "create"],
  MovieReviewLikeCreateManyMovieReviewInputEnvelope: ["data", "skipDuplicates"],
  UserCreateWithoutMovieReviewsInput: ["confirmed", "email", "username", "displayname", "password", "role", "avatar", "bio", "location", "website", "dob", "createdAt", "updatedAt", "likedMovies", "likedMovieReviews"],
  UserCreateOrConnectWithoutMovieReviewsInput: ["where", "create"],
  MovieCreateWithoutReviewsInput: ["title", "tagline", "overview", "poster", "backdrop", "locked", "released", "runtime", "trailer", "rating", "updatedAt", "createdAt", "actors", "genres", "likes"],
  MovieCreateOrConnectWithoutReviewsInput: ["where", "create"],
  MovieReviewLikeUpsertWithWhereUniqueWithoutMovieReviewInput: ["where", "update", "create"],
  MovieReviewLikeUpdateWithWhereUniqueWithoutMovieReviewInput: ["where", "data"],
  MovieReviewLikeUpdateManyWithWhereWithoutMovieReviewInput: ["where", "data"],
  UserUpsertWithoutMovieReviewsInput: ["update", "create"],
  UserUpdateWithoutMovieReviewsInput: ["confirmed", "email", "username", "displayname", "password", "role", "avatar", "bio", "location", "website", "dob", "createdAt", "updatedAt", "likedMovies", "likedMovieReviews"],
  MovieUpsertWithoutReviewsInput: ["update", "create"],
  MovieUpdateWithoutReviewsInput: ["title", "tagline", "overview", "poster", "backdrop", "locked", "released", "runtime", "trailer", "rating", "updatedAt", "createdAt", "actors", "genres", "likes"],
  UserCreateWithoutLikedMovieReviewsInput: ["confirmed", "email", "username", "displayname", "password", "role", "avatar", "bio", "location", "website", "dob", "createdAt", "updatedAt", "likedMovies", "movieReviews"],
  UserCreateOrConnectWithoutLikedMovieReviewsInput: ["where", "create"],
  MovieReviewCreateWithoutLikesInput: ["review", "rating", "user", "movie"],
  MovieReviewCreateOrConnectWithoutLikesInput: ["where", "create"],
  UserUpsertWithoutLikedMovieReviewsInput: ["update", "create"],
  UserUpdateWithoutLikedMovieReviewsInput: ["confirmed", "email", "username", "displayname", "password", "role", "avatar", "bio", "location", "website", "dob", "createdAt", "updatedAt", "likedMovies", "movieReviews"],
  MovieReviewUpsertWithoutLikesInput: ["update", "create"],
  MovieReviewUpdateWithoutLikesInput: ["review", "rating", "user", "movie"],
  MovieLikeCreateManyUserInput: ["movieId", "createdAt"],
  MovieReviewCreateManyUserInput: ["review", "rating", "movieId"],
  MovieReviewLikeCreateManyUserInput: ["reviewUserId", "reviewMovieId", "createdAt"],
  MovieLikeUpdateWithoutUserInput: ["createdAt", "movie"],
  MovieReviewUpdateWithoutUserInput: ["review", "rating", "likes", "movie"],
  MovieReviewLikeUpdateWithoutUserInput: ["createdAt", "movieReview"],
  ActorInMovieCreateManyPersonInput: ["movieId", "role"],
  ActorInMovieUpdateWithoutPersonInput: ["role", "movie"],
  ActorInMovieCreateManyMovieInput: ["personId", "role"],
  MovieReviewCreateManyMovieInput: ["review", "rating", "userId"],
  MovieLikeCreateManyMovieInput: ["userId", "createdAt"],
  ActorInMovieUpdateWithoutMovieInput: ["role", "person"],
  GenreUpdateWithoutMoviesInput: ["name"],
  MovieReviewUpdateWithoutMovieInput: ["review", "rating", "likes", "user"],
  MovieLikeUpdateWithoutMovieInput: ["createdAt", "user"],
  MovieUpdateWithoutGenresInput: ["title", "tagline", "overview", "poster", "backdrop", "locked", "released", "runtime", "trailer", "rating", "updatedAt", "createdAt", "actors", "reviews", "likes"],
  MovieReviewLikeCreateManyMovieReviewInput: ["userId", "createdAt"],
  MovieReviewLikeUpdateWithoutMovieReviewInput: ["createdAt", "user"]
};

type InputTypesNames = keyof typeof inputTypes;

type InputTypeFieldNames<TInput extends InputTypesNames> = Exclude<
  keyof typeof inputTypes[TInput]["prototype"],
  number | symbol
>;

type InputTypeFieldsConfig<
  TInput extends InputTypesNames
> = FieldsConfig<InputTypeFieldNames<TInput>>;

export type InputTypeConfig<TInput extends InputTypesNames> = {
  class?: ClassDecorator[];
  fields?: InputTypeFieldsConfig<TInput>;
};

export type InputTypesEnhanceMap = {
  [TInput in InputTypesNames]?: InputTypeConfig<TInput>;
};

export function applyInputTypesEnhanceMap(
  inputTypesEnhanceMap: InputTypesEnhanceMap,
) {
  for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
    const inputTypeName = inputTypeEnhanceMapKey as keyof typeof inputTypesEnhanceMap;
    const typeConfig = inputTypesEnhanceMap[inputTypeName]!;
    const typeClass = inputTypes[inputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      inputsInfo[inputTypeName as keyof typeof inputsInfo],
    );
  }
}

