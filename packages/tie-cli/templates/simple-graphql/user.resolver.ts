import { Resolver, Query, Arg, Mutation } from 'type-graphql'
import { Injectable } from '@tiejs/common'
import { User } from './user.type'
import { UserService } from './user.service'
import { CreateUserInput } from './createUser.input'

@Injectable()
@Resolver(() => User)
export class UserResolver {
  constructor(private userService: UserService) {}

  @Query(() => User, { nullable: true, description: 'get user by name' })
  async user(@Arg('name') name: string): Promise<User> {
    return await this.userService.getUser(name)
  }

  @Query(() => [User], { description: 'query user' })
  async users(): Promise<User[]> {
    return await this.userService.queryUser()
  }

  @Mutation(() => User)
  async createUser(@Arg('input') input: CreateUserInput): Promise<User> {
    return await this.userService.createUser(input)
  }
}
