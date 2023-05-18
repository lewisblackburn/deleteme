import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByMovieReviewLikeArgs } from "./args/GroupByMovieReviewLikeArgs";
import { MovieReviewLike } from "../../../models/MovieReviewLike";
import { MovieReviewLikeGroupBy } from "../../outputs/MovieReviewLikeGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MovieReviewLike)
export class GroupByMovieReviewLikeResolver {
  @TypeGraphQL.Query(_returns => [MovieReviewLikeGroupBy], {
    nullable: false
  })
  async groupByMovieReviewLike(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByMovieReviewLikeArgs): Promise<MovieReviewLikeGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieReviewLike.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
