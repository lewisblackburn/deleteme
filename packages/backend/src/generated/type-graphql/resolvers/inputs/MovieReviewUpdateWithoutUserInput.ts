import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { MovieReviewLikeUpdateManyWithoutMovieReviewNestedInput } from "../inputs/MovieReviewLikeUpdateManyWithoutMovieReviewNestedInput";
import { MovieUpdateOneRequiredWithoutReviewsNestedInput } from "../inputs/MovieUpdateOneRequiredWithoutReviewsNestedInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("MovieReviewUpdateWithoutUserInput", {
  isAbstract: true
})
export class MovieReviewUpdateWithoutUserInput {
  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  review?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  rating?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => MovieReviewLikeUpdateManyWithoutMovieReviewNestedInput, {
    nullable: true
  })
  likes?: MovieReviewLikeUpdateManyWithoutMovieReviewNestedInput | undefined;

  @TypeGraphQL.Field(_type => MovieUpdateOneRequiredWithoutReviewsNestedInput, {
    nullable: true
  })
  movie?: MovieUpdateOneRequiredWithoutReviewsNestedInput | undefined;
}
