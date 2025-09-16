import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import { Peripheric } from 'src/Peripheric/persistence/schemas/peripheric.schema';

@Schema()
export class Computer {
  @Prop()
  name: string;

  @Prop()
  color: string;

  @Prop()
  fabricationDate: Date;

  @Prop({ type: Types.ObjectId, ref: Peripheric.name, default: [] })
  peripherics: Types.ObjectId[];
}

export const ComputerSchema = SchemaFactory.createForClass(Computer);
export type ComputerDocument = HydratedDocument<Computer>;
