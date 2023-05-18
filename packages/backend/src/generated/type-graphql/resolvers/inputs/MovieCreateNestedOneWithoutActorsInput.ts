import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieCreateOrConnectWithoutActorsInput } from "../inputs/MovieCreateOrConnectWithoutActorsInput";
import { MovieCreateWithoutActorsInput } from "../inputs/MovieCreateWithoutActorsInput";
import { MovieWhereUniqueInput } from "../inputs/MovieWhereUniqueInput";

@TypeGraphQL.InputType("MovieCreateNestedOneWithoutActorsInput", {
  isAbstract: true
})
export class MovieCreateNestedOneWithoutActorsInput {
  @TypeGraphQL.Field(_type => MovieCreateWithoutActorsInput, {
    nullable: true
  })
  create?: MovieCreateWithoutActorsInput | undefined;

  @TypeGraphQL.Field(_type => MovieCreateOrConnectWithoutActorsInput, {
    nullable: true
  })
  connectOrCreate?: MovieCreateOrConnectWithoutActorsInput | undefined;

  @TypeGraphQL.Field(_type => MovieWhereUniqueInput, {
    nullable: true
  })
  connect?: MovieWhereUniqueInput | undefined;
}
