import { IsNotEmpty } from 'class-validator';

export class CreateFoodDto {
  @IsNotEmpty()
  readonly category: string;

  @IsNotEmpty()
  readonly name: string;

  @IsNotEmpty()
  readonly price: number;

  @IsNotEmpty()
  readonly description: string;

  image: string;

  @IsNotEmpty()
  readonly recommended: boolean;
}
