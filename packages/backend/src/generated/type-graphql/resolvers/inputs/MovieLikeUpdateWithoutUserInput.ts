import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { MovieUpdateOneRequiredWithoutLikesNestedInput } from "../inputs/MovieUpdateOneRequiredWithoutLikesNestedInput";

@TypeGraphQL.InputType("MovieLikeUpdateWithoutUserInput", {
  isAbstract: true
})
export class MovieLikeUpdateWithoutUserInput {
  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => MovieUpdateOneRequiredWithoutLikesNestedInput, {
    nullable: true
  })
  movie?: MovieUpdateOneRequiredWithoutLikesNestedInput | undefined;
}
