import { Module } from '@nestjs/common';
import { ComputerController } from './controller/computer.controller';
import { CreateComputerUsecase } from './usecases/create.computer.usecase';
import { DeleteComputerUsecase } from './usecases/delete.computer.usecase';
import { GetAllComputersUsecase } from './usecases/get.all.computers.usecase';
import { GetSingleComputerUsecase } from './usecases/get.single.computer.usecase';
import { UpdateComputerUsecase } from './usecases/update.computer.usecase';
import { AddPeriphericToComputer } from './usecases/add.peripheric.to.computer';
import { RemovePeriphericToComputer } from './usecases/remove.peripheric.to.computer';
import { MongooseModule } from '@nestjs/mongoose';
import {
  Computer,
  ComputerSchema,
} from './persistence/schemas/computer.schema';
import { ComputerPersistenceAdapter } from './persistence/computer.persistence.adapter';
import { PeriphericModule } from 'src/Peripheric/peripheric.module';

@Module({
  controllers: [ComputerController],
  imports: [
    MongooseModule.forFeature([
      { schema: ComputerSchema, name: Computer.name },
    ]),
    PeriphericModule,
  ],
  providers: [
    CreateComputerUsecase,
    GetAllComputersUsecase,
    GetSingleComputerUsecase,
    UpdateComputerUsecase,
    DeleteComputerUsecase,
    AddPeriphericToComputer,
    RemovePeriphericToComputer,
    ComputerPersistenceAdapter,
  ],
})
export class ComputerModule {}
