import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieReviewScalarWhereInput } from "../inputs/MovieReviewScalarWhereInput";
import { MovieReviewUpdateManyMutationInput } from "../inputs/MovieReviewUpdateManyMutationInput";

@TypeGraphQL.InputType("MovieReviewUpdateManyWithWhereWithoutMovieInput", {
  isAbstract: true
})
export class MovieReviewUpdateManyWithWhereWithoutMovieInput {
  @TypeGraphQL.Field(_type => MovieReviewScalarWhereInput, {
    nullable: false
  })
  where!: MovieReviewScalarWhereInput;

  @TypeGraphQL.Field(_type => MovieReviewUpdateManyMutationInput, {
    nullable: false
  })
  data!: MovieReviewUpdateManyMutationInput;
}
