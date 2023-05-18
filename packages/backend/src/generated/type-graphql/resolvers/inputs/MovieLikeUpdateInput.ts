import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { MovieUpdateOneRequiredWithoutLikesNestedInput } from "../inputs/MovieUpdateOneRequiredWithoutLikesNestedInput";
import { UserUpdateOneRequiredWithoutLikedMoviesNestedInput } from "../inputs/UserUpdateOneRequiredWithoutLikedMoviesNestedInput";

@TypeGraphQL.InputType("MovieLikeUpdateInput", {
  isAbstract: true
})
export class MovieLikeUpdateInput {
  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutLikedMoviesNestedInput, {
    nullable: true
  })
  user?: UserUpdateOneRequiredWithoutLikedMoviesNestedInput | undefined;

  @TypeGraphQL.Field(_type => MovieUpdateOneRequiredWithoutLikesNestedInput, {
    nullable: true
  })
  movie?: MovieUpdateOneRequiredWithoutLikesNestedInput | undefined;
}
