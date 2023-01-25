import { IsAlphanumeric } from 'class-validator';

export class UpdateBookDesc {
  @IsAlphanumeric()
  Title: string;
  @IsAlphanumeric()
  NewDesc: string;
}
