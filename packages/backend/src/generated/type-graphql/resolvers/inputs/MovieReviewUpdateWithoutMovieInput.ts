import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { MovieReviewLikeUpdateManyWithoutMovieReviewNestedInput } from "../inputs/MovieReviewLikeUpdateManyWithoutMovieReviewNestedInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { UserUpdateOneRequiredWithoutMovieReviewsNestedInput } from "../inputs/UserUpdateOneRequiredWithoutMovieReviewsNestedInput";

@TypeGraphQL.InputType("MovieReviewUpdateWithoutMovieInput", {
  isAbstract: true
})
export class MovieReviewUpdateWithoutMovieInput {
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

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutMovieReviewsNestedInput, {
    nullable: true
  })
  user?: UserUpdateOneRequiredWithoutMovieReviewsNestedInput | undefined;
}
