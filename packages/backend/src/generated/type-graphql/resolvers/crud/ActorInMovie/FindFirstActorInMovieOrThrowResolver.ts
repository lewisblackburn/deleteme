import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstActorInMovieOrThrowArgs } from "./args/FindFirstActorInMovieOrThrowArgs";
import { ActorInMovie } from "../../../models/ActorInMovie";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ActorInMovie)
export class FindFirstActorInMovieOrThrowResolver {
  @TypeGraphQL.Query(_returns => ActorInMovie, {
    nullable: true
  })
  async findFirstActorInMovieOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstActorInMovieOrThrowArgs): Promise<ActorInMovie | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).actorInMovie.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
