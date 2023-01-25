import { IsAlpha, IsAlphanumeric, IsNumber } from 'class-validator';

export class BookDTO {
  @IsNumber()
  id?: number;
  @IsAlphanumeric()
  title?: string;
  @IsAlphanumeric()
  description?: string;
}
