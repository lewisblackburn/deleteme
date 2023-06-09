import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { MovieLike } from "../models/MovieLike";
import { MovieReview } from "../models/MovieReview";
import { MovieReviewLike } from "../models/MovieReviewLike";
import { Role } from "../enums/Role";
import { UserCount } from "../resolvers/outputs/UserCount";

@TypeGraphQL.ObjectType("User", {
  isAbstract: true
})
export class User {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  confirmed!: boolean;

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

  password?: string;

  @TypeGraphQL.Field(_type => Role, {
    nullable: false
  })
  role!: "USER" | "ADMIN";

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  avatar!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  bio!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  location!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  website!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  dob!: Date;

  likedMovies?: MovieLike[];

  movieReviews?: MovieReview[];

  likedMovieReviews?: MovieReviewLike[];

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  @TypeGraphQL.Field(_type => UserCount, {
    nullable: true
  })
  _count?: UserCount | null;
}
