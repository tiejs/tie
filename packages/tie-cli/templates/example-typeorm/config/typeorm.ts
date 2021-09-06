import { User } from '../user/user.entity'

export const typeorm = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '123456',
  database: 'hello',
  synchronize: false,
  logging: true,
  entities: [User],
  migrations: ['./migration/**/*.ts'],
  subscribers: ['./subscriber/**/*.ts'],
  cli: {
    entitiesDir: './entity',
    migrationsDir: './migration',
    subscribersDir: './subscriber',
  },
}
