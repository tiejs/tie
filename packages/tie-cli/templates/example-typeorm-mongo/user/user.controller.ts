import { Controller, Get } from '@tiejs/controller'
import { UserService } from './user.service'

@Controller()
export class UserController {
  constructor(private userService: UserService) {}
  @Get('/')
  index() {
    return 'hello world'
  }

  @Get('/users')
  async users() {
    return await this.userService.queryUser()
  }
}
