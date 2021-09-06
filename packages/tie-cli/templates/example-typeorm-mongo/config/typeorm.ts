import { User } from '../user/user.entity'

export const typeorm = {
  type: 'mongodb',
  host: 'localhost',
  port: 27017,
  database: 'test',
  synchronize: true,
  logging: true,
  entities: [User],
  migrations: ['./migration/**/*.ts'],
  subscribers: ['./subscriber/**/*.ts'],
  cli: {
    entitiesDir: './entity',
    migrationsDir: './migration',
    subscribersDir: './subscriber',
  },
  useNewUrlParser: true,
  useUnifiedTopology: true,
}
