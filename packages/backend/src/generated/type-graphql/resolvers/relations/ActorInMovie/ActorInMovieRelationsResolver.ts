import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { ActorInMovie } from "../../../models/ActorInMovie";
import { Movie } from "../../../models/Movie";
import { Person } from "../../../models/Person";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ActorInMovie)
export class ActorInMovieRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Movie, {
    nullable: false
  })
  async movie(@TypeGraphQL.Root() actorInMovie: ActorInMovie, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Movie> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).actorInMovie.findUniqueOrThrow({
      where: {
        personId_movieId: {
          personId: actorInMovie.personId,
          movieId: actorInMovie.movieId,
        },
      },
    }).movie({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => Person, {
    nullable: false
  })
  async person(@TypeGraphQL.Root() actorInMovie: ActorInMovie, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Person> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).actorInMovie.findUniqueOrThrow({
      where: {
        personId_movieId: {
          personId: actorInMovie.personId,
          movieId: actorInMovie.movieId,
        },
      },
    }).person({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
