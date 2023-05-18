import {GraphQLResolveInfo} from 'graphql';
import {
	Arg,
	Args,
	Authorized,
	Ctx,
	FieldResolver,
	Info,
	Mutation,
	Query,
	Resolver,
	Root,
	UseMiddleware,
} from 'type-graphql';
import {FindManyUserArgs, User} from '../../generated/type-graphql';
import {
	transformCountFieldIntoSelectRelationsCount,
	transformInfoIntoPrismaArgs,
} from '../../generated/type-graphql/helpers';
import {Context} from '../../interfaces/context';
import {ErrorInterceptor} from '../middleware/ErrorInterceptor';
import {UpdateUserCustomArgs} from './args/UpdateUserCustomArgs';

@Resolver(User)
export class UserResolver {
	@FieldResolver(() => String)
	email(@Root() user: User, @Ctx() ctx: Context) {
		if (ctx.req.session.userId === user.id) return user.email;
		return '';
	}

	@Authorized(['USER', 'ADMIN'])
	@UseMiddleware(ErrorInterceptor)
	@Mutation(() => User, {
		nullable: true,
	})
	async updateUser(
		@Ctx() ctx: Context,
		@Info() info: GraphQLResolveInfo,
		@Args() args: UpdateUserCustomArgs
	): Promise<User | null> {
		const {_count} = transformInfoIntoPrismaArgs(info);
		return ctx.prisma.user.update({
			...args,
			where: {
				id: ctx.req.session.userId,
			},
			...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
		});
	}

	@Query(() => User, {
		nullable: true,
	})
	async user(
		@Ctx() ctx: Context,
		@Info() info: GraphQLResolveInfo,
		@Arg('username', () => String) username: string
	): Promise<User | null> {
		const {_count} = transformInfoIntoPrismaArgs(info);
		return ctx.prisma.user.findUnique({
			where: {username},
			...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
		});
	}

	@Query(() => [User], {
		nullable: false,
	})
	async users(
		@Ctx() ctx: Context,
		@Info() info: GraphQLResolveInfo,
		@Args() args: FindManyUserArgs
	): Promise<User[]> {
		const {_count} = transformInfoIntoPrismaArgs(info);
		return ctx.prisma.user.findMany({
			...args,
			...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
		});
	}
}
