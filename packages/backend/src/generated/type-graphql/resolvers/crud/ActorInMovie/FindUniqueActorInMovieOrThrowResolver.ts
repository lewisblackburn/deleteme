import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueActorInMovieOrThrowArgs } from "./args/FindUniqueActorInMovieOrThrowArgs";
import { ActorInMovie } from "../../../models/ActorInMovie";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ActorInMovie)
export class FindUniqueActorInMovieOrThrowResolver {
  @TypeGraphQL.Query(_returns => ActorInMovie, {
    nullable: true
  })
  async getActorInMovie(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueActorInMovieOrThrowArgs): Promise<ActorInMovie | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).actorInMovie.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
