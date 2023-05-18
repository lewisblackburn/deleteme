import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueMovieReviewLikeOrThrowArgs } from "./args/FindUniqueMovieReviewLikeOrThrowArgs";
import { MovieReviewLike } from "../../../models/MovieReviewLike";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MovieReviewLike)
export class FindUniqueMovieReviewLikeOrThrowResolver {
  @TypeGraphQL.Query(_returns => MovieReviewLike, {
    nullable: true
  })
  async getMovieReviewLike(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueMovieReviewLikeOrThrowArgs): Promise<MovieReviewLike | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieReviewLike.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
