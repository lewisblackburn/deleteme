import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MovieLikeCreateInput } from "../../../inputs/MovieLikeCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneMovieLikeArgs {
  @TypeGraphQL.Field(_type => MovieLikeCreateInput, {
    nullable: false
  })
  data!: MovieLikeCreateInput;
}
