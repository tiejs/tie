# TieJS

## 快速开始

使用 `tie-cli` 初始化应用 (选择 minimal-controller)：

```bash
npm i -g tie-cli
tie create myapp #  选择 minimal-controller
cd myapp
npm run dev
```

项目结构如下:

```bash
.
├── home.controller.ts
├── package.json
└── tsconfig.json
```

启动成功后，然后访问浏览器：http://localhost:5001

这是一个最小化的 TieJS 应用，代码如下:

**home.controller.ts**

```js
import { Controller, Get } from '@tiejs/controller'

@Controller()
export class HomeController {
  @Get('/')
  index() {
    return 'Hi Tie'
  }
}
```

## 文档

官方文档 [tiejs.vercel.app](https://tiejs.vercel.app/).

入门教程 [快速开始](https://tiejs.vercel.app/docs/intro/quick-start).

## License

[MIT License](https://github.com/tiejs/tie/blob/master/LICENSE)
