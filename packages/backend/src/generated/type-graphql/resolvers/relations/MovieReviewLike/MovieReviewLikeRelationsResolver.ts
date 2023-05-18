import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { MovieReview } from "../../../models/MovieReview";
import { MovieReviewLike } from "../../../models/MovieReviewLike";
import { User } from "../../../models/User";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => MovieReviewLike)
export class MovieReviewLikeRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async user(@TypeGraphQL.Root() movieReviewLike: MovieReviewLike, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<User> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieReviewLike.findUniqueOrThrow({
      where: {
        userId_reviewUserId_reviewMovieId: {
          userId: movieReviewLike.userId,
          reviewUserId: movieReviewLike.reviewUserId,
          reviewMovieId: movieReviewLike.reviewMovieId,
        },
      },
    }).user({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => MovieReview, {
    nullable: false
  })
  async movieReview(@TypeGraphQL.Root() movieReviewLike: MovieReviewLike, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<MovieReview> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).movieReviewLike.findUniqueOrThrow({
      where: {
        userId_reviewUserId_reviewMovieId: {
          userId: movieReviewLike.userId,
          reviewUserId: movieReviewLike.reviewUserId,
          reviewMovieId: movieReviewLike.reviewMovieId,
        },
      },
    }).movieReview({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
