import { Controller, Get, Params, Post, Body } from '@tiejs/controller'
import { User } from './user.type'
import { UserService } from './user.service'
import { CreateUserInput } from './createUser.input'

@Controller()
export class UserController {
  constructor(private userService: UserService) {}

  @Get('/')
  index() {
    return {
      'GET users': 'http://127.0.0.1:5001/users',
      'GET users/Jack': 'http://127.0.0.1:5001/users/Jack',
      'POST users': 'http://127.0.0.1:5001/users',
    }
  }

  @Get('/users/:name')
  async user(@Params('name') name: string): Promise<User> {
    return await this.userService.getUser(name)
  }

  @Get('/users')
  async users(): Promise<User[]> {
    return await this.userService.queryUser()
  }

  @Post('/users')
  async createUser(@Body() input: CreateUserInput): Promise<User> {
    return await this.userService.createUser(input)
  }
}
