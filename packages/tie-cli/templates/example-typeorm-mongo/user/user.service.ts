import { Injectable } from '@tiejs/common'
import { UserRepository } from './user.repository'

@Injectable()
export class UserService {
  constructor(private userRepository: UserRepository) {}

  async queryUser() {
    const users = await this.userRepository.findAll()
    return users
  }
}
