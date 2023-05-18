import * as TypeGraphQL from "type-graphql";

export enum MovieReviewScalarFieldEnum {
  review = "review",
  rating = "rating",
  userId = "userId",
  movieId = "movieId"
}
TypeGraphQL.registerEnumType(MovieReviewScalarFieldEnum, {
  name: "MovieReviewScalarFieldEnum",
  description: undefined,
});
