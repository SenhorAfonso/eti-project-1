import { Module } from '@nestjs/common';
import { PeriphericController } from './controller/peripheric.controller';
import { CreatePeriphericUsecase } from './usecases/create.peripheric.usecase';
import { DeletePeriphericUsecase } from './usecases/delete.peripheric.usecase';
import { GetAllPeriphericsUsecase } from './usecases/get.all.peripheric.usecase';
import { GetSinglePeriphericUsecase } from './usecases/get.single.peripheric.usecase';
import { UpdatePeriphericUsecase } from './usecases/update.peripheric.usecase';
import { MongooseModule } from '@nestjs/mongoose';
import {
  Peripheric,
  periphericSchema,
} from './persistence/schemas/peripheric.schema';
import { PeriphericPersistenceAdapter } from './persistence/peripheric.persistence.adapter';

@Module({
  controllers: [PeriphericController],
  imports: [
    MongooseModule.forFeature([
      { schema: periphericSchema, name: Peripheric.name },
    ]),
  ],
  providers: [
    CreatePeriphericUsecase,
    GetAllPeriphericsUsecase,
    GetSinglePeriphericUsecase,
    UpdatePeriphericUsecase,
    DeletePeriphericUsecase,
    PeriphericPersistenceAdapter,
  ],
  exports: [PeriphericPersistenceAdapter],
})
export class PeriphericModule {}
