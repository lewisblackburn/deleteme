import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieCreateNestedManyWithoutGenresInput } from "../inputs/MovieCreateNestedManyWithoutGenresInput";

@TypeGraphQL.InputType("GenreCreateInput", {
  isAbstract: true
})
export class GenreCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => MovieCreateNestedManyWithoutGenresInput, {
    nullable: true
  })
  movies?: MovieCreateNestedManyWithoutGenresInput | undefined;
}
