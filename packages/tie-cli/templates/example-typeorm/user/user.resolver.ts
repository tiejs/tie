import { Resolver, Query } from 'type-graphql'
import { Injectable } from '@tiejs/common'
import { User } from './user.entity'
import { UserService } from './user.service'

@Injectable()
@Resolver(() => User)
export class UserResolver {
  constructor(private userService: UserService) {}

  @Query(() => [User], { description: 'query user' })
  async users(): Promise<User[]> {
    return await this.userService.queryUser()
  }
}
