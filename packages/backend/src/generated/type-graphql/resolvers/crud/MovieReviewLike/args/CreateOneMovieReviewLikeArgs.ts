import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovieReviewLikeCreateInput } from "../../../inputs/MovieReviewLikeCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneMovieReviewLikeArgs {
  @TypeGraphQL.Field(_type => MovieReviewLikeCreateInput, {
    nullable: false
  })
  data!: MovieReviewLikeCreateInput;
}
