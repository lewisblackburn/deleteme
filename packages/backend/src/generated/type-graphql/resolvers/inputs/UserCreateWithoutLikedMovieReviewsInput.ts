import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MovieLikeCreateNestedManyWithoutUserInput } from "../inputs/MovieLikeCreateNestedManyWithoutUserInput";
import { MovieReviewCreateNestedManyWithoutUserInput } from "../inputs/MovieReviewCreateNestedManyWithoutUserInput";
import { Role } from "../../enums/Role";

@TypeGraphQL.InputType("UserCreateWithoutLikedMovieReviewsInput", {
  isAbstract: true
})
export class UserCreateWithoutLikedMovieReviewsInput {
  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  confirmed?: boolean | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  email!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  username!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  displayname!: string;

  @TypeGraphQL.Field(_type => Role, {
    nullable: true
  })
  role?: "USER" | "ADMIN" | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  avatar?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  bio?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  location?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  website?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  dob?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => MovieLikeCreateNestedManyWithoutUserInput, {
    nullable: true
  })
  likedMovies?: MovieLikeCreateNestedManyWithoutUserInput | undefined;

  @TypeGraphQL.Field(_type => MovieReviewCreateNestedManyWithoutUserInput, {
    nullable: true
  })
  movieReviews?: MovieReviewCreateNestedManyWithoutUserInput | undefined;
}
