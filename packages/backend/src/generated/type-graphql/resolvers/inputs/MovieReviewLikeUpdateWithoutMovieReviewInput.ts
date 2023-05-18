import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutLikedMovieReviewsNestedInput } from "../inputs/UserUpdateOneRequiredWithoutLikedMovieReviewsNestedInput";

@TypeGraphQL.InputType("MovieReviewLikeUpdateWithoutMovieReviewInput", {
  isAbstract: true
})
export class MovieReviewLikeUpdateWithoutMovieReviewInput {
  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutLikedMovieReviewsNestedInput, {
    nullable: true
  })
  user?: UserUpdateOneRequiredWithoutLikedMovieReviewsNestedInput | undefined;
}
