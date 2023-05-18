import {IsString, Length} from 'class-validator';
import {ClassType, Field, InputType, ObjectType} from 'type-graphql';

export const PasswordMixin = <T extends ClassType>(BaseClass: T) => {
	@ObjectType({isAbstract: true})
	@InputType({isAbstract: true})
	class PasswordInput extends BaseClass {
		@Field()
		@IsString()
		@Length(10, 16)
		password!: string;
	}

	return PasswordInput;
};
