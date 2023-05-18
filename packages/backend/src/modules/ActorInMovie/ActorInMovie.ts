import {GraphQLResolveInfo} from 'graphql';
import {Args, Ctx, Info, Mutation, Resolver} from 'type-graphql';
import {ActorInMovie, CreateOneActorInMovieArgs, DeleteOneActorInMovieArgs} from '../../generated/type-graphql';
import {
	transformCountFieldIntoSelectRelationsCount,
	transformInfoIntoPrismaArgs,
} from '../../generated/type-graphql/helpers';
import {Context} from '../../interfaces/context';

@Resolver(ActorInMovie)
export class ActorInMovieResolver {
	@Mutation(() => Boolean, {
		nullable: false,
	})
	async createActorInMovie(
		@Ctx() ctx: Context,
		@Info() info: GraphQLResolveInfo,
		@Args() args: CreateOneActorInMovieArgs
	): Promise<boolean> {
		const {_count} = transformInfoIntoPrismaArgs(info);
		const actorInMovie = await ctx.prisma.actorInMovie.create({
			...args,
			...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
		});

		return Boolean(actorInMovie);
	}

	@Mutation(() => Boolean, {
		nullable: true,
	})
	async deleteActorInMovie(@Ctx() ctx: Context, @Args() args: DeleteOneActorInMovieArgs): Promise<boolean> {
		const actorInMovie = await ctx.prisma.actorInMovie.delete({
			...args,
		});

		return Boolean(actorInMovie);
	}
}
