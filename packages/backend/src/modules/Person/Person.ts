import {GraphQLResolveInfo} from 'graphql';
import {Arg, Args, Authorized, Ctx, Info, Int, Mutation, Query, Resolver, UseMiddleware} from 'type-graphql';
import {
	CreateOnePersonArgs,
	DeleteOnePersonArgs,
	FindManyPersonArgs,
	Person,
	UpdateOnePersonArgs,
} from '../../generated/type-graphql';
import {
	transformCountFieldIntoSelectRelationsCount,
	transformInfoIntoPrismaArgs,
} from '../../generated/type-graphql/helpers';
import {Context} from '../../interfaces/context';
import {ErrorInterceptor} from '../middleware/ErrorInterceptor';

@Resolver(Person)
export class PersonResolver {
	@Authorized(['USER', 'ADMIN'])
	@UseMiddleware(ErrorInterceptor)
	@Mutation(() => Person, {
		nullable: false,
	})
	async createPerson(
		@Ctx() ctx: Context,
		@Info() info: GraphQLResolveInfo,
		@Args() args: CreateOnePersonArgs
	): Promise<Person> {
		const {_count} = transformInfoIntoPrismaArgs(info);
		return ctx.prisma.person.create({
			...args,
			...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
		});
	}

	@Authorized(['USER', 'ADMIN'])
	@UseMiddleware(ErrorInterceptor)
	@Mutation(() => Person, {
		nullable: true,
	})
	async updatePerson(
		@Ctx() ctx: Context,
		@Info() info: GraphQLResolveInfo,
		@Args() args: UpdateOnePersonArgs
	): Promise<Person | null> {
		const {_count} = transformInfoIntoPrismaArgs(info);
		return ctx.prisma.person.update({
			...args,
			...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
		});
	}

	@Authorized(['ADMIN'])
	@UseMiddleware(ErrorInterceptor)
	@Mutation(() => Person, {nullable: true})
	async lockPerson(
		@Ctx() ctx: Context,
		@Arg('personId', () => Int) personId: number,
		@Arg('lock') lock: boolean
	): Promise<Person | null> {
		return ctx.prisma.person.update({
			where: {
				id: personId,
			},
			data: {
				locked: lock,
			},
		});
	}

	@Authorized(['ADMIN'])
	@UseMiddleware(ErrorInterceptor)
	@Mutation(() => Person, {nullable: true})
	async deletePerson(@Ctx() ctx: Context, @Args() args: DeleteOnePersonArgs): Promise<Person | null> {
		return ctx.prisma.person.delete({
			...args,
		});
	}

	@Query(() => Person, {
		nullable: true,
	})
	async person(
		@Ctx() ctx: Context,
		@Info() info: GraphQLResolveInfo,
		@Arg('personId', () => Int) personId: number
	): Promise<Person | null> {
		const {_count} = transformInfoIntoPrismaArgs(info);
		return ctx.prisma.person.findUnique({
			where: {
				id: personId,
			},
			...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
		});
	}

	@Query(() => [Person], {nullable: true})
	async people(@Args() args: FindManyPersonArgs, @Ctx() ctx: Context): Promise<Person[] | null> {
		//  I think this is related to the career enum in the generated schema
		// // @ts-expect-error unfixable: https://github.com/MichalLytek/typegraphql-prisma/issues/222
		return ctx.prisma.person.findMany({
			...args,
		});
	}
}
