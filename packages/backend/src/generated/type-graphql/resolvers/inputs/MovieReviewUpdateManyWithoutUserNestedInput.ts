import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieReviewCreateManyUserInputEnvelope } from "../inputs/MovieReviewCreateManyUserInputEnvelope";
import { MovieReviewCreateOrConnectWithoutUserInput } from "../inputs/MovieReviewCreateOrConnectWithoutUserInput";
import { MovieReviewCreateWithoutUserInput } from "../inputs/MovieReviewCreateWithoutUserInput";
import { MovieReviewScalarWhereInput } from "../inputs/MovieReviewScalarWhereInput";
import { MovieReviewUpdateManyWithWhereWithoutUserInput } from "../inputs/MovieReviewUpdateManyWithWhereWithoutUserInput";
import { MovieReviewUpdateWithWhereUniqueWithoutUserInput } from "../inputs/MovieReviewUpdateWithWhereUniqueWithoutUserInput";
import { MovieReviewUpsertWithWhereUniqueWithoutUserInput } from "../inputs/MovieReviewUpsertWithWhereUniqueWithoutUserInput";
import { MovieReviewWhereUniqueInput } from "../inputs/MovieReviewWhereUniqueInput";

@TypeGraphQL.InputType("MovieReviewUpdateManyWithoutUserNestedInput", {
  isAbstract: true
})
export class MovieReviewUpdateManyWithoutUserNestedInput {
  @TypeGraphQL.Field(_type => [MovieReviewCreateWithoutUserInput], {
    nullable: true
  })
  create?: MovieReviewCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieReviewCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: MovieReviewCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieReviewUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  upsert?: MovieReviewUpsertWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => MovieReviewCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: MovieReviewCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [MovieReviewWhereUniqueInput], {
    nullable: true
  })
  set?: MovieReviewWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieReviewWhereUniqueInput], {
    nullable: true
  })
  disconnect?: MovieReviewWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieReviewWhereUniqueInput], {
    nullable: true
  })
  delete?: MovieReviewWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieReviewWhereUniqueInput], {
    nullable: true
  })
  connect?: MovieReviewWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieReviewUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  update?: MovieReviewUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieReviewUpdateManyWithWhereWithoutUserInput], {
    nullable: true
  })
  updateMany?: MovieReviewUpdateManyWithWhereWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [MovieReviewScalarWhereInput], {
    nullable: true
  })
  deleteMany?: MovieReviewScalarWhereInput[] | undefined;
}
