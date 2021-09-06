import { Injectable } from '@tiejs/common'
import { InjectRepository } from '@tiejs/typeorm'
import { UserRepository } from './user.repository'

@Injectable()
export class UserService {
  constructor(@InjectRepository() private userRepository: UserRepository) {}

  async queryUser() {
    const users = await this.userRepository.findAll()
    return users
  }
}
