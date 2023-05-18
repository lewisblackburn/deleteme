import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeWithAggregatesFilter } from "../inputs/DateTimeWithAggregatesFilter";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";

@TypeGraphQL.InputType("MovieReviewLikeScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class MovieReviewLikeScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [MovieReviewLikeScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: MovieReviewLikeScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieReviewLikeScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: MovieReviewLikeScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieReviewLikeScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: MovieReviewLikeScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  userId?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  reviewUserId?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  reviewMovieId?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeWithAggregatesFilter, {
    nullable: true
  })
  createdAt?: DateTimeWithAggregatesFilter | undefined;
}
