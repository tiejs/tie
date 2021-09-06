import { Controller, Get } from '@tiejs/controller'

@Controller()
export class HomeController {
  @Get('/')
  index() {
    return 'hello world'
  }
}
