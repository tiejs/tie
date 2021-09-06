import { Injectable } from '@tiejs/common'
import { Repository, EntityRepository } from 'typeorm'
import { User } from './user.entity'

@Injectable()
@EntityRepository(User)
export class UserRepository extends Repository<User> {
  findAll(): Promise<User[]> {
    return this.find()
  }
}
