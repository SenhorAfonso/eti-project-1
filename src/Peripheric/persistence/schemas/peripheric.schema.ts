import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

@Schema()
export class Peripheric {
  @Prop()
  name: string;

  @Prop({ default: false })
  inUse: boolean;
}

export const periphericSchema = SchemaFactory.createForClass(Peripheric);
export type PeriphericDocument = HydratedDocument<Peripheric>;
