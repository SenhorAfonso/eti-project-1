import { IsOptional, IsString } from 'class-validator';

export class UpdateComputerRequest {
  @IsOptional()
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  color: string;

  @IsOptional()
  @IsString()
  fabricationDate: string;
}
