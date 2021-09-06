import { Injectable } from '@tiejs/common'
import { InjectRepository } from '@tiejs/typeorm'
import { Repository } from 'typeorm'
import { User } from './user.entity'

@Injectable()
export class UserRepository {
  @InjectRepository(User)
  private userRepository: Repository<User>

  async findAll(): Promise<User[]> {
    const users = await this.userRepository.find()
    if (users.length) return users
    const user = await this.userRepository.save({
      email: 'test@test.com',
      nickname: 'nick',
    } as User)
    return [user]
  }
}
