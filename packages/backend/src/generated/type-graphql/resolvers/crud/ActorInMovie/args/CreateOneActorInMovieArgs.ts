import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ActorInMovieCreateInput } from "../../../inputs/ActorInMovieCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneActorInMovieArgs {
  @TypeGraphQL.Field(_type => ActorInMovieCreateInput, {
    nullable: false
  })
  data!: ActorInMovieCreateInput;
}
