import {GraphQLResolveInfo} from 'graphql';
import {Args, Ctx, Info, Mutation, Resolver} from 'type-graphql';
import {Genre, UpdateOneGenreArgs} from '../../generated/type-graphql';
import {
	transformCountFieldIntoSelectRelationsCount,
	transformInfoIntoPrismaArgs,
} from '../../generated/type-graphql/helpers';
import {Context} from '../../interfaces/context';

@Resolver(Genre)
export class GenreResolver {
	@Mutation(() => Genre, {
		nullable: true,
	})
	async updateGenre(
		@Ctx() ctx: Context,
		@Info() info: GraphQLResolveInfo,
		@Args() args: UpdateOneGenreArgs
	): Promise<Genre | null> {
		const {_count} = transformInfoIntoPrismaArgs(info);
		return ctx.prisma.genre.update({
			...args,
			...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
		});
	}
}
