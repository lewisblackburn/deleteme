import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovieReviewOrderByWithRelationInput } from "../../../inputs/MovieReviewOrderByWithRelationInput";
import { MovieReviewWhereInput } from "../../../inputs/MovieReviewWhereInput";
import { MovieReviewWhereUniqueInput } from "../../../inputs/MovieReviewWhereUniqueInput";
import { MovieReviewScalarFieldEnum } from "../../../../enums/MovieReviewScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class MovieReviewsArgs {
  @TypeGraphQL.Field(_type => MovieReviewWhereInput, {
    nullable: true
  })
  where?: MovieReviewWhereInput | undefined;

  @TypeGraphQL.Field(_type => [MovieReviewOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: MovieReviewOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => MovieReviewWhereUniqueInput, {
    nullable: true
  })
  cursor?: MovieReviewWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [MovieReviewScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"review" | "rating" | "userId" | "movieId"> | undefined;
}
