import { ObjectIdColumn, ObjectID, Entity, Column, CreateDateColumn } from 'typeorm'

@Entity('users')
export class User {
  @ObjectIdColumn()
  id: ObjectID

  @Column({ nullable: true })
  email: string

  @Column({ comment: '昵称', nullable: true })
  nickname: string

  @CreateDateColumn()
  createdAt: Date

  @CreateDateColumn()
  updatedAt: Date
}
