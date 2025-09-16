import { IsString } from 'class-validator';

export class CreateComputerRequest {
  @IsString()
  name: string;

  @IsString()
  color: string;

  @IsString()
  fabricationDate: string;
}
