import { IsString } from 'class-validator';

export class CreatePeriphericRequest {
  @IsString()
  name: string;
}
