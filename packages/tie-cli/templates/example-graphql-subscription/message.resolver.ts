import { PubSubEngine } from 'graphql-subscriptions'
import { Injectable } from '@tiejs/common'
import {
  Resolver,
  Query,
  Mutation,
  Arg,
  PubSub,
  Subscription,
  Root,
  ObjectType,
  Field,
} from 'type-graphql'

@Injectable()
@ObjectType()
export class Message {
  @Field()
  id: number

  @Field({ nullable: true })
  content?: string

  @Field(() => Date)
  date: Date
}

export interface MessagePayload {
  id: number
  content?: string
}

@Resolver()
export class SampleResolver {
  private currentId = 0

  @Query(() => Message)
  message() {
    return { id: 0, content: 'hello world', date: new Date() }
  }

  @Mutation(() => Boolean)
  async createMessage(
    @PubSub() pubSub: PubSubEngine,
    @Arg('content', { nullable: true }) content?: string,
  ): Promise<boolean> {
    const payload: MessagePayload = { id: ++this.currentId, content }
    await pubSub.publish('MESSAGE_COMING', payload)
    return true
  }

  @Subscription({ topics: 'MESSAGE_COMING' })
  messageSubscription(
    @Root()
    { id, content }: MessagePayload,
  ): Message {
    return { id, content, date: new Date() }
  }
}
