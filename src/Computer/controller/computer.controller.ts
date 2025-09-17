import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseFilters,
} from '@nestjs/common';
import { CreateComputerUsecase } from '../usecases/create.computer.usecase';
import { GetAllComputersUsecase } from '../usecases/get.all.computers.usecase';
import { GetSingleComputerUsecase } from '../usecases/get.single.computer.usecase';
import { UpdateComputerUsecase } from '../usecases/update.computer.usecase';
import { DeleteComputerUsecase } from '../usecases/delete.computer.usecase';
import { CreateComputerRequest } from './dto/create.computer.request';
import { ComputerMapper } from './dto/computer.mapper';
import { UpdateComputerRequest } from './dto/update.computer.request';
import { AddPeriphericToComputer } from '../usecases/add.peripheric.to.computer';
import { RemovePeriphericToComputer } from '../usecases/remove.peripheric.to.computer';
import { HttpExceptionFilter } from 'src/Common/exceptions/exception.filter';

@Controller('computers')
@UseFilters(HttpExceptionFilter)
export class ComputerController {
  constructor(
    private readonly createComputerUsecase: CreateComputerUsecase,
    private readonly getAllComputersUsecase: GetAllComputersUsecase,
    private readonly getSingleComputerUsecase: GetSingleComputerUsecase,
    private readonly updateComputerUsecase: UpdateComputerUsecase,
    private readonly deleteComputerUsecase: DeleteComputerUsecase,
    private readonly addPeriphericToComputer: AddPeriphericToComputer,
    private readonly removePeriphericToComputer: RemovePeriphericToComputer,
  ) {}

  @Post()
  async createComputer(@Body() createComputerRequest: CreateComputerRequest) {
    const modelIn = ComputerMapper.createComputerRequestToModelIn(
      createComputerRequest,
    );

    return await this.createComputerUsecase.execute(modelIn);
  }

  @Get()
  async getAllComputers() {
    return this.getAllComputersUsecase.execute();
  }

  @Get('/:id')
  async getSingleComputer(@Param('id') id: string) {
    return this.getSingleComputerUsecase.execute(id);
  }

  @Patch('/:id')
  async updateComputer(
    @Param('id') id: string,
    @Body() updateComputerRequest: UpdateComputerRequest,
  ) {
    const modelIn = ComputerMapper.updateComputerRequestToUpdateComputerModelIn(
      updateComputerRequest,
    );

    return this.updateComputerUsecase.execute(id, modelIn);
  }

  @Delete('/:id')
  async deleteComputer(@Param('id') id: string) {
    return this.deleteComputerUsecase.execute(id);
  }

  @Post('/:computerId/peripheric/:periphericId')
  addPeripheric(
    @Param('computerId') computerId: string,
    @Param('periphericId') periphericId: string,
  ) {
    return this.addPeriphericToComputer.execute(computerId, periphericId);
  }

  @Delete('/:computerId/peripheric/:periphericId')
  removePeripheric(
    @Param('computerId') computerId: string,
    @Param('periphericId') periphericId: string,
  ) {
    return this.removePeriphericToComputer.execute(computerId, periphericId);
  }
}
