import { IsString } from 'class-validator';

export class UpdatePeriphericRequest {
  @IsString()
  name: string;
}
