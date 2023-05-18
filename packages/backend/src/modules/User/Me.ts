import {Ctx, Query, Resolver} from 'type-graphql';
import {User} from '../../generated/type-graphql';
import {Context} from '../../interfaces/context';

@Resolver(User)
export class MeResolver {
	@Query(() => User, {nullable: true})
	async me(@Ctx() ctx: Context): Promise<User | null> {
		const me: User[] = await ctx.prisma
			.$queryRaw`SELECT * FROM "public"."User" WHERE "id" = ${ctx.req.session.userId}`;
		return me[0];
	}
}
