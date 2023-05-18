import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovieReviewLikeUpdateInput } from "../../../inputs/MovieReviewLikeUpdateInput";
import { MovieReviewLikeWhereUniqueInput } from "../../../inputs/MovieReviewLikeWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneMovieReviewLikeArgs {
  @TypeGraphQL.Field(_type => MovieReviewLikeUpdateInput, {
    nullable: false
  })
  data!: MovieReviewLikeUpdateInput;

  @TypeGraphQL.Field(_type => MovieReviewLikeWhereUniqueInput, {
    nullable: false
  })
  where!: MovieReviewLikeWhereUniqueInput;
}
