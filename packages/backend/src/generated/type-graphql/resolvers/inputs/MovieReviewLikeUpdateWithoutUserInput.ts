import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { MovieReviewUpdateOneRequiredWithoutLikesNestedInput } from "../inputs/MovieReviewUpdateOneRequiredWithoutLikesNestedInput";

@TypeGraphQL.InputType("MovieReviewLikeUpdateWithoutUserInput", {
  isAbstract: true
})
export class MovieReviewLikeUpdateWithoutUserInput {
  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => MovieReviewUpdateOneRequiredWithoutLikesNestedInput, {
    nullable: true
  })
  movieReview?: MovieReviewUpdateOneRequiredWithoutLikesNestedInput | undefined;
}
