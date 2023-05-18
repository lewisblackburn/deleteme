import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByActorInMovieArgs } from "./args/GroupByActorInMovieArgs";
import { ActorInMovie } from "../../../models/ActorInMovie";
import { ActorInMovieGroupBy } from "../../outputs/ActorInMovieGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ActorInMovie)
export class GroupByActorInMovieResolver {
  @TypeGraphQL.Query(_returns => [ActorInMovieGroupBy], {
    nullable: false
  })
  async groupByActorInMovie(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByActorInMovieArgs): Promise<ActorInMovieGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).actorInMovie.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
