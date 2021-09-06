import { IsInt, Min, Max, IsNotEmpty } from 'class-validator'

export class CreateUserInput {
  @IsNotEmpty({ message: 'Name required' })
  name: string

  @IsInt({ message: 'Age should be Int' })
  @Min(0)
  @Max(100)
  age: number
}
