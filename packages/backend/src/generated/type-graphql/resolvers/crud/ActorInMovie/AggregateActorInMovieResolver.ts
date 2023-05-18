import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateActorInMovieArgs } from "./args/AggregateActorInMovieArgs";
import { ActorInMovie } from "../../../models/ActorInMovie";
import { AggregateActorInMovie } from "../../outputs/AggregateActorInMovie";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ActorInMovie)
export class AggregateActorInMovieResolver {
  @TypeGraphQL.Query(_returns => AggregateActorInMovie, {
    nullable: false
  })
  async aggregateActorInMovie(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateActorInMovieArgs): Promise<AggregateActorInMovie> {
    return getPrismaFromContext(ctx).actorInMovie.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
