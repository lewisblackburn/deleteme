import {GraphQLResolveInfo} from 'graphql';
import {
	Arg,
	Args,
	Authorized,
	Ctx,
	FieldResolver,
	Info,
	Int,
	Mutation,
	Query,
	Resolver,
	Root,
	UseMiddleware,
} from 'type-graphql';
import {
	AggregateMovieReview,
	AggregateMovieReviewArgs,
	CreateOneMovieArgs,
	DeleteOneMovieArgs,
	FindManyMovieArgs,
	Movie,
	UpdateOneMovieArgs,
} from '../../generated/type-graphql';
import {
	getPrismaFromContext,
	transformCountFieldIntoSelectRelationsCount,
	transformInfoIntoPrismaArgs,
} from '../../generated/type-graphql/helpers';
import {Context} from '../../interfaces/context';
import {ErrorInterceptor} from '../middleware/ErrorInterceptor';

@Resolver(Movie)
export class MovieResolver {
	@FieldResolver(() => Boolean, {
		nullable: false,
	})
	async isLiked(@Root() root: Movie, @Ctx() ctx: Context, @Info() info: GraphQLResolveInfo): Promise<boolean> {
		if (!ctx.req.session.userId) {
			throw new Error('No User');
		}

		const movieLike = await ctx.prisma.movieLike.findUnique({
			where: {
				userId_movieId: {
					movieId: root.id,
					userId: ctx.req.session.userId,
				},
			},
			...transformInfoIntoPrismaArgs(info),
		});

		return Boolean(movieLike);
	}

	@FieldResolver(() => Boolean, {
		nullable: false,
	})
	async isRated(@Root() root: Movie, @Ctx() ctx: Context, @Info() info: GraphQLResolveInfo): Promise<boolean> {
		if (!ctx.req.session.userId) {
			throw new Error('No User');
		}

		const movieReview = await ctx.prisma.movieReview.findUnique({
			where: {
				userId_movieId: {
					movieId: root.id,
					userId: ctx.req.session.userId,
				},
			},
			...transformInfoIntoPrismaArgs(info),
		});

		return Boolean(movieReview);
	}

	@FieldResolver(() => AggregateMovieReview, {
		nullable: false,
	})
	async aggregateMovieReview(
		@Root() root: Movie,
		@Ctx() ctx: Context,
		@Info() info: GraphQLResolveInfo,
		@Args() args: AggregateMovieReviewArgs
	): Promise<AggregateMovieReview> {
		// eslint-disable-next-line @typescript-eslint/no-unsafe-return
		return getPrismaFromContext(ctx).movieReview.aggregate({
			...args,
			where: {
				movieId: root.id,
			},
			...transformInfoIntoPrismaArgs(info),
		});
	}

	@Authorized(['USER', 'ADMIN'])
	@UseMiddleware(ErrorInterceptor)
	@Mutation(() => Movie, {
		nullable: false,
	})
	async createMovie(
		@Ctx() ctx: Context,
		@Info() info: GraphQLResolveInfo,
		@Args() args: CreateOneMovieArgs
	): Promise<Movie> {
		const {_count} = transformInfoIntoPrismaArgs(info);
		return ctx.prisma.movie.create({
			...args,
			...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
		});
	}

	@Authorized(['USER', 'ADMIN'])
	@UseMiddleware(ErrorInterceptor)
	@Mutation(() => Movie, {
		nullable: true,
	})
	async updateMovie(
		@Ctx() ctx: Context,
		@Info() info: GraphQLResolveInfo,
		@Args() args: UpdateOneMovieArgs
	): Promise<Movie | null> {
		const {_count} = transformInfoIntoPrismaArgs(info);
		return ctx.prisma.movie.update({
			...args,
			...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
		});
	}

	@Authorized(['ADMIN'])
	@UseMiddleware(ErrorInterceptor)
	@Mutation(() => Movie, {nullable: true})
	async lockMovie(
		@Ctx() ctx: Context,
		@Arg('movieId', () => Int) movieId: number,
		@Arg('lock') lock: boolean
	): Promise<Movie | null> {
		return ctx.prisma.movie.update({
			where: {
				id: movieId,
			},
			data: {
				locked: lock,
			},
		});
	}

	@Authorized(['ADMIN'])
	@UseMiddleware(ErrorInterceptor)
	@Mutation(() => Movie, {nullable: true})
	async deleteMovie(@Ctx() ctx: Context, @Args() args: DeleteOneMovieArgs): Promise<Movie | null> {
		return ctx.prisma.movie.delete({
			...args,
		});
	}

	@Query(() => Movie, {
		nullable: true,
	})
	async movie(
		@Ctx() ctx: Context,
		@Info() info: GraphQLResolveInfo,
		@Arg('movieId', () => Int) movieId: number
	): Promise<Movie | null> {
		const {_count} = transformInfoIntoPrismaArgs(info);
		return ctx.prisma.movie.findUnique({
			where: {
				id: movieId,
			},
			...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
		});
	}

	@Query(() => [Movie], {nullable: true})
	async movies(@Args() args: FindManyMovieArgs, @Ctx() ctx: Context): Promise<Movie[] | null> {
		return ctx.prisma.movie.findMany({
			...args,
		});
	}
}
