---
id: config
title: 配置
sidebar_label: 配置 (Config)
---

TieJS 提供了简洁的配置管理方式，回想一下 TieJS 是如何初始化应用的：

```ts
import { Application, Config } from '@tiejs/core'
import { UserController } from './user.controller'

const app = new Application({
  controllers: [UserController],
})

app.bootstrap()
```

上面代码等价于：

```ts
import { Application, Config } from '@tiejs/core'
import { UserController } from './user.controller'

const config: Config = {
  port: 6001, // 重构上面代码顺便更改一下默认端口号
  controllers: [UserController],
}

const app = new Application(config)
app.bootstrap()
```

你应该发现了，TieJS 的配置是一个普通 JavaScript 对象，通过 Application 传递进去并初始化。

## 配置管理

对于复杂的项目，需要更好地管理配置，通常你会用一个文件夹集中管理配置，然后再引入到 app.ts 中

```ts
.
├── app.ts
├── config
    ├── typeorm.ts
    ├── redis.ts
    ├── graphql.ts
    ├── middlewares.ts
    ├── plugins.ts
    └── index.ts
```

## 使用配置

Tiejs 提供装饰器 `@InjectConfig` 让你可以在任何地方使用配置，比如在 Controller、Resolver、Service、Middleware、Plugin 中等等。

举个例子，我们在 Controller 中通过 `@InjectConfig` 获取整个配置:

```js
import { Config } from '@tiejs/core'
import { Controller, Get } from '@tiejs/controller'
import { InjectConfig } from '@tiejs/common'

@Controller()
export class HomeController {
  constructor(@InjectConfig() private config: Config) {}

  @Get('/')
  index() {
    return this.config.appKey
  }
}
```

`@InjectConfig` 支持 Lodash.get like 获取配置，例如 `@InjectConfig('typeorm')`、 `@InjectConfig('auth.key')`:

```js
import { Resolver, Query } from 'type-graphql'
import { Injectable, InjectConfig } from '@tiejs/common'

@Injectable()
@Resolver()
export class HomeResolver {
  constructor(@InjectConfig('auth') private authConfig: AuthConfig) {}

  @Query('/')
  index() {
    return this.authConfig
  }
}
```

上面是在 Controller 和 Resolver 中获取配置，在开发插件时，你可以也要获取插件，同样你也可以用 `@InjectConfig` 获取到。
