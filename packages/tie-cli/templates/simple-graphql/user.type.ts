import { Field, ObjectType, Int } from 'type-graphql'

@ObjectType({ description: 'user' })
export class User {
  @Field()
  name: string

  @Field(() => Int, { nullable: true })
  age: number
}
