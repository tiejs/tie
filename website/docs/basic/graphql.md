---
id: graphql
title: GraphQL
sidebar_label: GraphQL
---

import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

TieJS 是默认支持 GraphQL 的，你不需任何额外的配置，对于无历史包袱的新项目，非常推荐使用 GraphQL 来开发 API。

## 基本用法

GraphQL 在 TieJS 中是开箱即用的，下面我们使用 CLI 工具 `tie-cli` 快速体验。

使用 `tie-cli` 初始化应用 (选择 minimal-graphql)：

```bash
tie create myapp # 选择 minimal-graphql
cd myapp
npm run dev
```

项目结构如下:

```js
.
├── hello.resolver.ts
├── package.json
└── tsconfig.json
```

启动成功后，然后访问浏览器：http://localhost:5001/graphql

这是一个最小化的 Tie GraphQL 应用，核心文件只有一个 `hello.resolver.ts`，代码如下:

<Tabs
defaultValue="a"
values={[
{ label: 'home.resolver.ts', value: 'a', },
{ label: 'package.json', value: 'b', },
]
}>
<TabItem value="a">

```ts
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
```

</TabItem>
<TabItem value="b">

```json
{
  "name": "myapp",
  "scripts": {
    "dev": "tie dev",
    "build": "tie build",
    "test": "tie test"
  },
  "dependencies": {
    "@tiejs/core": "^1.0.0",
    "tie-cli": "0.0.4"
  }
}
```

</TabItem>
</Tabs>

在 TieJS 中，`xxx.resolver.ts` 是 GraphQL 的端点文件，类似 MVC 架构中的 Controller。

TieJS 中内置了 GraphQL 插件 `@tiejs/graphql`，Tie 的 GraphQL 插件基于 [TypeGraphQL](https://github.com/MichalLytek/type-graphql)，建议详细阅读 [TypeGraphQL](https://github.com/MichalLytek/type-graphql) 文档。

## 常用功能

上面介绍了 TieJS 中 GraphQL 最小化用法，旨在让你感官的体验 在 TieJS 中 GraphQL 用法，下面例子你将体验到 GraphQL 的常用功能，包括 Query、Mutation、Arg、ObjectType、InputType 等。

首先，我们新建如下的项目目录：

```bash
.
├── package.json
├── src
│   ├── createUser.input.ts
│   ├── user.resolver.ts
│   ├── user.service.ts
│   └── user.type.ts
└── tsconfig.json
```

项目代码如下：

<Tabs
defaultValue="a"
values={[
{ label: 'user.resolver.ts', value: 'a', },
{ label: 'user.service.ts', value: 'b', },
{ label: 'user.type.ts', value: 'c', },
{ label: 'createUser.input.ts', value: 'd', },
]
}>
<TabItem value="a">

```ts
import { Resolver, Query, Arg, Mutation } from 'type-graphql'
import { User } from './user.type'
import { UserService } from './user.service'
import { CreateUserInput } from './createUser.input'

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
```

</TabItem>
<TabItem value="b">

```ts
import { Injectable } from '@tiejs/common'
import { User } from './user.type'
import { CreateUserInput } from './createUser.input'

@Injectable()
export class UserService {
  private users: User[] = [
    {
      name: 'Jack',
      age: 16,
    },
    {
      name: 'Rose',
      age: 15,
    },
  ]
  async queryUser(): Promise<User[]> {
    return this.users
  }

  async getUser(name: string): Promise<User> {
    const user = this.users.find(user => user.name === name)
    if (!user) throw new Error('未找到用户')
    return user
  }

  async createUser(user: CreateUserInput): Promise<User> {
    this.users.push(user)
    return user
  }
}

```

</TabItem>

<TabItem value="c">


```ts
import { Field, ObjectType, Int } from 'type-graphql'

@ObjectType({ description: 'user' })
export class User {
  @Field()
  name: string

  @Field(() => Int, { nullable: true })
  age: number
}
```

</TabItem>

<TabItem value="d">

```ts
import { InputType, Field } from 'type-graphql'

@InputType()
export class CreateUserInput {
  @Field()
  name: string

  @Field({ nullable: true })
  age: number
}
```
</TabItem>

</Tabs>

使用`npm run dev`启动成功后，然后访问浏览器：http://localhost:5001/graphql，你就可以在 GraphQL Playground 中体验 Query 和 Mutation 了。

## 更多功能

上面说了 TieJS 的 GraphQL 插件基于 [TypeGraphQL](https://github.com/MichalLytek/type-graphql)，再次建议详细阅读 [TypeGraphQL](https://github.com/MichalLytek/type-graphql) 文档。
