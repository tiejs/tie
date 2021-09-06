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
