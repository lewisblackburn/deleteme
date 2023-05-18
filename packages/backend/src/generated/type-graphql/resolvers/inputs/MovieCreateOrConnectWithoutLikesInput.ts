import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieCreateWithoutLikesInput } from "../inputs/MovieCreateWithoutLikesInput";
import { MovieWhereUniqueInput } from "../inputs/MovieWhereUniqueInput";

@TypeGraphQL.InputType("MovieCreateOrConnectWithoutLikesInput", {
  isAbstract: true
})
export class MovieCreateOrConnectWithoutLikesInput {
  @TypeGraphQL.Field(_type => MovieWhereUniqueInput, {
    nullable: false
  })
  where!: MovieWhereUniqueInput;

  @TypeGraphQL.Field(_type => MovieCreateWithoutLikesInput, {
    nullable: false
  })
  create!: MovieCreateWithoutLikesInput;
}
