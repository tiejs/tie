import { Controller, Get, Render } from '@tiejs/controller'

@Controller()
export class HomeController {
  @Get('/')
  @Render('index')
  index() {
    return { foo: 'bar' }
  }
}
