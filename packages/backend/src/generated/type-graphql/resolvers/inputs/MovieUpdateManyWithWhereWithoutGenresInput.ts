import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieScalarWhereInput } from "../inputs/MovieScalarWhereInput";
import { MovieUpdateManyMutationInput } from "../inputs/MovieUpdateManyMutationInput";

@TypeGraphQL.InputType("MovieUpdateManyWithWhereWithoutGenresInput", {
  isAbstract: true
})
export class MovieUpdateManyWithWhereWithoutGenresInput {
  @TypeGraphQL.Field(_type => MovieScalarWhereInput, {
    nullable: false
  })
  where!: MovieScalarWhereInput;

  @TypeGraphQL.Field(_type => MovieUpdateManyMutationInput, {
    nullable: false
  })
  data!: MovieUpdateManyMutationInput;
}
