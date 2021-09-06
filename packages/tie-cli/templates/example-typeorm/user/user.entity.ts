import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm'
import { Field, ObjectType } from 'type-graphql'

@ObjectType({ description: 'user' })
@Entity('user')
export class User {
  @PrimaryGeneratedColumn()
  @Field()
  id: number

  @Column({ comment: '用户名', nullable: true })
  @Field()
  username: string

  @Column({ comment: '昵称', nullable: true })
  @Field()
  nickname: string

  @CreateDateColumn()
  @Field()
  createdAt: Date

  @CreateDateColumn()
  @Field()
  updatedAt: Date
}
