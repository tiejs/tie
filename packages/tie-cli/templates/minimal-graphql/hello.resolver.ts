import { Resolver, Query } from 'type-graphql'
import { Injectable } from '@tiejs/common'

@Injectable()
@Resolver(() => String)
export class HelloResolver {
  @Query(() => String)
  async hello() {
    return 'hello world'
  }
}
