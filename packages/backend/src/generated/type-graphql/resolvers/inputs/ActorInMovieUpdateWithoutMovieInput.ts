import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { PersonUpdateOneRequiredWithoutMoviesNestedInput } from "../inputs/PersonUpdateOneRequiredWithoutMoviesNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("ActorInMovieUpdateWithoutMovieInput", {
  isAbstract: true
})
export class ActorInMovieUpdateWithoutMovieInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  role?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => PersonUpdateOneRequiredWithoutMoviesNestedInput, {
    nullable: true
  })
  person?: PersonUpdateOneRequiredWithoutMoviesNestedInput | undefined;
}
