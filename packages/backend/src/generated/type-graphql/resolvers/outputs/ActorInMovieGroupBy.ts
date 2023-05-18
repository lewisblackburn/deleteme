import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ActorInMovieAvgAggregate } from "../outputs/ActorInMovieAvgAggregate";
import { ActorInMovieCountAggregate } from "../outputs/ActorInMovieCountAggregate";
import { ActorInMovieMaxAggregate } from "../outputs/ActorInMovieMaxAggregate";
import { ActorInMovieMinAggregate } from "../outputs/ActorInMovieMinAggregate";
import { ActorInMovieSumAggregate } from "../outputs/ActorInMovieSumAggregate";

@TypeGraphQL.ObjectType("ActorInMovieGroupBy", {
  isAbstract: true
})
export class ActorInMovieGroupBy {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  movieId!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  personId!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  role!: string;

  @TypeGraphQL.Field(_type => ActorInMovieCountAggregate, {
    nullable: true
  })
  _count!: ActorInMovieCountAggregate | null;

  @TypeGraphQL.Field(_type => ActorInMovieAvgAggregate, {
    nullable: true
  })
  _avg!: ActorInMovieAvgAggregate | null;

  @TypeGraphQL.Field(_type => ActorInMovieSumAggregate, {
    nullable: true
  })
  _sum!: ActorInMovieSumAggregate | null;

  @TypeGraphQL.Field(_type => ActorInMovieMinAggregate, {
    nullable: true
  })
  _min!: ActorInMovieMinAggregate | null;

  @TypeGraphQL.Field(_type => ActorInMovieMaxAggregate, {
    nullable: true
  })
  _max!: ActorInMovieMaxAggregate | null;
}
